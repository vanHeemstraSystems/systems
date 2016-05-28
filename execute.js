/*
 * Filename: execute.js
 * Usage: call as follows whilst making sure to use the escaped quotes and avoid spaces e.g. 
 *
 * node execute.js {\"system\":[{\"layer\":\"business\",\"uuid\":\"6e8bc430-9c3a-11d9-9669-0800200c9a66\",\"instructions\":[{\"start\":\"true\"}]}]}
 *
 * Following the example from https://github.com/neumino/thinky/examples/basic-todo
 * but with our own modifications (removal of 'thinky' and 'rethinkdbdash')
 *
 * See also http://alexperry.io/node/2015/03/25/promises-in-node.html
 */
console.log('systems execute - called');

var Systems = require(__dirname + '/systems.js');
_systems = new Systems();
var _system = _systems.system();
/*
 * The process.argv is an array containing the command line arguments.
 * The first element will be 'node', the second element will be the name of the JavaScript file.
 * The next elements will be any additional command line arguments.
 * Pass only the additional command line argument to the System execute function.
*/
process.argv.forEach(function(val, index, array) {
  /* Note:
   * index 0 will be path to and node executable
   * index 1 will be path to and this file
   * index 2 will be optional additional command line arguments, e.g. a JSON file {uuid:1234}
   * console.log(index + ': ' + val);
   * catch the val at index 2
   */
  switch (index) {
    case 0: { // Is node
      break; // EOF case 0
    }
    case 1: { // Is this file
      break; // EOF case 1
    }
    case 2: {// Is optional additional command line argument
      console.log('systems execute - additional command line argument: ',
        val)
      try {
        additionalArgument = JSON.parse(val);
        _system.setfilename('index.html'); // Make configurable
        console.log('systems execute - filename: ', _system.filename());
        _system.setfilepath(__dirname + '/docs/'); // Make configurable
        console.log('systems execute - filepath: ', _system.filepath());
        var _result = _system.execute(additionalArgument);
        console.log('systems execute - result: ', _result);
      }
      catch (err) {
        console.log('systems execute - error: ', err)
      }// EOF catch
      break; // EOF case 2
    }
    default: {
      /* Do nothing */
      break;
    }
  } // EOF switch
}); // EOF process.argv.forEach()
