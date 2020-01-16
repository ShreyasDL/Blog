import React,{ useContext} from 'react'
import { Text, View, StyleSheet, Button, FlatList} from 'react-native'
import { Context } from '../context/BlogContext'

const IndexScreen = () =>{
  const { state , addBlogPost} = useContext(Context)
  return (
    <View>
      <Text>Hello</Text>
      <Button
          title = 'Add BLog Post'
          onPress =  { addBlogPost }
      />
      <FlatList
          data = { state }
          keyExtractor = { (blogPost) => blogPost.title}
          renderItem = { ({ item }) => {
            return <Text>{item.title}</Text>
          }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default IndexScreen
