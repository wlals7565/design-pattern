import Button from "./Button";

export default class FlatButton extends Button {
  constructor(dom: HTMLElement, caption: string) {
    super(dom, caption);
    this.render();
  }

  render () {
    this.dom.innerText = this.caption;
    this.dom.classList.add("flat-button")
  }
}