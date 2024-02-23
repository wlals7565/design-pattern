import Item from "./Item";

export default class Bow implements Item {

  use(): string {
    return '활을 사용하였습니다.';
  }
}