import styles from './socialMedia.module.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function SocialMediaComponent() {

    const onClickInsta = () => {
        window.open("https://instagram.com/_vinay_jujjuri", "_blank");
    };

    const onClickLinkedIn = () => {
        window.open("http://www.linkedin.com/in/vinay-jujjuri-ba35a41b3", "_blank");
    };

    const onClickYt = () => {
        window.open("https://www.youtube.com/@codetrekadventures", "_blank");
    }
    return ( 
    <div className={styles.iconContainer}>
        <div className={styles.iconBg} onClick={onClickInsta}>
            <InstagramIcon className={styles.instaIcon}/>
        </div>
        <div className={styles.iconBg} onClick={onClickLinkedIn}>
            <LinkedInIcon className={styles.linkedInIcon}/>
        </div>
        <div className={styles.iconBg} onClick={onClickYt}>
            <YouTubeIcon className={styles.youtubeIcon}/>
        </div>
        
    </div> 
    );
}

export default SocialMediaComponent;