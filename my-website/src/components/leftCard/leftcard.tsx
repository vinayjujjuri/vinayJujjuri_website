import styles from './leftcard.module.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonalInfoComponent from '../personalInfo/personalInfo';
import SocialMediaComponent from '../socialMedia/socialMedia';

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

    return (
        <div className={styles.leftCardContainer}>
            {nameAndRole()}
            <SocialMediaComponent/>
            <PersonalInfoComponent/>
        </div>
    )
}