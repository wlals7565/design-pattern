import BoxCommand from "./BoxCommand";
import CircleCommand from "./CircleCommand";
import ClearCommand from "./ClearCommand";
import PlayCommand from "./PlayCommand";
import TextCommand from "./TextComman";

const domCanvas = document.querySelector("canvas");
const domDraw = document.querySelector(".draw");
const domPlay = document.querySelector(".play");

const cmdClear = new ClearCommand(domCanvas);

const cmdCircle = new CircleCommand(domCanvas, 50, 150, 40);
cmdCircle.setFillColor("#ee4040").setStrokeColor("#ee4040");

const cmdText = new TextCommand(domCanvas, 200, 200, 40, "Design Patterns");
cmdText.setStrokeColor("#458de5");

const cmdBox = new BoxCommand(domCanvas, 40, 165, 320, 65);
cmdBox.setFillColor("#4dc4ff").setStrokeColor("#4dc4ff");

const cmdPlay = new PlayCommand(domCanvas);
cmdPlay.addCommand(cmdClear);
cmdPlay.addCommand(cmdCircle);
cmdPlay.addCommand(cmdBox);
cmdPlay.addCommand(cmdText);

domDraw.addEventListener("click", () => {
  cmdClear.run();
  cmdCircle.run();
  cmdBox.run();
  cmdText.run();
});

domPlay.addEventListener("click", () => {
  cmdPlay.run();
});
