import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "도넛",
    image: 
    "https://imboldn.com/wp-content/uploads/2018/04/Krispy-Kreme-The-Simpsons-Dohnut-main.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "피자",
    image: "https://akamai.pizzahut.co.kr/images/products/list/P_P_SS.jpg",
    rating: 3
  },
  {
    id: 3,
    name: "햄버거",
    image: "https://image.chosun.com/sitedata/image/202001/13/2020011303147_0.jpg",
    rating: 2.5

  },
];

function Food({ name, picture, rating }) { 
  return <div>
    <h2>사실 { name } 조아함.</h2>
    <h4>{rating}/5.0</h4>
    <img src={ picture } alt={name}/>
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {
  return (
    <div className="App"> 
      {foodILike.map((dish, index) => (
      <Food key={index} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
