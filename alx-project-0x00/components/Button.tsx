import { ButtonProps } from "@/interfaces";

// This component is a simple button that displays a title and applies styles.
const Button: React.FC<ButtonProps> = ({ title, styles }) => {
    return (
        <button className={`py-2 px-4 rounded ${styles}`}>
            {title}
        </button>
    )
}
export default Button;