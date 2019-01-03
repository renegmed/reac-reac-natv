import { Platform, StyleSheet, StatusBar } from 'react-native';
 
const styles = StyleSheet.create({
    container: {  
        flex: 1, 
        flexDirection: 'row',  
        alignItems: 'center',  
        backgroundColor: 'ghostwhite',
        justifyContent: 'space-around',
        ...Platform.select({
            ios: { paddingTop: 20 },
            android: { paddingTop: StatusBar.currentHeight }
        })
    },
    box: {
        width: 100,
        justifyContent: 'center',  
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: 'darkslategray',
        margin: 10
    },
    boxText: {
        color: 'darkslategray',
        fontWeight: 'bold'
    }    
});

export default styles;