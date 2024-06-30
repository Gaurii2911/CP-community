// Retrieve data from localStorage
// localStorage.getItem(alert("user not found"));
const storedData = localStorage.getItem('userData');
const userData = JSON.parse(storedData);

if (userData) {
    // Display the data on the second page
    const userInfoDiv = document.getElementById('value1');
    userInfoDiv.innerHTML = `
${userData.result[0].titlePhoto ? `<img src="${userData.result[0].titlePhoto}" alt="Title Image" width="300px" height="280px"> ` : ''}
    <p>Username: ${userData.result[0].handle}</p>
<p id="name">Name: ${userData.result[0].firstName} ${userData.result[0].lastName}</p>
<p id="rate">Rating: ${userData.result[0].rating}</p>

<!-- Add more properties as needed -->
`;

}


