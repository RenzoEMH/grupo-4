describe('Home Eventops', () => {
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
      .and('contain.html', 'article');
    //Eventos proximos
    cy.get('[data-test-id="proximos-container"]')
      .children()
      .should('have.length.at.least', 1);
  });
});
