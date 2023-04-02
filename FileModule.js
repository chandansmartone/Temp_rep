const {readFileSync ,writeFileSync, read} = require('fs');

//or  const fs= require('fs'); fs.readFileSync

console.log("start");
const first =readFileSync('./content/text','utf-8')
console.log(first);
const secondsub =readFileSync('./content/sub/subtxt.txt','utf-8')
console.log(secondsub);
 writeFileSync('./content/result.txt',
`here is the result : ${first}, ${secondsub}`)

writeFileSync('./content/result.txt',
`here is the result : ${first}, ${secondsub}`,
 {flag:'a'})

const {readFile ,writeFile} = require('fs');
readFile('./content/text','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result);
})
writeFile('./content/result2.txt',
 `here is the result : ${first}, ${secondsub}`,
 (err, result) => {
    if(err){
        console.log(err);
        return
    }else{
        console.log(result);
    }
 }

)
console.log("Done");
   