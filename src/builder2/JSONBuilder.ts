import Builder from "./Builder";

export default class JSONBuilder extends Builder {
  head(): string {
    return "{"
  }
  body(): string {
    return `"Name": "${this.data.name}", "Age": "${this.data.age}"`
  }
  foot(): string {
    return "}"
  }
  
}