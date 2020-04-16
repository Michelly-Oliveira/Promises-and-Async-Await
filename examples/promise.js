// Display content on screen
const container = document.querySelector('.container');
const url = `https://api.github.com/users`;

function fetchUsersAvatars() {
    return fetch(url)
        .then(response => response.json())
        .then(users => {
            container.innerHTML = users.map(user => {
                return `
                    <img src="${user.avatar_url}" style="width:100px; height=100px"></img>
                `;
            }).join('');
        })
}

const result = fetchUsersAvatars();
console.log(result)