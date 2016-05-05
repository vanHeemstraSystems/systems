/*
 * index.js
 */

var self = this; // set the context locally, for access protection

/**
 * Create a new System that let users create sub-system.
 * @return {System}
 */
function System() {
  console.log('sytems system - System called'); 
  // add key value pairs here
  // self's are not directly publicly accessible, only through their public method(s)
  // use self's here for protection from direct access
  self._proxies = {};  // will be set, before passing on to mapping
}

System.prototype.proxies = function() {
  return self._proxies;
}

System.prototype.setproxies = function(fnOrValue) {
  self._proxies = fnOrValue;
}

module.exports = System;
