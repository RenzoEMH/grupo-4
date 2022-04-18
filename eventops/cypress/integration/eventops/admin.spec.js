/* eslint-disable testing-library/await-async-utils */
describe('Admin flow', () => {
  beforeEach(() => {
    cy.exec('npm run e2e:seedDB');
    cy.visit('http://localhost:3000/')
      .get('[data-test-id="profile-general"]')
      .click()
      .get('[data-test-id="login"]')
      .click()
      .get('[data-test-id="input-email-login"]')
      .type('daniel@gmail.com')
      .get('[data-test-id="input-pass-login"]')
      .type('123')
      .get('[data-test-id="button-login"]')
      .click();
  });

  it('Display Admin Home', () => {
    cy.get('.btn > .nav-link').should('to.have.text', 'GESTIONAR BANNER');
    cy.get('.list-group > .active').should(
      'to.have.text',
      'Previsualizar banner'
    );
    cy.get('.active > .d-block').should('have.attr', 'src');
  });

  it('Manage banner', () => {
    cy.get('.btn > .nav-link').click();
    cy.get('.justify-content-center').click();
    cy.get(
      '#slideModal > .modal-dialog > .modal-content > form > .modal-body > .slider > :nth-child(1) > .form-select'
    ).select('Rock alternativo');
    cy.get(
      '#slideModal > .modal-dialog > .modal-content > form > .modal-body > .slider > .row > :nth-child(1) > #date'
    ).type('2022-04-20');
    cy.get(
      '#slideModal > .modal-dialog > .modal-content > form > .modal-body > .slider > .row > :nth-child(2) > .form-select'
    ).select('1');
    cy.get(
      '#slideModal > .modal-dialog > .modal-content > form > .modal-footer > .btn-primary'
    ).click();
    cy.get(
      '#slideModal > .modal-dialog > .modal-content > form > .modal-footer > .btn-secondary'
    ).trigger('click');
    cy.get(':nth-child(3) > .d-flex > .details > :nth-child(1)').should(
      'exist'
    );
    cy.get(':nth-child(1) > .nav-link')
      .click()
      .get('[data-test-id="carousel-container"]')
      .children()
      .should('have.length.at.least', 3);
    cy.get('.btn > .nav-link').click();
    cy.get(':nth-child(3) > .d-flex > .options > .btn-primary').click();
    cy.get(
      '#slideEditorModal > .modal-dialog > .modal-content > form > .modal-body > .slider > .row > :nth-child(2) > .form-select'
    ).select('1');
    cy.get(
      '#slideEditorModal > .modal-dialog > .modal-content > form > .modal-footer > .btn-primary'
    ).click();
    cy.get(
      '#slideEditorModal > .modal-dialog > .modal-content > form > .modal-footer > .btn-secondary'
    ).click();
    cy.get(':nth-child(1) > .d-flex > .details > :nth-child(1)').should(
      'to.have.text',
      'Evento: Conciertoooo'
    );
    cy.get(':nth-child(3) > .d-flex > .options > .btn-secondary').click();
    cy.get('[data-test-id="banner-list"]').children().should('have.length', 2);
  });

  it('Manage events', { scrollBehavior: false }, () => {
    cy.get('[value="1"]')
      .click()
      .get('.filter-search')
      .type('Concierto de Salsa')
      .get('[data-test-id="event-table"]')
      .children()
      .should('have.length', 1);
    cy.get('#btn-actions > .btn')
      .click()
      .url()
      .should('include', '/evento-detalle');
    cy.get('[data-test-id="change-state-event"]')
      .select('Activo')
      .get('.row > :nth-child(1) > .btn')
      .click()
      .get('[data-test-id="confirm-state"]')
      .should('to.have.text', 'Estado cambiado correctamente');
    cy.get('a > .btn')
      .click()
      .get('[value="1"]')
      .click()
      .get('tbody > tr > :nth-child(4)')
      .should('to.have.text', 'activo');
  });

  it('Manage users', () => {
    cy.get('[value="2"]').click();

    cy.get('.filter-search')
      .type('erick')
      .get('[data-test-id="event-user"]')
      .children()
      .should('have.length', 1);
    cy.get('[data-bs-target="#modalUser"]').click();
    cy.wait(1000);
    cy.get(
      '#modalUser > .modal-dialog > .modal-content > .modal-footer > .btn'
    ).click();
    cy.get('[data-bs-target="#modalDisableUser"]').click();
    cy.wait(1000);
    cy.get('.modal-footer > .btn-primary').click();
    cy.wait(1000);
    cy.get('[data-test-id="state-filter-user"]').click();
    cy.get('#inactive').click();
    cy.get('.price-dropdown__btn').click();
    cy.get('[data-test-id="state-filter-user"]').click();
    cy.get('.filter-search').clear();
  });
});
