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
        console.log('systems execute - additional command: ', val);
        try {
          additionalArgument = JSON.parse(val);
		   // Handle non-exception-throwing cases:
		   // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
		   // but... JSON.parse(null) returns 'null', and typeof null === "object", 
		   // so we must check for that, too.
	      if (additionalArgument && typeof additionalArgument === "object" && additionalArgument !== null) {
			 // return o;
			 // now we have the object o
            console.log('systems execute - additionalArgument: ', additionalArgument);
            //uuid = additionalArgument.uuid;
            console.log('systems execute - additionalArgument.uuid: ', additionalArgument.uuid);
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
                if(o.uuid == keyUuid) {
                  console.log('systems execute - uuid == keyUuid');
                  // do something
                  resourceForUuid = _resource[key]();
                  break;
                }
			      }
            console.log('systems execute - resourceForUuid: ', resourceForUuid);

            //layer = additionalArgument.layer;
            console.log('systems execute - additionalArgument.layer: ', additionalArgument.layer);

            var _layers = _proxies().proxy().layers();
            _layers.layer().setproxies(proxies);
            var _layer = _layers.layer();
            console.log('systems execute - layer: ', _layer);
            for (var key in _layer) {
                var keyLayer = key;
                console.log('systems execute - keyLayer: ', keyLayer);
                if(additionalArgument.layer == keyLayer) {
                  console.log('systems execute - layer == keyLayer');
                  // do something
                  layerForLayer = _layer[key]();
                  break;
                }
            }
            console.log('systems execute - layerForLayer: ', layerForLayer);

            console.log('systems execute - additionalArgument.instructions: ', additionalArgument.instructions);
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
          } // eof if
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
  // Validate resourceForUuid
  if(Object.keys(resourceForUuid).length == 0) {
  	// raise an error, the resourceForUuid has not been found
  	throw new Error("No resource found for additionalArgument.uuid: ", additionalArgument.uuid); // TO FIX: for some reason the value of uuid is empty here
  } 
  // Validate layerForLayer
  else if(Object.keys(layerForLayer).length == 0) {
    // raise an error, the layerForLayer has not been found
    throw new Error("No layer found for additionalArgument.layer: ", additionalArgument.layer); // TO FIX: for some reason the value of layer is empty here
  }
  // Validate instructionsForInstructions
  else if(Object.keys(instructionsForInstructions).length == 0) {
    // raise an error, the instructionForInstruction has not been found
    throw new Error("No instruction found for additionalArgument.instructions: ", additionalArgument.instructions); // TO FIX: for some reason the value of instruction is empty here
  }
  else {

    // Loop through the collection of keys of layers.layer


    // if additionalArgument.layer matches with a key
    // set layer to the specific (e.g. 'business') layer.
    // _layer = _layers().layer().business();    ..... not sure yet, but the chosen layer should be held responsible for further processing of the main object.
    // it can access the mains.main object from the _proxies it has as one of its properties


    // Loop through the collection of keys of instructions.instruction



  	return resourceForUuid;
  };
}) //eof then proxies
.then(function(resourceForUuid) {

  // Set the resource to the layer, and let the layer handle the mains.main object for further processing....
  // _layer.setresource(resourceForUuid);
  // _layer.run(); // a function that returns a Promise

            // MOVE BELOW TO THE SPECIFIC LAYER (e.g. business)

            console.log('systems execute - resourceForUuid: ', resourceForUuid); // Works: e.g. _6e8bc430_9c3a_11d9_9669_0800200c9a66 { URI: 'urn:uuid:6e8bc430-9c3a-11d9-9669-0800200c9a66' }

            var main = _proxies().proxy().mains().main();
            console.log('systems execute - main: ', main);
            main.setproxies(_proxies);

            console.log('systems execute - main.proxies(): ', main.proxies());

            main.setresource(resourceForUuid); 

            console.log('systems execute - main.resource(): ', main.resource());
            
            // Start of the run chain
            join(main.run(), function(run) {
              console.log('systems execute - run: ', run);
              return(run);
            }); // eof join main.run()


  
}) // eof then resourceForUuid
.catch(function(error) {
  console.log('systems execute - error: ', error);
}) // eof catch
.finally(function() {
  console.log('systems execute - finally');
}); // eof finally