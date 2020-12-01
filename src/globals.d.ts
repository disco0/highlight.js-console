///<reference path="./declarations/css2json.d.ts"/>
///<reference path="./declarations/html2json.d.ts"/>

type Not<T> = Exclude<any, T>;
type ItemOrItems<T extends Not<never | void>> = T | T[];