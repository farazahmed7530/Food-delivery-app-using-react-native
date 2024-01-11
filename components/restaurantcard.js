import { View, Image, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import React from 'react';
import { HeartIcon, StarIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';


export default function RestaurantCard({ item }) {
  const navigation = useNavigation();
  const handle = () => {
    navigation.navigate('Restaurantscreen', { item }); 
  }

  return (
    <TouchableWithoutFeedback>
       <TouchableOpacity onPress={handle}>

      <View className="mr-6 bg-white rounded-3xl shadow-lg">
        <Image
          className="h-36 w-64 rounded-t-3xl"
          source={require('../image/empty.png')}
        />

<View className="px-3 pb-4 space-y-2">
         
         <Text className="text-lg font-bold pt-2">{item.name}</Text>
         <View className="flex-row items-center space-x-1">
         <TouchableOpacity  >



      <StarIcon size="20" style={{color:"gold"}} />
    </TouchableOpacity>
             <Text className="text-xs">
                 <Text className="text-green-700">{item.stars}</Text>
                 <Text className="text-gray-700"> ({item.reviews} review)</Text> · <Text className="font-semibold text-gray-700">{item.category}</Text>
             </Text>
         </View>

        </View>
      </View>
   </TouchableOpacity>
    </TouchableWithoutFeedback>
  );
}
