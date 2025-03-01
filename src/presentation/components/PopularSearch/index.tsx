import React from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const PopularSearch = ({ keyword }: any) => (
    <TouchableOpacity onPress={() => Alert.alert('click popular search')}>
        <View style={styles.container}>
            <View style={styles.flex1}>
                <Icon name="search-outline" color="#373A40" size={20} />
            </View>
            <View style={styles.flex1}>
                <Text variant="labelSmall" style={{color: '#373A40'}}>{keyword}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

export default PopularSearch;