import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RespositoryList from './components/RespositoryList';
import CoinLists from './components/CoinLists';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello</Text> */}
         <CoinLists />
      <StatusBar style="auto" />
    </View>
  );
}

   const styles = StyleSheet.create({
     container: {
       
       backgroundColor: 'black',
    
     },
   });
