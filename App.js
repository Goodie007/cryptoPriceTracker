import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import CoinDetailedScreen from './screens/CoinDetailedScreen';




export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      <CoinDetailedScreen />
      <StatusBar style="auto" />
    </View>
  );
}

   const styles = StyleSheet.create({
     container: {
       
       backgroundColor: 'white',
    
     },
   });
