import React, {useState} from 'react';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import BalanceIcon from '@mui/icons-material/Balance';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import "./Product.scss";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';



const Product = () => {

  const id = useParams().id;
  const [selectedImage, setSelectedImage] = useState("img")
  const [quantity, setquantity] = useState(1)

  const {data, error} = useFetch(
    `/products/${id}?populate=*`);

    const  dispatch = useDispatch(addToCart);

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
        <img src = {process.env.REACT_APP_UPLOAD_URL
           + data?.attributes?.img?.data?.attributes.url} 
           alt = "" onClick={(e) => setSelectedImage("img")}/>
        <img src = {process.env.REACT_APP_UPLOAD_URL +
           data?.attributes?.img2?.data?.attributes.url} 
            alt = "" onClick={(e) => setSelectedImage("img2")}/>
        </div>
        <div className="mainImg">
          <img src = {process.env.REACT_APP_UPLOAD_URL + 
            data?.attributes[selectedImage]?.data?.attributes.url} alt = "" />
        </div>
      </div>
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className='price'>{data?.attributes?.price}</span>
        <p>{data?.attributes?.desc}</p>
               <div className="quantity">
                <button onClick={()=> setquantity((prev) => (prev === 1 ? 1 : prev -1))}>-</button>
                <span>{quantity}</span>
                <button onClick={()=> setquantity((prev) => prev+1)}>+</button>
               </div>
                <button className='add' onClick={()=> dispatch(addToCart({
                  id: data.id,
                  title: data.attributes.title,
                  description: data.attributes.desc,
                  price: data.attributes.price,
                  img: data.attributes.img.data.attributes.url,
                  quantity
                }))}>
                <AddShoppingCartRoundedIcon /> ADD TO CART
                </button>
                <div className="link">
                  <div className="item">
                  <FavoriteBorderOutlinedIcon /> ADD TO WISHLIST
                  </div>
                  <div className="item">
                  <BalanceIcon /> ADD TO COMPARE
                  </div>
                </div>
                <div className="info">
                  <span>Vendor: Polo</span>
                  <span>Product type: T-Shirt</span>
                  <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr />
                <div className="info">
                  <span>Description</span>
                  <hr />
                  <span>ADDITIONAL INFORMATION</span>
                  <hr />
                  <span>FAQ</span>
                </div>
      </div>
    </div>
  )
}

export default Product;
