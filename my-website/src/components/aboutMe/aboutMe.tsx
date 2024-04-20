import styles from './aboutMe.module.css';

function AboutMeComponent() {
    return (
        <div className={styles.aboutMeContainer}>
            <div>About me</div>

            <div>
                Hello! I'm Vinay Jujjuri, a dedicated front-end developer with a B.Tech degree in Electronics and Communication Engineering. Since beginning my professional journey in 2021 at Innominds, I have been deeply involved in web development, enhancing my expertise in React, JavaScript, HTML, CSS, SCSS, and TypeScript.
                <br />
                At Innominds, starting as a Trainee UI Developer and progressing over 2.5 years, I have focused on creating responsive, visually appealing websites. My work includes integrating APIs and developing reusable components, prioritizing maintainability and scalability to meet evolving business requirements. I am passionate about continuing to grow professionally, seeking new challenges, and contributing to innovative projects.
            </div>
        </div>
    );
}

export default AboutMeComponent;