import { children } from "react";

export default function button({
    children,
    onClick,
    type = 'button'
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className= "text-2xl text-yellow-500 italic border border-yellow-200 rounded-full px-4 cursor-pointer "
        >
            {children}
        </button>
    )
}