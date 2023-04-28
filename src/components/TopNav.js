import React from 'react';
export const TopNav = () => {
  return (
    <div className="TopNav">
        <img className="TopNav_logo" src={"images/shesha_logo.png"} alt=""/>
        <a className='TopNav_a' href="/">Home</a>
        <a className='TopNav_a'>Lessons</a>
        <a className='TopNav_a'>Live lessons</a>
        <a className='TopNav_a'>Ingredients</a>
        <a className='TopNav_a' href="/navMenu">Nav Menu</a>
        <button className="search_icon" type="button"><img src={"images/search_icon.png"} className="logo" alt=""/></button>
        <a className="logIn_a"><button className="logIn">Log In</button></a>
    </div>
  )
}
