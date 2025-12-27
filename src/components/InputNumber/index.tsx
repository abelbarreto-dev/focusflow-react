import styles from "./styles.module.css";

type InputNumberProps = {
    id: string;
    labelText: string;
    placeHolder?: string;
    value?: number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputNumber = ({
    id,
    labelText,
    placeHolder,
    value,
    onChange,
}: InputNumberProps) => {
    return (
        <>
            <label htmlFor={id}>{labelText}</label>
            <input
                id={id}
                className={styles.input}
                type="number"
                placeholder={placeHolder}
                value={value}
                onChange={onChange}
            />
        </>
    );
};
