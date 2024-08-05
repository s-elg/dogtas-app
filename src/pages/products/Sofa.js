import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import sofa_data from '../../data/sofa_data.json'

import Card from '../../components/Card'
import SearchBar from '../../components/SearchBar'
import Navbar from '../../components/Navbar'

export default function Sofa({navigation}) {
  const [list, setList] = useState(sofa_data);

  const renderItem = ({item}) => <Card product = {item}/>;


  const handleSearch = text => {
    const filteredList = sofa_data.filter(product => {
      const searchedText = text.toLowerCase();
      const currentTitle = product.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    })

    setList(filteredList);
  };

  function navigateScreen() {navigation.navigate('MemberInfoScreen')}

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Navbar onPress = {navigateScreen}/>
        <SearchBar onSearch={handleSearch} />
        <FlatList
          keyExtractor={(item) => item.id}
          data={list}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  image: {
    marginLeft: 10,
    marginTop: 15,
  },

  container: {
    backgroundColor: '#eeeeee',
    flex: 1,
  },
})
