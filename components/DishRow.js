import { View, Text,Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import * as Icon from "react-native-feather";

export default function DishRow(items) {
    const { item } = items; // Destructuring the item prop

    const [price, setPrice] = useState(0);
    const increasePrice = () => {
        setPrice(price + 1);
      };
      const Decraseprice = () => {
        setPrice(price - 1);
      };
    
  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
    <Image className="rounded-3xl" style={{height: 100, width: 100}} source={
    require('../image/empty.png')}/>
    <View className="flex flex-1 space-y-3">
        <View className="pl-3">
            <Text className="text-xl">{item.name}</Text>
            <Text className="text-gray-700">{item.description}</Text>
        </View>
        <View className="flex-row pl-3 justify-between items-center">
            <Text className="text-gray-700 text-lg font-bold">
                ${item.price}
            </Text>
            <View className="flex-row items-center">
                <TouchableOpacity 
                 
                 onPress={Decraseprice
                 }
                    className="p-1 rounded-full" 
                    style={{backgroundColor:'gold' }}>
                    <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white" />
              
                </TouchableOpacity>
                <Text className="px-3">
                    {price}
                </Text>
                
                <TouchableOpacity 
                onPress={increasePrice
                }
                    className="p-1 rounded-full" 
                    style={{backgroundColor: 'gold'}}>
                    <Icon.Plus strokeWidth={2} height={20} width={20} stroke="white" />
                </TouchableOpacity>
            </View>
            
        </View>
    </View>
</View>
  )
}