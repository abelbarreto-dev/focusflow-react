import styles from "./styles.module.css";

export const Form = () => {
    return (
        <form action="" className={styles.form}>
            <div className={styles.form_row}>
                <label htmlFor="input">task</label>
                <input id="input" type="text" />
            </div>

            <div className={styles.form_row}>
                <p>
                    Nesse ciclo <strong>descanse</strong> por{" "}
                    <strong>5 min.</strong>
                </p>
            </div>

            <div className={styles.form_row}>
                <p>Ciclos:</p>
                <p>0000000000</p>
            </div>

            <div className={styles.form_row}>
                <button>Enviar</button>
            </div>
        </form>
    );
};
