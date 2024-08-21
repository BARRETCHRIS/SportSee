import PropTypes from 'prop-types';
import { useFetch } from '../../services/Fetch';
import { useUserSelector } from '../../context/UserSelector';

// Import components
import ChartsWrap from '../../components/ChartsWrap/ChartWrap';
import ActivityChart from '../../components/ActivityChart/ActivityChart';
import AverageChart from '../../components/AverageChart/AverageChart';
import PerfChart from '../../components/PerfChart/PerfChart';
import ScoreChart from '../../components/ScoreChart/ScoreChart';
import Thumbnail from '../../components/Thumbnail/Thumbnail';

// Import svg
import energy from '../../assets/energy.svg';
import chicken from '../../assets/chicken.svg';
import apple from '../../assets/apple.svg';
import cheesburger from '../../assets/cheesburger.svg';

import './profile.scss';

// switch type of data used
const useMockedData = true;

/**
 * Render the user profile page for the SportSee application.
 *
 * This component sets the document title to 'SportSee Profile', fetches data from various endpoints based on the selected user ID, and displays user-specific charts and information.
 *
 * @component
 * @category Pages
 * @returns { React.Element } A React component
 */

function Profile() {
    // Get the selected user ID from the context
    const { selectedUserID } = useUserSelector();

    // Set the document title for the profile page
    document.title = 'SportSee Profile';

    // Define API endpoints
    let apiMainURL = `http://localhost:3000/user/${selectedUserID}`;
    let apiActivityURL = `http://localhost:3000/user/${selectedUserID}/activity`;
    let apiAverageSessionsURL = `http://localhost:3000/user/${selectedUserID}/average-sessions`;
    let apiPerformanceURL = `http://localhost:3000/user/${selectedUserID}/performance`;
    // Use mocked data if specified
    if (useMockedData) {
        apiMainURL = `/mocked-data/user-main-data.json`;
        apiActivityURL = `/mocked-data/user-activity.json`;
        apiAverageSessionsURL = `/mocked-data/user-average-sessions.json`;
        apiPerformanceURL = `/mocked-data/user-performance.json`;   
    }

    // Fetch the main user data    
    const {
        isLoading: isLoadingMain,
        apiData: mainData,
        errorAPI: errorMainAPI,
    } = useFetch(apiMainURL, selectedUserID);

    // Fetch user activity data
    const {
        isLoading: isLoadingActivity,
        apiData: activityData,
        errorAPI: errorActivityAPI,
    } = useFetch(apiActivityURL, selectedUserID);

    // Fetch average session data
    const {
        isLoading: isLoadingAverageSessions,
        apiData: averageSessionData,
        errorAPI: errorAverageSessionsAPI,
    } = useFetch(apiAverageSessionsURL, selectedUserID);

    // Fetch performance data
    const {
        isLoading: isLoadingPerformance,
        apiData: performanceData,
        errorAPI: errorPerformanceAPI,
    } = useFetch(apiPerformanceURL, selectedUserID);

    // Handle loading and error states
    if (
        isLoadingMain ||
        isLoadingActivity ||
        isLoadingAverageSessions ||
        isLoadingPerformance
    )     
        return(
            <main>
                <p>Loading...</p>;
            </main>
        ) 

    if (
        errorMainAPI ||
        errorActivityAPI ||
        errorAverageSessionsAPI ||
        errorPerformanceAPI
    )
        return(
            <main>
                <h2>Erreur 500<br />Oups! Nous rencontrons un problème technique.<br />Merci de revenir ultérieurement</h2>
                <h2>Error 500<br />Oops! We are experiencing a technical problem.<br />Please try again later</h2>

            </main>
        )
            

    // Sélection des données à afficher (API ou mockées)
    const userData = mainData;
    const userActivity = activityData;
    const userAverageSessions = averageSessionData;
    const userPerformance = performanceData;

    //  Chargement des données selon les besoins
    let user = userData
    let activity = userActivity;
    let average = userAverageSessions;
    let performData = userPerformance;
    if(!useMockedData){
        user = userData?.data;
        activity = userActivity?.data;
        average = userAverageSessions?.data;
        performData = userPerformance?.data;
    }

    console.log(user);

    return (
        <>
            {!isLoadingMain && userData && (
                <main className='main_profile'>
                    <section className="identify">
                        <h2 className='identify_title'>
                            Bonjour, <span className='identify_title_name'>{user.userInfos.firstName}</span>
                        </h2>
                        <p className='identify_congratulat'>
                            Félicitation ! Vous avez explosé vos objectifs hier 👏
                        </p>
                    </section>
                    <section className='stats'>
                        <article className="charts_appendix">
                            {!isLoadingActivity && userActivity && (
                                <ChartsWrap
                                    className="activity"
                                    content={
                                        <ActivityChart 
                                            data={activity.sessions}
                                        />
                                    }
                                />
                            )}
                            {!isLoadingAverageSessions && userAverageSessions && (
                                <ChartsWrap
                                    className="average"
                                    content={
                                        <AverageChart 
                                            data={average.sessions}
                                        />
                                    }
                                />
                            )}
                            {!isLoadingPerformance && userPerformance && (
                                <ChartsWrap 
                                    className="performance"
                                    content={
                                        <PerfChart
                                            data={performData}
                                        />
                                    }
                                />
                            )}
                            {!isLoadingMain && userData && (
                                <ChartsWrap 
                                    className="score"
                                    content={
                                        <ScoreChart
                                            data={user}
                                        />
                                    }
                                />
                            )}
                        </article>
                        <article className="asideInfos">
                            <Thumbnail
                                userKeyData={user.keyData.calorieCount}
                                className="fire"
                                alt="Une flamme rouge"
                                unit="Kcal"
                                subtitle="Calories"
                                logo={energy}
                            />
                            <Thumbnail
                                userKeyData={user.keyData.proteinCount}
                                className="chicken"
                                alt="Une cuisse de poulet bleu"
                                unit="g"
                                subtitle="Protéïnes"
                                logo={chicken}
                            />
                            <Thumbnail
                                userKeyData={user.keyData.carbohydrateCount}
                                className="apple"
                                alt="Une pomme jaune"
                                unit="g"
                                subtitle="Glucides"
                                logo={apple}
                            />
                            <Thumbnail
                                userKeyData={user.keyData.lipidCount}
                                className="cheesburger"
                                alt="Un hamburger rouge"
                                unit="g"
                                subtitle="Lipides"
                                logo={cheesburger}
                            />
                        </article>
                    </section>
                </main>
            )}
        </>
    );
}

// Définition des PropTypes
Profile.propTypes = {
    /**
     * User data fetched from the API
     * Includes user information and key metrics
     */
    userData: PropTypes.shape({
        data: PropTypes.shape({
            id: PropTypes.number.isRequired,
            userInfos: PropTypes.shape({
                firstName: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }),
};

export default Profile;