import * as fs from 'fs'

import { promisifyAll } from 'bluebird';
import type * as Bluebird from 'bluebird'
import type { AnyFunction, AnyObjectWithStringKeys, KeyOfType, Property } from 'tsdef'

//#region Types

//#region Util

type MethodNames<T> = Exclude<KeyOfType<T, AnyFunction>, number | bigint | symbol>;

interface ObjectWithStringMethods
{
    [key: string]: AnyFunction
}

//#endregion Util

//#region Bluebird

type BluebirdPromise<T> = Bluebird<T>;

type AsyncLiteral = 'Async';
type AsyncifyLiteral<L extends string> = `${L}${AsyncLiteral}`;

type PromiseAllifyed<T> = T & 
{
    [K in MethodNames<T> as AsyncifyLiteral<K>]:  
    
        (...args: Parameters<T[K]>) => BluebirdPromise<T[K]>
};

//#endregion Bluebird

//#region Declare new synthesized bluebird fs

type NodeJSfs = typeof import('fs');

type BluebirdPromisifiedNodeJSfs = PromiseAllifyed<NodeJSfs>

//#endregion Declare new synthesized bluebird fs

//#endregion Types

export const Bluebirdfs = promisifyAll(fs) as BluebirdPromisifiedNodeJSfs;

export default Bluebirdfs;