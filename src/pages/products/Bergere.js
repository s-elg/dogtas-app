import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import bergere_data from '../../data/bergere_data.json'

import Card from '../../components/Card'
import SearchBar from '../../components/SearchBar'

export default function App() {
  const [list, setList] = useState(bergere_data);

  const renderItem = ({item}) => <Card product = {item}/>;


  const handleSearch = text => {
    const filteredList = bergere_data.filter(product => {
      const searchedText = text.toLowerCase();
      const currentTitle = product.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    })

    setList(filteredList);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Image source={require('../../../assets/logo.png')} style={styles.image} />
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
