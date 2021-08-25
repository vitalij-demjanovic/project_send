const requireUrl = 'https://reqres.in/api/users?page=2'
const userWrapper = document.getElementById('user-wrapper')
let posts = []

const createTemplate = data => {
    console.log(data)
    return template = `
                     <div class="users">
                        <div class="users__info">
                            <h3 class="user__name">${data.first_name} ${data.last_name}</h3>
                            <a href="mailto:${data.email}" class="user__email">${data.email}</a>
                        </div>
                        <div class="users-foto">
                            <img src="${data.avatar}" alt="${data.avatar}" class="users-photo__img">
                        </div>
                    </div>
    `
}

const getPosts = url => {
    fetch(url)
        .then(response => response.json())
        .then(json => {
            posts = json.data
            posts.forEach(item => {
                userWrapper.innerHTML += createTemplate(item)
            })
        })
}

getPosts(requireUrl)





