const express = require("express")

const app = express()

const router = express.Router()

//app.listen(3000,function(){
   // console.log("listing on port 4000")
//})


router.get("/songs",function(req,res){
    const song ={
        title:"uptown funk",
        artist: "bruno mars",
        popularity: 10,
        genre: ["funk", "boogie"]
    }

    res.json(song)
})

app.use("/api", router)
app.listen(3000)

//app.get("/goodbye", function(req, res){
//    res.send("<h1>hello express</h1>")

//})
//app.get("/goodbye", function(req, res){
//    res.send("<h1>goodbye express</h1>")
//});
