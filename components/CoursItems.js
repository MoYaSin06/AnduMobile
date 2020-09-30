

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class CoursItems extends React.Component {
  render() {
    const Cours = this.props.Cours
    return (
      <View style={styles.main_container}>
          <Image
            style={styles.image}
            source={require("../1.png") }
          />
          <View style={styles.date_container}>
          <View style={styles.content_container}>
            <View style={styles.header_container}>
              <Text style={styles.title_text}>title</Text>
              </View>

            <View style={styles.description_container}>
              <Text style={styles.description_text}>numLesson</Text>
              <Text style={styles.date_text}>timeLesson</Text>
                <Text style={styles.icone_text}>Icone</Text>
            </View>
          </View>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 300,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#DCDCDC'

  },
  image: {
    width: 380,
    height: 100,
    marginTop: 30,
    marginHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 5
  },
  content_container: {
    flex: 1,
    margin: 5,

  },
  header_container: {
    flex: 3,
    flexDirection: 'column'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 30,
    flex: 1,
    flexWrap: 'nowrap',
    paddingRight: 5
  },
  icone_text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#666666',
    flex: 1
  },
  description_container: {
    flex: 1,
    flexDirection: 'row'
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    flex: 1

  },
  date_container: {
    flex: 3,
    backgroundColor: '#FFFFFF',
    width: 380,
    marginHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  date_text: {
    textAlign: 'left',
    fontSize: 14,
    flex: 1
  }
})

export default CoursItems
