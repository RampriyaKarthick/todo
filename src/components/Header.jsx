import React , {useState} from 'react'


const Header= ({isEditing = false, setIsEditing}) => {
  let [newItem, setNewItem] = useState("")

 


  return (
   
  <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">To-do</a>
    <form className="d-flex">
      <input className="form-control me-2" type="search" value={newItem} placeholder='Add new Item' onChange={(e)=>{setNewItem(e.target.value)}}/>
      <button className="btn btn-outline-success" type="submit" >{isEditing? "Save" :"Add"}</button>
    </form>
  </div>
</nav>
   
  )
}

export default Header