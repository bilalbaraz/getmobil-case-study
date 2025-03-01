import React from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Icon, Text } from 'react-native-paper';

const RecentSearch = ({ keyword }: any) => (
    <View style={styles.container}>
        <View style={styles.flex1}>
            <Text variant="labelSmall" style={{color: '#373A40'}}>{keyword}</Text>
        </View>
        <View style={styles.flex1}>
            <TouchableOpacity onPress={() => Alert.alert('remove recent search')}>
                <Icon
                    source="close"
                    color={'#373A40'}
                    size={20}
                />
            </TouchableOpacity>
        </View>
    </View>
);

export default RecentSearch;