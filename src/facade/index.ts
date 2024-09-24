// Facade 패턴을 사용할 경우
import Facade from "./Facade";

const domInput = document.querySelector("input");
const domButton = document.querySelector("button");
const domResult = document.querySelector(".result");

const facade = new Facade();

domButton.addEventListener("click", () => {
  const name = domInput.value;

  facade.queryName(
    name,
    () => {
      domInput.value = "(조회 중...)";
      domButton.disabled = true;
    },
    () => {
      domInput.value = name;
      domButton.disabled = false;
    },
    domResult
  );
});

/* Facade 패턴이 없을 경우
import DBMS from "./DBMS";
import Cache from "./Cache";
import Message from "./Message";

const dbms = new DBMS();
const cache = new Cache();



domButton.addEventListener("click", () => {
  const name = domInput.value;
  const row = cache.get(name);

  // no Cahce
  if (!row) {
    domInput.value = "(조회 중...)";
    domButton.disabled = true;

    dbms.query(name, (row) => {
      domInput.value = name;
      domButton.disabled = false;
      if (row) {
        cache.put(row);
      }
      const message = new Message(row);
      message.print(domResult);
    });
  }
  else {
    const message = new Message(row);
      message.print(domResult);
  }
});
*/
