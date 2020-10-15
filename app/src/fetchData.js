export const fetchData = (url, onSuccess, onError) => {
  const proxyUrl = `https://cors-anywhere.herokuapp.com/${url}`;

  fetch(proxyUrl).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return onError('error');
  })
    .then((responseJson) => {
      onSuccess(responseJson);
    })
    .catch((error) => {
      onError(error);
    });
};

export default fetchData;
