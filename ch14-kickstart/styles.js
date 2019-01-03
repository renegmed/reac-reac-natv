import { Platform, StyleSheet, StatusBar } from 'react-native';
 
const styles = StyleSheet.create({
    container: {  
        flex: 1, 
        flexDirection: 'row', 
        flexWrap: 'wrap',
        alignItems: 'center',  
        backgroundColor: 'ghostwhite',
        ...Platform.select({
            ios: { paddingTop: 20 },
            android: { paddingTop: StatusBar.currentHeight }
        })
    },
    box: {
        height: 100,       
        width: 100,
        justifyContent: 'center',  
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