import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Icon, Text } from 'react-native-paper';
import { useSearchHistory } from '@hooks/useSearchHistory';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '@navigation/types';

type RecentSearchNavigationProp = NativeStackNavigationProp<HomeStackParamList>;

const RecentSearch = ({ keyword }: any) => {
    const { removeSearchTerm } = useSearchHistory();
    const navigation = useNavigation<RecentSearchNavigationProp>();

    const handleSearchPress = () => {
        navigation.navigate('SearchResult', { searchQuery: keyword });
    };

    return (
        <TouchableOpacity onPress={handleSearchPress}>
            <View style={styles.container}>
                <View style={styles.flex1}>
                    <Text variant="labelSmall" style={styles.textStyle}>{keyword}</Text>
                </View>
                <View style={styles.flex1}>
                    <TouchableOpacity onPress={(e) => {
                        e.stopPropagation();
                        removeSearchTerm(keyword);
                    }}>
                        <Icon
                            source="close"
                            color={'#373A40'}
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default RecentSearch;
