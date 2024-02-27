import DomainHandler from "./DomainHandler"
import PortHandler from "./PortHandler"
import ProtocolHandler from "./ProtocolHandler"

const handler1 = new ProtocolHandler()
const handler2 = new DomainHandler()
const handler3 = new PortHandler()

handler1.setNext(handler2).setNext(handler3)

const domInput = document.querySelector("#url") as HTMLInputElement
const domBtn = document.querySelector("#btn")

domBtn.addEventListener("click", () => {
  const url = domInput.value
  handler1.run(url)
})

