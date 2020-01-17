import React,{ useContext, useState} from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'

const EditScreen = ({ navigation}) => {
    
    const { state } = useContext(Context)
    
    const BlogPost = state.find( (BlogPost) => BlogPost.id === navigation.getParam('id') )

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    
    return (
        <View>
            <Text style = { styles.label }>Blog Title :</Text>
            <TextInput
                style = { styles.input } 
                autoCapitalize = 'none'
                autoCorrect = { false }
                value = { BlogPost.title }
            />
            <Text style = { styles.label } >Blog Content :</Text>
            <TextInput
                style = { styles.input }
                autoCapitalize = 'none'
                autoCorrect = { false }
                value = { BlogPost.content }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input : {
        fontSize : 16,
        borderWidth : 1,
        borderColor : 'black',
        padding : 10,
        margin : 10
    },
    label : {
        fontSize : 18,
        margin : 10
    }
})

export default EditScreen