import React from 'react'

const OrderDetails = () => {
  return (
    <section className='orderDetails'>
    <main>
        <h1>Order Details</h1>
        <div>
            <h1>Shipping</h1>
            <p>
                <b>Address</b>
                {" efkj kmdk kmdkc kmdcd"}
            </p>
        </div>
        <div>
            <h1>Contact</h1>
            <p>
                <b>Name</b>
                {"vipi kumar patel"}
            </p>
        </div>
        <div>
            <h1>Phone</h1>
            <p>
                <b>Address</b>
                {" 8423553599"}
            </p>
        </div>
        <div>
            <h1>Status</h1>
            <p>
                <b>Order Status</b>
                {"23-01-2023"}
            </p>
            <p>
                <b>Place At</b>
                {"23-02-2023"}
            </p>
            <p>
                <b>Delivered At </b>
                {"23-02-2024"}
            </p>
        </div>
        <div>
            <h1>Payment</h1>
            <p>
                <b>Payment Method</b>
                {"online"}
            </p>
            <p>
                <b>Payment Refrence</b>
                {"njsndshdbshdbhc"}
            </p>
            <p>
                <b>Paid At</b>
                {"23-02-2024"}
            </p>
        </div>
        <div>
            <h1>Amount</h1>
            <p>
                <b>Items Total</b>
                ₹{203}
            </p>
            <p>
                <b>Shipping Charges</b>
                ₹{203}
            </p>
            <p>
                <b>Tax</b>
                ₹{203}
            </p>
            <p>
                <b>Total Amount</b>
                ₹{203+203+203}
            </p>
           
        </div>
        <article>
            <h1>Order Items</h1>
            <div>
                <h4>Chease Burger</h4>
                <div>
                    <span>{12}</span> x  
                    <span> {232}</span>
                </div>
            </div>

            <div>
                <h4>Paneer Burger</h4>
                <div>
                    <span>{12}</span> x  
                    <span> {332}</span>
                </div>
            </div>
            <div>
                <h4>Nonvage Burger</h4>
                <div>
                    <span>{12}</span> x  
                    <span> {532}</span>
                </div>
            </div>
            <div>
                <h4 style={{fontWeight:"800"}}>Sub Total</h4>
                <div style={{fontWeight:"700"}}>₹{2333}</div>
            </div>
        </article>
    </main>

    </section>
  )
}

export default OrderDetails