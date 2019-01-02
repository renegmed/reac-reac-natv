import { Platform, StyleSheet, StatusBar } from 'react-native';
 
const styles = StyleSheet.create({
    container: {  
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-around',
        backgroundColor: 'ghostwhite',
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
        borderColor: 'darkslategray'
    },
    boxText: {
        color: 'darkslategray',
        fontWeight: 'bold'
    }    
});

export default styles;