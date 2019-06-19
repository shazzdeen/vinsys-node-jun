getUser(1, getRepo)

function getRepo(user){
    getRepositories(user.name, getCom)
}

function getCom(repos){
    getComments(repos, showComments)
}

function showComments(comments){
    console.log('SHOWING ', comments)
}



function getUser(id, callback){
    setTimeout(() => {
        console.log('getting a user...')
        callback({id:id, name:'vishal'})
    }, 2000);
}

function getRepositories(username, callback){
    setTimeout(() => {
        console.log('getting repositories...')
        callback(['R1','R2','R3','R4'])
    }, 2000);
}

function getComments(repo, callback){
    setTimeout(() => {
        console.log('getting comments...')
        callback(['C1','C2','C3'])
    }, 2000);
}