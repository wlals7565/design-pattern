import Button from "./Button";
import CheckBox from "./CheckBox";
import FlatButton from "./FlatButton";
import FlatCheckBox from "./FlatCheckBox";
import FlatTextEdit from "./FlatTextEdit";
import TextEdit from "./TextEdit";
import UiFactory from "./UiFactory";

export default class FlatUiFactory extends UiFactory {
  createButton(dom: HTMLElement, caption: string): Button {
    return new FlatButton(dom, caption);
  }
  createCheckBox(dom: HTMLElement, label: string, checked: boolean): CheckBox {
    return new FlatCheckBox(dom, label, checked);
  }
  createTextEdit(dom: HTMLElement, text: string): TextEdit {
    return new FlatTextEdit(dom, text);
  }
  
}