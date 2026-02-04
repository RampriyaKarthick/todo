import React,{ useState } from "react"
import "../index.css"


const Content = () => {
    let [items,setItems] =useState([
        {id:1,label:"HTML &CSS", checked:true},
        {id:2,label:"JavaScript",checked:false},
        {id:3,label:"React",checked:false}
    ])
  return (
    <main>
    <ul className="list-group">
    {
        items.map((item) => {
            return <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id={`checkDefault${item.id}`} checked={item.checked}/>
  <label className="form-check-label" htmlFor={`checkDefault${item.id}`}>
    {item.label}
  </label>
</div>
            <span className="d-flex align-items-center gap-2">
            <i className="bi bi-pencil-square icon-blue" tabIndex={0}>Edit</i>
            <i className="bi bi-trash3 me-2 icon-red" tabIndex={0}>Delete</i>
            </span>
            
            
            </li>
        })
    }
    
    
    </ul>
    </main>
  )
}

export default Content