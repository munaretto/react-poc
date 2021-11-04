import { InputProps } from "../../interfaces/inputProps.interface";
import { InputField } from "./styles";
import './styles.css'

const Input: React.FC<InputProps> = (props): JSX.Element => {
    return (
        <section className="input-wrapper">
            <label>{props.label}</label>
            <InputField {...props}/>
        </section>
    )
}

export default Input;