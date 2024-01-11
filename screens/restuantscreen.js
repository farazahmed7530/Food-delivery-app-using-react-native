import { View, Text,ScrollView,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { colors } from '..'
import * as Icon from "react-native-feather";
import DishRow from '../components/DishRow'

export default function Restuantscreen({ route }) {
  const { item } = route.params;
 const navigation=useNavigation()
  return (
    <ScrollView  >
    <View className="relative">
        <Image className="w-full h-72" source={require('../image/empty.png')} />
        <TouchableOpacity 
            onPress={()=>navigation.goBack()} 
            className="absolute top-15 bg-gray-50  p-2 rounded-full shadow">
            <ChevronLeftIcon color={colors.button} size={30} />
        </TouchableOpacity>
    </View>
    <View 
        style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}} 
        className="bg-white -mt-12 pt-6">
        <View className="px-5">
            <Text className="text-3xl  font-bold">{item.name}</Text>
            <View className="flex-row space-x-2 my-1">
                <View className="flex-row items-center space-x-1">
                    <Image 
                        source={require('../image/empty.png')} 
                        className="h-4 w-4" />
                    <Text className="text-xs">
                        <Text className="text-green-700">{item.rating}</Text>
                        <Text className="text-gray-700"> (4.6k review)</Text> · <Text className="font-semibold text-gray-700">{item.type}</Text>
                    </Text>
                </View>
                <View className="flex-row items-center space-x-1">
                    <Icon.MapPin color="gray" width={15} height={15} />
                    <Text className="text-gray-800 text-xs"> Nearby · {item.address}</Text>
                </View>
            </View>
            <Text className="text-gray-500 mt-2">{item.description}</Text>
            
            
        </View>
        
    </View>
    <View className="pb-36 bg-white">
                <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
                {
                    item.dishes.map((dish,index)=>{
                        return (
                            <DishRow 
                            key={{index}}
                            item={{...dish}}
                                
                            />
                        )
                    })
                }
            </View>
    </ScrollView>
  );
}