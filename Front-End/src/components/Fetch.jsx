import { useState, useEffect } from 'react';

/**
 * Custom hook to fetch data from an API, and if it fails, fallback to mocked data.
 *
 * @param {string} urlAPI - The URL of the API.
 * @param {string} userID - The userID for the mocked data.
 * @param {string} urlMockedData - The URL for the mocked data.
 * @returns {Object} An object with the following properties: isLoading, apiData, mockedData, errorAPI, errorMocked
 */
export function useFetch(urlAPI, userID, urlMockedData) {
  const [apiData, setApiData] = useState(null);
  const [mockedData, setMockedData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [errorAPI, setErrorAPI] = useState(false);
  const [errorMocked, setErrorMocked] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async (fetchURL, isDataMocked, errorSetState) => {
      try {
        const response = await fetch(fetchURL);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        if (!isDataMocked) {
          setApiData(data);
        } else {
          if (userID) {
            setMockedData(
              data.find(
                (item) =>
                  item.id === parseInt(userID, 10) ||
                  item.userId === parseInt(userID, 10)
              )
            );
          }
        }
      } catch (err) {
        console.error(err);
        if (urlMockedData) {
          try {
            const responseMocked = await fetch(urlMockedData);
            if (!responseMocked.ok) throw new Error('Network response was not ok');
            const mockData = await responseMocked.json();
            if (userID) {
              setMockedData(
                mockData.find(
                  (item) =>
                    item.id === parseInt(userID, 10) ||
                    item.userId === parseInt(userID, 10)
                )
              );
            } else {
              setMockedData(mockData);
            }
          } catch (mockErr) {
            console.error('Error fetching mocked data:', mockErr);
            errorSetState(true);
          }
        } else {
          errorSetState(true);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData(urlAPI, false, setErrorAPI);

  }, [urlAPI, userID, urlMockedData]);

  return { isLoading, apiData, mockedData, errorAPI, errorMocked };
}
