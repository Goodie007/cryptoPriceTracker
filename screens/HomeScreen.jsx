import { FlatList } from 'react-native';
import CoinLists from '../components/CoinLists';
import cryptocurrencies from '../assets/data/cryptocurrencies.json';



export default function HomeScreen() {
    return (
      
        
        <FlatList 
           data={cryptocurrencies}
           renderItem={ ({ item }) => <CoinLists marketCoin={item} />}
  
        />
       
    );
  }