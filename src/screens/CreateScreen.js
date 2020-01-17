import React,{ useState, useContext } from 'react'
import { Text, TextInput, View, StyleSheet, Button} from 'react-native'
import { Context } from '../context/BlogContext'

const CreateScreen = ({ navigation }) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const { addBlogPost } = useContext(Context)

    return (
        <View>
            <Text style = {styles.label}>Enter Title :</Text>
            <TextInput 
                style = {styles.input} 
                autoCapitalize = 'none' 
                autoCorrect = { false } 
                value = {title} 
                onChangeText = { (newText) => setTitle(newText)} 
            />
            <Text style = {styles.label}>Enter Content :</Text>
            <TextInput 
                style = {styles.input} 
                autoCapitalize = 'none' 
                autoCorrect = { false} 
                value = {content} 
                onChangeText = { (newContent) => setContent(newContent) } 
            />
            <Button 
                title = 'Add Blog Post' 
                onPress = { () => {
                                    addBlogPost(title, content, () => {
                                        navigation.navigate('Index')
                                    }) 
                                }
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input : {
        fontSize : 16,
        borderWidth : 1,
        borderColor : 'black',
        margin : 10,
        padding : 5
    },
    label : {
        fontSize : 18,
        margin : 10
    }
})

export default CreateScreen