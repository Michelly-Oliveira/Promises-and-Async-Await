// Display content on screen
const container = document.querySelector('.container');
const url = `https://api.github.com/users`;

async function fetchUsersAvatars() {
    const response = await fetch(url);
    const users = await response.json();

    container.innerHTML = users.map(user => {
        return `
            <img src="${user.avatar_url}" style="width:100px; height=100px"></img>
        `;
    }).join('');
}

const result = fetchUsersAvatars();
console.log(result);