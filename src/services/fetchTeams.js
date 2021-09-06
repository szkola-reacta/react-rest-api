const { REACT_APP_DB_ID, REACT_APP_API_KEY } = process.env;

// /Teams?view=Grid%20view

// http://localhost:3000/api/teams

// STEP 1: config REST API
const baseUrl = `https://api.airtable.com/v0/${REACT_APP_DB_ID}`;
const apiConfig = {
  teamsList: `${baseUrl}/Teams?view=Grid%20view`,
  teamsDetail: `${baseUrl}/Teams`,
}
const requestConfig = {
  headers: {
    Authorization: `Bearer ${REACT_APP_API_KEY}`,
  }
};

export const fetchTeams = async () => {

    // STEP 2: make request
    const response = await fetch(apiConfig.teamsList, requestConfig);

    // STEP 3: get data
    const responseData = await response.json();

    // STEP 4: make new structure
    const data = [];
    responseData.records.forEach((elem) => {
      data.push({
        id: elem.id,
        name: elem.fields.Name,
        airport_city: elem.fields.Base_airport_city,
      });
    });

    return data;
}