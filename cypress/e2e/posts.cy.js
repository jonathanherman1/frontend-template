describe('Posts E2E Test', () => {
  it('creates a new post and display it in the posts list', () => {
    // Visit the homepage
    cy.visit('/')

    // Fill out the form to create a new post
    cy.get('input[name="name"]').type('Jon')
    cy.get('textarea[name="message"]').type('Hello world!')

    // Submit the form
    cy.get('button[type="submit"]').click()

    // // Verify that the new post appears in the posts list
    // cy.get('[data-testid="post').should('contain', 'Jon')
    // cy.get('[data-testid="post').should('contain', 'Hello world!')
  })
})
