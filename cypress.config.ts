import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "tests/e2e/cypress/e2e/**/*.cy.ts", // Update the path
    supportFile: "tests/e2e/cypress/support/e2e.ts", // Update the path
    fixturesFolder: "tests/e2e/cypress/fixtures", // Update the path
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
