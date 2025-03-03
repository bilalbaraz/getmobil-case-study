import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '@navigation/types';
import { useSearchHistory } from '@hooks/useSearchHistory';

type PopularSearchNavigationProp = NativeStackNavigationProp<HomeStackParamList>;

const PopularSearch = ({ keyword }: any) => {
    const navigation = useNavigation<PopularSearchNavigationProp>();
    const { addSearchTerm } = useSearchHistory();

    const handleSearchPress = () => {
        addSearchTerm(keyword);
        navigation.navigate('SearchResult', { searchQuery: keyword });
    };

    return (
        <TouchableOpacity onPress={handleSearchPress}>
            <View style={styles.container}>
                <View style={styles.flex1}>
                    <Icon name="search-outline" color="#373A40" size={20} />
                </View>
                <View style={styles.flex1}>
                    <Text variant="labelSmall" style={styles.textStyle}>{keyword}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default PopularSearch;
