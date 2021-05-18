import {MyToolkit} from './mytoolkit.js';

// Implement a MyToolkit Button
var btn = new MyToolkit.Button;
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
		console.log(event)
	})

var btn2 = new MyToolkit.Button;
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

var sb = new MyToolkit.ScrollBar(250);
	sb.setId("sb1");
	sb.move(340, 70);
	sb.onclick(function(event){
        console.log(event.target)
		sb.increase();
    })

var pb = new MyToolkit.ProgressBar(360);
	pb.move(20, 350);
