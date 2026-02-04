import React from 'react'

const Header= () => {
  return (
   
  <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">To-do</a>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Enter the task" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Add to List</button>
    </form>
  </div>
</nav>
   
  )
}

export default Header