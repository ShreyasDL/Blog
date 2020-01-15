import React,{ useContext} from 'react'
import { Text, View, StyleSheet, Button, FlatList} from 'react-native'
import BlogContext from '../context/BlogContext'

const IndexScreen = () =>{
  const { data , addBlogPost} = useContext(BlogContext)
  return (
    <View>
      <Text>Hello</Text>
      <Button
          title = 'Add BLog Post'
          onPress =  { addBlogPost }
      />
      <FlatList
          data = { data}
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
