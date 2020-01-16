import React,{ useContext} from 'react'
import { Text, View, StyleSheet, Button, FlatList} from 'react-native'
import { Context } from '../context/BlogContext'
import { AntDesign } from '@expo/vector-icons'

const IndexScreen = () =>{
  const { state , addBlogPost} = useContext(Context)
  return (
    <View>
      <Button
          title = 'Add BLog Post'
          onPress =  { addBlogPost }
      />
      <FlatList
          data = { state }
          keyExtractor = { (blogPost) => blogPost.title}
          renderItem = { ({ item }) => {
            return (<View style = { styles.row }>
                        <Text style = { styles.text } >{item.title}</Text>
                        <AntDesign name = 'delete' style = { styles.icon } />
                  </View>)
          }}
      />
    </View>
  )
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
