import { useState, useEffect } from 'react';

/**
 * Custom hook for fetching data from an API.
 *
 * This hook handles the data fetching process, including setting loading states, error handling, and data filtering based on the user ID.
 *
 * @param {string} url - The URL endpoint to fetch data from.
 * @param {string|number} userID - The user ID to filter the data if it's an array.
 * @returns {Object} - Returns an object containing:
 *   - {boolean} isLoading - Indicates whether the data is currently being loaded.
 *   - {any} apiData - The data fetched from the API or null if an error occurred or data is not yet fetched.
 *   - {boolean} errorAPI - Indicates whether there was an error during the data fetch.
 */
export function useFetch(url, userID) {
  // State to store the fetched data
  const [apiData, setApiData] = useState(null);
  // State to manage the loading status
  const [isLoading, setLoading] = useState(false);
  // State to manage any errors encountered during fetch
  const [errorAPI, setErrorAPI] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // Set loading state to true before starting fetch
      setLoading(true);
      try {
        // Perform the fetch operation
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        let data = await response.json();

        // If data is an array, filter by userID
        if (Array.isArray(data)) {
          data = data.find(item => item.id === parseInt(userID) || item.userId === parseInt(userID));
        }

        // Set the fetched data to state
        setApiData(data);
      } catch (err) {
        // Log error and set error state
        console.error('Error fetching data:', err);
        setErrorAPI(true);
      } finally {
        // Set loading state to false once fetching is complete
        setLoading(false);
      }
    };

    fetchData();
  }, [url, userID]); // Dependencies: re-fetch if url or userID changes

  return { isLoading, apiData, errorAPI };
}
