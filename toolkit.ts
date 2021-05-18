interface IWidgetEvent{
    _height: number;
    _width: number;
    _xPos: number;
    _yPos: number;
}

abstract class Widget implements IWidgetEvent{
    _height: number;
    _width: number;
    _xPos: number;
    _yPos: number;
    private _backcolor: string;
    Widget(height:any, width: any){
        this._height = height;
        this._width = width;
        this._backcolor = "black";
    }

    get backColor(): string{
        return this._backcolor;
    }

    set backColor(color:string){
        this._backcolor = color;
    }
}

class Frame implements IWidgetEvent {
    _height: number;
    _width: number;
    _xPos: number;
    _yPos: number;
    private _objects: Widget[];

    constructor(height: any, width:any){

    }

    public addWidget(wid:Widget){
        this._objects.push(wid);
    }
}

class Button extends Widget{
    Button(){
    }
}

let sb1 = new scrollbars(w)
sb1.move(200, 150)

let opt: any[][] = [];
opt.push(["RadioButton 1", false])
opt.push(["RadioButton 2", false])
opt.push(["RadioButton 3", true])
let rb1 = new RadioButton(w, opt);
rb1.move(10,150);

let cb1 = new CheckBox(w);
cb1.move(10, 160);
cb1.text = "Checkbox 1"

let tb1 = new Textbox(w);
tb1.move(200,100);
tb1.text = "";

let btn = new Button(w);
btn.text = "Button 2";
btn.move(10,60);
btn.stateEvent().attach(function(input, event){
    console.log(event.target);
})