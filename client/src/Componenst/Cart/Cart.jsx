import React from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import "./Cart.scss";
import { useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import { useDispatch } from 'react-redux';

const Cart = () => {

        const products = useSelector ((state)=> state.cart.products)
        const dispatch = useDispatch ();

        const totalPrice = () => {
          let total = 0;
          products.forEach((item)=>{
            total += item.price * item.quantity
          })
          return total.toFixed();
        };

  return (

    <div className='cart'>
      <h1>Products in your cart</h1>
      {products?.map((item)=>(
      <div className='item' key={item.id}>
        <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt={item.img2}/>
        <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
                {item.quantity} * ${item.price}
            </div>
        </div>
        <DeleteOutlineOutlinedIcon className='delete' onClick={()=> dispatch(removeItem(item.id))}/>
      </div>
       ))}
       <div className="total">
        <span>SUBTOTAL</span>
        <span>{totalPrice()}</span>
       </div>
       <button>PROCEED TO CHECKOUT</button>
       <span className='reset'onClick={()=> dispatch(resetCart())}> Reset Cart</span>
    </div>
  )
}

export default Cart;
