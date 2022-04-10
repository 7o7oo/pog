const http = require('http')

const server = http.createServer((req ,res)=>{
   if(req.url === '/'){
       res.write(`
       <h1>lel</h1>
       <p>this is home page</p>
       `)
   }
   else if(req.url==='/about'){
       res.write(`
       <h1>About</h1>`)
   }
   else{
    res.write(`
    <h1>lel</h1>
    <p>nothing to show right ye</p>
    <a href='/'>back</a>
    `)
   }

} )
server.listen(5000)