import styles from "./Support.module.css"

export default function Support() {
    return(
        <section className={styles.support}>
            <h4 className={styles.title}>Apoio</h4>

            <div className={styles.images}>
                <img src="/crmv.png" alt="" />
                <img src="/cabo.png" alt="" />
                <img src="/caboFM.png" alt="" />
            </div>
        </section>
    )
}