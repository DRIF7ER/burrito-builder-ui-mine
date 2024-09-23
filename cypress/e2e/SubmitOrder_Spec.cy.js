describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/orders', {
      statusCode: 201,
      body: {
        id: 4,
        name: 'Pepe Testington',
        ingredients: ["carnitas", "avocado", "pico de gallo", "cheese"]
      }
    })
  })

  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})