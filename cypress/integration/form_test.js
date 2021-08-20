//tests go here

describe("Pizza App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  //helpers to centralize the CSS selectors and clean up the tests
  const pizzaBtn = () => cy.get("button[id=order-pizza]");
  const submitBtn = () => cy.get("button[id=order-button]");
  const nameInput = () => cy.get("input[name=name]");
  const sizeInput = () => cy.get("select[id=size-dropdown]");
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

  it("the proper elements are showing", () => {
    pizzaBtn().click();
    nameInput().should("exist");
    sizeInput().should("exist");
    toppings1Input().should("exist");
    toppings2Input().should("exist");
    toppings3Input().should("exist");
    toppings4Input().should("exist");
    specialInput().should("exist");
    submitBtn().should("exist");
  });

  describe("Filling out the inputs and changing inputs", () => {
    it("can navigate to the site", () => {
      cy.url().should("include", "localhost");
    });

    // it("submit button starts out disabled", () => {
    //   submitBtn().should("be.disabled");
    // });

    // Implement the following tests in Cypress:

    // - [ ] test that you can add text to the box
    // - [ ] test that you can select multiple toppings
    // - [ ] test that you can submit the form
    it("adding text to the name box", () => {
      pizzaBtn().click();
      nameInput().type("Kristian Fulkerson");
    });
    it("add a name, select a size, select/deselect multiple toppings, submit the form", () => {
      pizzaBtn().click();
      nameInput()
        .type("Kristian Fulkerson")
        .should("have.value", "Kristian Fulkerson");
      sizeInput()
        .select("Large")
        .should("have.value", "large");
      toppings1Input()
        .check()
        .check()
        .uncheck();
      toppings2Input()
        .check()
        .uncheck();
      toppings3Input()
        .check()
        .uncheck();
      toppings4Input().check();
      specialInput().type(
        "Frisbee it through the open window please, tip will be droned to you. Thanks."
      );
      submitBtn().click();
    });
  });
});
