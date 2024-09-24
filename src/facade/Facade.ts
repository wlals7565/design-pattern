import DBMS from "./DBMS";
import Cache from "./Cache";
import Message from "./Message";

export default class Facade {
  private dbms = new DBMS();
  private cache = new Cache();

  queryName(
    name: string,
    onBeforeQuery: () => void,
    onAfterQuery: () => void,
    domOutput: Element
  ): void {
    const row = this.cache.get(name);
    if (!row) {
      onBeforeQuery();

      this.dbms.query(name, (row) => {
        onAfterQuery();
        if (row) {
          this.cache.put(row);
        }
        const message = new Message(row);
        message.print(domOutput);
      });
    } else {
      const message = new Message(row);
      message.print(domOutput);
    }
  }
}
