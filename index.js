// Using 3rd party Libaries 

const qrCode = require('qrcode')
const argString = process.argv[2];


// toString(text, [options], [cb(error, string)])

qrCode.toString(argString, {type : 'terminal' }, (err, string) =>{
    if (err) throw new Error(err);
    console.log(string)
})