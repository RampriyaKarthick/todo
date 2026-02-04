import React,{ useState } from "react"


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
            return <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">{item.label}
            <span className="d-flex align-items-center gap-2">
            <i className="bi bi-pencil-square">Edit</i>
            <i className="bi bi-trash3 me-2">Delete</i>
            </span>
            
            
            </li>
        })
    }
    
    
    </ul>
    </main>
  )
}

export default Content