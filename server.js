const express=require("express") //import th library
const app=express() //use it as 'app'
const port=3000
app.get("/firstendpoint",(req,res) => { //get(what file to go to, request and response => {what to do})
    res.json( //.json turns the js object into a json object
        {
    firstendpoint: "hello first endpoint" //message to display
        }
    )
})
app.get("/secondendpoint",(req,res) => {
    res.json(
        
    {
    secondendpoint: "hello second endpoint"
    } 
)
})
app.listen(port, () => { //listen to requests constantly, listen(port number,
                          // (empty because void function) => {just print that its listening})
    console.log(`now listening to requests ${port}`)
})
