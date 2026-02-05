import React , {useState} from 'react'


const Header= ({isEditing = false, setIsEditing,items, setItems, newItem, setNewItem, editingItem, setEditingItem}) => {
  

 let handleAddorSaveItem =(e)=>{
  e.preventDefault()
  if(isEditing){
    let newListItems = items.map((item)=>{
      if(item.id === editingItem){
        return {...item, label:newItem}
      }
      return item
    })
    setItems(newListItems) 
    setNewItem("")
    setIsEditing(false)
    setEditingItem(null)
    

  }

  
  
  else{
     setItems([
      ...items,
      {id:items.length+1,label:newItem, checked:false}
    ])
    setNewItem("")
    setEditingItem(null)
  }
}

   
// setIsEditing(false)


  return (
   
  <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">To-do</a>
    <form className="d-flex">
      <input className="form-control me-2" type="search" value={newItem} placeholder='Add new Item' onChange={(e)=>{setNewItem(e.target.value)}}/>
      <button className="btn btn-outline-success" type="submit" onClick={handleAddorSaveItem} >
      {isEditing? <i className="bi bi-bookmark-check icon-orange"></i> :<i className="bi bi-plus-circle-fill icon-green"></i>}</button>
      
    </form>
  </div>
</nav>
   
  )
}
 
export default Header