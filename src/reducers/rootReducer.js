const initState = {
    posts: [
        {id: '1', title: 'Tittle' , body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet deleniti asperiores et labore aliquam unde, laborum cupiditate atque eligendi architecto saepe, tempore odit veniam harum blanditiis eos, nulla voluptatem mollitia."}
    ,{id: '2', title: 'Tittle' , body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet deleniti asperiores et labore aliquam unde, laborum cupiditate atque eligendi architecto saepe, tempore odit veniam harum blanditiis eos, nulla voluptatem mollitia."}
    ,{id: '3', title: 'Tittle' , body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet deleniti asperiores et labore aliquam unde, laborum cupiditate atque eligendi architecto saepe, tempore odit veniam harum blanditiis eos, nulla voluptatem mollitia."}
    
    ]
}
const rootReducer = (state = initState, action) => {
    console.log(action)
    if (action.type === 'DELETE_POST') {
        const newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })
        return {
            ...state,
            posts: newPosts
        }
    }
    return state
}

export default rootReducer