import Item from "./Item";

export default class Shield implements Item {

  use(): string {
    return '방패를 사용하였습니다.';
  }
}