const posts = [
    { title: 'Post one', body: 'This is post one' },
    { title: 'Post two', body: 'This is post two' }
];



function getPosts() {
    return new Promise(function(resolve) {
        setTimeout(() => {
            let output = '';
                for(let i=0;i<posts.length;i++) {
                    output += `<li>${posts[i].title} </li>`
                }
                document.body.innerHTML = output;
            resolve();
        }, 3000)
    })

}

function createPost(post) {
   return new Promise((resolve) => {
    setTimeout(() => {
        posts.push(post)
        resolve();
    },1000)
   })
}

async function displayPosts() {
    const newPost = await createPost({ title: 'Post three', body: 'This is post three' });
    const showPosts = await getPosts();
}

displayPosts();

