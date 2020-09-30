import React from 'react'
import { View, TextInput, SafeAreaView, StatusBar, FlatList } from 'react-native'
import Cours from './Cours'
import CoursItems from './CoursItems'
import DM from './DrawerMenu'
import data from './Cours.js'
class Search extends React.Component{
  render(){
    return(
      <SafeAreaView>
        <DM/>
        <FlatList
        data = {data}
        renderItem= {({item})=> <CoursItems cours= {item}/>}
        keyExtractor={item => item.id}
        />
      </SafeAreaView>
    )
  }
}
export default Search
