import React from 'react';
import style from './Modal.module.css'
import modalStyle from "../components/NavBar/Categories/Categories.module.css";

const Modal = ({active, setActive, children, mainText, functionName, id}) =>{
    const [text, setText] = React.useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return(
        <div className={active ?  style.modal + ' ' + style.active  : style.modal} onClick={ () => (setActive(false))}>
            <div className={active ? style.modalContent + ' ' + style.active : style.modalContent} onClick={ e => e.stopPropagation()}>
                <form className={modalStyle.form} onSubmit={handleSubmit}>
                    <div className={modalStyle.formContainer}>
                        <div className={modalStyle.addNewCategory}> {mainText} </div>
                        <input className={modalStyle.input} type="text" value={text}
                               onChange={(event) => setText(event.target.value)}/>
                        <div className={modalStyle.buttonsContainer}>

                            <button className={modalStyle.addButtonForm}
                                    onClick={() => { functionName(text); setActive(false); setText("")}}>Готово
                            </button>

                            <button className={modalStyle.addButtonForm + ' ' + modalStyle.close}
                                    type="reset" onClick={() => (setActive(false))}>Закрыть
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Modal