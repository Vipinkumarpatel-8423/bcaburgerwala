import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineEye} from "react-icons/ai"

const MyOrders = () => {
    const arr=[1,2,3,4,5,6,7];
  return (
    <section className='tableClass'>
        <main>
            <table>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Status</th>
                        <th>Item Qty</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                       {arr.map((i)=>
                        <tr key={i}>
                            <td>fdfdsf</td>
                            <td>Procesing</td>
                            <td>34</td>
                            <td>2000</td>
                            <td>cod</td>
                            <td><Link to={'/order/${"asdsds"}'}><AiOutlineEye/></Link></td>

                        </tr>

                       )}
                    </tbody>
               
            </table>
        </main>
    </section>
  )
}

export default MyOrders