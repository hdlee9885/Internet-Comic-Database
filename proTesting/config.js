// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  services: ['selenium-standalone'],
  specs: ['spec.js']
}