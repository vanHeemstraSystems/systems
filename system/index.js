/*
 * Filename: index.js
 */
var self = this; // Set the context locally, for access protection
/**
 * Create a new System that let users create sub-system.
 * @return {System}
 */
function System() {
  console.log('systems system - System called');
  // add key value pairs here
  // self's are not directly publicly accessible, only through their public method(s)
  // use self's here for protection from direct access
  self._filename = ''; // Will be set
  self._filepath = ''; // Will be set
  self._proxies = {}; // Will be set
}

System.prototype.proxies = function() {
  return self._proxies;
}

System.prototype.setproxies = function(fnOrValue) {
  self._proxies = fnOrValue;
}

System.prototype.filename = function() {
  return self._filename;
}

System.prototype.setfilename = function(fnOrValue) {
  self._filename = fnOrValue;
}

System.prototype.filepath = function() {
  return self._filepath;
}

System.prototype.setfilepath = function(fnOrValue) {
  self._filepath = fnOrValue;
}

System.prototype.execute = function(arguments) {
  console.log('systems system execute - called');
  console.log('systems system execute - arguments: ', arguments); // WORKS!!
  // Required modules
  var _instructions = {};
  var instruction = {};
  var _proxies = require('../../proxies/proxies');
  var _arguments = arguments;
  /*
   * ONLY ENDPOINTS OF _proxies ARE Promises, e.g. _proxies().proxy().libraries().library().path()
   * WE POSTPONE TO USE A Promise DOWN THE OBJECT HIERARCHY AS FAR DOWN AS FEASIBLE
   * UNTIL WE NEED THE Promise RESOLVED
   */
  console.log('systems system execute - _proxies: ', _proxies)
  var promise = _proxies().proxy().libraries().library().promise();
  var join = promise.join;
  // Start of the chain
  join(_proxies(), function(proxies) {
    console.log('systems system execute - proxies: ',
      proxies) // Works: Proxies {}
    self._proxies = proxies;
    return (proxies);
  }) /* EOF join proxies */
  .then(function(proxies) {

    var _documentation = self._proxies.proxy().documentations().documentation();
    console.log('systems system execute - documentation: ',
      _documentation) // Works: Documentation {}
    _documentation.setfilename(self._filename);
    _documentation.setfilepath(self._filepath);
    _documentation.setproxies(self._proxies);

    // FOR TESTING ONLY!
    var _sequencediagram = _documentation.uml().sequencediagram();
    console.log('systems system execute - sequencediagram: ',
      _sequencediagram) // Works: Proxies {}
    _sequencediagram.append();


    var resourceForUuid = {};
    var layerForLayer = {};
    var instructionsForInstructions = {};
    var uuid = {};
    var additionalArgument = _arguments;
    var arrayOfPromises = [];
    /*
     * The value of arguments will be the optional additional command line arguments, e.g. a JSON file {uuid:1234}
     * Handle non-exception-throwing cases.
     * Neither JSON.parse(false) or JSON.parse(1234) throw errors,
     * hence the type-checking.
     * But JSON.parse(null) returns 'null', and typeof null === "object"
     * so we must check for that, too.
     */
    if (additionalArgument
      && typeof additionalArgument === 'object'
      && additionalArgument !== null) {
      /*
       * Now we have the object additionalArgument
       */
      console.log('systems system execute - additionalArgument: ',
        additionalArgument)
      console.log('systems system execute - additionalArgument.system: ',
        additionalArgument.system)
      /*
       * The additionalArgument.system is an Array of Objects
       * so we have to loop through the array.
       */
      console.log('systems system execute - additionalArgument.system.length: ',
          additionalArgument.system.length)

      for (var i = 0; i < additionalArgument.system.length; i++) {
        console.log('systems system execute - \
            additionalArgument.system[',i,']: ',
            additionalArgument.system[i])
        console.log('systems system execute - \
            additionalArgument.system[',i,'].uuid: ',
            additionalArgument.system[i].uuid)
        /* Get a resource, by comparing with the uuid */
        /*
         * Note: console.log('systems execute - resource: ', _proxies().proxy().resources().resource);
         * Returns: function () { return new ResourcesResource(); }
         * Note: console.log('systems execute - _proxies().proxy().resources().resource(): ', 
         *         _proxies().proxy().resources().resource());
         * Returns: Resource {}
         * Note: console.log('systems execute - _proxies().proxy().resources().resource()._6e8bc430_9c3a_11d9_9669_0800200c9a66: ', 
         *         _proxies().proxy().resources().resource()._6e8bc430_9c3a_11d9_9669_0800200c9a66);
         * Note: console.log('systems execute - _proxies().proxy().resources().resource()._6e8bc430_9c3a_11d9_9669_0800200c9a66(): ', 
         *         _proxies().proxy().resources().resource()._6e8bc430_9c3a_11d9_9669_0800200c9a66());
         */
        var _resource = self._proxies.proxy().resources().resource();
        console.log('systems system execute - resource: ', _resource)
        for (var key in _resource) {
          console.log('systems system execute - key: ', key)
          /*
           * Strip prefix _ if present on key.
           * Then substitute all _ for - if present on key.
           */
          var keyUuid = key.replace(/^\_/, '').replace(/_/g, '\-');
          console.log('systems system execute - keyUuid: ', keyUuid);
          if (additionalArgument.system[i].uuid == keyUuid) {
            console.log('systems system execute - uuid == keyUuid');
            /* Do something */
            resourceForUuid = _resource[key]();
            break;
          }
        }
        /* Validate resourceForUuid */
        if (Object.keys(resourceForUuid).length == 0) {
          /* Raise an error, the resourceForUuid has not been found */
          throw new Error('No resource found for \
              additionalArgument.system[',i,'].uuid: ',
              additionalArgument.system[i].uuid)
          /* TO FIX: for some reason the value of uuid is empty here */
        } else {
          console.log('systems system execute - resourceForUuid: ',
              resourceForUuid)
        };

        console.log('systems system execute - \
            additionalArgument.system[',i,'].instructions: ',
            additionalArgument.system[i].instructions)
        var _instructions = self._proxies.proxy().instructions();
        var _instruction = _instructions.instruction();
        console.log('systems system execute - instruction: ', _instruction)
        for (var key in _instruction) {
          var keyLayer = key;
          /* HANDLE THE instructions HERE LIKEWISE, BUT BREAK IT DOWN PER instruction */
          /* TEMP PLACEHOLDER */
          instructionsForInstructions = [{start: 'true'}];
          break;
        } // EOF for
        // Validate instructionsForInstructions
        if (Object.keys(instructionsForInstructions).length == 0) {
          /* Raise an error, the instructionForInstruction has not been found */
          throw new Error('No instructions found for \
              additionalArgument.system[',i,'].instructions: ',
              additionalArgument.system[i].instructions)
          /* TO FIX: for some reason the value of instruction is empty here */
        } else {
          console.log('systems system execute - instructionsForInstructions: ',
              instructionsForInstructions)
        }
        /* OLD: layer = additionalArgument.layer; */
        console.log('systems system execute - \
            additionalArgument.system[',i,'].layer: ',
            additionalArgument.system[i].layer)
        var _layers = self._proxies.proxy().layers();
        var _layer = _layers.layer();
        _layer.setproxies(proxies);
        _layer.setresource(resourceForUuid);
        _layer.setinstructions(instructionsForInstructions);
        console.log('systems system execute - layer: ', _layer)
        for (var key in _layer) {
          var keyLayer = key;
          console.log('systems system execute - keyLayer: ', keyLayer)
          if (additionalArgument.system[i].layer == keyLayer) {
            console.log('systems system execute - layer == keyLayer')
            /* Do something */
            layerForLayer = _layer[key]();
            break;
          }
        }
        /*
         * Validate layerForLayer
         * if(Object.keys(layerForLayer).length == 0) {  // THIS VALIDATES IF THERE ARE KEYS WITHIN e.g. Business LAYER, NOT A GOOD CHECK, CHANGE IT!!
         *   raise an error, the layerForLayer has not been found
         *   throw new Error('No layer found for additionalArgument.system[',i,'].layer: ', additionalArgument.system[i].layer); // TO FIX: for some reason the value of layer is empty here
         * } else {
         */
        console.log('systems system execute - layerForLayer: ', layerForLayer)
        /*
         * NOW MAKE THE LAYER DO ITS THING, EXECUTE ITS FUNCTION THAT RETURNS A PROMISE
         * Add the function that returns a Promise
         */
        arrayOfPromises.push(layerForLayer.execute());
        /*
         * } // EOF else
         */
      } // EOF for additionalArgument.system.length
    } // EOF if additionalArgument
    /* Return an array of all promiese from the layers */
    return arrayOfPromises;
  }) // EOF then proxies
  .then(function(arrayOfPromises) {
    console.log('systems system execute - arrayOfPromises: ', arrayOfPromises)
    self._proxies.proxy().libraries().library().promise()
    .all(arrayOfPromises)
    .catch(function(error) {
      console.log('systems system execute - all error: ', error)
    })
    .finally(function() {
      console.log('systems system execute - all finally')
    });
  }) // EOF then resourceForUuid
  .catch(function(error) {
    console.log('systems system execute - error: ', error)
  }) // EOF catch
  .finally(function() {
    console.log('systems system execute - finally');
  }); // EOF finally
} // EOF execute

module.exports = System;
