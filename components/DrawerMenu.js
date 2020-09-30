import React from 'react'
import { createAppContainer} from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { Header } from 'react-native-elements';
import { View, StyleSheet, InputGroup, Icon, Input, Button, TextInput, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import CoursItems from './CoursItems.js';
import DrawerMenu from "../Icones/drawer.png";
import SearchB from "../Icones/search.png";
import LogoA from "../Icones/LogoA.png";


const DM =() =>{
  return(


<SafeAreaView>
    <TouchableOpacity style={styles.main_BR}>
    <Image source={DrawerMenu} style={styles.main_DM}/>
    <Image source={LogoA} style={styles.main_LA}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.main_container}>

    <TextInput style={styles.textinput} placeholder='Chercher un cours'/>

      </TouchableOpacity>
      </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  main_container: {
    marginTop: 4,

  },
  textinput: {
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 20,
    height: 46,
    backgroundColor: '#EFEFEF',
    borderRadius: 30,
    paddingLeft: 50,

  },
  main_DM: {

    marginLeft: 30,
    marginTop: 5,

  },
  main_BR: {
    marginTop: 20,
    height: 60,
    flexDirection: 'row'
  },
  main_LA:{
    marginLeft: 50
  }
})

export default DM
