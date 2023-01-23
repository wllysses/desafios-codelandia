async function getPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const response = await fetch(url)
    const data = await response.json()

    showPosts(data.slice(0, 5))
}

function showPosts(posts) {
    const postsList = document.querySelector('.posts-list')

    posts.forEach((post) => {
        postsList.innerHTML += `
            <div class="post-card">
                <div class="post-card-header">
                    <span class="text-muted">02 de jul, 2021</span>
                    <i class="fa-regular fa-heart" onclick="checkFavoritePost(event)"></i>
                </div>
                <div class="post-card-body">
                    <h3>${post.title}</h3>
                    <p class="text-muted">${post.body}</p>
                </div>
            </div>
        `
    })
}

function checkFavoritePost(e) {
    if(e.target.classList.contains('favoritePost')) {
        e.target.classList.remove('favoritePost')
    } else {
        e.target.classList.add('favoritePost')
    }
}

getPosts()