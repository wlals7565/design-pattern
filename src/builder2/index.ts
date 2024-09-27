import Data from "./Data";
import Director from "./Director";
import JSONBuilder from "./JSONBuilder";
import PlainTextBuilder from "./PlainTextBuilder";
import XMLBuilder from "./XMLBuilder";

const data = new Data('ijh', 26)

const plainTextBuilder = new PlainTextBuilder(data);

const xmlBuilder = new XMLBuilder(data);

const jsonBuilder = new JSONBuilder(data);

const director = new Director(jsonBuilder);

console.log(director.build())