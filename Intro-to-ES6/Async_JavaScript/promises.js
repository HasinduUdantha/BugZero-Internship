const posts = [
    {title: 'Post One',  body: 'This is post One'},
    {title: 'Post Two', body: 'This is post Two'}
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000)
};

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = true;

            if(!error){
                resolve();
            }else {
                reject('Error: Something went wrong');
            }
        },2000);
    });
}

// createPost({ title: 'Post Three', body: 'This is post Three ' })
// .then(getPosts)
// .catch(err => console.log(err));


// // Async / Await 
async function init(){
    createPost({ title: 'Post Three', body: 'This is post Three ' })
    getPosts();
}

init();
// // Promise.all

// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
// setTimeout(resolve, 2000, 'gOODBYE')
// );

// Promise.all([promise1,promise2,promise3]).then(values => console.log(values));



