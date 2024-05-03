const {app}=require("./app")

app.get("/", (req,res)=>{
    res.send("<h1>Workin Fine</h1>")
})
app.get("/user", (req,res)=>{
    res.status(400).json({
        users:[],
        success:false
    })
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})