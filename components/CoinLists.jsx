import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";



export default function CoinLists ({ marketCoin }) {
   const {
      id,
     name,
     current_price,
     market_cap_rank,
     price_change_percentage_24h,
     symbol,
     market_cap,
     image,
   } = marketCoin;

//   const navigation = useNavigation();

   const percentageColor =
     price_change_percentage_24h < 0 ? 'red' : 'green' || 'white';

   const normalizeMarketCap = (marketCap) => {
     if (marketCap > 1e12) {
       return `${(marketCap / 1e12).toFixed(3)} T`;
     }
     if (marketCap > 1e9) {
       return `${(marketCap / 1e9).toFixed(3)} B`;
     }
     if (marketCap > 1e6) {
       return `${(marketCap / 1e6).toFixed(3)} M`;
     }
     if (marketCap > 1e3) {
       return `${(marketCap / 1e3).toFixed(3)} K`;
     }
     return marketCap;
   };

  return (
      <View style={{backgroundColor: "black"}}>
    <Pressable
     style={styles.coinContainer}
    //   onPress={() => navigation.navigate("CoinDetailedScreen", 
    //     //  {coinId: id}
    //   )}
    >
      <Image
        source={{ uri: image }}
        style={{
          height: 30,
          width: 30,
          marginRight: 10,
          alignSelf: "center",
        }}
      />
      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>{market_cap_rank}</Text>
          </View>
          <Text style={styles.text}>{symbol.toUpperCase()} </Text>
          <AntDesign
            name={price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'}
            size={12}
            color={percentageColor}
            style={{ alignSelf: "center", marginRight: 5, color: "white" }}
          />
          <Text style={{ color: '#fff' }}>
          {price_change_percentage_24h.toFixed(4)}%
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: "auto", alignItems: "flex-end" }}>
        <Text style={styles.title}>{current_price}</Text>
        <Text style={{ color: "white" }}>
          MCap {market_cap}
        </Text>
      </View>
    </Pressable>
    </View>
  );
};
