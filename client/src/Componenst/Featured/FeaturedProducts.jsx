import React from 'react';
import "./FeaturedProducts.scss";
import Card from '../Card/Card';
import useFetch from '../../Hooks/useFetch';



const FeaturedProducts = ({type}) => {

 const {data, loading, error} = useFetch(
  `/products?populate=*&[filters][type][$eq]=${type}`
 );
  return(
  <div className='featuredProducts'>
    <div className="top">
      <h1>{type}  Products</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         In eos minima eius sed nesciunt facilis quaerat recusandae
          impedit exercitationem qui. Minus hic facere optio deserunt.
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
           Quos, ea!</p>
    </div>
    <div className="bottom">
     {error? "Error check your cart?":
     (loading ? "loading":
     data?.map((item) => <Card item={item}  key={item.id}
     title={item.title}/>))}
    

    </div>
  </div>
)
  }

export default FeaturedProducts;
