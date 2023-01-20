import React from 'react';
import Categories from '../../Componenst/Categories/Categories';
import Slider from '../../Componenst/Slider/Slider';
import FeaturedProducts from '../../Componenst/Featured/FeaturedProducts';
import Contacts from '../../Componenst/Contacts/Contacts';
import "./Home.scss";




const Home = () => {
  return (
    <div className='home'>
      <Slider /> 
      <FeaturedProducts type = "featured" />
      <Categories/>
      <FeaturedProducts type = "trending" />
      <Contacts />
    </div>
  );
}

export default Home;
