/*
 * execute.js
 *
 * Usage: call as follows whilst making sure to use the escaped quotes and avoid spaces e.g. 
 *
 * node execute.js {\"system\":[{\"layer\":\"business\",\"uuid\":\"6e8bc430-9c3a-11d9-9669-0800200c9a66\",\"instructions\":[{\"start\":\"true\"}]}]}
 *
 * Following the example from https://github.com/neumino/thinky/examples/basic-todo
 * but with our own modifications (removal of 'thinky' and 'rethinkdbdash')
 */

/*
 * See also http://alexperry.io/node/2015/03/25/promises-in-node.html
 */
console.log('systems execute - called');

// Required modules
var _instructions = {};
var instruction = {};
var _proxies = require('../proxies/proxies');
// ONLY ENDPOINTS OF _proxies ARE Promises, e.g. _proxies().proxy().libraries().library().path()
// WE POSTPONE TO USE A Promise DOWN THE OBJECT HIERARCHY AS FAR DOWN AS FEASIBLE
// UNTIL WE NEED THE Promise RESOLVED
console.log('systems execute - _proxies: ', _proxies);                                                                                              // function () { return new Proxies(); }
// console.log('systems execute - _proxies(): ', _proxies());                                                                                                // Proxies {}
// console.log('systems execute - _proxies().proxy: ', _proxies().proxy);                                                                                    // function () { return new ProxiesProxy(); }
// console.log('systems execute - _proxies().proxy(): ', _proxies().proxy());                                                                                // Proxy {}
// console.log('systems execute - _proxies().proxy().libraries: ', _proxies().proxy().libraries);                                                            // function () { return new ProxyLibraries(); }
// console.log('systems execute - _proxies().proxy().libraries(): ', _proxies().proxy().libraries());                                                        // Libraries {}
// console.log('systems execute - _proxies().proxy().libraries().library: ', _proxies().proxy().libraries().library);                                        // function () { return new LibrariesLibrary(); } 
// console.log('systems execute - _proxies().proxy().libraries().library(): ', _proxies().proxy().libraries().library());                                    // Library {}
// console.log('systems execute - _proxies().proxy().libraries().library().path: ', _proxies().proxy().libraries().library().path);                      // function () { return new LibraryPath(); }
// console.log('systems execute - _proxies().proxy().libraries().library().path(): ', _proxies().proxy().libraries().library().path());                      // LibraryPath { _default: Object, _validator: undefined, _options: {} } 
// console.log('systems execute - _proxies().proxy().libraries().library().promise(): ', _proxies().proxy().libraries().library().promise());
var promise = _proxies().proxy().libraries().library().promise();
var join = promise.join;

