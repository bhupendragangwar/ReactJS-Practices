import {children} from 'react'
export default function Anchor({
    children,
    href,

}){
    return(
        <a
        href={href}
        target='_blank'
        rel="noopener noreferrer"
        className='text-2xl text-yellow-500'
        >
            {children}
        </a>
    )
}