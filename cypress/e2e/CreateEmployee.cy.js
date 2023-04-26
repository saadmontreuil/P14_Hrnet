// createemployee.cy.js

/// <reference types="cypress" />

describe('Create Employee Form Validation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('displays error messages for empty required fields', () => {
    cy.get('.CreateEmployee_save-button__ogRP3').click();
    cy.get(':nth-child(1) > .CreateEmployee_error__4mDtM').should('be.visible');
    cy.get(':nth-child(2) > .CreateEmployee_error__4mDtM').should('be.visible');
    cy.get(':nth-child(3) > .CreateEmployee_error__4mDtM').should('be.visible');
    cy.get(':nth-child(4) > .CreateEmployee_error__4mDtM').should('be.visible');
    cy.get('fieldset > :nth-child(2) > .CreateEmployee_error__4mDtM').should('be.visible');
  });

  it('displays an error message for an invalid firstName format', () => {
    const invalidName = 'DFDDG43434';
    cy.get('#firstname').type(invalidName, { delay: 200 });
    cy.get('.CreateEmployee_save-button__ogRP3').click();
    cy.get(':nth-child(1) > .CreateEmployee_error__4mDtM').should('be.visible');
  });

  it('displays an error message for an invalid lastName format', () => {
    const invalidName = 'DFDDG43434';
    cy.get('#lastname').type(invalidName, { delay: 500 });
    cy.get('.CreateEmployee_save-button__ogRP3').click();
    cy.get(':nth-child(2) > .CreateEmployee_error__4mDtM').should('be.visible');
  });

  it('displays an error message for an invalid Date of Birth format', () => {
    cy.get(':nth-child(3) > .react-datepicker-wrapper > .react-datepicker__input-container > .react-datepicker').click();
    cy.get(':nth-child(1) > .react-datepicker__day--027');
    cy.get('.CreateEmployee_save-button__ogRP3').click();
    cy.get('form > :nth-child(3) > .CreateEmployee_error__4mDtM').should('be.visible');
  });

  it('displays an error message for an invalid start date format', () => {
    cy.get(':nth-child(4) > .react-datepicker-wrapper > .react-datepicker__input-container > .react-datepicker').click();
    cy.get(':nth-child(1) > .react-datepicker__day--027');
    cy.get('.CreateEmployee_save-button__ogRP3').click();
    cy.get(':nth-child(4) > .CreateEmployee_error__4mDtM').should('be.visible');
  });

  it('displays an error message for an invalid street format', () => {
    const invalidStreet = '###@';
    cy.get('#street').type(invalidStreet, { delay: 500 });
    cy.get('.CreateEmployee_save-button__ogRP3').click();
    cy.get('fieldset > :nth-child(2) > .CreateEmployee_error__4mDtM').should('be.visible');
  });

  it('displays an error message for an invalid city format', () => {
    cy.get('.CreateEmployee_save-button__ogRP3').click();
    cy.get('fieldset > :nth-child(3) > .CreateEmployee_error__4mDtM').should('be.visible');
  });

  it('displays an error message for an invalid state format', () => {
    const invalidState = '###@';
    cy.get(':nth-child(4) > .css-b62m3t-container > .css-1038ayn-control > .css-1fdsijx-ValueContainer > .css-qbdosj-Input').type(invalidState, { delay: 500 });
    cy.get('.CreateEmployee_save-button__ogRP3').click();
    cy.get('fieldset > :nth-child(4) > .CreateEmployee_error__4mDtM').should('be.visible');
  });

  it('displays an error message for an invalid zip format', () => {
    const invalidZip = '3434322';
    cy.get('#zip').type(invalidZip, { delay: 500 });
    cy.get('.CreateEmployee_save-button__ogRP3').click();
    cy.get('fieldset > :nth-child(5) > .CreateEmployee_error__4mDtM').should('be.visible');
  });

  it('displays an error message for an invalid Department format', () => {
    const invalidDepartment = '###@';
    cy.get(':nth-child(6) > .css-b62m3t-container > .css-1038ayn-control > .css-1fdsijx-ValueContainer > .css-qbdosj-Input').type(invalidDepartment, { delay: 500 });
    cy.get('.CreateEmployee_save-button__ogRP3').click();
    cy.get(':nth-child(6) > .CreateEmployee_error__4mDtM').should('be.visible');
  });

  it('displays the modal when every input is in the right format', () => {
    // firstName
    const validFirstName = 'John';
    cy.get('#firstname').type(validFirstName, { delay: 200 });
    // lastName
    const validLastName = 'Doe';
    cy.get('#lastname').type(validLastName, { delay: 200 });
    // dateOfBirth
    const validDate = '02/27/2023';
    cy.get(':nth-child(3) > .react-datepicker-wrapper > .react-datepicker__input-container > .react-datepicker').type(validDate, { delay: 200 });
    // startDate

    const validStartDate = '02/27/2023';
    cy.get(':nth-child(4) > .react-datepicker-wrapper > .react-datepicker__input-container > .react-datepicker').type(validStartDate, { delay: 200 });

    // street
    const validStreet = '123 Main St';
    cy.get('#street').type(validStreet, { delay: 200 });
    // city
    const validCity = 'New York';
    cy.get('#city').type(validCity, { delay: 200 });
    // state
    const validState = 'New York';
    cy.get(':nth-child(4) > .css-b62m3t-container > .css-1038ayn-control > .css-1fdsijx-ValueContainer > .css-qbdosj-Input').type(`${validState}{enter}`, { delay: 200 });
    // zip
    const validZip = '10001';
    cy.get('#zip-code').type(validZip, { delay: 200 });
    // department
    const validDepartment = 'Engineering';
    cy.get(':nth-child(6) > .css-b62m3t-container > .css-1038ayn-control > .css-1fdsijx-ValueContainer > .css-qbdosj-Input').type(`${validDepartment}{enter}`, { delay: 200 });
    // submit
    cy.get('.CreateEmployee_save-button__ogRP3').click();
    // modal
    cy.get('._39cao').should('be.visible');
    // cy.get('._Qntmj').click();
    // cy.get('._39cao').should('not.be.visible');
  });
});
