import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { Text, Title } from 'react-native-paper';
import RecentSearch from '@components/RecentSearch';
import styles from './styles';
import { useSearchHistory } from '@hooks/useSearchHistory';

const SearchHistory = () => {
  const { searchHistory, isLoading, error, clearSearchHistory } = useSearchHistory();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Title style={styles.title}>Geçmiş Aramalarım</Title>
        </View>
        <View style={styles.clearButtonContainer}>
          <TouchableOpacity onPress={() => clearSearchHistory}>
            <Text style={styles.clearButtonText}>Tümünü Temizle</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <FlatList
          data={searchHistory ?? []}
          horizontal
          renderItem={({item}) => <RecentSearch keyword={item} />}
        />
      </View>
    </View>
  );
};

export default SearchHistory;
