import html2jsonGuards from './html2json'
import intrinsicGuards from './intrinsics';
import colorGuards     from './color'

export const is = 
{ 
    ...html2jsonGuards, 
    ...intrinsicGuards,
    ...colorGuards
};

export default is;