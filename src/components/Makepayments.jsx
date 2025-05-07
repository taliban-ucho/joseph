import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

const Makepayment = () => {
  // Uselocation is hook that enables use to move properties/data from one component to another
  const {product} = useLocation().state || {};
  const img_url = "https://taliban.pythonanywhere.com/static/images/"
  // create hooks to manage different states
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // create a function that will handle the submit event
  const submit = async (e) =>{
    // prevent the site from reloading
    e.preventDefault();

    // update the message hook with some info
    setMessage("Please wait as we process your request...")

   
      // create a form data object
      const data = new FormData();

      // append the differe details into the form data
      data.append("phone", phone)

      // for the amount we shall get it from product_cost key
      data.append("amount", product.vegetable_cost)

      // use axios the get access to the post method
      const  response = await axios.post("https://taliban.pythonanywhere.com/api/mpesa_payment", data)

      // update the message hook with new info from API
      setMessage(response.data.message)
   
   
  }


  return (
    <div className='row justify-content-center mt-4'>
      <h1 className='text-success'>Lipa na mpesa</h1>
      {/* <h3>{product.product_name}</h3>
      <h3>{product.product_description}</h3>
      <h3>{product.product_photo}</h3> */}

      <div className="card shadow p-3 col-md-6">
      <img
                            className=" product_img mt-4"
                            src={img_url + product.vegetable_image}
                            alt="missing"
                        />
        <b className='text-success'>{message}</b>

        <h4>Product name is: <span className='text-primary'>{product.vegetable_name}</span></h4>
        <h4>Product Price is: <span className='text-primary'>{product.vegetable_cost}</span></h4>

        <form onSubmit={submit}>
          <input
          type="number"
          placeholder='Enter the mobile number'
          className='form-control'
          value={phone}
          onChange={(e) => setPhone(e.target.value)} />
          <br />
          <br />

          <button className='btn btn-success'>make payment</button>
        </form>
      </div>

    </div>
  )
}

export default Makepayment