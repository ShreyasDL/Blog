import React,{ useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ navigation}) => {
    
    const { state } = useContext(Context)
    
    const BlogPost = state.find( (BlogPost) => BlogPost.id === navigation.getParam('id') )

    
    return <BlogPostForm type = 'edit' />
}

const styles = StyleSheet.create({
    
})

export default EditScreen