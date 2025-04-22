import { ReactNode } from "react"

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
    children: ReactNode | string,
    variant?: 'primary' | 'secondary'
    size?: 'sm' | 'md',
    isDisabled?: boolean,
    isLoading?: boolean,
    onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ children, variant='primary', size='md', isDisabled=false, isLoading=false, onClick }) => {
    const buttonClass = `button ${size} ${variant} flex align-center gap-2 justify-center`

    return (
        <button 
            className={buttonClass} 
            onClick={onClick} 
            disabled={isDisabled}
        >
            {isLoading && <p>Loading dasdasd</p>}
            {children}
        </button>
    )
}

export default Button