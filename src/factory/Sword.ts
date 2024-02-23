import Item from "./Item";

export default class Sword implements Item {

  use(): string {
    return '칼을 사용하였습니다.';
  }
}