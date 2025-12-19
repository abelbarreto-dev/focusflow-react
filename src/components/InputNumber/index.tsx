type InputNumberProps = {
    id: string;
    labelText: string;
};

export const InputNumber = ({ id, labelText, ...rest }: InputNumberProps) => {
    return (
        <>
            <label htmlFor={id}>{labelText}</label>
            <input id={id} type="number" {...rest} />
        </>
    );
};
