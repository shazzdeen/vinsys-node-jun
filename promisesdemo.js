// const myPromise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         reject('some error')
//     }, 5000);
// })

// myPromise
//     .then((data)=>{
//         console.log(data)
//     })
//     .catch((error)=>console.log(error))

// getUser(1, getRepo)

// function getRepo(user){
//     getRepositories(user.name, getCom)
// }

// function getCom(repos){
//     getComments(repos, showComments)
// }

// function showComments(comments){
//     console.log('SHOWING ', comments)
// }

// getUser(1)
//     .then((user)=>{
//         console.log('getting user data ...', user)
//         return getRepositories(user)
//     })
//     .then((repos)=>{
//         console.log('getting repositories...', repos)
//         return getComments(repos)
//     })
//     .then((comments)=>{
//         console.log('gettting comments...', comments)
//     })
//     .catch(ex=>console.log(ex))

async function demo(){
    try{
        const user = await  getUser(1)
        console.log('getting user...', user)

        const repos = await getRepositories(user)
        console.log('getting repositories...', repos)

        const comments = await getComments(repos)
        console.log('getting comments...', comments)
    }catch(ex){
        console.log(ex)
    }
}

demo();




function getUser(id){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({id:id, name:'vishal'})
        }, 2000);
    })

    
}

function getRepositories(user){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(['R1','R2','R3','R4'])
            // reject('error gettting repositories...')
        }, 3000);

    })
}

function getComments(repo){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(['C1','C2','C3'])
        }, 4000);
    })
}