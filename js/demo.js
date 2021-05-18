import {MyToolkit} from './mytoolkit.js';

// Implement a MyToolkit Button
var btn = new MyToolkit.Button("Test Me");
    btn.setId("btn1");
    btn.move(20,20);
	//event Handler for detecting clicks
    btn.onclick(function(event){
        console.log(event)
        console.log(event.target)
		pb.increase();
    })
	//event Handler for state Changes
	btn.stateChanged(function(event){
		console.log("Button: " + event)
	})

var btn2 = new MyToolkit.Button("Decrease Progress");
btn2.setSize(140,30)
btn2.setId("btn2");
btn2.move(20,200);

//event Handler for detecting clicks
btn2.onclick(function(event){
	console.log(event)
	console.log(event.target)
	pb.decrease();
})
//event Handler for state Changes
btn2.stateChanged(function(event){
	console.log(event)
})

var cb = new MyToolkit.CheckBox("Checkbox 1");
	cb.setId("cb1");
	cb.move(20,65);
	cb.onclick(function(event){
        console.log(event.target)
    })
	cb.stateChanged(function(event){
		console.log("Checkbox: " + event)
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

var sb = new MyToolkit.ScrollBar(250);
	sb.setId("sb1");
	sb.move(340, 65);
	sb.onclick(function(event){
        console.log(event.target)
		sb.increase();
    })
	sb.stateChanged(function(event){
		console.log("Scroll bar: " + event)
	})

var btn3 = new MyToolkit.Button("Get Scroll Nav Position");
btn3.setSize(170,30)
btn3.setId("btn2");
btn3.move(20,250);

//event Handler for detecting clicks
btn3.onclick(function(event){
	sb.getThumbPos();
})

var pb = new MyToolkit.ProgressBar(360);
	pb.move(20, 350);
	pb.stateChanged(function(event){
		console.log(event)
	})

