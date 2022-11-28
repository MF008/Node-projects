const http = require('http')
const fs = require('fs')



const port = process.env.port | 80 //assign port async

//create a server

const server = http.createServer((response,request)=>
{
    request.writeHead(200,{'Content-Type':'text/html'})

    //Routing system
    if (response.url = '/')
    {
        render(response,'/index.html')
    }
    else if (response.url = '/about')
    {
        render(response,'/about.html')
    }
    else if(response,'/contact')
    {
        render(response,'/contact.html')
    }else{
        response.writeHead(404,{'Content-Type':'text/html'})
        response.end('404 error file not found')
    }
    response.end()
})

server.listen('localhost:port',port)
{
    console.log('http://localhost:port',port)
}

const render = (response,fs)=>
{
    fs.readFile(dir+File),
    (err,data)=>
    {
        if (err)
        {
            response.writeHead()
            response.end()
        }
        response.writeHead(200,{'Content-Type':'text/html'})
        return response.end(data)
    }
}
