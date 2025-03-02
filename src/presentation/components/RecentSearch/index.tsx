import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Icon, Text } from 'react-native-paper';
import { useSearchHistory } from '@hooks/useSearchHistory';

const RecentSearch = ({ keyword }: any) => {
    const { removeSearchTerm } = useSearchHistory();
    
    return (
        <View style={styles.container}>
            <View style={styles.flex1}>
                <Text variant="labelSmall" style={{color: '#373A40'}}>{keyword}</Text>
            </View>
            <View style={styles.flex1}>
                <TouchableOpacity onPress={() => removeSearchTerm(keyword)}>
                    <Icon
                        source="close"
                        color={'#373A40'}
                        size={20}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RecentSearch;