

export const  fetchData = (url, onSuccess, onError) => {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = url

    fetch(proxyUrl + targetUrl).then((response) => {
        if (response.ok) return response.json();
    })
    .then((responseJson) => {
        onSuccess(responseJson)
    })
    .catch((error) => {
        onError(error)
    });
}
