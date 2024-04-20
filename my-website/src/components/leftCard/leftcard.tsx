import styles from './leftcard.module.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonalInfoComponent from '../personalInfo/personalInfo';

export function LeftCardComponent():JSX.Element {

    const nameAndRole = () => {
        return (
            <div className={styles.nameContainer}>
                <div className={styles.name}>Vinay Jujjuri</div>
                <div className={styles.roleContainer}>
                    Web Developer
                </div>
            </div>
        )
    };

    const socialMedialIcons = () => {
        return (
            <div className={styles.iconContainer}>
                <div className={styles.iconBg}>
                    <InstagramIcon className={styles.instaIcon}/>
                </div>
                <div className={styles.iconBg}>
                    <YouTubeIcon className={styles.youtubeIcon}/>
                </div>
                <div className={styles.iconBg}>
                    <LinkedInIcon className={styles.linkedInIcon}/>
                </div>
            </div>
        )
    };

    return (
        <div className={styles.leftCardContainer}>
            {nameAndRole()}
            {socialMedialIcons()}
            <PersonalInfoComponent/>
        </div>
    )
}