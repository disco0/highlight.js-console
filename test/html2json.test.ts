import * as fs from 'fs'
import * as i from 'inspector'
import * as h2j from 'html2json'

const source = fs.readFileSync('./html2json.test.html').toString();

console.log('Example structure:')

console.dir(h2j.html2json(source), {depth: 20, colors: true});