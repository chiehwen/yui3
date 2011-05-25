var ResizePlugin = function(config) {

                //if its a widget, get the bounding box
                config.node = ((Y.Widget && config.host instanceof Y.Widget) ? config.host.get('boundingBox') : config.host);
                if (config.host instanceof Y.Widget) {
                        config.isWidget = true;
                        config.widget = config.host;
                }
                else {
                        config.isWidget = false;
                }

                ResizePlugin.superclass.constructor.call(this, config);
        };
        
        /**
        * @property NAME
        * @description dd-plugin
        * @type {String}
        */
        ResizePlugin.NAME = "resize-plugin";

        /**
        * @property NS
        * @description The Drag instance will be placed on the Node instance under the dd namespace. It can be accessed via Node.dd;
        * @type {String}
        */
        ResizePlugin.NS = "resize";

        ResizePlugin.ATTRS = {
                node: {
                        value: undefined
                },

                widget: {
                        value:undefined
                }
        };


        Y.extend(ResizePlugin, Y.Resize, {
                
                //node: undefined,
                //host: undefined,
                isWidget: undefined,

                initializer: function(config) {

                        this.set('node', config.node);
                        this.set('widget', config.widget);
                        this.isWidget = config.isWidget;

                        this.on('resize:resize', function(e) {
                                this._correctDimensions(e);
                        });

                        ///this.node = config.node;
                        //this.host = config.('host');

                
                },

                _correctDimensions: function(e) {

                        var node = this.get('node');
                        x = {
                            old: node.getX(),
                            current: e.currentTarget.info.left
                        },
                        y = {
                            old: node.getY(),
                            current: e.currentTarget.info.top
                        };

                        
                        if (this.isWidget) {
                            this._setWidgetProperties(e, x, y);
                        }

                        //now set properties on just the node or the widget's bounding box
                        if (this._isDifferent(x.old, x.current)) {
                            node.set('x', x.current);
                        }

                        if (this._isDifferent(y.old, y.current)) {
                            node.set('y', y.current);
                        }
                        //this.host.set('width', e.currentTarget.info.offsetWidth);
                        //console.log(this.isWidget);
                },

                //If the host is a widget, then set the width, height. Then look for widgetPosition and set x,y
                   _setWidgetProperties: function(e,x,y) {
                       //all widgets have width/height attrs. change these only if they differ from the old values

                       var widget = this.get('widget'),
                       oldHeight = widget.get('height'),
                       oldWidth = widget.get('width'),
                       currentWidth = e.currentTarget.info.offsetWidth,
                       currentHeight = e.currentTarget.info.offsetHeight;

                       if (this._isDifferent(oldHeight, currentHeight)) {
                           widget.set('height', currentHeight);
                       }

                       if (this._isDifferent(oldWidth, currentWidth)) {
                           widget.set('width', currentWidth);
                       }

                       

                       //If the widget uses Y.WidgetPosition, it will also have x,y position support. 
                       if (widget.hasImpl && widget.hasImpl(Y.WidgetPosition)) {

                           //console.log('new values: ' + x.current + ', ' + x.old);
                           // console.log('old values: ' + x.old + ', ' + y.old);
                           if (this._isDifferent(widget.get('x'), x.current)) {
                               widget.set('x', x.current);
                           }

                           if (this._isDifferent(widget.get('y'), y.current)) {
                               widget.set('y', y.current);
                           }

                       }
                   },

                   //just a little utility method that returns a value if the old !== new, otherwise it returns false.
                   _isDifferent: function(oldVal, newVal) {
                       if (oldVal !== newVal) {
                           return newVal;
                       }
                       else {
                           return false;
                       }
                   }


        });
        Y.namespace('Plugin');
        Y.Plugin.Resize = ResizePlugin;