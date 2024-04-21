import styles from './aboutMe.module.css';
import CodeIcon from '@mui/icons-material/Code';

function AboutMeComponent() {

    const cardComponent = () => {
        return (
            <div className={styles.cardContainer}>
                <div className={styles.topHeader}>
                    <CodeIcon className={styles.codeIcon} />
                    <div className={styles.header}>
                        Web Development
                    </div>
                </div>
                <div className={styles.content}>
                    <ul>
                        <li>
                            <span className={styles.subTagname}>React:</span>  I utilize React to develop highly interactive and responsive user interfaces. My approach involves using component-based architecture to ensure
                        </li>
                        <li>
                            <span className={styles.subTagname}>TypeScript:</span> I enhance JavaScript code by using TypeScript, which provides strong typing. This ensures more robust, error-free code and improves development efficiency.
                        </li>
                        <li>
                            <span className={styles.subTagname}>HTML & CSS/SCSS:</span>I structure and style web pages using HTML, and I enhance their visual appeal and responsiveness across different devices with CSS and SCSS. My expertise includes responsive design techniques to ensure optimal viewing experiences on all device types.
                        </li>
                        <li>
                            <span className={styles.subTagname}>API Integrations:</span>I am skilled in integrating various APIs to facilitate communication between the frontend and backend services. This includes handling data fetching, processing, and securely managing user interactions.
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

    const whatIDoComponent = () => {
        return (
            <div>
                <div className={styles.mainSubHeader}>What I Do!</div>
                {cardComponent()}
            </div>
        )
    };

    return (
        <div className={styles.aboutMeContainer}>
            <div className={styles.headingContainer}>
                <div className={styles.about}>About</div>
                <div className={styles.line}></div>
            </div>
            <div className={styles.contentContainer}>
                <div>
                    Hello! I'm Vinay Jujjuri, a dedicated front-end developer with a B.Tech degree in Electronics and Communication Engineering. Since beginning my professional journey in 2021 at Innominds, I have been deeply involved in web development, enhancing my expertise in React, JavaScript, HTML, CSS, SCSS, and TypeScript.
                </div>
                <div>
                    At Innominds, starting as a Trainee UI Developer and progressing over 2.5 years, I have focused on creating responsive, visually appealing websites. My work includes integrating APIs and developing reusable components, prioritizing maintainability and scalability to meet evolving business requirements. I am passionate about continuing to grow professionally, seeking new challenges, and contributing to innovative projects.
                </div>
            </div>
            {whatIDoComponent()}
        </div>
    );
}

export default AboutMeComponent;