import styles from "./styles.module.css";

type ButtonProps = {
    id: string;
    icon: React.ReactNode;
    type: "submit" | "button";
    ariaLabel: string;
    title: string;
    color?: "green" | "red" | "blue";
    disabled?: boolean;
    onClick?: () => void;
};

export const Button = ({
    id,
    icon,
    type,
    ariaLabel,
    title,
    color = "green",
    disabled,
    onClick,
}: ButtonProps) => {
    return (
        <>
            <button
                id={id}
                aria-label={ariaLabel}
                title={title}
                type={type}
                className={`${styles.button} ${styles[color]}`}
                disabled={disabled}
                onClick={onClick}
            >
                {icon}
            </button>
        </>
    );
};
