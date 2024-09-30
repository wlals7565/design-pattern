export default interface Command {
  run(): void;
  //undo(): void;
  // undo 구현안할 거임
  // 실행된 기능 취소하는 기능임
}