import React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";




export default function CoinDetailedHeader(props) {
    // const { coinId, image, symbol, marketCapRank } = props;
    
    return (
        <View style={styles.headerContainer}>
           <Ionicons
             name="chevron-back-sharp"
             size={30}
             color="white"
            //  onPress={() => navigation.goBack()}
            />
            <View style={styles.tickerContainer}>
             <Image source={require('../../../../assets/bitcoin.png')} style={{ width: 25, height: 25 }} />
             <Text style={styles.tickerTitle}>BTC</Text>
             <View style={styles.rankContainer}>
             <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
               #1
             </Text>
            </View>
           </View>
            
          

         </View>
    )
}



