import {MyToolkit} from './mytoolkit.js';

//Setting up base window
var win = new MyToolkit.Window;

// Implement a MyToolkit Button
var btn = new MyToolkit.Button("Increase Progress");
    btn.setId("btn1");
    btn.move(20,20);
	//event Handler for detecting clicks
    btn.onclick(function(event){
		console.log(event)
        //console.log(event.target)
		pb.increase();
    })
	//event Handler for state Changes
	btn.stateChanged(function(event){
		console.log("Button: " + event)
	})

var btn2 = new MyToolkit.Button("Decrease Progress");
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
		console.log(event)
		console.log("Checkbox marked?: " + cb.checked());
        //console.log(event.target)
    })
	cb.stateChanged(function(event){
		console.log("Checkbox: " + event)
	})

let opt = new Array(
	["Radio Button 1", false],
	["Radio Button 2", true],
	["Radio Button 3", false],
	);

var rbSet = new MyToolkit.RadioButton(opt);
	rbSet.setId("rbSet1");
	rbSet.move(20,100);
	rbSet.stateChanged(function(event){
		console.log("Radio Buttons: " + event)
	})

var tb = new MyToolkit.TextBox;
	tb.setId("tb1");
	tb.move(190,23);

var sb = new MyToolkit.ScrollBar(250);
	sb.setId("sb1");
	sb.move(340, 65);
	sb.onclick(function(event){
        sb.setThumbPos(event.y);
    })
	sb.stateChanged(function(event){
		console.log("Scroll bar: " + event)
	})

var btn3 = new MyToolkit.Button("Get Scroll Nav Position");
btn3.setSize(170,30)
btn3.setId("btn3");
btn3.move(20,250);

//event Handler for detecting clicks
btn3.onclick(function(event){
	console.log(sb.getThumbPos());
})

var pb = new MyToolkit.ProgressBar(360);
	pb.setId("pb");
	pb.move(20, 350);
	pb.setIncrement(.23);
	pb.stateChanged(function(event){
		console.log("Progress Bar: " + event)
	})

var btn4 = new MyToolkit.Button("Get Progress");
btn4.setId("btn4");
btn4.move(20,300);

//event Handler for detecting clicks
btn4.onclick(function(event){
	pb.getIncrement();
})

var cus = new MyToolkit.Custom(win.src());
cus.move(425,50);
cus.setId("cus");


