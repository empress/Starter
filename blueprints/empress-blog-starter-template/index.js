/* eslint-env node */
module.exports = {
  description: 'The default template for empress-blog-base-template. Used as a starting point to create your own template',
  normalizeEntityName() {
    // no-op
  },

  afterInstall() {
    let devInstall = {
      packages: [
        'ember-composable-helpers',
        'ember-data',
        'ember-fetch',
      ]
    }

    let install = {
      packages: [
        'ember-cli-htmlbars',
      ]
    }

    if(this.project.isEmberCLIAddon()) {
      install.blueprintOptions = {
        save: true
      };
    }

    return this.addAddonsToProject(install).then(() => {
      return this.addAddonsToProject(devInstall);
    });
  }
};