// Start of the chain
join(_proxies(), function(proxies) {
  console.log('systems execute - proxies: ', proxies); // Works: Proxies {}
  return(proxies);
}) //eof join proxies
.then(function(proxies) {
  var resourceForUuid = {};
  var layerForLayer = {};
  var instructionsForInstructions = {};
  var uuid = {};
  var additionalArgument = {};
  var arrayOfPromises = [];
  // process.argv is an array containing the command line arguments. 
  // The first element will be 'node', the second element will be the name of the JavaScript file. 
  // The next elements will be any additional command line arguments.
  process.argv.forEach(function (val, index, array) {
    // index 0 will be path to and node executable
	// index 1 will be path to and this file
	// index 2 will be optional additional command line arguments, e.g. a JSON file {uuid:1234}
	// console.log(index + ': ' + val);
	// catch the val at index 2
    switch(index) {
      case 0: // node
        break; // eof case 0
      case 1: // this file
        break; // eof case 1
      case 2: // optional additional command line argument
        console.log('systems execute - additional command line argument: ', val);
        try {
          additionalArgument = JSON.parse(val);
		   // Handle non-exception-throwing cases:
		   // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
		   // but... JSON.parse(null) returns 'null', and typeof null === "object", 
		   // so we must check for that, too.
	        if (additionalArgument && typeof additionalArgument === "object" && additionalArgument !== null) {
			 // return additionalArgument;
			 // now we have the object additionalArgument
            console.log('systems execute - additionalArgument: ', additionalArgument);
            console.log('systems execute - additionalArgument.system: ', additionalArgument.system);
            // additionalArgument.system is an Array of Objects, so we have to loop through the array
            console.log('systems execute - additionalArgument.system.length: ', additionalArgument.system.length);

            for (var i = 0; i < additionalArgument.system.length; i++) {
              console.log('systems execute - additionalArgument.system[',i,']: ', additionalArgument.system[i]);

              console.log('systems execute - additionalArgument.system[',i,'].uuid: ', additionalArgument.system[i].uuid);
              // Get a resource, by comparing with the uuid
  //            console.log('systems execute - resource: ', _proxies().proxy().resources().resource); // function () { return new ResourcesResource(); }
  //            console.log('systems execute - _proxies().proxy().resources().resource(): ', _proxies().proxy().resources().resource());  // Resource {}
  //            console.log('systems execute - _proxies().proxy().resources().resource()._6e8bc430_9c3a_11d9_9669_0800200c9a66: ', _proxies().proxy().resources().resource()._6e8bc430_9c3a_11d9_9669_0800200c9a66);
  //            console.log('systems execute - _proxies().proxy().resources().resource()._6e8bc430_9c3a_11d9_9669_0800200c9a66(): ', _proxies().proxy().resources().resource()._6e8bc430_9c3a_11d9_9669_0800200c9a66());
              var _resource = _proxies().proxy().resources().resource();
              console.log('systems execute - resource: ', _resource);
              for (var key in _resource) {
                console.log('systems execute - key: ', key);
                // strip prefix _ if present on key, then substitute all _ for - if present on key
                  var keyUuid = key.replace(/^\_/, "").replace(/_/g, "\-");
                  console.log('systems execute - keyUuid: ', keyUuid);
                  if(additionalArgument.system[i].uuid == keyUuid) {
                    console.log('systems execute - uuid == keyUuid');
                    // do something
                    resourceForUuid = _resource[key]();
                    break;
                  }
              }
              // Validate resourceForUuid
              if(Object.keys(resourceForUuid).length == 0) {
                // raise an error, the resourceForUuid has not been found
                throw new Error('No resource found for additionalArgument.system[',i,'].uuid: ', additionalArgument.system[i].uuid); // TO FIX: for some reason the value of uuid is empty here
              }
              else {
                console.log('systems execute - resourceForUuid: ', resourceForUuid);
              }

              console.log('systems execute - additionalArgument.system[',i,'].instructions: ', additionalArgument.system[i].instructions);
              var _instructions = _proxies().proxy().instructions();
              var _instruction = _instructions.instruction();
              console.log('systems execute - instruction: ', _instruction);
              for (var key in _instruction) {
                  var keyLayer = key;            
                  // HANDLE THE instructions HERE LIKEWISE, BUT BREAK IT DOWN PER instruction

                     // TEMP PLACEHOLDER
                     instructionsForInstructions = [{"start":"true"}];
                     break;

              } // eof for
              // Validate instructionsForInstructions
              if(Object.keys(instructionsForInstructions).length == 0) {
                // raise an error, the instructionForInstruction has not been found
                throw new Error('No instructions found for additionalArgument.system[',i,'].instructions: ', additionalArgument.system[i].instructions); // TO FIX: for some reason the value of instruction is empty here
              }
              else {
                console.log('systems execute - instructionsForInstructions: ', instructionsForInstructions);
              }

              //layer = additionalArgument.layer;
              console.log('systems execute - additionalArgument.system[',i,'].layer: ', additionalArgument.system[i].layer);

              var _layers = _proxies().proxy().layers();
              var _layer = _layers.layer();
              _layer.setproxies(proxies);
              _layer.setresource(resourceForUuid);
              _layer.setinstructions(instructionsForInstructions);
              console.log('systems execute - layer: ', _layer);
              for (var key in _layer) {
                  var keyLayer = key;
                  console.log('systems execute - keyLayer: ', keyLayer);
                  if(additionalArgument.system[i].layer == keyLayer) {
                    console.log('systems execute - layer == keyLayer');
                    // do something
                    layerForLayer = _layer[key]();
                    break;
                  }
              }
              // Validate layerForLayer

          //    if(Object.keys(layerForLayer).length == 0) {  // THIS VALIDATES IF THERE ARE KEYS WITHIN e.g. Business LAYER, NOT A GOOD CHECK, CHANGE IT!!

                  // raise an error, the layerForLayer has not been found
          //      throw new Error('No layer found for additionalArgument.system[',i,'].layer: ', additionalArgument.system[i].layer); // TO FIX: for some reason the value of layer is empty here
          //    }
          //    else {
              console.log('systems execute - layerForLayer: ', layerForLayer);

              // NOW MAKE THE LAYER DO ITS THING, EXECUTE ITS FUNCTION THAT RETURNS A PROMISE
              arrayOfPromises.push(layerForLayer.execute()); // add the function that returns a Promise 

          //    } // eof else

            } // eof for additionalArgument.system.length
          } // eof if additionalArgument
        } // eof try
        catch (e) { 
          console.log('systems execute - error: ', e);
        } // eof catch
        break; // eof case 2
      default:
        // do nothing
      break;
    } // eof switch
  }); // forEach

  // WE RETURN AN ARRAY OF ALL PROMISES FROM THE LAYERS
 	return arrayOfPromises;

}) //eof then proxies
.then(function(arrayOfPromises) {
  console.log('systems execute - arrayOfPromises: ', arrayOfPromises);

  // resolve the arrayOfPromises here


  
}) // eof then resourceForUuid
.catch(function(error) {
  console.log('systems execute - error: ', error);
}) // eof catch
.finally(function() {
  console.log('systems execute - finally');
}); // eof finally