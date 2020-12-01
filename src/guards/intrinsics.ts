//#region Guards

function isString(obj: unknown): obj is string
{
    return obj && typeof obj === 'string'
}

//#endregion Guards

export
{
    isString as string
}

export default 
{ 
    string: isString 
}