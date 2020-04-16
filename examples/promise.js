// Display content on screen
const container = document.querySelector('.container');
// API to get data from
const url = `https://api.github.com/users`;

function fetchUsersAvatars() {
    // Returns a promise
    return fetch(url)
        // Stream object = A stream represents a sequence of objects (usually bytes, but not necessarily so)
        // response is a Stream object, which means that when we call the json() method, a Promise is returned since the reading of the stream will happen asynchronously
        // Returns a promise that will resolve into the actual data
        .then(response => response.json())
        // Here we get the actual data that we can work with
        .then(users => {
            // Loop through the users array
            container.innerHTML = users.map(user => {
                // For each user create an image html element with the avatar url as the source
                return `
                    <img src="${user.avatar_url}" style="width:100px; height=100px"></img>
                `;
            }).join('');
        })
}

// Returns a promise that resolves into the avatars of the users
const result = fetchUsersAvatars();
console.log(result)
