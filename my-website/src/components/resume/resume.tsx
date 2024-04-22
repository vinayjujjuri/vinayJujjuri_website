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
                    <SchoolIcon className={styles.icon}/>
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
                    <HomeRepairServiceIcon className={styles.icon}/>
                    <div>
                        Experience
                    </div>
                </div>
                {experienceCard()}
            </div>
        )
    };

    const workingSkillsContainer = () => {
        return (
            <div>
                <div>
                    Skills
                </div>
                <div className={styles.languagesContainer}>
                    <div>Languagues</div>
                    <div className={styles.container}>
                        <div className={styles.imageContainer}>
                            <img src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-js-img.png' alt='javaScript' className={styles.image}/>
                            <div>
                                JavaScript
                            </div>
                        </div>
                        <div className={styles.imageContainer}>
                            <img src='https://www.tutorialsteacher.com/Content/images/home/typescript.svg' alt='TypeScript' className={styles.image}/>
                            <div>
                                TypeScript
                            </div>
                        </div>
                        {/* <div>
                            <img src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-html-img.png' alt='HTML' className={styles.image}/>
                        </div>
                        <div>
                            <img src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-css-img.png' alt='CSS' className={styles.image}/>
                        </div> */}
                        {/* <div>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png' alt='SCSS' className={styles.image}/>
                        </div> */}
                        <div className={styles.imageContainer}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdA5Qg0PWszi9ggP8cy-UWhi7BKkovE7IUr613nW8iRw&s' alt='Python' className={styles.image}/>
                            <div>
                                Python
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.technologiesContainer}>

                </div>
            </div>
        )
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.headingContainer}>
                <div className={styles.about}>Resume</div>
                <div className={styles.line}></div>
            </div>
            <div className={styles.subContainer}>
                <div style={{width:"50%"}}>
                {educationContainer()}
                </div>
                <div style={{width:"50%"}}>
                {experinceContainer()}
                </div>
            </div>
            <div>
                {workingSkillsContainer()}
            </div>
        </div>
    )
}