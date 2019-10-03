const ENZYME_CONFIG_FILE_PATH = './config/enzyme.config.js';

module.exports = {
  verbose: true,
  setupFilesAfterEnv: [ENZYME_CONFIG_FILE_PATH],
};
