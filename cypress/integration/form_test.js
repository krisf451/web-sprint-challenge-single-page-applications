//tests go here

// Implement the following tests in Cypress:

// - [ ] test that you can add text to the box
// - [ ] test that you can select multiple toppings
// - [ ] test that you can submit the form

describe("Pizza App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  //helpers to centralize the CSS selectors and clean up the tests
  const nameInput = () => cy.get("input[name=name]");
  const sizeInput = () => cy.get("input[name=size]");
  const toppings1Input = () => cy.get("input[name=pepperoni]");
  const toppings2Input = () => cy.get("input[name=sausage]");
  const toppings3Input = () => cy.get("input[name=mushrooms]");
  const toppings4Input = () => cy.get("input[name=olives]");
  const specialInput = () => cy.get("input[name=special]");

  it("sanity check to make sure tests work", () => {
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
    expect({}).not.to.equal({});
    expect({}).to.eql({});
  });
});
