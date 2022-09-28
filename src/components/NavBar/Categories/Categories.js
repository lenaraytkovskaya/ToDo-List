import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import style from './Categories.module.css'
import Modal from "../../../Modal/Modal";

const Category = (props) =>{
    return(
        <div className={style.container}>
            <NavLink to={'/task/'+ props.id} className={style.navLink}>
                {props.category}
            </NavLink>
        </div>
    )
}

const Categories = (props) =>{
    let CategoryElements = props.state.categories.map(p => <Category id={p.id} category={p.category}/>)

    const [ModalActive, SetModalActive] = useState(false)

    let AddNewCategory = (values) => {
        props.AddCategory(values);
    }
    return(
        <div>
            <div>
                {CategoryElements}
            </div>
           <div className={style.newCategory}>
               <button className={style.addButton} onClick={() => (SetModalActive(true))}>Добавить</button>

               <Modal active={ModalActive} setActive={SetModalActive} mainText={'Добавить новую категорию'}
                      functionName={AddNewCategory} />
           </div>
        </div>
    )
}

export default Categories