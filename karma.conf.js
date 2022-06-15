module.exports = function(config) {
  const c = {};

  c.basePath = '.';
  c.client = {
    mocha: {
      reporter: 'html',
      ui: 'bdd',
    }
  };
  c.files = [
    {
      pattern: '*.mjs',
      type: 'module',
    }
  ];
  c.frameworks = ['mocha', 'power-assert'];
  c.preprocessors = {
    '*.mjs': ['espower']
  };
  c.reporters = ['dots'];

  config.set(c);
};
