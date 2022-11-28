//This application access the routing system 
const http = require('http')

//Create JSON date
const data = JSON.stringify({
    title : 'MEAN Stack'
})

//Create a option object
const option = 
{
    hostname : 'localhost',
    port : 80,
    path : './',
    method : 'GET', //PUT,DELETE,POST
    Headers : {'Content-Type':'application/json',
                'Content-Length': data.length
            }
}

const request = http.request((option,response=>{
    response.on('data',chunk=>{
        //write the json data on the console
        process.stdout.write(chunk)
    })
   
}))

request.on('error',error=>{
    console.error(error)
})
request.end()