import React from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
// import burger3 from "../../assets/burger3.png";

const CartItem = ({ value, title, img, increment, decrement }) => {
  return(
    <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>
    <div>
      <button onClick={decrement}>-</button>
      <input type="text" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
  )
};

const Card = () => {
    const increment=(item)=>{

    };
    const decrement=(item)=>{

    };
  return (
    <section className="cart">
      <main>
        <CartItem 
        title={"Chees Burger"} 
        img={burger1} 
        value={0} 
        increment={()=>increment(1)}
        decrement={()=>decrement(1)}    
        />
         <CartItem 
        title={"Paneer Burger"} 
        img={burger2} 
        value={0} 
        increment={()=>increment(2)}
        decrement={()=>decrement(2)}    
        />
         <CartItem 
        title={"Nonvage Burger"} 
        img={burger1} 
        value={0} 
        increment={()=>increment(3)}
        decrement={()=>decrement(3)}    
        />
        <article>
            <div>
                <h4>Sub Total</h4>
                <p>₹{2000}</p>
            </div>
            <div>
                <h4>Tax</h4>
                <p>₹{2000*0.18}</p>
            </div>
            <div>
                <h4>Shipping Charges</h4>
                <p>₹{200}</p>
            </div>{" "}
            <div>
                <h4>Total</h4>
                <b>₹{2000+2000*0.18+200}</b>
            </div>
            <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Card;
