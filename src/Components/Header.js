import React from 'react'
import cartImage2 from "../Image/cart.jpg"

function Header(props) {
  console.warn("Header data",props)
  return (
    <div>

      <div className="Add-to-cart">
      <p className='cart-count'>{props.data.cardData.length}</p>
        <img src={cartImage2}alt="Add To Cart" />
      </div>
      
    </div>
  )
}
export default Header;