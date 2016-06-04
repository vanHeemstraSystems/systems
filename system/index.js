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
  self._directory = 'documentations';
  self._document = 'documentations.html';  
  self._filename = ''; // Will be set
  self._filepath = ''; // Will be set
  self._linktitle = 'Documentations';
  self._proxies = {}; // Will be set
  self._style = 'body { background-color: #ffffff; }'; // Default  
  self._title = 'System'; // Default
}

System.prototype.directory = function() {
  return self._directory;
}

System.prototype.setdirectory = function(fnOrValue) {
  self._directory = fnOrValue;
}

System.prototype.document = function() {
  return self._document;
}

System.prototype.setdocument = function(fnOrValue) {
  self._document = fnOrValue;
}

System.prototype.linktitle = function() {
  return self._linktitle;
}

System.prototype.setlinktitle = function(fnOrValue) {
  self._linktitle = fnOrValue;
}

System.prototype.proxies = function() {
  return self._proxies;
}

System.prototype.setproxies = function(fnOrValue) {
  console.log('systems system setproxies() called');
  self._proxies = fnOrValue;
}

System.prototype.filename = function() {
  console.log('systems system filename() called');
  return self._filename;
}

System.prototype.setfilename = function(fnOrValue) {
  self._filename = fnOrValue;
}

System.prototype.filepath = function() {
  console.log('systems system filepath() called');
  return self._filepath;
}

System.prototype.setfilepath = function(fnOrValue) {
  self._filepath = fnOrValue;
}

System.prototype.style = function() {
  console.log('systems system style() called');
  return self._style;
}

System.prototype.setstyle = function(fnOrValue) {
  self._style = fnOrValue;
}

System.prototype.title = function() {
  console.log('systems system title() called');
  return self._title;
}

System.prototype.settitle = function(fnOrValue) {
  self._title = fnOrValue;
}

