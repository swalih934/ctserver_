// importing json-server 
const jsonserver=require('json-server')
//creating server
const ctserver=jsonserver.create()
//initialising middlewares
const middleware=jsonserver.defaults()
//creating router insance for resources
const router=jsonserver.router('db.json')
//configuring middlewares and router to server
ctserver.use(middleware)
ctserver.use(router)
//setting port number
const PORT=2500 ||process.env.PORT
//calling listen method with server for activating server
ctserver.listen(PORT,()=>{
    console.log("server running at PORT:"+PORT);
    
})