import styles from './styles.module.css'
function FormInputs({ text, placeholder, type, id }) {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="">{text}</label>

      {type === "dropdown" ? (
        <select className={styles.inputDropdown} placeholder={placeholder}>
          <option value="" disabled hidden className={styles.placeholderOption}>
            Select an option
          </option>
          <option value="option2">Inversor</option>
          <option value="option3">Proveedor</option>
        </select>
      ) : (
        <input className={styles.input} type={type} placeholder={placeholder} id={id} />
      )}
    </div>
  );
}

function FormTextArea({text, placeholder}) {
    return (
      <div className={styles.bigContainer}>
        <label className={styles.bigLabel} htmlFor="">{text} </label>
        <textarea className={styles.bigInput} type="text" placeholder={placeholder}/>
      </div>
    );
  }

export { FormInputs, FormTextArea }