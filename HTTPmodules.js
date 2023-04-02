const http= require('http');
 const server = http.createServer((req,res) => {
  
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("welcome");
        res.end();
       
    }
    if(req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('welcome to our about Page');
        res.end();
  
    }else{
        res.write(
        `<h1>Oops!</h1>
        <p>we can't seem to find the page </p>`) }}
    )
    server.listen(5000);