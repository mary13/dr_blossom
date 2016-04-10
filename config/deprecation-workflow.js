window.deprecationWorkflow = window.deprecationWorkflow || {};
window.deprecationWorkflow.config = {
  workflow: [
    { handler: "silence", matchMessage: "Usage of `ember/resolver` module is deprecated, please update to `ember-resolver`." },
    { handler: "silence", matchMessage: "Usage of `ember/load-initializers` module is deprecated, please update to `ember-load-initializers`." },
    { handler: "silence", matchMessage: "Support for the `ember-legacy-views` addon will end soon, please remove it from your application." },
    { handler: "silence", matchMessage: "The `initialize` method for Application initializer 'add-modals-container' should take only one argument - `App`, an instance of an `Application`." },
    { handler: "silence", matchMessage: "The `initialize` method for Application initializer 'md-settings' should take only one argument - `App`, an instance of an `Application`." },
    { handler: "silence", matchMessage: "Using the injected `container` is deprecated. Please use the `getOwner` helper instead to access the owner of this object." }
  ]
};
