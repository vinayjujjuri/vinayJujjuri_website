import styles from './rightCard.module.css';
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ContactPageIcon from '@mui/icons-material/ContactPage';

interface RightCardProps {
    onClick?: (name:string) => void; 
    setComponentName: React.Dispatch<React.SetStateAction<string>>;
    componentName:string;
}

export function RightCardComponent(props :RightCardProps) {

    const onClickNavigate = (path: string) => {
        props.setComponentName(path);
    }

    return (
        <div className={styles.rightCardContainer}>
            <div className={props.componentName === 'about me' ? `${styles.iconContainer} ${styles.active}` : styles.iconContainer} onClick={() => onClickNavigate("about me")}>
                <PersonIcon sx={{ color: props.componentName === 'about me'  ? "white" : "#262625" }} />
                <div style={{ color: props.componentName === 'about me'  ? "white" : "#262625" }}>About Me</div>
            </div>
            <div className={props.componentName === 'resume' ? `${styles.iconContainer} ${styles.active}` : styles.iconContainer} onClick={() => onClickNavigate("resume")}>
                <TextSnippetIcon sx={{ color: props.componentName === 'resume' ? "white" : "#262625" }} />
                <div style={{ color: props.componentName === 'resume' ? "white" : "#262625" }}>Resume</div>
            </div>
            <div className={props.componentName === 'works' ? `${styles.iconContainer} ${styles.active}` : styles.iconContainer} onClick={() => onClickNavigate("works")}>
                <BusinessCenterIcon sx={{ color: props.componentName === 'works' ? "white" : "#262625" }} />
                <div style={{ color: props.componentName === 'works' ? "white" : "#262625" }}>Works</div>
            </div>
            {/* <div className={props.componentName === 'contacts' ? `${styles.iconContainer} ${styles.active}` : styles.iconContainer} onClick={() => onClickNavigate("contacts")}>
                <ContactPageIcon sx={{ color: props.componentName === 'contacts' ? "white" : "#262625" }} />
                <div style={{ color: props.componentName === 'contacts' ? "white" : "#262625" }}>Contacts</div>
            </div> */}
        </div>
    )
}