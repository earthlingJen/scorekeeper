/*  global cy */

describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.clearLocalStorage()
  })

  it('starts without player', () => {
    cy.get('[data-test-id="StartScreen-player"]').should('not.exist')
    cy.get('input').should('have.attr', 'placeholder', 'Name')
  })

  it('starts without play button, but with hint text', () => {
    cy.get('[data-test-id="StartScreen-button"]').should('not.exist')

    cy.get('[data-test-id="StartScreen-hint"]').should(
      'contain',
      'Please add one player and hit Enter-Button'
    )
  })

  describe('App with a player', () => {
    beforeEach(() => {
      cy.get('input')
        .should('have.attr', 'placeholder', 'Name')
        .type('John{Enter}')
    })

    it('has a player', () => {
      cy.get('[data-test-id="StartScreen-player"]').should('contain', 'John')
    })

    it('has a play button', () => {
      cy.get('button')
        .contains('Play')
        .should('exist')
    })

    it('deletes all players', () => {
      cy.get('[data-test-id="StartScreen-delete-all"]')
        .contains('Delete all Players')
        .should('exist')
    })

    it('can delete a player', () => {
      cy.get('[data-test-id="StartScreen-delete-player"]').click()
      cy.get('[data-test-id="StartScreen-player"]').should('not.exist')
    })

    it('navigates to next screen', () => {
      cy.get('button')
        .contains('Play')
        .should('exist')
        .click()
        .location('pathname')
        .should('include', '/summary')
    })
  })

  describe('App with two players', () => {
    beforeEach(() => {
      cy.get('input')
        .should('have.attr', 'placeholder', 'Name')
        .type('John{Enter}')
        .type('Jane{Enter}')
    })

    it('has two players', () => {
      cy.get('[data-test-id="StartScreen-player"]').should('contain', 'John')
      cy.get('[data-test-id="StartScreen-player"]').should('contain', 'Jane')
    })

    it('can delete one player', () => {
      cy.get('[data-test-id="StartScreen-delete-player"]')
        .last()
        .click()
      cy.get('[data-test-id="StartScreen-player"]')
        .contains('Jane')
        .should('not.exist')
    })

    describe.only('SummaryScreen', () => {
      beforeEach(() => {
        cy.get('button')
          .contains('Play')
          .should('exist')
          .click()
      })

      it('has the correct headline', () => {
        cy.get('h1').should('contain', 'Summary Screen')
      })
    })
  })
})
