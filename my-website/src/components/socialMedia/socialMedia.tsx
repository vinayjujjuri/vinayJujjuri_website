import styles from './socialMedia.module.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function SocialMediaComponent() {
    return ( <div className={styles.iconContainer}>
        <div className={styles.iconBg}>
            <InstagramIcon className={styles.instaIcon}/>
        </div>
        <div className={styles.iconBg}>
            <YouTubeIcon className={styles.youtubeIcon}/>
        </div>
        <div className={styles.iconBg}>
            <LinkedInIcon className={styles.linkedInIcon}/>
        </div>
    </div> );
}

export default SocialMediaComponent;