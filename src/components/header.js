import React from 'react'; 
import './header.css'
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

  render(){

   return (

     <div className="header">
    <h1>CBS Products</h1>
    <h3>Leaders In Advanced Cable Installation</h3>

    <div>

<Link to="/category1">
<div class="card">
  {/* <img className="category2_image" src="http://www.cbsproducts.com/wp-content/uploads/2019/01/Tornado-1.jpg" alt="tornado"/> */}
  {/* <img src="img_avatar.png" alt="Avatar"/> */}

  <button type="button" href="/category1" class="btn btn-dark"><img className="category2_image" src="http://www.cbsproducts.com/wp-content/uploads/2019/01/Tornado-1.jpg" alt="tornado"/><p>Category 1</p></button>
  </div>
  </Link>

<Link to='/category2'>
  <div class="card">
  {/* <img className="category2_image" src="http://www.cbsproducts.com/wp-content/uploads/2019/01/Tornado-1.jpg" alt="tornado"/> */}
  {/* <img src="img_avatar.png" alt="Avatar"/> */}

  <button type="button" class="btn btn-dark"><img className="category2_image" src="http://www.cbsproducts.com/wp-content/uploads/2019/01/Tornado-1.jpg" alt="tornado"/><p>Category 2</p></button>
  </div>
  </Link>
  </div>
  </div>
   )
  }

}