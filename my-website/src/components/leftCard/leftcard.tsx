import styles from './leftcard.module.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonalInfoComponent from '../personalInfo/personalInfo';
import SocialMediaComponent from '../socialMedia/socialMedia';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

export function LeftCardComponent():JSX.Element {

    const nameAndRole = () => {
        return (
            <div className={styles.nameContainer}>
                <div className={styles.name}>Vinay Jujjuri</div>
                <div className={styles.roleContainer}>
                    Front - End Developer
                </div>
            </div>
        )
    };

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = './pdf/resume.pdf'; // Make sure the path here matches the location of your CV file in the public folder
        link.download = 'Vinay_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const downloadButton = () => {
        return (
            <div className={styles.buttonContainer}>
                <button className={styles.downloadButton} onClick={downloadCV}>
                    <div className={styles.iconText}>
                    <CloudDownloadIcon />
                    Download CV
                    </div>
                </button>
            </div>
        )
    };

    return (
        <div className={styles.leftCardContainer}>
            {nameAndRole()}
            <SocialMediaComponent/>
            <PersonalInfoComponent/>
            {downloadButton()}
        </div>
    )
}