import CheckBox from "./CheckBox"

export default class ThreeDCheckBox extends CheckBox {
  constructor(dom: HTMLElement, label: string, checked: boolean) {
    super(dom, label, checked)
    this.render();
  }

  render(): void {
    this.dom.innerHTML = `
    <label>CheckBox
    <input type ="checkbox" ${this.checked?'checked="checked"':''}>
    <div class ='box'></div>
    <div class = 'line'></div>
    </label>`

    this.dom.classList.add("threeD-checkbox")
  }

}