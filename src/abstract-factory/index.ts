import ThreeDUiFactory from "./3DUiFactory";
import FlatUiFactory from "./FlatUiFactory";
import UiFactory from "./UiFactory";

let factory: UiFactory

const flatMode = true;

if(false){
  factory = new FlatUiFactory()
}else {
  factory = new ThreeDUiFactory()
}

const domButton = document.querySelector('.button') as HTMLElement
const domCheckBox = document.querySelector('.checkbox') as HTMLElement
const domTextEdit = document.querySelector('.textedit') as HTMLElement

factory.createButton(domButton, "BUTTON")
factory.createCheckBox(domCheckBox, "CheckBox", true);
factory.createTextEdit(domTextEdit, "DesignPatterns")
