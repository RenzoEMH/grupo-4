/* eslint-disable testing-library/await-async-utils */
describe('Home Eventops', () => {
  before(() => {
    cy.exec('npm run e2e:seedDB');
  });
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Displays home', () => {
    //Carrousel
    cy.get('[data-test-id="carousel-container"]')
      .children()
      .should('have.length.at.least', 1)
      .children()
      .get('[data-test-id="carousel-item"]')
      .find('img')
      .should('have.attr', 'src');
    //Eventos populares
    cy.get('[data-test-id="populares-container"]')
      .children()
      .should('have.length.at.least', 1)
      .children()
      .get('[data-test-id="event-card"]')
      .should('contain.html', 'img')
      .and('contain.html', 'text');
    //Eventos proximos
    cy.get('[data-test-id="proximos-container"]')
      .children()
      .should('have.length.at.least', 1);
  });

  it('Register user', () => {
    cy.get('[data-test-id="profile-general"]')
      .click()
      .get('[data-test-id="login"]')
      .click()
      .get('[data-test-id="register"]')
      .click();
    cy.url().should('include', '/registrarse');
    cy.get('[data-test-id="input-name"]')
      .type('Renzo')
      .get('[data-test-id="input-lastname"]')
      .type('Manrique')
      .get('[data-test-id="input-email"]')
      .type('renzmanri97@gmail.com')
      .get('[data-test-id="input-confirm-email"]')
      .type('renzmanri97@gmail.com')
      .get('[data-test-id="input-pass"]')
      .type('123qweR%')
      .get('[data-test-id="input-confirm-pass"]')
      .type('123qweR%')
      .get('[data-test-id="input-terms"]')
      .click()
      .get('[data-test-id="confirm-register"]')
      .click()
      .wait(1000)
      .get('[data-test-id="confirm-user"]')
      .should('to.have.text', 'Usuario Creado');
  });

  it('Login user', () => {
    cy.get('[data-test-id="profile-general"]')
      .click()
      .get('[data-test-id="login"]')
      .click();
    cy.url().should('include', '/iniciar-sesion');
    cy.get('[data-test-id="input-email-login"]')
      .type('eventops.notify@gmail.com')
      .get('[data-test-id="input-pass-login"]')
      .type('123qweR%')
      .get('[data-test-id="button-login"]')
      .click()
      .get('[data-test-id="button-create-event"]')
      .should('to.have.text', 'CREAR EVENTO');
  });

  it('Recovery password', () => {
    cy.get('[data-test-id="profile-general"]')
      .click()
      .get('[data-test-id="login"]')
      .click()
      .get('[data-test-id="forgot-pass"]')
      .click();
    cy.url().should('include', '/recuperar-password');
    cy.get('[data-test-id="input-email-recovery"]')
      .type('eventops.notify@gmail.com')
      .get('[data-test-id="button-recovery"]')
      .click()
      .get('[data-test-id="confirm-recovery"]')
      .should('to.have.text', 'Se envio el correo para recuperar contraseña');
  });

  it('Filter events', () => {
    cy.get('.filter-search').type('Partido').type('{enter}');
    cy.url().should('include', '/busqueda?title=Partido');
    cy.get('[data-test-id="busqueda-event-container"]')
      .children()
      .get('[data-test-id="title-card"]')
      .should('contain', 'Partido');
  });
});
