import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import crypto from '../../assets/data/crypto.json';
import CoinDetailedHeader from './components/CoinDetailedHeader';






export default function CoinDetailedScreen() {
    // const {
    //     id,
    //     image: { small },
    //     name,
    //     symbol,
    //     market_data: {
    //       market_cap_rank,
    //       current_price,
    //       price_change_percentage_24h,
    //     },
    //   } = coin;


    return (
        <View>
           <CoinDetailedHeader />
        </View>
       
    );
  };