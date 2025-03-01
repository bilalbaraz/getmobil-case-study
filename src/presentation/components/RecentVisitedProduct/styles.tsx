import { COLORS } from '@constants/colors';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.border,
        backgroundColor: COLORS.white,
        padding: 5,
        marginLeft: 5
    },
    flex1: {flex: 1},
});

export default styles;