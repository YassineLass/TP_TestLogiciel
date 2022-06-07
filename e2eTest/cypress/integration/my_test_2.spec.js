describe("Normal input", () => {
  it("Visit indeed!", () => {
    cy.visit("http://localhost:5000");
    cy.get("#input").should("be.visible");
    cy.get("#input").type("20");
    cy.get("#check").should("be.visible");
    cy.get("#check").click();
    cy.get("#message").contains("Too High!","Too Low!");
  });
});
