import styles from './personalInfo.module.css';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function PersonalInfoComponent() {
    return ( <div className={styles.personalInfoContainer}>
        <div className={styles.phoneContainer}>
            <div className={styles.phoneIconContainer}>
                <PhoneAndroidIcon className={styles.phoneIcon}/>
            </div>
            <div>
                <label className={styles.labelName}>Phone</label>
                <div className={styles.labelDetails}>+91-8919437651</div>
            </div>
        </div>
        <hr/>
        <div className={styles.phoneContainer}>
            <div className={styles.phoneIconContainer}>
                <ContactMailIcon className={styles.mailIcon}/>
            </div>
            <div>
                <label className={styles.labelName}>Email</label>
                <div className={styles.labelDetails}>vinay.juj@gmail.com</div>
            </div>
        </div>
        <hr/>
        <div className={styles.phoneContainer}>
            <div className={styles.phoneIconContainer}>
                <LocationOnIcon className={styles.locationIcon}/>
            </div>
            <div>
                <label className={styles.labelName}>Location</label>
                <div className={styles.labelDetails}>Telangana, IN</div>
            </div>
        </div>
        <hr/>
        <div className={styles.phoneContainer}>
            <div className={styles.phoneIconContainer}>
                <CalendarMonthIcon className={styles.calenderIcon}/>
            </div>
            <div>
                <label className={styles.labelName}>Birthday</label>
                <div className={styles.labelDetails}>May 10, 1999</div>
            </div>
        </div>
    </div> );
}

export default PersonalInfoComponent;