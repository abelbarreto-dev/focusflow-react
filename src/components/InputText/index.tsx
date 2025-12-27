import type { Ref } from "react";
import styles from "./styles.module.css";

type InputTextProps = {
    id: string;
    labelText: string;
    disabled?: boolean;
    required?: boolean;
    placeHolder?: string;
    ref?: Ref<HTMLInputElement>;
    defaultValue?: string;
    value?: string;
    setValue?: (value?: string) => void;
};

export const InputText = ({
    id,
    labelText,
    placeHolder,
    disabled,
    required,
    defaultValue,
    value,
    setValue,
    ref,
}: InputTextProps) => {
    return (
        <>
            <label htmlFor={id}>{labelText}</label>
            <input
                className={styles.input}
                placeholder={placeHolder}
                id={id}
                type="text"
                defaultValue={defaultValue}
                value={value}
                onChange={e =>
                    setValue && setValue(e.target.value || undefined)
                }
                ref={ref}
                disabled={disabled}
                required={required}
            />
        </>
    );
};
