import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../components/Fetch';

// Import components - Import des composants
import Chart1 from '../../components/Chart1/Chart1';
import Thumbnail from '../../components/Thumbnail/Thumbnail';


// Import svg - Import des svg
import energy from '../../assets/energy.svg';
import chicken from '../../assets/chicken.svg';
import apple from '../../assets/apple.svg';
import cheesburger from '../../assets/cheesburger.svg';

import './profile.scss';

function Profile() {
    document.title = 'SportSee Profile';
    const { userID } = useParams();

    // URLs API
    const apiMainURL = `http://localhost:3000/user/${userID}`;
    const apiActivityURL = `http://localhost:3000/user/${userID}/activity`;
    const apiAverageSessionsURL = `http://localhost:3000/user/${userID}/average-sessions`;
    const apiPerformanceURL = `http://localhost:3000/user/${userID}/performance`;

    // URLs des données mockées
    const mockMainURL = './mocked-data/user-main-data.json';
    const mockActivityURL = './mocked-data/user-activity.json';
    const mockAverageSessionsURL = './mocked-data/user-average-sessions.json';
    const mockPerformanceURL = './mocked-data/user-performance.json';

    // Fetch des données principales de l'utilisateur
    const {
        isLoading: isLoadingMain,
        apiData: mainData,
        mockedData: mockedMainData,
        errorAPI: errorMainAPI,
        errorMocked: errorMainMocked,
    } = useFetch(apiMainURL, userID, mockMainURL);

    // Fetch des données d'activité
    const {
        isLoading: isLoadingActivity,
        apiData: activityData,
        mockedData: mockedActivityData,
        errorAPI: errorActivityAPI,
        errorMocked: errorActivityMocked,
    } = useFetch(apiActivityURL, userID, mockActivityURL);

    // Fetch des données de Sessions
    const {
        isLoading: isLoadingAverageSessions,
        apiData: averageSessionData,
        mockedData: mockedAverageSessionsData,
        errorAPI: errorAverageSessionsAPI,
        errorMocked: errorAverageSessionsMocked,
    } = useFetch(apiAverageSessionsURL, userID, mockAverageSessionsURL);

    // Fetch des données de performance
    const {
        isLoading: isLoadingPerformance,
        apiData: performanceData,
        mockedData: mockedPerformanceData,
        errorAPI: errorPerformanceAPI,
        errorMocked: errorPerformanceMocked,
    } = useFetch(apiPerformanceURL, userID, mockPerformanceURL);

    // Gestion des erreurs et du chargement
    if (
        isLoadingMain ||
        isLoadingActivity ||
        isLoadingAverageSessions ||
        isLoadingPerformance
    )
        return <p>Loading...</p>;
    if (
        errorMainAPI ||
        errorActivityAPI ||
        errorAverageSessionsAPI ||
        errorPerformanceAPI
    )
        return <p>Error fetching API data.</p>;
    if (
        errorMainMocked ||
        errorActivityMocked ||
        errorAverageSessionsMocked ||
        errorPerformanceMocked
    )
        return <p>Error fetching mocked data.</p>;

    // Sélection des données à afficher (API ou mockées)
    const userData = mainData || mockedMainData;
    const userActivity = activityData || mockedActivityData;
    const userAverageSessions = averageSessionData || mockedAverageSessionsData;
    const userPerformance = performanceData || mockedPerformanceData;
    
    console.log(userPerformance);
    console.log(userPerformance?.data?.data);
    console.log(userPerformance?.data?.kind);

    return (
        <main className='main_profile'>
            <section className="identify">
                <h2 className='identify_title'>
                    Bonjour, <span className='identify_title_name'>{userData?.data?.userInfos?.firstName}</span>
                </h2>
                <p className='identify_congratulat'>
                    Félicitation ! Vous avez explosé vos objectifs hier 👏
                </p>
            </section>
            <section className="charts">
                <article className="chart_container">
                    {userPerformance ? (
                        <Chart1 
                            userPerformance={userPerformance}
                            chartStyles={{
                                backgroundColor: '#2f2f2f', // Gris foncé
                                radarFillColor: '#ff4d4d', // Rouge
                                radarStrokeColor: '#ff4d4d', // Rouge
                                polarGridStrokeColor: '#fff', // Gris foncé pour les lignes de grille
                                polarAngleAxisStrokeColor: '#ccc', // Gris clair pour les axes
                                polarRadiusAxisStrokeColor: '#ccc', // Gris clair pour les axes radiaux
                            }} 
                        />
                    ) : (
                        <p>Loading performance data...</p>
                    )}
                </article>
            </section>
            <section className="asideInfos">
                <Thumbnail 
                    userKeyData={userData?.data?.keyData?.calorieCount}
                    className="fire"
                    alt="Une flamme rouge"
                    unit="Kcal"
                    subtitle="Calories"
                    logo={energy}
                />
                <Thumbnail 
                    userKeyData={userData?.data?.keyData?.proteinCount}
                    className="chicken"
                    alt="Une cuisse de poulet bleu"
                    unit="g"
                    subtitle="Protéïnes"
                    logo={chicken}
                />
                <Thumbnail 
                    userKeyData={userData?.data?.keyData?.carbohydrateCount}
                    className="apple"
                    alt="Une pomme jaune"
                    unit="g"
                    subtitle="Glucides"
                    logo={apple}
                />
                <Thumbnail 
                    userKeyData={userData?.data?.keyData?.lipidCount}
                    className="cheesburger"
                    alt="Un hamburger rouge"
                    unit="g"
                    subtitle="Lipides"
                    logo={cheesburger}
                />
            </section>
        </main>
    );
}

// Définition des PropTypes
Profile.propTypes = {
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
