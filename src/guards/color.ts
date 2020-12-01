//#region Import

import { string as isString } from './intrinsics';
import { HexColor } from '../hexColor';

//#endregion Import

const hexRegex = /^[#](?:[a-f\d]{3,4}){1,2}/i;

//#region Guards

function isHexColor(obj: unknown): obj is HexColor
{
    return isString(obj) && hexRegex.test(obj)
}

//#endregion Guards

export 
{
    isHexColor as hexColor
}

export default
{
    hexColor: isHexColor
}