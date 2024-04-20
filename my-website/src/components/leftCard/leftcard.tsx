import styles from './leftcard.module.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export function LeftCardComponent() {

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

    const personalInfo = () => {
        return (
            <div className={styles.personalInfoContainer}>
                <div className={styles.phoneContainer}>
                    <div className={styles.phoneIconContainer}>
                        <PhoneAndroidIcon className={styles.phoneIcon}/>
                    </div>
                    <div>
                        <label>Phone</label>
                        <div>+91 8919437651</div>
                    </div>
                </div>
                <hr/>
                <div className={styles.phoneContainer}>
                    <div className={styles.phoneIconContainer}>
                        <ContactMailIcon className={styles.mailIcon}/>
                    </div>
                    <div>
                        <label>Email</label>
                        <div>vinay.juj@gmail.com</div>
                    </div>
                </div>
                <hr/>
                <div className={styles.phoneContainer}>
                    <div className={styles.phoneIconContainer}>
                        <LocationOnIcon className={styles.locationIcon}/>
                    </div>
                    <div>
                        <label>Location</label>
                        <div>Telangana, IN</div>
                    </div>
                </div>
                <hr/>
                <div className={styles.phoneContainer}>
                    <div className={styles.phoneIconContainer}>
                        <CalendarMonthIcon className={styles.calenderIcon}/>
                    </div>
                    <div>
                        <label>Birthday</label>
                        <div>May 10, 1999</div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className={styles.leftCardContainer}>
            {nameAndRole()}
            {socialMedialIcons()}
            {personalInfo()}
        </div>
    )
}