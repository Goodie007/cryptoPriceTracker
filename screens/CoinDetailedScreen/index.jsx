import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import crypto from '../../assets/data/crypto.json'






export default function CoinDetailedScreen() {
    return (
        <View>
            <Text>Detailed Screen </Text>
            <Ionicons name="chevron-back-sharp" size={24} color="black" />
            <Image source={{ uri: small}} style={{width: 60, height: 60}} />
        </View>
       
    );
  };