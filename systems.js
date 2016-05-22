/*
 * Filename: systems.js
 */
var SystemsSystem = require(__dirname + '/system.js');

/**
 * Create a new Systems that let users create sub-systems.
 * @return {Systems}
 */
function Systems() { }

/**
 * Create a new SystemsSystem object.
 * @return {SystemsSystem}
 */
Systems.prototype.system = function() {
  return new SystemsSystem();
}

module.exports = Systems;
