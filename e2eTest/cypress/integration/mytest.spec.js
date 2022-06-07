describe("Invalid Input", () => {
  it("Visit indeed!", () => {
    cy.visit("http://localhost:5000");
    cy.get("#input").should("be.visible");
    cy.get("#input").type("55");
    cy.get("#check").should("be.visible");
    cy.get("#check").click();
    cy.get("#message").contains("Invalid Input").should("be.visible");
  });
});
