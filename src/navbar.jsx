import React  from "react";

const navbar=()=>{
    return(
        <header>
            <div className='logo'>
      {/* <img src={logo} alt='book logo'/> */}
      BookStore
    </div>
      <div className='display-menu'>
        <Link className='menu'  to="/" >Home</Link>
        <Link className='menu'  to="/About" >About</Link>
        <Link className='menu'  to="/NotFound" >NotFound</Link>
        
      </div>
        </header>
    )
}