import styles from './resume.module.css';

export function ResumeComponent() {
    return (
        <div>
            <div className={styles.headingContainer}>
                <div className={styles.about}>Resume</div>
                <div className={styles.line}></div>
            </div>
        </div>
    )
}