import Command from "./Command";
import Draw from "./Draw";

export default class PlayCommand extends Draw implements Command {
  private commands = new Array<Command>()
  private playIndex = 0;
  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
  }

  addCommand(command: Command): void {
    this.commands.push(command)
  }

  run(): void {
    setTimeout(() => {
      if(this.playIndex < this.commands.length) {
        const command = this.commands[this.playIndex]
        command.run()

        this.playIndex++

        this.run()
      }
      else {
        this.playIndex = 0
      }
    }, 1000)
  }
}
