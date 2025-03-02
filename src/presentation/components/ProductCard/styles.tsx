import { StyleSheet, Dimensions } from 'react-native';
import {COLORS} from '@constants/colors';

const { width } = Dimensions.get('window');
const cardWidth = width / 2.2;

const styles = StyleSheet.create({
    container: {
        margin: 5,
        width: cardWidth - 20,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 8,
        backgroundColor: COLORS.white,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: 260, 
    },
    imageContainer: {
        padding: 0,
        position: 'relative',
    },
    image: {
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        height: 120,
    },
    favoriteButton: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: COLORS.white,
        borderColor: COLORS.border,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    contentContainer: {
        padding: 10,
        flex: 1,
        height: 80, 
    },
    title: {
        fontSize: 12,
        lineHeight: 15,
        marginBottom: 5,
        fontWeight: '600',
        height: 30, 
    },
    paragraph: {
        fontSize: 12,
        lineHeight: 10,
        marginBottom: 5,
    },
    actionsContainer: {
        flexDirection: 'row',
        padding: 8,
        marginTop: 'auto',
    },
    button: {
        borderColor: COLORS.primary,
        borderRadius: 5,
        flex: 1,
    },
    buttonText: {
        fontSize: 12,
        fontWeight: '500',
    }
});

export default styles;