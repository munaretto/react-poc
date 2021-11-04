import { ButtonProps } from "../../interfaces/button.props.interface";
import { CustomButton } from "./styles";

const Button: React.FC<ButtonProps> = (props): JSX.Element => {
    return (
        <CustomButton {...props}/>
    )
}

export default Button;