import React,{ useContext, useEffect} from 'react'
import { Text, View, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { AntDesign } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) =>{
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context)

  useEffect( () => {
      getBlogPosts()

      const listener = navigation.addListener('didFocus', () => {
        getBlogPosts()
      })

      return () =>{
        listener.remove()
      }


  },[]) // [] specifies that we need to call our arrow function only one time i.e, when the first the screen rendered


  return (
    <View>
      <FlatList
          data = { state }
          keyExtractor = { (blogPost) => blogPost.title}
          renderItem = { ({ item }) => {
            return (
                    <TouchableOpacity onPress = { () => navigation.navigate('Show', {id : item.id }) }>
                      <View style = { styles.row }>
                        <Text style = { styles.text }>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress = { () => deleteBlogPost(item.id) }>
                                    <AntDesign name = 'delete' style = { styles.icon } />
                                </TouchableOpacity>
                      </View>
                    </TouchableOpacity>
                      
                      )
          }}
      />
    </View>
  )
}

// Configuring Header Options

IndexScreen.navigationOptions = ({ navigation }) => {
      return {
        headerRight : () => <TouchableOpacity onPress = { () => navigation.navigate('Create') }>
                              <AntDesign name = 'plus' size = {30} />
                            </TouchableOpacity>
                            
      }
}

const styles = StyleSheet.create({
  row : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    margin : 10,
    padding : 10,
    borderBottomWidth : 1,
    borderBottomColor : 'grey'
  },
  text :{
    fontSize : 16
  },
  icon :{
    fontSize : 25
  }
})

export default IndexScreen
