import { Platform, StyleSheet, StatusBar } from 'react-native';

/*


   Platform.select() code is an example of a case where you need 
   to implement a workaround for differences in the platform. 
   For example, if StatusBar.currentHeight were available on iOS 
   and Android, you wouldn't need to call Platform.select().

   The flex and flexDirection properties of container enable the 
   layout of the rows to flow from top to bottom. 
   
   The alignItems and justifyContent properties align the child elements
   to the center of the container and add space around them, respectively.

*/

const styles = StyleSheet.create({
    container: { 
        // Enables the flex layout model...
        flex: 1,
        // Tells the flexbox to render children
        // from top to bottom
        flexDirection: 'column',
        // Aligns children to the center on the container
        alignItems: 'center',
        // Defines the spacing relative to other children
        justifyContent: 'space-around',
        backgroundColor: 'ghostwhite',
        ...Platform.select({
            ios: { paddingTop: 20 },
            android: { paddingTop: StatusBar.currentHeight }
        })
    },
    box: {
        width: 100,
        height: 100,
        justifyContent: 'center',
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