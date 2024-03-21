const fetchDataFromApi = () => {
    return fetch('https://api.eobusinessclub.com/api/memberships?status=active')
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.error('Error fetching data:', error));
  }
  
  export default fetchDataFromApi;