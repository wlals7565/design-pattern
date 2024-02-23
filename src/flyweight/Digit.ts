export default class Digit {
  private data: Array<string> = null
  constructor(private url: string) {}

  private load(url: string, domOutput: Element) {
    fetch(url).then(response => {
      return response.json();
    }).then(json => {
      this.data = json
      if(domOutput) this.put(domOutput)
    }).catch(function (error) {
      console.warn(error)
    })
  }

  put(dom: Element): void {
    if(!this.data) this.load(this.url, dom)
    else {
      dom.innerHTML = `<div class="digit-layout"></div>`
      const domLayout = dom.querySelector('.digit-layout')

      this.data.forEach((item: string) => {
        const len = item.length
        for(let i=0; i<len; i++) {
          const domCell = document.createElement('div')
          domCell.style.backgroundColor = item[i] === '1' ? '#ff0' : '#333'
          domLayout.append(domCell)
        }
      })
    }    
  }
}