import { MouseEventHandler } from "react";

export interface ButtonPropsType {
    handleClick: MouseEventHandler<HTMLButtonElement>;
    value?: string;
    svg?: React.ReactElement;
    className: string;
}