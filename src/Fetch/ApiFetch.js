const getApiData = async (queryString) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}&${queryString}`
  );
  return response;
};

export default getApiData;
