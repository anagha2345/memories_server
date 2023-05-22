const db = require('./db')


const allMemories=()=>{
  return db.Memorie.find().then(result=>{
        if(result){
            return{
                statusCode:200,
                memories:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"no memories are available"
            }
        }
    })
}
const addMemories=(id,title,date,description,image)=>{
  return db.Memorie.findOne({title}).then(result=>{
      if(result){
        return{
            statusCode:200,
            message:"this is already added"
        }
      }
      else{
        const newMem=new db.Memorie({
            id,
            title,
            description,
            date,
            image
        })
        newMem.save()
        return{
            statusCode:200,
            message:"memory added successfully"
        }
      }
   })
}
const removeMemory=(eid)=>{
   return db.Memorie.deleteOne({id:eid}).then(result=>{
    console.log(result);
        if(result){
            return{
                statusCode:200,
                message:"memory removed"
            }
        }
        else{
            return{
                statusCode:404,
                message:"memory not found"
            }
        }
    })
}
const getaMemory=(id)=>{
    return db.Memorie.findOne({id}).then(result=>{
        if(result){
            return{
                statusCode:200,
                memory:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"not found"
            }
        }
    })
}
const likeaMemory=(id)=>{
  return db.Favourite.findOne({id}).then(result=>{
    console.log(result);
   })
}
const editaMemory=(id,title,details,image,date)=>{
     return db.Memorie.findOne({id}).then(result=>{
        console.log(result);
        if(result){
            result.title=title,
            result.description=details,
            result.image=image,
            result.date=date
            result.save()
            return{
                 statusCode:200,
                 message:"updated"
            }
        }
        else{
            return{
                 statusCode:404,
                 message:"can't update"
                }
           
        }
     })
}
module.exports={
    allMemories,addMemories,removeMemory,getaMemory,likeaMemory,editaMemory
}