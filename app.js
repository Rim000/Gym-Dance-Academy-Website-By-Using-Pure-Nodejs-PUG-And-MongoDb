//express module importing..
const express =require("express");
const app= express();
const port =80;
const path=require("path");


//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); //FOR serving static files
app.use(express.urlencoded()); 

//PUG SPECIFIC STUFF
app.set('view engine', 'pug'); //set the template engine as pug
app.set('views',path.join(__dirname,'views')); //set the views directory 

//ENDPOINTS
app.get('/',(req,res)=>{
    
    const parms={}
    res.status(200).render('home.pug' , parms);
})
app.get('/contact',(req,res)=>{
    
    const parms={}
    res.status(200).render('contact.pug' , parms);
})

//START THE SERVER 
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});