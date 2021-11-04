import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    required?: boolean;
    label?: string;
    placeholder?: string;
}