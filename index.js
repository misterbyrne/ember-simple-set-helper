'use strict';

module.exports = {
  name: require('./package').name,

  setupPreprocessorRegistry(type, registry) {
    let plugin = this._buildPlugin();
    plugin.parallelBabel = {
      requireFile: __filename,
      buildUsing: '_buildPlugin',
      params: { },
    };
    registry.add('htmlbars-ast-plugin', plugin);
  },

  _buildPlugin() {
    return {
      name: 'set-placeholder',
      plugin: require('./lib/simple-set-transform'),
      baseDir() {
        return __dirname;
      },
    };
  },
};
