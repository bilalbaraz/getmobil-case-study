import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 10, 
        width: 200, 
        borderWidth: 1, 
        borderColor: 'rgb(220, 222, 237)',
        borderRadius: 8,
        backgroundColor: 'white',
        overflow: 'hidden',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
    },
    imageContainer: {
        height: 150,
        width: '100%',
    },
    image: { 
        height: 150, 
        width: '100%', 
        resizeMode: 'cover' 
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
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: '#007AFF',
    },
    buttonText: {
        color: 'white',
        fontSize: 12,
        fontWeight: '500',
    }
});

export default styles;