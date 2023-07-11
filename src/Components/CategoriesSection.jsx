import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Typed from 'react-typed'
export default function CategoriesSection() {

 const [categories,setCategories] = useState([])

   useEffect(()=>{
    axios.get ('https://dummyjson.com/products/categories').then(json=> setCategories (json.data))

   },[])

  return (
    <div className="category">
     <div className="my-5 text-center" >
     <h1> <Typed strings={['CATEGORIES']}typeSpeed={100}backSpeed={50}loop={true} /></h1>
     <p className='cat'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iure iste est excepturi..... </p>
    </div>

  <div className="row ">
   {

categories.map((val,key) =>
<div className="category col-md-4 my-3"key={key}>
<Link className='category' to={`/products/category/${val}`}>
<Card className='category'>
   
    <Card.Body className='category'>
      <Card.Title >{key+1} - {val.replace('-',' ')}</Card.Title>
    </Card.Body>
  </Card>
</Link>
</div>
)
   }

  </div>

</div>
  )
}
