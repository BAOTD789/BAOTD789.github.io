import {MyToolkit} from './mytoolkit.js';

// Implement a MyToolkit Button
var btn = new MyToolkit.Button;
    btn.setId("btn1");
    btn.move(20,20);
	//event Handler for detecting clicks
    btn.onclick(function(event){
        console.log(event)
        console.log(event.target)
    })
	//event Handler for state Changes
	btn.stateChanged(function(event){
		console.log(event)
	})

var cb = new MyToolkit.CheckBox;
	cb.setId("cb1");
	cb.move(20,65);
	cb.onclick(function(event){
        console.log(event)
        console.log(event.target)
    })
	cb.stateChanged(function(event){
		console.log(event)
	})

let opt = new Array(
	["Radio Button 1", false],
	["Radio Button 2", false],
	["Radio Button 3", false],
	);

var rbSet = new MyToolkit.RadioButton(opt);
	rbSet.move(20,100);

var tb = new MyToolkit.TextBox;
	tb.move(190,23);

var pb = new MyToolkit.ProgressBar;
	pb.move(20, 350);
