import styles from './resume.module.css';
import SchoolIcon from '@mui/icons-material/School';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import Slider from '@mui/material/Slider';

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
                    <SchoolIcon className={styles.icon} />
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
                    <HomeRepairServiceIcon className={styles.icon} />
                    <div>
                        Experience
                    </div>
                </div>
                {experienceCard()}
            </div>
        )
    };

    const languagesComponent = () => {
        return (
            <div className={styles.languagesContainer}>
                <div className={styles.skillHeadings}>Languagues</div>
                <div className={styles.container}>
                    <div className={styles.imageContainer}>
                        <img src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-js-img.png' alt='javaScript' className={styles.image} />
                        <div className={styles.skillName}>
                            JavaScript
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src='https://www.tutorialsteacher.com/Content/images/home/typescript.svg' alt='TypeScript' className={styles.image} />
                        <div className={styles.skillName}>
                            TypeScript
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png' alt='Python' className={styles.image} />
                        <div className={styles.skillName}>
                            Python
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    const webTechnologiesComponent = () => {
        return (
            <div className={styles.technologiesContainer}>
                <div className={styles.skillHeadings}>Web Technologies</div>
                <div className={styles.container}>
                    <div className={styles.imageContainer}>
                        <img src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-html-img.png' alt='HTML' className={styles.image} />
                        <div className={styles.skillName}>
                            HTML
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-css-img.png' alt='CSS' className={styles.image} />
                        <div className={styles.skillName}>
                            CSS
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png' alt='SCSS' className={styles.image} />
                        <div className={styles.skillName}>
                            SCSS
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    const UiLibrariesComponent = () => {
        return (
            <div className={styles.uiLibrariesContainer}>
                <div className={styles.skillHeadings}>UI Libraries</div>
                <div className={styles.container}>
                    <div className={styles.imageContainer}>
                        <img src='https://cdn.worldvectorlogo.com/logos/material-ui-1.svg' alt='Material UI' className={styles.image} />
                        <div className={styles.skillName}>
                            Material UI
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src='https://i0.wp.com/www.primefaces.org/wp-content/uploads/2018/05/primereact-logo.png?ssl=1' alt='Prime React' className={styles.image} />
                        <div className={styles.skillName}>
                            Prime React
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png' alt='BootStrap' className={styles.image} />
                        <div className={styles.skillName}>
                            BootStrap
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    const toolsAndTechComponent = () => {
        return (
            <div className={styles.tatContainer}>
                <div className={styles.skillHeadings}>Tools and Technologies</div>
                <div className={styles.container}>
                    <div className={styles.imageContainer}>
                        <img src='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' alt='GIT' className={styles.image} />
                        <div className={styles.skillName}>
                            Git
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png' alt='VS Code' className={styles.image} />
                        <div className={styles.skillName}>
                            VS Code
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src='https://cdn.worldvectorlogo.com/logos/postman.svg' alt='Postman' className={styles.image} />
                        <div className={styles.skillName}>
                           Postman
                        </div>
                    </div>
                </div>
            </div>
        )
    };
    

    const workingSkillsContainer = () => {
        return (
            <div className={styles.skillsMainContainer}>
                <div className={styles.skillHeader}>
                    Skills
                </div>
                {languagesComponent()}
                {webTechnologiesComponent()}
                {UiLibrariesComponent()}
                {toolsAndTechComponent()}
            </div>
        )
    }

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.headingContainer}>
                    <div className={styles.about}>Resume</div>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.subContainer}>
                    <div style={{ width: "50%" }}>
                        {educationContainer()}
                    </div>
                    <div style={{ width: "50%" }}>
                        {experinceContainer()}
                    </div>
                </div>
            </div>
            {workingSkillsContainer()}
        </>
    )
}