import React, {useState} from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import  './Navbar.scss';

const Navbar = () => {

  const [open, setOpen] =useState(false);
  const products =useSelector((state)=> state.cart.products);

  return (
    <div className='navbar'>
    <div className="wrapper">  
      <div className="left">
        <div className="item">
        <img src="img/en.png" alt='' />
        <KeyboardArrowDownIcon />
        </div>
        <div className="item">
          <span>USD</span>
          <KeyboardArrowDownIcon />
        </div>
        <div className="item">
          <Link className="link" to = "/products/1">Women</Link>
        </div>
        <div className="item">
          <Link className="link" to = "/products/2">Men</Link>
        </div>
        <div className="item">
          <Link className="link" to = "/products/3">Children</Link>
        </div>
      </div>
      <div className="center">
        <Link className="link" to ="/">FOZOU-STORE</Link>
      </div>
      <div className="right">
      <div className="item">
          <Link className="link" to = "/">Homepage</Link>
        </div>
        <div className="item">
          <Link className="link" to = "/">About</Link>
        </div>
        <div className="item">
          <Link className="link" to = "/">Contact</Link>
        </div>
        <div className="item">
          <Link className="link" to = "/">Store</Link>
        </div>
        <div className="icons">
        <SearchIcon />
        <PersonIcon />
        <FavoriteBorderIcon/>
        <div className="carticon" onClick={()=> setOpen(!open)}>
        <ShoppingCartOutlinedIcon/>
        <span>{products.length}</span>
        </div>
        </div>
      </div>
    </div>
    {open && <Cart />}
    </div>
  )
}

export default Navbar;
