/// <reference types="Cypress" />

describe('Logged user actions tests', () => {
  // Login programmatically
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.request('POST', 'http://localhost:5000/api/login', {
      email: Cypress.env('userEmail'),
      password: Cypress.env('userPassword'),
    }).then((resp) => {
      window.localStorage.setItem(
        'infoUser',
        JSON.stringify({ token: resp.body.token })
      );
    });
    cy.window().then((win) => win.location.reload());
  });

  // Tests to create event
  it('Can create an event', { scrollBehavior: false }, () => {
    cy.get('.btn > .nav-link').click();
    cy.url().should('include', '/crear-evento');
    // detalles del evento
    cy.get('.col-lg-7 > :nth-child(1) > .form-control').type('Event title');
    cy.get('.form-select').select('Conciertos');
    cy.get(':nth-child(3) > .form-control').type('Event description');
    cy.scrollTo('center');
    cy.get(':nth-child(1) > .image-picker > .btn').click();
    cy.get('iframe')
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .and('be.visible')
      .then(cy.wrap)
      .find('input[type="file"]')
      .selectFile('cypress/fixtures/coldplay.jpg');
    cy.get('iframe')
      .its('0.contentDocument.body')
      .find('[data-test="skip-button"]')
      .click();
    // eslint-disable-next-line testing-library/await-async-utils
    cy.wait(500);
    cy.get('.img-fluid').should('be.visible').and('have.attr', 'src');
    cy.get(':nth-child(5) > :nth-child(1) > .btn').click().click();
    cy.get(':nth-child(2) > .col-lg-4 > .mb-3 > .form-control').type(
      '2022-04-29'
    );
    cy.get(':nth-child(2) > :nth-child(2) > .mb-3 > .form-control').type(
      '14:00'
    );
    cy.get(':nth-child(2) > :nth-child(3) > .mb-3 > .form-control').type(
      '16:00'
    );
    cy.get(':nth-child(3) > .col-lg-4 > .mb-3 > .form-control').type(
      '2022-04-30'
    );
    cy.get(':nth-child(3) > :nth-child(2) > .mb-3 > .form-control').type(
      '14:00'
    );
    cy.get(':nth-child(3) > :nth-child(3) > .mb-3 > .form-control').type(
      '16:00'
    );
    cy.scrollTo('bottom');
    cy.get(':nth-child(4) > .col-lg-2 > span').click();
    cy.get('#allAges').check();
    cy.get(
      '[style="display: flex; justify-content: flex-start;"] > .btn'
    ).click();

    // ubicación del evento
    cy.get('.accordion-button').should('have.text', 'Ubicación del Evento');
    cy.get('#city').select('Lima');
    cy.get(':nth-child(2) > .form-control').type(
      'Avenida Javier Prado Este 4200'
    );
    // eslint-disable-next-line testing-library/await-async-utils
    cy.wait(5000);
    cy.get('#map-container-google-1 > iframe')
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .and('be.visible');
    cy.get(
      '[style="display: flex; justify-content: flex-start;"] > .btn'
    ).click();

    // creación de entradas
    cy.get('.accordion-button').should('have.text', 'Creación de Entradas');
    cy.get('.col-md-12 > .btn').click();
    cy.get(':nth-child(2) > .col-md-5 > .mb-3 > .form-control').type('General');
    cy.get(':nth-child(2) > .col-md-3 > .mb-3 > .form-control')
      .clear()
      .type(30);
    cy.get(':nth-child(2) > :nth-child(3) > .mb-3 > .form-control')
      .clear()
      .type(10);
    cy.get(':nth-child(3) > .col-md-5 > .mb-3 > .form-control').type('VIP');
    cy.get(':nth-child(3) > .col-md-3 > .mb-3 > .form-control')
      .clear()
      .type(20);
    cy.get(':nth-child(3) > :nth-child(3) > .mb-3 > .form-control')
      .clear()
      .type(15);
    cy.get('#same-address').check();
    cy.get('#save-info').check();
    cy.get(
      '[style="display: flex; justify-content: flex-start;"] > .btn'
    ).click();
    cy.get('[style="font-size: 4rem;"]').should('have.text', '¡Éxito!');
  });

  // Test edit event
  it('Can edit an event', { scrollBehavior: false }, () => {
    cy.get('#navbarDropdown > .bi').click();
    cy.get(':nth-child(3) > .dropdown-item').click();
    cy.url().should('include', '/mis-eventos');
    cy.scrollTo('center');
    cy.get(
      ':nth-child(1) > .card > .card-body > .card-detail > .card-button'
    ).click();
    cy.get('.card-img-top').should('be.visible').and('have.attr', 'src');
    cy.scrollTo('top');
    cy.get('.d-grid > .btn').click();

    // detalles del evento
    cy.get('.accordion-button').should('have.text', 'Detalles del Evento');
    cy.scrollTo('bottom');
    cy.get(
      '[style="display: flex; justify-content: flex-start;"] > .btn'
    ).click();

    // ubicacíon del evento
    cy.get('.accordion-button').should('have.text', 'Ubicación del Evento');
    cy.get(
      '[style="display: flex; justify-content: flex-start;"] > .btn'
    ).click();

    // creación de entradas
    cy.scrollTo('top');
    cy.get('.accordion-button').should('have.text', 'Creación de Entradas');
    cy.get('.col-md-12 > .btn').click();
    cy.get(':nth-child(2) > .col-md-5 > .mb-3 > .form-control').type('General');
    cy.get(':nth-child(2) > .col-md-3 > .mb-3 > .form-control')
      .clear()
      .type(30);
    cy.get(':nth-child(2) > :nth-child(3) > .mb-3 > .form-control')
      .clear()
      .type(10);
    cy.get(':nth-child(3) > .col-md-5 > .mb-3 > .form-control').type('VIP');
    cy.get(':nth-child(3) > .col-md-3 > .mb-3 > .form-control')
      .clear()
      .type(20);
    cy.get(':nth-child(3) > :nth-child(3) > .mb-3 > .form-control')
      .clear()
      .type(15);
    cy.scrollTo('center');
    cy.get('#same-address').check();
    cy.get('#save-info').check();
    cy.get(
      '[style="display: flex; justify-content: flex-start;"] > .btn'
    ).click();
    cy.get('[style="font-size: 4rem;"]').should('have.text', '¡Éxito!');
  });

  // Test shopcart
  it('Can use shopCart', { scrollBehavior: false }, () => {
    // go to event details
    cy.get(
      ':nth-child(3) > .flex-column > .eventos-filtrados > .container > .row > :nth-child(1) > .card > .card-body > .card-detail > .card-button'
    ).should('exist');
    cy.scrollTo('0', '1200px');
    cy.get(
      ':nth-child(3) > .flex-column > .eventos-filtrados > .container > .row > :nth-child(1) > .card > .card-body > .card-detail > .card-button'
    ).click();
    cy.url().should('include', '/evento-detalle/');
    //add items
    cy.get('iframe')
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .and('be.visible');
    cy.scrollTo('top');
    cy.get(':nth-child(3) > .col-md-4 > .form-control')
      .should('be.visible')
      .type('{selectall}')
      .type('2');
    cy.get(':nth-child(4) > .col-md-4 > .form-control')
      .should('be.visible')
      .type('{selectall}')
      .type('1');
    cy.get('#save-info').check();
    cy.get('.pb-3 > .btn').click();
    cy.get('#cardCarrito > .col-md-12')
      .children()
      .not('div.row.mb-3')
      .not('#cabeceraCarrito')
      .should('to.have.length', 2);
    // remove an item
    cy.get(':nth-child(4) > .main > :nth-child(5) > span').click();
    cy.get('#cardCarrito > .col-md-12')
      .children()
      .not('div.row.mb-3')
      .not('#cabeceraCarrito')
      .should('to.have.length', 1);
    // increase amount of ticket
    cy.get('[style="padding: 0px 0.5rem; user-select: none;"]').should(
      'have.text',
      '2'
    );
    cy.get(':nth-child(3) > :nth-child(3) > .bi').click();
    cy.get('[style="padding: 0px 0.5rem; user-select: none;"]').should(
      'have.text',
      '3'
    );
    // decrease amount of ticket
    cy.get('.main > :nth-child(3) > :nth-child(1) > .bi').click();
    cy.get('[style="padding: 0px 0.5rem; user-select: none;"]').should(
      'have.text',
      '2'
    );
  });

  // Test payment
  it('Can pay for ticket', { scrollBehavior: false }, () => {
    cy.intercept({
      method: 'GET',
      url: '/getip',
    }).as('epaycoIp');
    cy.intercept({
      method: 'POST',
      url: '/create/transaction/*/*',
    }).as('epaycoTransaction');
    // add item to cart programmatically
    cy.request('GET', 'http://localhost:5000/api/events').then((resp) => {
      const event = resp.body[0];
      window.localStorage.setItem(
        'shopCart',
        JSON.stringify({
          cart: [
            {
              id: 5927,
              city: event.city,
              dateId: event.dates[0]._id,
              date: event.dates[0].date,
              hour: event.dates[0].startHour,
              idUsuario: event.idOwner,
              idEvento: event._id,
              img: event.img,
              amount: 2,
              categoryId: event.dates[0].ticketCategories[0]._id,
              price: event.dates[0].ticketCategories[0].price,
              title: event.title,
              typeTicket: event.dates[0].ticketCategories[0].type,
            },
          ],
        })
      );
    });
    cy.window().then((win) => win.location.reload());
    // go to carrito compra
    cy.get('#navbarDropdown > .bi').click();
    cy.get(':nth-child(4) > .dropdown-item').click();
    cy.url().should('include', '/carrito-compra');
    // check if GET and POST request to ePayco return status code 200
    cy.scrollTo('bottom');
    cy.get('.col-md-3 > .btn').click();
    // eslint-disable-next-line testing-library/await-async-utils
    cy.wait('@epaycoIp').its('response.statusCode').should('eq', 200);
    // eslint-disable-next-line testing-library/await-async-utils
    cy.wait('@epaycoTransaction').its('response.statusCode').should('eq', 200);
  });

  // Test user profile
  it('Can manage perfil de usuario', { scrollBehavior: false }, () => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:5000/api/users',
    }).as('dataUser');
    // go to perfil
    cy.get('#navbarDropdown > .bi').click();
    cy.get(':nth-child(1) > .dropdown-item').click();
    // eslint-disable-next-line testing-library/await-async-utils
    cy.wait('@dataUser');
    cy.url().should('contain', '/perfil');
    // eslint-disable-next-line jest/valid-expect-in-promise
    cy.get('.row > :nth-child(1) > .form-group > .h6 > b')
      .invoke('text')
      .then((text) => {
        // eslint-disable-next-line jest/valid-expect
        expect(text.length).to.be.greaterThan(0);
      });
    // edit perfil
    cy.get('.col-2 > .bi').click();
    cy.get(':nth-child(4) > .form-group > .form-control')
      .type('{selectall}')
      .type('12345678');
    cy.get('.class-button > .btn').click();
    cy.get('iframe')
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .and('be.visible')
      .then(cy.wrap)
      .find('input[type="file"]')
      .selectFile('cypress/fixtures/perfil.jpg');
    cy.get('iframe')
      .its('0.contentDocument.body')
      .find('[data-test="skip-button"]')
      .click();
    cy.get('.mb-6 > .img-fluid').should('be.visible').and('have.attr', 'src');
    cy.get('.justify-content-center > .btn').click();
    cy.url().should('contain', '/perfil');
    cy.get(':nth-child(4) > .form-group > .h6').should('have.text', '12345678');
    cy.get('.mt-3 > .img-fluid').should('be.visible').and('have.attr', 'src');
  });

  // Test mis entradas
  it('Can manage my tickets', { scrollBehavior: false }, () => {
    cy.get('#navbarDropdown > .bi').click();
    cy.get(':nth-child(2) > .dropdown-item').click();
    cy.url().should('contain', '/mis-entradas');
    // testing filtering
    cy.get('#categoriasDropdown').click();
    cy.get('[for="radioConciertos"]').click();
    cy.get('.category-dropdown__btn').click();
    cy.get('.eventos-filtrados > .container > .row').click();
    cy.get('.container.align-items-center > .filter__pill-container')
      .children()
      .should('have.lengthOf', 1);
    cy.get('.eventos-filtrados > .container > .row')
      .children()
      .should('have.length.greaterThan', 0);
    cy.get('.ms-2 > .bi').trigger('click');
    // eslint-disable-next-line testing-library/await-async-utils
    cy.wait(1000);
    cy.get('.container.align-items-center > .filter__pill-container')
      .children()
      .should('have.lengthOf', 0);
    cy.get('.eventos-filtrados > .container > .row')
      .children()
      .should('have.length.greaterThan', 0);
    // check ticket details
    cy.get(':nth-child(1) > .card > .card-body > .card-detail > .bg-secondary')
      .scrollIntoView()
      .click();
    cy.url().should('include', '/mi-ticket/');
    cy.get('.carousel-inner').children().should('have.length.greaterThan', 0);
  });

  // Test mis eventos
  it('Can manage my events', { scrollBehavior: false }, () => {
    cy.get('#navbarDropdown > .bi').click();
    cy.get(':nth-child(3) > .dropdown-item').click();
    cy.url().should('contain', '/mis-eventos');
    // testing filtering
    cy.get('#categoriasDropdown').click();
    cy.get('[for="radioConciertos"]').click();
    cy.get('.category-dropdown__btn').click();
    cy.get('.m-4').click();
    cy.get('.container.align-items-center > .filter__pill-container')
      .children()
      .should('have.lengthOf', 1);
    cy.get('.eventos-filtrados > .container > .row')
      .children()
      .should('have.length.greaterThan', 0);
    cy.get('.ms-2 > .bi').click();
    cy.get('.container.align-items-center > .filter__pill-container')
      .children()
      .should('have.lengthOf', 0);
    cy.get('.eventos-filtrados > .container > .row')
      .children()
      .should('have.length.greaterThan', 0);
  });
});
