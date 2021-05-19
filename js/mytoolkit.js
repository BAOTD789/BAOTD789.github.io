// File name: mytoolkit.js
import {SVG} from './svg.min.js';

/** This is the Main Toolkit with all the custom widgets */
var MyToolkit = (function() {
    var draw = SVG().addTo('body').size('100%','2000');
    
    var Window = function(){
        var window = draw.group();
        var frame = window.rect(400,400).stroke({color: "black", width: 2}).fill("white");

        return {
            add(widget){
                window.before(widget);
                window.add(widget);
            },
            src: function(){
                return frame;
            },
        }
    }    

    /** @module
     * Button
     * @constructor
     * @param {string} buttonText - The text to describe the action
     * of the button.
    */
    var Button = function(buttonText){
        let width = 75;
        let height = 35;
        var button = draw.group();
        var bText = button.text(buttonText).fill('white').move(width*.10,height*.2);
        var rect = button.rect(bText.length() + width*.20, height).fill('grey').stroke({color: "black", width: "2"})
        bText.before(rect);
        var clickArea = button.rect(bText.length() + width*.20, height).fill({color:'grey', opacity: 0});
        var clickEvent = null;
        var stateEvent = null;
        var defaultState = "idle";

        clickArea.mouseover(function(){
            rect.fill({ color: 'blue'})
            defaultState = "hover"
            transition()
        })
        clickArea.mouseout(function(){
            rect.fill({ color: 'grey'})
            defaultState = "idle"
            transition()
        })
        clickArea.mousedown(function(){
            rect.fill({ color: 'pink'})
            defaultState = "pressed"
            transition()
        })
        clickArea.mouseup(function(){
            rect.fill({ color: 'grey'})
            if (defaultState == "pressed"){
                if(clickEvent != null)
                    clickEvent(event)
            }   
            defaultState = "up"
            transition()
        })
        function transition()
        {
            if(stateEvent != null)
                stateEvent(defaultState)

        }
        return {
            /**
             * Move the element across the x&y plane
             * @memberof Button
             * @param {Number} x - moves the element up or down. Pos → & Neg  ←.
             * @param {Number} y - moves the element up or down.  Pos ↑ & Neg ↓.
            */
            move: function(x, y) {
                button.move(x, y);
            },
            /**
             * set the size of the element
             * @memberof Button
             * @param {Number} width - new width of the button
             * @param {Number} height - new height of the button
            */
            setSize: function(width, height) {
                rect.width(width);
                clickArea.width(width);
                rect.height(height);
                clickArea.height(height);
            },
            /**
             * Outputs whenever the element's state is updated
             * @memberof Button
             * @param {function} eventHandler - state events (eg.idle, hover, pressed, up)
            */
            stateChanged: function(eventHandler){
                stateEvent = eventHandler
            },
            /**
             * Outputs whenever the element is clicked
             * @memberof Button
             * @param {function} eventHandler - 
             * click events (eg.mouseover, mouseout, mousedown, mouseup)
            */
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            /**
             * returns the src value of the element's svg.
             * @memberof Button
            */
            src: function(){
                return rect;
            },
            /**
             * returns the src value of the element's svg.
             * @memberof Button
             * @param {string} id - sets the id of the widget  
            */
            setId: function(id){
                button.attr("id", id);
            }
        }
    }

    /** @module
     * CheckBox
     * @constructor
     * @param {string} boxText - The text to put to the right of the
     * checkbox
    */
    var CheckBox = function(boxText){
        var checkbox = draw.group();
        var rect = checkbox.rect(25,25).fill('grey').stroke({color: "black", width: "2"})
        var cbText = checkbox.text(boxText).move(30);
        var checked = false;
        var clickEvent = null;
        var stateEvent = null;
        var defaultState = "idle";

        rect.mouseover(function(){
            this.fill({ color: 'blue'})
            defaultState = "hover"
            transition()
        })
        rect.mouseout(function(){
            if(checked) {
                this.fill({ color: 'green'})
            }
            else{
                this.fill({ color: 'grey'})
            }
            defaultState = "idle"
            transition()
        })
        rect.mousedown(function(){
            this.fill({ color: 'pink'})
            defaultState = "pressed"
            transition()
        })
        rect.mouseup(function(){
            if (defaultState == "pressed"){
                if(checked){
                    checked = false;
                    this.fill({ color: 'grey'})
                }
                else{
                    checked = true;
                    this.fill({ color: 'green'})
                }
                if(clickEvent != null)
                    clickEvent(event)
            }   
            defaultState = "up"
            transition()
        })
        function transition()
        {
            if(stateEvent != null)
                stateEvent(defaultState)

        }
        return {
            /**
             * Move the element across the x&y plane
             * @memberof CheckBox
             * @param {Number} x - moves the element up or down. Pos → & Neg  ←.
             * @param {Number} y - moves the element up or down.  Pos ↑ & Neg ↓.
            */
            move: function(x, y) {
                checkbox.move(x, y);
            },
            /**
             * Outputs whenever the element's state is updated
             * @memberof CheckBox
             * @param {function} eventHandler - state events (eg.idle, hover, pressed, up)
            */
            stateChanged: function(eventHandler){
                stateEvent = eventHandler
            },
            checked: function(eventHandler){
                return checked;
            },
            /**
             * Allows for the element to be interacted with click events
             * @memberof CheckBox
             * @param {function} eventHandler - 
             * click events (eg.mouseover, mouseout, mousedown, mouseup)
            */
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            /**
             * returns the src value of the element's svg.
             * @memberof CheckBox
            */
            src: function(){
                return rect;
            },
            /**
             * returns the src value of the element's svg.
             * @memberof CheckBox
             * @param {string} id - sets the id of the widget  
            */
            setId: function(id){
                checkbox.attr("id", id);
            }
        }
    }
    /** @module
     * RadioButton
     * @constructor
     * @param {number} num - amount of RadioButtons for the set
    */
    var RadioButton = function(num){
        var buttonSet = draw.group();
        for(var i = 0; i < num.length; i++){
            var radButton = draw.group();
            var circle = radButton.circle(25, 25).fill('grey').stroke({color: "black", width: "2"})
            var rbText = radButton.text(num[i][0]).move(30);
            radButton.data('clicked', num[i][1])
            if(num[i][1]){
                circle.fill('green');
            }
            var stateEvent = null;
            var defaultState = "idle";
            circle.mouseover(function(){
                this.fill('blue');
                defaultState = "hover";
                transition()
            })
            circle.mouseout(function(){
                if(this.parent().data('clicked')){
                    this.fill('green');
                }
                else{
                    this.fill('grey');
                }
                defaultState = "idle";
                transition()
            })
            circle.mousedown(function(){
                if(this.parent().data('clicked')){
                    this.parent().data('clicked', false)
                    this.fill('grey');
                    defaultState = num[buttonSet.index(this.parent())][0] +  " pressed to false!"
                }
                else{
                    buttonSet.each(function(i,children){
                        if(children.data('clicked'))
                            children.data('clicked', false)
                            this.get(0).fill('grey');
                    })
                    this.parent().data('clicked', true)
                    this.fill('green');
                    defaultState = num[buttonSet.index(this.parent())][0] +  " pressed to true and other buttons turned to false!"
                }
                //index of pressed button: buttonSet.index(this.parent())
                transition()
            })
            radButton.move(0,i*30);
            buttonSet.add(radButton);
        }
       
        function transition()
        {
            if(stateEvent != null)
                stateEvent(defaultState)

        }
        return {
            move: function(x, y) {
                buttonSet.move(x, y);
            },
            stateChanged: function(eventHandler){
                stateEvent = eventHandler
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            src: function(){
                return circle;
            },
            setId: function(id){
                buttonSet.attr("id", id);
            }
        }
    }

    /** @module
     * TextBox
     * @constructor
    */
    var TextBox = function(){
        var textbox = draw.group();
        var rect = textbox.rect(190,30).fill("white").stroke({color: "black", width: 2});
        var text = textbox.text("").move(2,4);
        var caret = textbox.rect(1, 20).stroke({width:.5, color: "black"}).move(3,4);
        var runner = caret.animate().width(0);
        var inputText = document.createElement("textarea");
        var foreignObject = textbox.foreignObject(190, 30)
        foreignObject.add(inputText)
        runner.loop(1000, 1, 0);

        return {
            move: function(x,y){
                textbox.move(x,y);
            },
            src: function(){
                return textbox;
            },
            setId: function(id){
                textbox.attr("id", id);
            }
        }
    }

    /** @module
     * ScrollBar
     * @constructor
     * @param {number} height - sets height of the scroll bar.
    */
    var ScrollBar = function(height){
        var scrollBar = draw.nested(); 
        
        var bar = scrollBar.rect(35,height).fill('grey')
            .stroke({color: "black", width: "2"})
        var upArrow = scrollBar.rect(35,height*0.10).fill('green')
            .stroke({color: "black", width: "2"})
        var downArrow = scrollBar.rect(35,height*0.10).fill('green')
            .stroke({color: "black", width: "2"}).move(0,height*0.90)
        var nav = scrollBar.rect(35,height*0.10).fill('white')
            .stroke({color: "black", width: "2"}).move(0,height*0.10)
        
        var topPos = upArrow.y() + nav.height();
        var botPos = downArrow.y() - nav.height();
        console.log(topPos,botPos);
        var clickEvent = null;
        var stateEvent = null;
        var defaultState = "idle";

        upArrow.mouseover(function(){
            this.fill({ color: 'blue'})
            defaultState = "hover"
            transition()
        })
        upArrow.mouseout(function(){
            this.fill({ color: 'green'})
            defaultState = "idle"
            transition()
        })
        upArrow.mousedown(function(){
            this.fill({ color: 'pink'})
            if(nav.y() < topPos || nav.y() - topPos < nav.height()) {                    
                nav.move(0,topPos);
                defaultState = "top of scroll bar"
            }
            if(nav.y() > topPos){
                nav.dmove(0,-height*0.10)
                defaultState = "scrolling up"
            }
            transition()
        })
        upArrow.mouseup(function(){
            this.fill({ color: 'green'})
            defaultState = "up"
            transition()
        })
        downArrow.mouseover(function(){
            this.fill({ color: 'blue'})
            defaultState = "hover"
            transition()
        })
        downArrow.mouseout(function(){
            this.fill({ color: 'green'})
            defaultState = "idle"
            transition()
        })
        downArrow.mousedown(function(){
            this.fill({ color: 'pink'})
            if(nav.y() > botPos || botPos - nav.y() < nav.height()){
                nav.move(0,botPos);
                defaultState = "bottom of scroll bar"
            }
            else if(nav.y() < botPos) {
                nav.dmove(0,height*0.10)
                defaultState = "scrolling down"
            }
            transition()
        })
        downArrow.mouseup(function(){
            this.fill({ color: 'green'})
            defaultState = "up"
            transition()
        })
        bar.mousedown(function(){
            defaultState = "pressed"
            transition()
        })
        bar.mouseup(function(){
            this.fill({ color: 'grey'})
            if (defaultState == "pressed"){
                if(clickEvent != null)
                    clickEvent(event)
            }   
            defaultState = "dragging Scroll Bar"
            transition()
        })
        function transition()
        {
            if(stateEvent != null)
                stateEvent(defaultState)

        }
        return {
            move: function(x, y) {
                scrollBar.move(x, y);
            },
            getThumbPos: function() {
                return(nav.y())
            },
            setThumbPos: function(prog) {
                nav.move(nav.x(), prog - scrollBar.y() * 2);
                if(nav.y() < topPos) {                    
                    nav.move(0,topPos);
                    defaultState = "top of scroll bar"
                }
                if(nav.y() > botPos){
                    nav.move(0,botPos);
                    defaultState = "bottom of scroll bar"
                }
            },
            stateChanged: function(eventHandler){
                stateEvent = eventHandler
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            src: function(){
                return rect;
            },
            setId: function(id){
                scrollBar.attr("id", id);
            }
        }
    }

    /** @module
     * ProgressBar
     * @constructor
     * @param {number} length - sets length of the progress bar.
    */
    var ProgressBar = function(length){
        var progressBar = draw.group();
        var barWidth = length;
        var progressWidth = 0;
        var bar = progressBar.rect(length,35).fill('grey')
            .stroke({color: "black", width: "2"})
        var progress = progressBar.rect(length,35).fill('green')
            .stroke({color: "black", width: "2"});
        var stateEvent = null;
        var defaultState = "idle";



        function transition()
        {
            if(stateEvent != null)
                stateEvent(defaultState)

        }
        return {
            move: function(x, y) {
                progressBar.move(x, y);
            },
            stateChanged: function(eventHandler){
                stateEvent = eventHandler
            },
            increase: function(){
                if(progressWidth < length){
                    if(progressWidth + length * 0.1 >= length){
                        progressWidth = length;
                    }
                    else{
                        progressWidth += length * 0.10;
                    }
                    progress.width(progressWidth);
                    defaultState = "increasing";
                    transition();
                }
                else{
                    defaultState = "idle";
                    transition();
                }
                
            },
            decrease: function(){
                if(progressWidth > 0){
                    if(progressWidth - length * 0.1 < 0){
                        progressWidth = 0;
                    }
                    else{
                        progressWidth -= length * 0.10;
                    }
                    progress.width(progressWidth);
                    defaultState = "decreasing";
                    transition();
                }
                else{
                    defaultState = "idle";
                    transition();
                }
            },
            setIncrement: function(prog){
                console.log(prog);
                if((0 < prog) && (prog < 1)){
                    console.log('ok!')
                    progressWidth = prog * length;
                    progress.width(progressWidth);
                }
            },
            getIncrement: function(prog){
                console.log((progressWidth/length).toFixed(2));
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            src: function(){
                return rect;
            },
            setId: function(id){
                progressBar.attr("id", id);
            }
        }
    }

    /** @module
     * Custom - Tab Window
     * @constructor
    */
    var Custom = function(widget_src){
        var palette = draw.group();
        var win = palette.rect(45,125).stroke("black").fill("grey");
        var title = palette.text("Color Changer").stroke({color: "black", width: "1"}).move(0,-17);
        var red = palette.circle(25, 25).fill('red').stroke({color: "black", width: "2"}).move(10,15);
        var blue = palette.circle(25, 25).fill('blue').stroke({color: "black", width: "2"}).move(10,50);
        var yellow = palette.circle(25, 25).fill('yellow').stroke({color: "black", width: "2"}).move(10,85);


        red.mousedown(function(){
            widget_src.fill({color:'firebrick'})
        })
        blue.mousedown(function(){
            widget_src.fill({ color: 'dodgerblue'})
        })
        yellow.mousedown(function(){
            widget_src.fill({ color: 'goldenrod'})
        })
        function transition()
        {
            if(stateEvent != null)
                stateEvent(defaultState)

        }
        return {
            /**
             * Move the element across the x&y plane
             * @memberof Custom
             * @param {Number} x - moves the element up or down. Pos → & Neg  ←.
             * @param {Number} y - moves the element up or down.  Pos ↑ & Neg ↓.
            */
            move: function(x, y) {
                palette.move(x, y);
            },
            /**
             * set the size of the element
             * @memberof Button
             * @param {Number} width - new width of the button
             * @param {Number} height - new height of the button
            */
            setSize: function(width, height) {
                rect.width(width);
                clickArea.width(width);
                rect.height(height);
                clickArea.height(height);
            },
            /**
             * Outputs whenever the element's state is updated
             * @memberof Button
             * @param {function} eventHandler - state events (eg.idle, hover, pressed, up)
            */
            stateChanged: function(eventHandler){
                stateEvent = eventHandler
            },
            /**
             * Outputs whenever the element is clicked
             * @memberof Button
             * @param {function} eventHandler - 
             * click events (eg.mouseover, mouseout, mousedown, mouseup)
            */
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            /**
             * returns the src value of the element's svg.
             * @memberof Button
            */
            src: function(){
                return clickArea;
            },
            /**
             * returns the src value of the element's svg.
             * @memberof Button
             * @param {string} id - sets the id of the widget  
            */
            setId: function(id){
                palette.attr("id", id);
            }
        }
    }
    
    return {Window, Button, CheckBox, RadioButton, TextBox, ScrollBar, ProgressBar, Custom}
}());

export{MyToolkit}