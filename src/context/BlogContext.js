import createDataContext from './createDataContext'

const BlogReducer = (state,action) => {
    // state === { title : 'Blog Post #number }
    // action ==== { type : 'add_blogpost' || }
    switch(action.type) {
        case 'add_blogpost' :
            return [ ...state, { title : `Blog Post #${ state.length + 1}`}]
        default : 
            return state 

    }

}
const addBlogPost = (dispatch) => {
    return () => {
    dispatch({ type : 'add_blogpost'})
    }
}

export const { Context , Provider } = createDataContext(BlogReducer , { addBlogPost }, [])