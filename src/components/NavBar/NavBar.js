import React from 'react';
import style from './NavBar.module.css'
import logo from '../../img/logo.png'
import CategoriesContainer from "./Categories/CategoriesContainer";


const NavBar = (props) => {
    return (
        <div className={style.container}>
            <div className={style.logo}><img src={logo} alt=""/></div>
            <div className={style.categories}>
                Категории
                <CategoriesContainer/>
            </div>
            <div className={style.designByCupTeam}>Design by CupTeam</div>
            {/*https://www.figma.com/file/QUsdkGLZjwk91N8P9GMLc1/SPA-TasksBook-%5C-Todos-(Community)?node-id=507%3A886*/}
        </div>
    )
}
export default NavBar