/* eslint-env node */
module.exports = {
  description: 'The default template for empress-blog-base-template. Used as a starting point to create your own template',
  normalizeEntityName() {
    // no-op
  },

  afterInstall() {
    return this.removePackageFromProject('ember-cli-htmlbars').then(() => {
      return this.addAddonsToProject({
        packages: [
          'ember-cli-htmlbars',
          'ember-composable-helpers',
        ],
        blueprintOptions: {
          save: true
        }
      })
    })
    .then(() => {
      return this.addAddonsToProject({
        packages: [
          'ember-data',
          'ember-fetch',
        ]
      });
    });
  }
};
