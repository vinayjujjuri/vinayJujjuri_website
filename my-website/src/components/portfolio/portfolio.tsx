import styles from './portfolio.module.css';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function PortfolioComponent() {

    const onClickLink = (link:string) => {
        window.open(link, "_blank")
    }

    const hcccarsProjectCard = () => {
        return (
            <div className={styles.oddContainer}>
                <div>Content Archival & Retrieval System ( CARS )</div>
                <div className={styles.projectDescription}>
                    The Content Archival & Retrieval System (CARS) is a dedicated platform designed to systematically store and retrieve temple data and legacy from its inception. Offering a comprehensive approach to data accessibility, users can efficiently search for information through three distinct flows: Chronological, Event-based, and Adhoc. To ensure the security of sensitive data, CARS employs a Role-Based Access Control (RBAC) system, allowing exclusive access to temple board members. This robust system not only preserves the rich history of the temple but also facilitates efficient and secure data retrieval for authorized users.
                </div>
                <div onClick={()=>onClickLink("https://hccccars.org/")} className={styles.link}>
                    Click here
                    <div><OpenInNewIcon /></div>
                </div>
            </div>
        )
    };

    const mbkProjectCard = () => {
        return (
            <div className={styles.evenContainer}>
                <div>M. Balamurali Krishna Music Portal ( MBK )</div>
                <div className={styles.projectDescription}>
                This Project is a tribute for the Dr. Balamurali Krishna and his musical world. This site is dedicated to Late Dr. M. Balamurali Krishna and his music as a way to facilitate the process of music for posterity by sharing and listening with the next generation.
                </div>
                {/* <div className={styles.link}>
                    Click here
                    <div><OpenInNewIcon /></div>
                </div> */}
            </div>
        )
    };

    const hintsProjectCard = () => {
        return (
            <div className={styles.evenContainer}>
                <div>HINTS 2.0</div>
                <div className={styles.projectDescription}>
                The HINTS 2.0 project is a comprehensive website dedicated to a temple, encompassing devotee management, temple legacy preservation, and event dissemination. Serving as a centralized platform, it facilitates user interaction by providing information about ongoing temple events and allows seamless booking of wedding halls. The implementation of role-based authentication ensures that Temple board members have secure access to sensitive information. Additionally, the project enables users to contribute to the temple's financial sustenance through an integrated donation feature. This multifaceted platform thus enhances both user engagement and administrative efficiency for the temple.
                </div>
                <div onClick={()=>onClickLink("https://livermoretemple.org/")} className={styles.link}>
                    Click here
                    <div><OpenInNewIcon /></div>
                </div>
            </div>
        )
    };

    return (
        <div className={styles.mainContainer}>
        <div className={styles.header}>Projects I have done</div>
        <div className={styles.container}>
            {hcccarsProjectCard()}
            {hintsProjectCard()}
            {mbkProjectCard()}
        </div>
        </div>
    );
}

export default PortfolioComponent;