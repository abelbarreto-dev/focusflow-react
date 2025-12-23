import type { Ref } from "react";
import styles from "./styles.module.css";

type InputTextProps = {
    id: string;
    labelText: string;
    disabled?: boolean;
    required?: boolean;
    ref?: Ref<HTMLInputElement>;
    value?: string;
    setValue?: (value?: string) => void;
};

export const InputText = ({ id, labelText, disabled, required, value, setValue, ref }: InputTextProps) => {
    return (
        <>
            <label htmlFor={id}>{labelText}</label>
            <input
                className={styles.input}
                placeholder="Nome da tarefa"
                id={id}
                type="text"
                value={value}
                onChange={(e) => setValue && setValue(e.target.value || undefined)}
                ref={ref}
                disabled={disabled}
                required={required}
            />
        </>
    );
};
