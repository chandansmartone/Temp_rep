const eventEmitter=require('events');
const customEmitter=new eventEmitter(); 

customEmitter.on('response',(chandu,id)=>{
    console.log(`date rec from ${chandu} with id :${id}`);
})
customEmitter.on('response',()=>{
    console.log(`date rec`);
})
customEmitter.emit('response',"chandu",20);