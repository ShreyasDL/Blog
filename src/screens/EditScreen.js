import React,{ useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ navigation}) => {
    const id = navigation.getParam('id')
    const { state, editBlogPost } = useContext(Context)
    
    const BlogPost = state.find( (BlogPost) => BlogPost.id === id )

    
    return <BlogPostForm
                initialValues = { {title : BlogPost.title, content : BlogPost.content} }
                onSubmit = { (title, content) => {
                    editBlogPost(id,title,content, () => navigation.pop() )
                }}
            />
}

const styles = StyleSheet.create({
    
})

export default EditScreen