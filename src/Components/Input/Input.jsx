/* eslint-disable no-undef */
import style from "./Input.module.css"



// eslint-disable-next-line react/prop-types
function Input({ title, type, value, fnOnChange }) {

  const id = `input-${Math.random()}`;

  return (
    <>
    <label className={style.label}>{title ?? "Indefinido"}</label>
      <input
       className={style.input}
      type={type}
      id={id}
       value={value}
       onChange={fnOnChange} 
       
       />
    </>
  );
}

export default Input;