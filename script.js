'use strict';

const dayInput = document.querySelector('.day__input');
const monthInput = document.querySelector('.month__input');
const yearInput = document.querySelector('.year__input');

const dayError = document.querySelector('.day-error');
const monthError = document.querySelector('.month-error');
const yearError = document.querySelector('.year-error');

const currentDate = new Date();

const errorMessages = (element, message) => {
  return (element.textContent = message);
};

const addingErrorClasses = (element, classes) => {
  return element.classList.add(classes);
};

const removingErrorClasses = (element, classes) => {
  return element.classList.remove(classes);
};

const caculateAgeDay = (bod, bom, boy) => {
  let curDay = currentDate.getDate();
  let curMonth = currentDate.getMonth() + 1;
  let curYear = currentDate.getFullYear();
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (+bod > curDay) {
    curDay = curDay + months[bom - 1];
    curMonth = curMonth - 1;
  }

  if (+bom > curMonth) {
    curMonth = curMonth + 12;
    curYear = curYear - 1;
  }

  const day1 = curDay - +bod;
  const month1 = curMonth - +bom;
  const year1 = curYear - +boy;

  return {
    day: day1,
    month: month1,
    year: year1,
  };
};

const validInput = () => {
  // Day error
  if (dayInput.value === '') {
    errorMessages(dayError, 'This field is required!');
    removingErrorClasses(dayError, 'hidden');
    addingErrorClasses(dayError, 'error-message');
    return;
  }

  if (+dayInput.value > 31) {
    errorMessages(dayError, 'Must be a valid date!');
    removingErrorClasses(dayError, 'hidden');
    addingErrorClasses(dayError, 'error-message');
    return;
  }
  ///////////////////////////////////////////////////

  ////////////////////////////////////////////////
  // month error
  if (monthInput.value === '') {
    errorMessages(monthError, 'This field is requiere!');
    removingErrorClasses(monthError, 'hidden');
    addingErrorClasses(monthError, 'error-message');
    return;
  }

  if (+monthInput.value > 12) {
    errorMessages(monthError, 'Must be a valid month!');
    removingErrorClasses(monthError, 'hidden');
    addingErrorClasses(monthError, 'error-message');
    return;
  }
  /////////////////////////////////////////////////

  ///////////////////////////////////////////////////
  // Year error
  if (yearInput.value === '') {
    errorMessages(yearError, 'This field is requiere!');
    removingErrorClasses(yearError, 'hidden');
    addingErrorClasses(yearError, 'error-message');
    return;
  }

  if (+yearInput.value > currentDate.getFullYear()) {
    errorMessages(yearError, 'Must be in the past!');
    removingErrorClasses(yearError, 'hidden');
    addingErrorClasses(yearError, 'error-message');
    return;
  }
  /////////////////////////////////////////////////////

  const result = caculateAgeDay(
    dayInput.value,
    monthInput.value,
    yearInput.value
  );
  // caculate age (day)
  if (+dayInput.value <= 31 && dayInput.value !== '') {
    addingErrorClasses(dayError, 'hidden');
    document.querySelector('.day').textContent = result.day;
  }

  //caculate age (month)
  if (+monthInput.value <= 12 && monthInput.value !== '') {
    addingErrorClasses(monthError, 'hidden');
    document.querySelector('.month').textContent = result.month;
  }

  //caculate age (year)
  if (+yearInput.value < currentDate.getFullYear() && yearInput.value !== '') {
    addingErrorClasses(yearError, 'hidden');
    document.querySelector('.year').textContent = result.year;
  }
};
////////////////////////////////////////////////////////////////

document
  .querySelector('.input__container--btn')
  .addEventListener('click', () => {
    validInput();
    console.log('btn was clicked!');

    console.log(currentDate.getMonth());
  });
