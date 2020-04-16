// Display content on screen
const container = document.querySelector('.container');
const url = `https://api.github.com/users`;

async function fetchUsersAvatars() {
    // Await stops the program until the promise resolves
    // response is a promise that will resolve into the actual data
    const response = await fetch(url);
    // Here we get the actual data that we can work with
    const users = await response.json();

    // Loop through the users array 
    container.innerHTML = users.map(user => {
        // For each user create an image html element and make the source the avatar url
        return `
            <img src="${user.avatar_url}" style="width:100px; height=100px"></img>
        `;
    }).join('');
}

// Returns a promise that resolves into the users avatars
const result = fetchUsersAvatars();
console.log(result);
