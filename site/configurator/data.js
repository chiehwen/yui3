var configData = {"dom-base":{"requires":["event"],"path":"dom\/dom-base-min.js","name":"dom-base","type":"js","ext":false,"info":{"name":"dom-base","desc":"Provides DOM helper methods."},"sizes":{"min":4708,"debug":21762,"raw":21614},"isSubMod":true},"dom-style":{"requires":["dom-base"],"path":"dom\/dom-style-min.js","name":"dom-style","type":"js","ext":false,"info":{"name":"dom-style","desc":"Add style management functionality to DOM."},"sizes":{"min":4538,"debug":13496,"raw":13400},"isSubMod":true},"dom-screen":{"requires":["dom-base","dom-style"],"path":"dom\/dom-screen-min.js","name":"dom-screen","type":"js","ext":false,"info":{"name":"dom-screen","desc":"Adds position and region management functionality to DOM."},"sizes":{"min":4586,"debug":17943,"raw":17578},"isSubMod":true},"selector":{"requires":["dom-base"],"path":"dom\/selector-min.js","name":"selector","type":"js","ext":false,"info":{"name":"selector","desc":"Provides helper methods for collecting and filtering DOM elements."},"sizes":{"min":5907,"debug":19231,"raw":18902},"isSubMod":true},"dom":{"requires":["event"],"submodules":{"dom-base":{"requires":["event"],"path":"dom\/dom-base-min.js","name":"dom-base","type":"js","ext":false},"dom-style":{"requires":["dom-base"],"path":"dom\/dom-style-min.js","name":"dom-style","type":"js","ext":false},"dom-screen":{"requires":["dom-base","dom-style"],"path":"dom\/dom-screen-min.js","name":"dom-screen","type":"js","ext":false},"selector":{"requires":["dom-base"],"path":"dom\/selector-min.js","name":"selector","type":"js","ext":false}},"name":"dom","type":"js","path":"dom\/dom-min.js","ext":false,"supersedes":["dom-base","dom-style","dom-screen","selector"],"rollup":3,"info":{"name":"dom","desc":"Provides helper methods for collecting and filtering DOM elements."},"sizes":{"min":20875,"debug":72141,"raw":71203}},"node-base":{"requires":["dom-base","selector"],"path":"node\/node-base-min.js","name":"node-base","type":"js","ext":false,"info":{"name":"node-base","desc":"A wrapper for manipulating multiple DOM elements"},"sizes":{"min":6621,"debug":32240,"raw":32088},"isSubMod":true},"node-style":{"requires":["dom-style","node-base"],"path":"node\/node-style-min.js","name":"node-style","type":"js","ext":false,"info":{"name":"node-style","desc":"Extended Node interface for managing node styles."},"sizes":{"min":162,"debug":1180,"raw":1180},"isSubMod":true},"node-screen":{"requires":["dom-screen","node-base"],"path":"node\/node-screen-min.js","name":"node-screen","type":"js","ext":false,"info":{"name":"node-screen","desc":"Extended Node interface for managing regions and screen positioning.\nAdds support for positioning elements and normalizes window size and scroll detection."},"sizes":{"min":654,"debug":5720,"raw":5720},"isSubMod":true},"node":{"requires":["dom"],"submodules":{"node-base":{"requires":["dom-base","selector"],"path":"node\/node-base-min.js","name":"node-base","type":"js","ext":false},"node-style":{"requires":["dom-style","node-base"],"path":"node\/node-style-min.js","name":"node-style","type":"js","ext":false},"node-screen":{"requires":["dom-screen","node-base"],"path":"node\/node-screen-min.js","name":"node-screen","type":"js","ext":false}},"name":"node","type":"js","path":"node\/node-min.js","ext":false,"supersedes":["node-base","node-style","node-screen"],"rollup":2,"info":{"name":"node","desc":"The Node Utility provides a DOM-like interface for interacting with DOM nodes."},"sizes":{"min":7256,"debug":38939,"raw":38787}},"anim-base":{"requires":["base","node-style"],"path":"anim\/anim-base-min.js","name":"anim-base","type":"js","ext":false,"info":{"name":"anim-base","desc":""},"sizes":{"min":4261,"debug":16022,"raw":16022},"isSubMod":true},"anim-color":{"requires":["anim-base"],"path":"anim\/anim-color-min.js","name":"anim-color","type":"js","ext":false,"info":{"name":"anim-color","desc":"Adds support for color properties in <code>to<\/code>\nand <code>from<\/code> attributes."},"sizes":{"min":780,"debug":1438,"raw":1438},"isSubMod":true},"anim-curve":{"requires":["anim-xy"],"path":"anim\/anim-curve-min.js","name":"anim-curve","type":"js","ext":false,"info":{"name":"anim-curve","desc":"Adds support for the <code>curve<\/code> property for the <code>to<\/code> \nattribute.  A curve is zero or more control points and an end point."},"sizes":{"min":556,"debug":1698,"raw":1698},"isSubMod":true},"anim-easing":{"path":"anim\/anim-easing-min.js","name":"anim-easing","type":"js","ext":false,"requires":[],"info":{"name":"anim-easing","desc":"The easing module provides methods for customizing\nhow an animation behaves during each run."},"sizes":{"min":2217,"debug":12285,"raw":12285},"isSubMod":true},"anim-scroll":{"requires":["anim-base"],"path":"anim\/anim-scroll-min.js","name":"anim-scroll","type":"js","ext":false,"info":{"name":"anim-scroll","desc":"Adds support for the <code>scroll<\/code> property in <code>to<\/code>\nand <code>from<\/code> attributes."},"sizes":{"min":385,"debug":899,"raw":899},"isSubMod":true},"anim-xy":{"requires":["anim-base","node-screen"],"path":"anim\/anim-xy-min.js","name":"anim-xy","type":"js","ext":false,"info":{"name":"anim-xy","desc":"Adds support for the <code>xy<\/code> property in <code>from<\/code> and \n<code>to<\/code> attributes."},"sizes":{"min":269,"debug":635,"raw":635},"isSubMod":true},"anim-node-plugin":{"requires":["node","anim-base"],"path":"anim\/anim-node-plugin-min.js","name":"anim-node-plugin","type":"js","ext":false,"info":{"name":"anim-node-plugin","desc":"Binds an Anim instance to a Node instance"},"sizes":{"min":312,"debug":469,"raw":469},"isSubMod":true},"anim":{"requires":["base","node"],"submodules":{"anim-base":{"requires":["base","node-style"],"path":"anim\/anim-base-min.js","name":"anim-base","type":"js","ext":false},"anim-color":{"requires":["anim-base"],"path":"anim\/anim-color-min.js","name":"anim-color","type":"js","ext":false},"anim-curve":{"requires":["anim-xy"],"path":"anim\/anim-curve-min.js","name":"anim-curve","type":"js","ext":false},"anim-easing":{"path":"anim\/anim-easing-min.js","name":"anim-easing","type":"js","ext":false,"requires":[]},"anim-scroll":{"requires":["anim-base"],"path":"anim\/anim-scroll-min.js","name":"anim-scroll","type":"js","ext":false},"anim-xy":{"requires":["anim-base","node-screen"],"path":"anim\/anim-xy-min.js","name":"anim-xy","type":"js","ext":false},"anim-node-plugin":{"requires":["node","anim-base"],"path":"anim\/anim-node-plugin-min.js","name":"anim-node-plugin","type":"js","ext":false}},"name":"anim","type":"js","path":"anim\/anim-min.js","ext":false,"supersedes":["anim-base","anim-color","anim-curve","anim-easing","anim-scroll","anim-xy","anim-node-plugin"],"rollup":4,"info":{"name":"anim","desc":"Y.Animation Utility."},"sizes":{"min":8268,"debug":32874,"raw":32874}},"attribute":{"requires":["event"],"name":"attribute","type":"js","path":"attribute\/attribute-min.js","ext":false,"info":{"name":"attribute","desc":"Managed Attribute Provider"},"sizes":{"min":3462,"debug":26940,"raw":25970}},"base":{"requires":["attribute"],"name":"base","type":"js","path":"base\/base-min.js","ext":false,"info":{"name":"base","desc":"Base class support for objects requiring\nmanaged attributes and acting as event targets"},"sizes":{"min":3633,"debug":23395,"raw":23239}},"cookie":{"name":"cookie","type":"js","path":"cookie\/cookie-min.js","ext":false,"requires":[],"info":{"name":"cookie","desc":"Utilities for cookie management"},"sizes":{"min":3125,"debug":16572,"raw":16572}},"dd-ddm-base":{"requires":["node","base"],"path":"dd\/dd-ddm-base-min.js","name":"dd-ddm-base","type":"js","ext":false,"info":{"name":"dd-ddm-base","desc":"Provides the base Drag Drop Manger required for making a Node draggable."},"sizes":{"min":2116,"debug":9412,"raw":9412},"isSubMod":true},"dd-ddm":{"requires":["dd-ddm-base"],"path":"dd\/dd-ddm-min.js","name":"dd-ddm","type":"js","ext":false,"info":{"name":"dd-ddm","desc":"Extends the dd-ddm-base Class to add support for the viewport shim to allow a draggable node to drag to be dragged over an iframe or any other node that traps mousemove events.\nIt is also required to have Drop Targets enabled, as the viewport shim will contain the shims for the Drop Targets."},"sizes":{"min":1278,"debug":3660,"raw":3660},"isSubMod":true},"dd-ddm-drop":{"requires":["dd-ddm"],"path":"dd\/dd-ddm-drop-min.js","name":"dd-ddm-drop","type":"js","ext":false,"info":{"name":"dd-ddm-drop","desc":"Extends the dd-ddm Class to add support for the placement of Drop Target shims inside the viewport shim. It also handles all Drop Target related events and interactions."},"sizes":{"min":3390,"debug":13999,"raw":13856},"isSubMod":true},"dd-drag":{"requires":["dd-ddm-base"],"path":"dd\/dd-drag-min.js","name":"dd-drag","type":"js","ext":false,"info":{"name":"dd-drag","desc":"This class provides the ability to drag a Node."},"sizes":{"min":7550,"debug":33132,"raw":32012},"isSubMod":true},"dd-drop":{"requires":["dd-ddm-drop"],"path":"dd\/dd-drop-min.js","name":"dd-drop","type":"js","ext":false,"info":{"name":"dd-drop","desc":"This class provides the ability to create a Drop Target."},"sizes":{"min":4244,"debug":14149,"raw":14149},"isSubMod":true},"dd-proxy":{"requires":["dd-drag"],"path":"dd\/dd-proxy-min.js","name":"dd-proxy","type":"js","ext":false,"info":{"name":"dd-proxy","desc":"This class extends dd-drag to allow for creating a proxy drag node, instead of dragging the original node."},"sizes":{"min":1558,"debug":5636,"raw":5636},"isSubMod":true},"dd-constrain":{"requires":["dd-drag","dd-proxy"],"path":"dd\/dd-constrain-min.js","name":"dd-constrain","type":"js","ext":false,"info":{"name":"dd-constrain","desc":"This class extends the dd-drag module to add the constraining methods to it. It supports constraining to a region, node or viewport. It also\nsupports tick based moves and XY axis constraints."},"sizes":{"min":3421,"debug":13964,"raw":13615},"isSubMod":true},"dd-plugin":{"requires":["dd-drag"],"optional":["dd-constrain","dd-proxy"],"path":"dd\/dd-plugin-min.js","name":"dd-plugin","type":"js","ext":false,"info":{"name":"dd-plugin","desc":"This is a simple Drag plugin that can be attached to a Node via the plug method."},"sizes":{"min":294,"debug":1129,"raw":1129},"isSubMod":true},"dd-drop-plugin":{"requires":["dd-drop"],"path":"dd\/dd-drop-plugin-min.js","name":"dd-drop-plugin","type":"js","ext":false,"info":{"name":"dd-drop-plugin","desc":""},"sizes":{"min":269,"debug":1116,"raw":1116},"isSubMod":true},"dd":{"submodules":{"dd-ddm-base":{"requires":["node","base"],"path":"dd\/dd-ddm-base-min.js","name":"dd-ddm-base","type":"js","ext":false},"dd-ddm":{"requires":["dd-ddm-base"],"path":"dd\/dd-ddm-min.js","name":"dd-ddm","type":"js","ext":false},"dd-ddm-drop":{"requires":["dd-ddm"],"path":"dd\/dd-ddm-drop-min.js","name":"dd-ddm-drop","type":"js","ext":false},"dd-drag":{"requires":["dd-ddm-base"],"path":"dd\/dd-drag-min.js","name":"dd-drag","type":"js","ext":false},"dd-drop":{"requires":["dd-ddm-drop"],"path":"dd\/dd-drop-min.js","name":"dd-drop","type":"js","ext":false},"dd-proxy":{"requires":["dd-drag"],"path":"dd\/dd-proxy-min.js","name":"dd-proxy","type":"js","ext":false},"dd-constrain":{"requires":["dd-drag","dd-proxy"],"path":"dd\/dd-constrain-min.js","name":"dd-constrain","type":"js","ext":false},"dd-plugin":{"requires":["dd-drag"],"optional":["dd-constrain","dd-proxy"],"path":"dd\/dd-plugin-min.js","name":"dd-plugin","type":"js","ext":false},"dd-drop-plugin":{"requires":["dd-drop"],"path":"dd\/dd-drop-plugin-min.js","name":"dd-drop-plugin","type":"js","ext":false}},"name":"dd","type":"js","path":"dd\/dd-min.js","ext":false,"requires":[],"supersedes":["dd-ddm-base","dd-ddm","dd-ddm-drop","dd-drag","dd-drop","dd-proxy","dd-constrain","dd-plugin","dd-drop-plugin"],"rollup":4,"info":{"name":"dd","desc":"The Drag & Drop Utility allows you to create a draggable interface efficiently, buffering you from browser-level abnormalities and enabling you to focus on the interesting logic surrounding your particular implementation. This component enables you to create a variety of standard draggable objects with just a few lines of code and then, using its extensive API, add your own specific implementation logic."},"sizes":{"min":24299,"debug":96389,"raw":94777}},"dump":{"name":"dump","type":"js","path":"dump\/dump-min.js","ext":false,"requires":[],"info":{"name":"dump","desc":"Returns a simple string representation of the object or array.\nOther types of objects will be returned unprocessed.  Arrays\nare expected to be indexed.  Use object notation for\nassociative arrays.\nIf included, the dump method is added to the YUI instance."},"sizes":{"min":692,"debug":2849,"raw":2849}},"event":{"requires":["oop"],"name":"event","type":"js","path":"event\/event-min.js","ext":false,"info":{"name":"event","desc":"The YUI event system"},"sizes":{"min":16528,"debug":96625,"raw":94233}},"get":{"name":"get","type":"js","path":"get\/get-min.js","ext":false,"requires":[],"info":{"name":"get","desc":""},"sizes":{"min":3185,"debug":20381,"raw":19121}},"io":{"requires":["node"],"name":"io","type":"js","path":"io\/io-min.js","ext":false,"info":{"name":"io","desc":"HTTP communications module."},"sizes":{"min":5193,"debug":27979,"raw":26327}},"json-parse":{"path":"json\/json-parse-min.js","name":"json-parse","type":"js","ext":false,"requires":[],"expanded":[],"info":{"name":"json-parse","desc":"Provides Y.JSON.parse method to take JSON strings and return native\nJavaScript objects."},"sizes":{"min":1064,"debug":4967,"raw":4967},"isSubMod":true},"json-stringify":{"path":"json\/json-stringify-min.js","name":"json-stringify","type":"js","ext":false,"requires":[],"expanded":[],"info":{"name":"json-stringify","desc":"Provides Y.JSON.stringify method for converting objects to JSON strings."},"sizes":{"min":1608,"debug":6253,"raw":6253},"isSubMod":true},"json":{"submodules":{"json-parse":{"path":"json\/json-parse-min.js","name":"json-parse","type":"js","ext":false,"requires":[],"expanded":[]},"json-stringify":{"path":"json\/json-stringify-min.js","name":"json-stringify","type":"js","ext":false,"requires":[],"expanded":[]}},"name":"json","type":"js","path":"json\/json-min.js","ext":false,"requires":[],"supersedes":["json-parse","json-stringify"],"rollup":1,"expanded":["json-parse","json-stringify"],"info":{"name":"json","desc":"Provides Y.JSON.stringify method for converting objects to JSON strings."},"sizes":{"min":2752,"debug":11308,"raw":11308}},"loader":{"name":"loader","type":"js","path":"loader\/loader-min.js","ext":false,"requires":[],"expanded":[],"info":{"name":"loader","desc":""},"sizes":{"min":9795,"debug":48779,"raw":46459}},"oop":{"requires":["yui-base"],"name":"oop","type":"js","path":"oop\/oop-min.js","ext":false,"info":{"name":"oop","desc":"OOP utils.  If included, the OOP methods are added to the YUI instance"},"sizes":{"min":1567,"debug":11528,"raw":11207}},"queue":{"name":"queue","type":"js","path":"queue\/queue-min.js","ext":false,"requires":[],"info":{"name":"queue","desc":"Mechanism to execute a series of callbacks in a non-blocking queue.  Each\ncallback is executed via setTimout unless configured with a negative\ntimeout, in which case it is run in blocking mode in the same execution\nthread as the previous callback.  Callbacks can be function references or\nobject literals with the following keys:\n<ul>\n<li><code>fn<\/code> - {Function} REQUIRED the callback function.<\/li>\n<li><code>timeout<\/code> - {number} millisecond delay to wait after previous callback completion before executing this callback.  Negative values cause immediate blocking execution.  Default 0.<\/li>\n<li><code>until<\/code> - {Function} boolean function executed before each iteration.  Return true to indicate callback completion.<\/li>\n<li><code>iterations<\/code> - {Number} number of times to execute the callback before proceeding to the next callback in the queue. Incompatible with <code>until<\/code>.<\/li>\n<\/ul>"},"sizes":{"min":1265,"debug":7359,"raw":7359}},"substitute":{"optional":["dump"],"name":"substitute","type":"js","path":"substitute\/substitute-min.js","ext":false,"requires":[],"info":{"name":"substitute","desc":"String variable substitution and string formatting.\nIf included, the substitute method is added to the YUI instance."},"sizes":{"min":843,"debug":4310,"raw":4310}},"yui":{"supersedes":["yui-base","get","loader"],"name":"yui","type":"js","path":"yui\/yui-min.js","ext":false,"requires":[],"info":{"name":"yui","desc":"Loader dynamically loads script and css files.  It includes the dependency\ninfo for the version of the library in use, and will automatically pull in\ndependencies for the modules requested.  It supports rollup files and will\nautomatically use these when appropriate in order to minimize the number of\nhttp connections required to load all of the dependencies.  It can load the\nfiles from the Yahoo! CDN, and it can utilize the combo service provided on\nthis network to reduce the number of http connections required to download \nYUI files."},"sizes":{"min":20475,"debug":113739,"raw":109325}},"yui-base":{"name":"yui-base","type":"js","path":"yui-base\/yui-base-min.js","ext":false,"requires":[],"info":{"name":"yui-base","desc":""},"sizes":{"min":7494,"debug":44579,"raw":43745}},"cssreset":{"type":"css","path":"cssreset\/reset-min.css","name":"cssreset","ext":false,"requires":[],"info":{"name":"cssreset","desc":""},"sizes":{"min":1428,"raw":1428}},"cssreset-context":{"type":"css","path":"cssreset\/reset-context-min.css","name":"cssreset-context","ext":false,"requires":[],"info":{"name":"cssreset-context","desc":""},"sizes":{"min":2268,"raw":2268}},"cssfonts":{"type":"css","path":"cssfonts\/fonts-min.css","name":"cssfonts","ext":false,"requires":[],"info":{"name":"cssfonts","desc":""},"sizes":{"min":676,"raw":676}},"cssfonts-context":{"type":"css","path":"cssfonts\/fonts-context-min.css","name":"cssfonts-context","ext":false,"requires":[],"info":{"name":"cssfonts-context","desc":""},"sizes":{"min":830,"raw":845}},"cssgrids":{"type":"css","path":"cssgrids\/grids-min.css","requires":["cssfonts"],"optional":["cssreset"],"name":"cssgrids","ext":false,"info":{"name":"cssgrids","desc":""},"sizes":{"min":7223,"raw":7223}},"cssgrids-context":{"type":"css","path":"cssgrids\/grids-context-min.css","requires":["cssfonts-context"],"optional":["cssreset-context"],"name":"cssgrids-context","ext":false,"info":{"name":"cssgrids-context","desc":""},"sizes":{"min":7257,"raw":7377}},"cssbase":{"type":"css","path":"cssbase\/base-min.css","after":["cssreset","cssfonts","cssgrids","cssreset-context","cssfonts-context","cssgrids-context"],"name":"cssbase","ext":false,"requires":[],"info":{"name":"cssbase","desc":""},"sizes":{"min":1619,"raw":1619}},"cssbase-context":{"type":"css","path":"cssbase\/base-context-min.css","after":["cssreset","cssfonts","cssgrids","cssreset-context","cssfonts-context","cssgrids-context"],"name":"cssbase-context","ext":false,"requires":[],"info":{"name":"cssbase-context","desc":""},"sizes":{"min":2100,"raw":2100}}};