const mongoose=require('mongoose')
//connect with backend
mongoose.connect('mongodb://127.0.0.1:27017/memoriesServer')

//model
const Memorie=mongoose.model('Memorie',{
    id:String,
    title:String,   
    description:String,
    image:String,
    date:String
    


})
const Favourite=mongoose.model('Favourite',{
    liked:[]
})
module.exports={
    Memorie,Favourite
}