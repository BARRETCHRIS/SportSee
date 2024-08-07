import React from 'react';




function Home() {
    return <h1>Home Page</h1>;
}

// *** Test fetch ***
// function Home() {
//     const userID = '18'; // Remplacez par l'ID utilisateur souhaité
//     const apiURL = `http://localhost:3000/user/${userID}`;
//     const mockDataURL = './mocked-data/user-main-data.json'; // Remplacez par le chemin vers vos données simulées

//     const { isLoading, apiData, mockedData, errorAPI, errorMocked } = useFetch(apiURL, userID, mockDataURL);

//     if (isLoading) return <p>Loading...</p>;
//     if (errorAPI) return <p>Error fetching API data.</p>;
//     if (errorMocked) return <p>Error fetching mocked data.</p>;

//     return (
//         <div>
//         <h1>User Data</h1>
//         <pre>{JSON.stringify(apiData || mockedData, null, 2)}</pre>
//         </div>
//     );
// }



export default Home;