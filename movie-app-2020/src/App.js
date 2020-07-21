import React from 'react';

function Food({ name, picture }) { 
  return <div>
    <h2>사실 { name } 조아함.</h2>
    <img src={ picture } />
  </div>
}

const foodILike = [
  {
    name: "도넛",
    image: 
    "https://imboldn.com/wp-content/uploads/2018/04/Krispy-Kreme-The-Simpsons-Dohnut-main.jpg"
  },
  {
    name: "피자",
    image: "https://akamai.pizzahut.co.kr/images/products/list/P_P_SS.jpg"
  },
  {
    name: "햄버거",
    image: "https://image.chosun.com/sitedata/image/202001/13/2020011303147_0.jpg"

  },
];

function App() {
  return (
    <div className="App"> 
      {foodILike.map(dish => (
      <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
