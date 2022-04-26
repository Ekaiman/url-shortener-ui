describe('Url shortener user flows', () => {


  it('Should have input fields on page load', () => {
    cy.intercept('http://localhost:3001/api/v1/urls', {
      response: 200,
      fixture: 'get-data.json'
    })
    cy.visit('http://localhost:3000/')
      cy.get('h1')
      .contains('URL Shortener')
      .get('.title-input')
      .get('.url-input')
      .get('.submit-button')
  })

  it('Should display already shortened URLS', () => {
    cy.get('.url').get('.title').get('.short-link').get('.long-link')
  })

  it('Should update as the user fills out the form', () => {
    cy.get('.title-input')
      .type('Cute Cat')
      .should('have.value', 'Cute Cat')
      .get('.url-input')
      .type('www.google.com/catpictures')
      .should('have.value', 'www.google.com/catpictures')
  })

  it('should render a new card when form is submitted', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
      fixture: 'post-data.json'
    })
    cy.get('.submit-button')
      .click()
  })
})
