/* eslint-disable react/prop-types */
import Label from "./label"
import Input from "./input"
const InputForm = (props) => {
    const {label, name, placeholder, type} = props;
    return(
        <div className="mb-6">
            <Label hatmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder} />
        </div>
    );
};

export default InputForm;