import React,{ useState } from "react"
import "../index.css"
import Header from "./Header"


const Content = () => {
    let [items,setItems] =useState([
        {id:1,label:"HTML &CSS", checked:true},
        {id:2,label:"JavaScript",checked:true},
        {id:3,label:"React",checked:false}
    ])

    let [isEditing,setIsEditing] = useState(false)
    



    let handleChecked = (id) =>{

let newListItems =items.map((item)=>{
    if(item.id===id){
        return {...item, checked:!item.checked}
    }
  return item
})
setItems(newListItems)
    }


let handleUpdate =()=>{
    setIsEditing(true)
}

let handleDelete =(id)=>{
   let newListItems = items.filter(item => item.id !== id).map((item, index)=>{return{
    ...item,
    id:index+1
   }})

   
   setItems(newListItems)
}
  return (
    <main>
    <Header isEditing={isEditing} setIsEditing={setIsEditing}/>
    <ul className="list-group">
    {
        items.map((item) => {
            return <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id={`checkDefault${item.id}`} checked={item.checked} onChange={()=>{handleChecked(item.id)}}/>
  <label className="form-check-label" htmlFor={`checkDefault${item.id}`}>
    {item.label}
  </label>
</div>
            <span className="d-flex align-items-center gap-2">
            <i className="bi bi-pencil-square icon-blue" tabIndex={0} onClick={handleUpdate}>Edit</i>
            <i className="bi bi-trash3 me-2 icon-red" tabIndex={0} onClick={()=>{handleDelete(item.id)}}>Delete</i>
            </span>
            
            
            </li>
        })
    }
    
    
    </ul>
    </main>
  )
}

export default Content