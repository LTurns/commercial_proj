import React from 'react'; 
import './header.css'
import { Link } from 'react-router-dom'
import './category1.css'

export default class Category1 extends React.Component {

  render(){

   return (

    <div className="title">
    <h3 className="category">Category 1</h3>


<div>

<div className="row">
 <div className="col-sm-3">
<Link to='/category1'>
<div class="card-sm-3">
  {/* <img className="category2_image" src="http://www.cbsproducts.com/wp-content/uploads/2019/01/Tornado-1.jpg" alt="tornado"/> */}
  {/* <img src="img_avatar.png" alt="Avatar"/> */}

  <button type="button" class="btn btn-dark"><img className="category2_image" src="http://www.cbsproducts.com/wp-content/uploads/2019/01/Tornado-1.jpg" alt="tornado"/><p>Category 1</p></button>
  </div>
</Link>
</div>

<div className="col-sm-3">
<Link to='/category2'>
  <div class="card-sm-3">
  {/* <img className="category2_image" src="http://www.cbsproducts.com/wp-content/uploads/2019/01/Tornado-1.jpg" alt="tornado"/> */}
  {/* <img src="img_avatar.png" alt="Avatar"/> */}

  <button type="button" class="btn btn-dark"><img className="category2_image" src="http://www.cbsproducts.com/wp-content/uploads/2019/01/Tornado-1.jpg" alt="tornado"/><p>Category 2</p></button>
  </div>
  </Link>
  </div>

  <div className="col-sm-3">

  <Link to='/category2'>
  <div class="card-sm-3">
  {/* <img className="category2_image" src="http://www.cbsproducts.com/wp-content/uploads/2019/01/Tornado-1.jpg" alt="tornado"/> */}
  {/* <img src="img_avatar.png" alt="Avatar"/> */}

  <button type="button" class="btn btn-dark"><img className="category2_image" src="http://www.cbsproducts.com/wp-content/uploads/2019/01/Tornado-1.jpg" alt="tornado"/><p>Category 2</p></button>
  </div>
  </Link>
  </div>

<div className="col-sm-3">
  <Link to='/category2'>
  <div class="card-sm-3">
  {/* <img className="category2_image" src="http://www.cbsproducts.com/wp-content/uploads/2019/01/Tornado-1.jpg" alt="tornado"/> */}
  {/* <img src="img_avatar.png" alt="Avatar"/> */}

  <button type="button" class="btn btn-dark"><img className="category2_image" src="http://www.cbsproducts.com/wp-content/uploads/2019/01/Tornado-1.jpg" alt="tornado"/><p>Category 2</p></button>
  </div>
  </Link>
  </div>
  </div>
  </div>
  </div>
   )
  }

}