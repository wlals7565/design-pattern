import CaptionDisplay from "./CaptionDisplay"
import CharactersCounter from "./CharactersCounter"
import Draft from "./Draft"
import SimpleDisplay from "./SimpleDisplay"

const title = "설득의 심리학"
const author = "로버트 치알디니"
const content = [
  "설득 방법",
  "설득 종류",
  "설득 윤리"
]

//const draft = new Draft(title, author, content)
const draft = new CharactersCounter(title, author, content)

// const display = new SimpleDisplay()
const display = new CaptionDisplay()

draft.print(display)

console.log(`전체 문자수: ${draft.getCharactersCounter()}`)
