// https://docs.cypress.io/api/introduction/api.html

describe("Test header name", () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  })
  it("check header name", () => {
    cy.get('[data-cy=headerName]').should("have.text", "Todo Application");
  });
});

describe("Test new todo item", () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  })
  it("check adding new todo", () => {
    const listItemCount = Cypress.$('li').length
    cy.get('input')
      .type('Do homework')
      .type('{enter}')
    cy.get('li').should('have.length', listItemCount + 1)
  })
});
describe("Test deleting todo", () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  })
  it("test deleting a todo", () => {
    const listItemCount = Cypress.$('li').length
    cy.get('#deleteTodo').click()
    cy.get('li').should('have.length', listItemCount - 1)
  })
});