System.prototype.execute = function(arguments) {
  console.log('systems system execute - called');
  console.log('systems system execute - arguments: ', arguments); // WORKS!!
  // Required modules
  var _instructions = {};
  var instruction = {};
  var _proxies = require('../../proxies/proxies');

  console.log('systems system execute +++++++ CHECKPOINT 000')

  var _arguments = arguments;
  var _filename = this.filename();
  var _filepath = this.filepath();
  var _title = this.title();
  var _style = this.style();
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

    return (proxies);
  }) /* EOF join proxies */
  .then(function(proxies) {

    console.log('systems system execute - documentation +++++++ CHECKPOINT 000')

    var _documentations = _proxies().proxy().documentations();
    _documentations.setproxies(_proxies);
    _documentations.setfilepath(_filepath);
    _documentations.setfilename(_filename);
    var _linktitle = 'Documentations'; // this.linktitle();  <- Is out of reach
    var _document = 'documentations.html'; // this.document(); <- Is out of reach
    var _directory = 'documentations'; // this.directory(); <- Is out of reach
    var _styleArray = [];
    var _scriptArray = [];
    var _headArray = [];
    var _bodyArray = [];

    var _jsdom = _proxies().proxy().libraries().library().jsdom();
    console.log('systems system execute - documentation _jsdom: ', _jsdom)
    var _htmlDocument = _jsdom.jsdom().implementation.createHTMLDocument('');

    var _titleElem = _htmlDocument.createElement('title');
    console.log('systems system execute - documentation _titleElem: ',
      _titleElem)
    _titleElem.innerHTML = _title;
    console.log('systems system execute - documentation _titleElem: ',
      _titleElem)

    /* Style: Tether */
    var _styleElem = _htmlDocument.createElement('link');
    console.log('systems system execute - documentation _styleElem: ',
      _styleElem)
    _styleElem.setAttribute("rel",
      "stylesheet");
    _styleElem.setAttribute("type",
      "text/css");
    _styleElem.setAttribute("href",
      "../../assets/asset/tether/dist/css/tether.min.css");
    console.log('systems system execute - documentation _styleElem: ',
      _styleElem)

    _styleArray.push(_styleElem);

    /* Style: Bootstrap */
    var _styleElem = _htmlDocument.createElement('link');
    console.log('systems system execute - documentation _styleElem: ',
      _styleElem)
    _styleElem.setAttribute("rel",
      "stylesheet");
    _styleElem.setAttribute("type",
      "text/css");
    _styleElem.setAttribute("href",
      "../../assets/asset/bootstrap/dist/css/bootstrap.min.css");
    console.log('systems system execute - documentation _styleElem: ',
      _styleElem)

    _styleArray.push(_styleElem);

    /* Style: Bootstrap - sticky footer */
    var _styleElem = _htmlDocument.createElement('link');
    console.log('systems system execute - documentation _styleElem: ',
      _styleElem)
    _styleElem.setAttribute("rel",
      "stylesheet");
    _styleElem.setAttribute("type",
      "text/css");
    _styleElem.setAttribute("href",
      "../../assets/asset/bootstrap/dist/css/sticky-footer-navbar.css");
    console.log('systems system execute - documentation _styleElem: ',
      _styleElem)

    _styleArray.push(_styleElem);

    /* Style: inline */
    var _styleElem = _htmlDocument.createElement('link');
    console.log('systems system execute - documentation _styleElem: ',
      _styleElem)
    _styleElem.innerHTML = _style;
    console.log('systems system execute - documentation _styleElem: ',
      _styleElem)

    _styleArray.push(_styleElem);

    /* Head */
    _headArray.push(_titleElem);

    _styleArray.forEach(function(styleElem) {
      _headArray.push(styleElem); // Possible to add more elements to head
    }, _headArray);

    console.log('systems system execute - documentation _headArray: ',
      _headArray)

    /*
     * Body
     */

    /* Navbar */
    var _navElem = _htmlDocument.createElement("nav");
    _navElem.setAttribute("class",
      "navbar navbar-light bg-faded");
    
    var _ulElem = _htmlDocument.createElement("ul");
    _ulElem.setAttribute("class",
      "nav navbar-nav");

    var _liElem = _htmlDocument.createElement("li");
    _liElem.setAttribute("class",
      "nav-item active");

    var _aElem = _htmlDocument.createElement("a");
    _aElem.setAttribute("class",
      "nav-link");
    _aElem.setAttribute("href",
      "#");
    _aElem.innerHTML = _title; 

    _liElem.appendChild(_aElem);
    _ulElem.appendChild(_liElem);
    _navElem.appendChild(_ulElem);

    _bodyArray.push(_navElem);

    /* Container */
    var _divElem = _htmlDocument.createElement("div");
    _divElem.setAttribute("class",
      "container")

    /* List */
    var _ulElem = _htmlDocument.createElement('ul');
    _ulElem.setAttribute("class",
      "list-group");
    console.log('systems system execute - documentation _ulElem: ',
      _ulElem)

    var _liElem = _htmlDocument.createElement('li');
    _liElem.setAttribute("class",
      "list-group-item");
    console.log('systems system execute - documentation _liElem: ',
      _liElem)

    var _aElem = _htmlDocument.createElement('a');
    console.log('systems system execute - documentation _aElem: ',
      _aElem)

    _aElem.setAttribute("href", "./" + _directory + "/" + _document);
    _aElem.innerHTML = _linktitle;
    _liElem.appendChild(_aElem);
    _ulElem.appendChild(_liElem);
    _divElem.appendChild(_ulElem);

    _bodyArray.push(_divElem); // Possible to add more elements to body
    console.log('systems system execute - documentation _bodyArray: ',
      _bodyArray)

    /* Footer */
    var _footerElem = _htmlDocument.createElement("footer");
    _footerElem.setAttribute("class",
      "footer");
    var _divElem = _htmlDocument.createElement("div");
    _divElem.setAttribute("class",
      "container");
    var _spanElem = _htmlDocument.createElement("span");
    _spanElem.setAttribute("class",
      "text_muted");
    _spanElem.innerHTML = "Generated on: " +new Date;

    _divElem.appendChild(_spanElem);
    _footerElem.appendChild(_divElem);

    _bodyArray.push(_footerElem);

    /* Scripts, put at bottom of body to make the page load faster */

    /* Script: JQuery */
    var _scriptElem = _htmlDocument.createElement('script');
    _scriptElem.setAttribute("type", "text/javascript");
    _scriptElem.setAttribute("src", "../../assets/asset/jquery/dist/js/jquery.min.js");
    console.log('systems system execute - documentation _scriptElem: ',
      _scriptElem)

    _scriptArray.push(_scriptElem);

    /* Script: Tether */
    var _scriptElem = _htmlDocument.createElement('script');
    _scriptElem.setAttribute("type", "text/javascript");
    _scriptElem.setAttribute("src", "../../assets/asset/tether/dist/js/tether.min.js");
    console.log('systems system execute - documentation _scriptElem: ',
      _scriptElem)

    _scriptArray.push(_scriptElem);

    /* Script: Bootstrap */
    var _scriptElem = _htmlDocument.createElement('script');
    _scriptElem.setAttribute("type", "text/javascript");
    _scriptElem.setAttribute("src", "../../assets/asset/bootstrap/dist/js/bootstrap.min.js");
    console.log('systems system execute - documentation _scriptElem: ',
      _scriptElem)

    _scriptArray.push(_scriptElem);

    _scriptArray.forEach(function(scriptElem) {
      _bodyArray.push(scriptElem);
    }, _bodyArray);

    _documentations.append(_headArray, _bodyArray);

/*
    var _documentation = _documentations.documentation();

    console.log('systems system execute - documentation: ',
      _documentation) // Works: Documentation {}
    //_documentation.setfilepath(_filepath); Gets set inside documentations
    //_documentations.setfilename(_filename); Gets set inside documentations
    var _title = 'Documentation';
    var _linktitle = 'UML';
    var _document = 'uml.html';
    var _directory = 'uml';

    console.log('systems system execute - documentation +++++++ CHECKPOINT 002')

    _documentation.append('<title>' + _title + '</title>'
      ,'<h1>' + _title +
      '</h1><ul><li><a href="./' + _directory + '/' + _document + '"> \
      ' + _linktitle + '</a></li></ul>');

    console.log('systems system execute - documentation +++++++ CHECKPOINT 003')

*/
/*
    var _uml = _documentation.uml();

    console.log('systems system execute - documentation +++++++ CHECKPOINT 004')

    console.log('systems system execute - uml: ',
      _uml) // Works: UML {}
    //_uml.setfilepath(_filepath); Gets set inside documentation
    //_uml.setfilename(_filename); Gets set inside documentation
    var _title = 'UML';
    var _linktitle = 'Sequence Diagram';
    var _document = 'sequencediagram.html';
    var _directory = 'sequencediagram';

    console.log('systems system execute - documentation +++++++ CHECKPOINT 005')

    _uml.append('<title>' + _title + '</title>'
      ,'<h1>' + _title +
      '</h1><ul><li><a href="./' + _directory + '/' + _document + '"> \
      ' + _linktitle + '</a></li></ul>');

*/
/*
    var _sequencediagram = _uml.sequencediagram();

    console.log('systems system execute - documentation +++++++ CHECKPOINT 006')

    console.log('systems system execute - sequencediagram: ',
      _sequencediagram) // Works: SequenceDiagram {}
    //_sequencediagram.setfilepath(_filepath); Gets set inside uml
    //_sequencediagram.setfilename(_filename); Gets set inside uml
    var _title = 'Sequence Diagram';
    var _linktitle = 'Foo';
    var _document = 'foo.html';
    var _directory = 'foo';

    console.log('systems system execute - documentation +++++++ CHECKPOINT 007')

    _sequencediagram.append('<title>' + _title + '</title>'
      ,'<h1>' + _title +
      '</h1><ul><li><a href="./' + _directory + '/' + _document + '"> \
      ' + _linktitle + '</a></li></ul>');
*/

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
        var _resource = _proxies().proxy().resources().resource();
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
        var _instructions = _proxies().proxy().instructions();
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
        var _layers = _proxies().proxy().layers();
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
    _proxies().proxy().libraries().library().promise()
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
