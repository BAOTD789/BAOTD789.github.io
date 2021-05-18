// File name: mytoolkit.js
import {SVG} from './svg.min.js';

var MyToolkit = (function() {
    var draw = SVG().addTo('body').size('100%','2000');
    var window = draw.group();
    window.rect(400,400).stroke("orange").fill("white");
        
    var Button = function(){
        var button = draw.group();
        var buttonText = button.text("Click Me").move(85,7);
        var rect = button.rect(75,35).fill('grey').stroke({color: "black", width: "2"})
        var clickEvent = null;
        var stateEvent = null;
        var defaultState = "idle";

        rect.mouseover(function(){
            this.fill({ color: 'blue'})
            defaultState = "hover"
            transition()
        })
        rect.mouseout(function(){
            this.fill({ color: 'grey'})
            defaultState = "idle"
            transition()
        })
        rect.mousedown(function(){
            this.fill({ color: 'pink'})
            defaultState = "pressed"
            transition()
        })
        rect.mouseup(function(){
            this.fill({ color: 'grey'})
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
            move: function(x, y) {
                button.move(x, y);
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
                rect.attr("id", id);
            }
        }
    }

    var CheckBox = function(){
        var checkbox = draw.group();
        var rect = checkbox.rect(25,25).fill('grey').stroke({color: "black", width: "2"})
        var cbText = checkbox.text("Checkbox").move(30);
        var clicked = false;
        var clickEvent = null;
        var stateEvent = null;
        var defaultState = "idle";

        rect.mouseover(function(){
            this.fill({ color: 'blue'})
            defaultState = "hover"
            transition()
        })
        rect.mouseout(function(){
            if(clicked) {
                this.fill({ color: 'red'})
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
                if(clicked){
                    clicked = false;
                    this.fill({ color: 'grey'})
                }
                else{
                    clicked = true;
                    this.fill({ color: 'red'})
                }
                console.log(clicked)
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
            move: function(x, y) {
                checkbox.move(x, y);
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
                rect.attr("id", id);
            }
        }
    }

    var RadioButton = function(num){
        var buttonSet = draw.group();
        for(var i = 0; i < num.length; i++){
            console.log(buttonSet);
            var radButton = draw.group();
            var circle = radButton.circle(25, 25).fill('grey').stroke({color: "black", width: "2"})
            var rbText = radButton.text(num[i][0]).move(30);
            var clickEvent = null;
            var stateEvent = null;
            var defaultState = "idle";
            if(num[i][1]){
                circle.fill({color: 'red'})
            }
            circle.mouseover(function(){
                this.fill({ color: 'blue'})
                defaultState = "hover"
                transition()
            })
            circle.mouseout(function(){
                console.log(currentButton[1])
                if(currentButton[1]) {
                    this.fill({ color: 'red'})
                }
                else{
                    this.fill({ color: 'grey'})
                }
                defaultState = "idle"
                transition()
            })
            circle.mousedown(function(){
                defaultState = "pressed"
                transition()
            })
            circle.mouseup(function(){
                defaultState = "up"
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
                circle.attr("id", id);
            }
        }
    }

    var TextBox = function(){
        console.log('test')
        var textbox = draw.group();
        var rect = textbox.rect(190,30).fill("white").stroke({color: "black", width: 2});
        var text = textbox.text("hello").move(2,4);
        var caret = textbox.line(45, 2.5, 45, 25).stroke({width:1, color: "black"})
        window.add(textbox)
        return {
            move: function(x,y){
                textbox.move(x,y);
            },
            src: function(){
                return textbox;
            }
        }
    }

    var ScrollBar = function(height){
        var scrollBar = draw.group(); 
        var bar = scrollBar.rect(35,height).fill('grey')
            .stroke({color: "black", width: "2"})
        var upArrow = scrollBar.rect(35,height*0.13).fill('red')
            .stroke({color: "black", width: "2"})
        var downArrow = scrollBar.rect(35,height*0.13).fill('red')
            .stroke({color: "black", width: "2"}).move(0,height*0.97)
        var nav = scrollBar.rect(35,height*0.13).fill('black')
            .stroke({color: "black", width: "2"}).move(0,height*0.13)
        var clickEvent = null;
        var stateEvent = null;
        var defaultState = "idle";

        upArrow.mouseover(function(){
            this.fill({ color: 'blue'})
            defaultState = "hover"
            transition()
        })
        upArrow.mouseout(function(){
            this.fill({ color: 'red'})
            defaultState = "idle"
            transition()
        })
        upArrow.mousedown(function(){
            this.fill({ color: 'pink'})
            defaultState = "pressed"
            transition()
        })
        upArrow.mouseup(function(){
            this.fill({ color: 'red'})
            if (defaultState == "pressed"){
                if(clickEvent != null)
                    clickEvent(event)
            }   
            defaultState = "up"
            transition()
        })
        downArrow.mouseover(function(){
            this.fill({ color: 'blue'})
            defaultState = "hover"
            transition()
        })
        downArrow.mouseout(function(){
            this.fill({ color: 'red'})
            defaultState = "idle"
            transition()
        })
        downArrow.mousedown(function(){
            this.fill({ color: 'pink'})
            defaultState = "pressed"
            transition()
        })
        downArrow.mouseup(function(){
            this.fill({ color: 'red'})
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
            move: function(x, y) {
                scrollBar.move(x, y);
            },
            stateChanged: function(eventHandler){
                stateEvent = eventHandler
            },
            increase: function(){
                nav.move(nav.x, height * 0.10); 
            },
            decrease: function(){
                nav.move(nav.x, -height * 0.10);                     
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

    var ProgressBar = function(width){
        var progressBar = draw.group();
        var barWidth = width;
        var progressWidth = 0;
        var bar = progressBar.rect(width,35).fill('grey')
            .stroke({color: "black", width: "2"})
        var progress = progressBar.rect(width,35).fill('green')
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
                if(progressWidth < width)
                    progressWidth += width * 0.10;
                    progress.width(progressWidth);
            },
            decrease: function(){
                if(progressWidth > 0)
                    progressWidth -= width * 0.10;
                    progress.width(progressWidth);
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            src: function(){
                return rect;
            },
            setId: function(id){
                rect.attr("id", id);
            }
        }
    }

    var Custom = function(){
        
    }
    
    return {Button, CheckBox, RadioButton, TextBox, ScrollBar, ProgressBar, Custom}
}());

export{MyToolkit}