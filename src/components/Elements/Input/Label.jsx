/* eslint-disable react/prop-types */
const Label = (props) => {
    const {children, hatmlFor, name} = props
    return(
        <label 
          htmlFor={hatmlFor}
          className="block text-slate-700 text-sm font-bold mb-2"
          name={name}>
            {children}
        </label>
    )
}

export default Label;