import React from 'react'
import cardImage from '../Image/Apple.jpg'
import cartImage2 from "../Image/cart.jpg"

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="Add-to-cart">
        <img src={cartImage2}alt="Add To Cart" />
      </div>
      <div className="card-wrapper">
        <div className="image-wrapper">
            <img src={cardImage} alt="iPhone 13" />
        </div>
        <div className="text-wrapper">
            <span>
                Title: iPhone 13
            </span>
            <span>
                Price: $1200
            </span>
            <span>Description:A lightning-fast chip. A leap in battery life. And all-new photo and video capabilities. iPhone 13 lets you do things you never could before — in two great sizes.</span>
        </div>
        <div className="button-wrapper">
            <button>ADD TO CART</button>
        </div>
      </div>
    </div>
  )
}
