import { View, Text, ScrollView, TouchableOpacity, Image,FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'


import { themeColors } from '../theme';

const categories = [
    {
        id: 1,
        name: 'Pizza',
        image: require('../image/pizza.jpeg'),
    },
    {
        id: 2,
        name: 'Burger',
        image: require('../image/burger.jpg'),
    },
    {
        id: 3,
        name: 'Italian',
        image: require('../image/italian.jpg'),
    },
    {
        id: 4,
        name: 'Chinese',
        image: require('../image/empty.png'),
    },
    {
        id: 5,
        name: 'Noodles',
        image: require('../image/banner.png'),
    },
    {
        id: 6,
        name: 'Sweets',
        image: require('../image/banner.png'),
    },

]

export default function Categories() {
 
  const [activeCategory, setActiveCategory] = useState(null);

  
  return (
    <View className="mt-4">
      <ScrollView
       horizontal
       showsHorizontalScrollIndicator={false}
       className="overflow-visible"
       contentContainerStyle={{
         paddingHorizontal: 15
          }}
      >

{
            categories.map(category=>{
              return(
                <View key={category.id} className="flex justify-center items-center mr-6">
                  <TouchableOpacity>
                  <Image style={{width: 45, height: 45}}
                   source={category.image}     />             
                     <Text className={"text-sm "}>{category.name}</Text>
               
                  </TouchableOpacity>
               
                </View> 
              )
            })
          }
      </ScrollView>
    </View>
    
  )
}