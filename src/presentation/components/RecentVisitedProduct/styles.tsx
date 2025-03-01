import { COLORS } from '@constants/colors';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.25,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.border,
        backgroundColor: COLORS.white,
        padding: 0,
        borderRadius: 5,
        overflow: 'hidden',
        marginLeft: 5
    },
    image: {
        width: '100%', 
        height: Dimensions.get('window').width * 0.25
    },
    titleContainer: {
        position: 'absolute', 
        bottom: 0, 
        left: 0, 
        right: 0, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        padding: 5
    },
    titleText: {
        color: COLORS.white, 
        fontSize: 12, 
        fontWeight: '500'
    },
    flex1: {flex: 1},
});

export default styles;