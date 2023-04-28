import React, { useEffect } from 'react';
import { TopNav } from '../components/TopNav';


export const Home = () => {
  
  return (
    <React.Fragment>
      <TopNav/>
      <div className='home_header'>
        <div className='home_header_left'>
            <h1>Life is uncertain. Eat  first</h1>
            <h3 className="homeHeaderLeft_H3">
                “ A recipe has no soul .<br/>You as the cook must bring soul to the recipe”<br/>-Thomas Keller
            </h3>
          <button className="homeHeaderLeft_Button">Explore Recipes</button>
          <h1 className="homeHeaderLeft_h1">Trending Recipes for the Month</h1>
        </div>
        <div className='home_header_right'>
            <img src={`images/homeHeaderRight.png`} className="homeHeaderRight_Img" alt=''/>
        </div>
      </div>
      <div className="home_footer">
        <div className="homeFooter_div1">
            <img src={`images/pancake.png`} alt=''/>
            <h2 className="homeHeaderLeft_h2">Pancake</h2><h2 className="homeHeaderLeft_h2"><img src={`images/gordonRamsy.png`} alt=''/> Gordon Ramsay</h2>
        </div>
        <div className="homeFooter_div2">
            <img src={`images/burger.png`} alt=''/>
            <h2 className="homeHeaderLeft_h2">Burger</h2><h2 className="homeHeaderLeft_h2"><img src={`images/pierreGagnaire.png`} alt=''/> Pierre Gagnaire</h2>
        </div>
        <div className="homeFooter_div3">
            <img src={`images/friedChickenAndRice.png`} alt=''/>
            <h2 className="homeHeaderLeft_h2">Fried Chicken & Rice</h2><h2><img src={`images/gordonRamsy.png`} alt=''/> Gordon Ramsay</h2>
        </div>
      </div>
    </React.Fragment>
  )
}