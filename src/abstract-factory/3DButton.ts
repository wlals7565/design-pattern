import Button from "./Button";

export default class ThreeDButton extends Button {
  constructor(dom: HTMLElement, caption: string) {
    super(dom, caption);
    this.render();
  }

  render () {
    this.dom.innerHTML = `
    ${this.caption}
    <div></div>
    <div></div>
    `;
    this.dom.classList.add("threeD-button")
  }
}