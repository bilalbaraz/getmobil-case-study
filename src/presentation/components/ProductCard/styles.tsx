import { StyleSheet, Dimensions } from 'react-native';
import {COLORS} from '../../../constants/colors';

const { width } = Dimensions.get('window');
const cardWidth = width / 2;

const styles = StyleSheet.create({
    container: {
        margin: 5, 
        width: cardWidth - 20, 
        borderWidth: 1, 
        borderColor: 'rgb(220, 222, 237)',
        borderRadius: 8,
        backgroundColor: 'white',
        overflow: 'hidden',
    },
    imageContainer: {
        padding: 5,
    },
    image: { 
        height: 100, 
    },
    contentContainer: {
        padding: 10,
    },
    title: {
        fontSize: 12,
        lineHeight: 15,
        marginBottom: 5,
        fontWeight: '600',
    },
    paragraph: {
        fontSize: 12,
        lineHeight: 16,
        marginBottom: 5,
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 8,
    },
    button: {
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 12,
        fontWeight: '500',
    }
});

export default styles;