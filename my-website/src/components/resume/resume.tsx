import styles from './resume.module.css';
import SchoolIcon from '@mui/icons-material/School';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

export function ResumeComponent() {

    const educationCard = () => {
        return (
            <div className={styles.oddCardContainer}>
                <div className={styles.year}>
                    2017-2021
                </div>
                <div className={styles.cardContent}>
                    B.Tech in ECE - SBIT,
                </div>
                <div className={styles.cardSubContent}>
                    Khammam, TS
                </div>
            </div>
        )
    };

    const experienceCard = () => {
        return (
            <>
            <div className={styles.evenCardContainer}>
                <div className={styles.year}>
                    2023-2024
                </div>
                <div className={styles.cardContent}>
                    Associate Engineer,
                </div>
                <div className={styles.cardSubContent}>
                    Innominds, HYD
                </div>
            </div>
            <div className={styles.oddCardContainer}>
                <div className={styles.year}>
                    2021-2023
                </div>
                <div className={styles.cardContent}>
                    Trainee,
                </div>
                <div className={styles.cardSubContent}>
                    Innominds, HYD
                </div>
            </div>
            </>
        )
    }

    const educationContainer = () => {
        return (
            <div className={styles.educationContainer}>
                <div className={styles.topContainer}>
                    <SchoolIcon className={styles.icon}/>
                    <div>
                        Education
                    </div>
                </div>
                {educationCard()}
            </div>
        )
    };

    const experinceContainer = () => {
        return (
            <div className={styles.educationContainer}>
                <div className={styles.topContainer}>
                    <HomeRepairServiceIcon className={styles.icon}/>
                    <div>
                        Experience
                    </div>
                </div>
                {experienceCard()}
            </div>
        )
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.headingContainer}>
                <div className={styles.about}>Resume</div>
                <div className={styles.line}></div>
            </div>
            <div className={styles.subContainer}>
                <div style={{width:"50%"}}>
                {educationContainer()}
                </div>
                <div style={{width:"50%"}}>
                {experinceContainer()}
                </div>
            </div>
        </div>
    )
}