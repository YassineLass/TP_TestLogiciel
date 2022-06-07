describe("a search on Google", () => {
  it("Visit indeed!", () => {
    cy.visit("http://www.google.com");
    cy.get('input[name="q"]').type('INSAT Institut National des Sciences Appliquées et de Technologie{enter}');
  
  });
});
