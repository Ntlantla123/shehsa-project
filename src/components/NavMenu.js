import React from 'react'

export const NavMenu = ({isOpenSideNavState, setIsOpenSideNavState}) => {
  return (
    <React.Fragment>
        <nav className={`${(isOpenSideNavState === true)? "SideNav" : "ClosedSideNav"}`}>
            <button type="button" onClick={()=>{
                console.log(isOpenSideNavState);
                setIsOpenSideNavState(!isOpenSideNavState);
                }} className="SideNav_button"><img className="SideNav_Img"src={"images/hamburgerIcon.png"} alt=""/></button>
            <a className={`${isOpenSideNavState? "SideNav_a" : "ClosedSideNav_a"}`} href="/">Home</a>
            <a className={`${isOpenSideNavState? "SideNav_a" : "ClosedSideNav_a"}`}>Lessons</a>
            <a className={`${isOpenSideNavState? "SideNav_a" : "ClosedSideNav_a"}`}>Live lessons</a>
            <a className={`${isOpenSideNavState? "SideNav_a" : "ClosedSideNav_a"}`}>Ingredients</a>
        </nav>
        <section className="NavMenu">
            <div className="NavMenuHeader">
                <img src={`images/sheshaMenuIcon.png`} className="NavMenuHeaderImg2" alt="" />
                <button className="NavMenuHeaderButton2">
                    <img src={`images/notificationBell.png`} alt="" />
                </button>
            </div>
            <div className="NavMenuFooter">
                <section className="NavMenuFooter_row">
                    <a href="/recipes" className="NavMenuFooter_row_A1">
                        <img src={`images/book.png`} className="NavMenuFooterRow_img" alt="" />
                        <h3 className="NavMenuFooterRow_h3">RECIPIES</h3>
                    </a>
                    <a className="NavMenuFooter_row_A1">
                        <img src={`images/spoonAndKnife.png`} className="NavMenuFooterRow1_img" alt="" />
                        <h3 className="NavMenuFooterRow_h3">CREATE MEALS</h3>
                    </a>
                </section>
                <section className="NavMenuFooter_row">
                    <a className="NavMenuFooter_row_A3">
                        <img src={`images/checklist.png`} className="NavMenuFooterRow2_img" alt="" />
                        <h3 className="NavMenuFooterRow_h3">SHOPPING LIST</h3>
                    </a>
                    <a className="NavMenuFooter_row_A4"><img src={`images/shoppingCartIcon.png`} className="NavMenuFooterRow2_img2" alt="" /><h3>SHOPPING</h3></a>
                </section>
            </div>
        </section>
    </React.Fragment>
    )
}