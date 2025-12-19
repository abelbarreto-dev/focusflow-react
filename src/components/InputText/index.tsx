type InputTextProps = {
    id: string;
    labelText: string;
};

export const InputText = ({ id, labelText, ...rest }: InputTextProps) => {
    return (
        <>
            <label htmlFor={id}>{labelText}</label>
            <input id={id} type="text" {...rest} />
        </>
    );
};
