import Row from './Row'
export default class DBMS {
  private db = new Map<string, Row> ();

  constructor() {
    this.db.set('jane', new Row("jane", "1990-02-14", "jane09@geosee.co.kr"));
    this.db.set('ijh', new Row('ijh', '1999-06-07', 'djakwjdal@naver.com') );
    this.db.set('yjm', new Row('yjm', '2009-03-10', 'wkjdalkwid@gmail.com'));
  }

  query(name: string, callback: (row: Row) => void): void {
    setTimeout(() => {
      callback(this.db.get(name))
    },1500)
  }
}