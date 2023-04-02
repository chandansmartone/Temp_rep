


const { log } = require('console')
const os = require('os')

//info about current users
const user = os.userInfo()
console.log(user);

//method return the system update in secound

console.log(`the system uptime is ${os.uptime} seconds`);

const currentOS={
    name: os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freemem:os.freemem(),
}
console.log(currentOS);