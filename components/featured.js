import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import ResturantCard from './restaurantcard';

export const featured = {
  id: 1,
  title: 'Hot and Spicy',
  description: 'soft and tender fried chicken',
  restaurants: [
      {
          id: 1,
          name: 'Broadway',
          image:  require('../image/banner.png'),
          description: 'Hot and spicy pizzas',
          lng: -85.5324269,
          lat: 38.2145602,
          address: '434 second street',
          stars: 4,
          reviews: '4.4k',
          
          category: 'Fast Food',
          dishes: [
              {
                 id: 1,
                 name: 'pizza',
                 description: 'cheezy garlic pizza',
                 price: 10,
                 image:  require('../image/banner.png')
              },
              {
                 id: 2,
                 name: 'pizza',
                 description: 'cheezy garlic pizza',
                 price: 10,
                 image:  require('../image/banner.png')
              },
              {
                 id: 3,
                 name: 'pizza',
                 description: 'cheezy garlic pizza',
                 price: 10,
                 image:  require('../image/banner.png')
              },
          ]
  
      },
      {
          id: 2,
          name: 'Papa Johns',
          image:  require('../image/papajohn.png'),
          description: 'Hot and spicy pizzas',
          lng: -85.5324269,
          lat: 38.2145602,
          address: '434 second street',
          stars: 4,
          reviews: '4.4k',
          category: 'Fast Food',
          dishes: [
              {
                 id: 1,
                 name: 'pizza',
                 description: 'cheezy garlic pizza',
                 price: 10,
                 image:  require('../image/banner.png')
              },
              {
                 id: 2,
                 name: 'pizza',
                 description: 'cheezy garlic pizza',
                 price: 10,
                 image:  require('../image/banner.png')
              },
              {
                 id: 3,
                 name: 'pizza',
                 description: 'cheezy garlic pizza',
                 price: 10,
                 image:  require('../image/banner.png')
              },
          ]
  
      },
      {
          id: 3,
          name: 'Papa Johns',
          image:  require('../image/banner.png'),
          description: 'Hot and spicy pizzas',
          lng: -85.5324269,
          lat: 38.2145602,
          address: '434 second street',
          stars: 4,
          reviews: '4.4k',
          category: 'Fast Food',
          dishes: [
              {
                 id: 1,
                 name: 'pizza',
                 description: 'cheezy garlic pizza',
                 price: 10,
                 image:  require('../image/banner.png')
              },
              {
                 id: 2,
                 name: 'pizza',
                 description: 'cheezy garlic pizza',
                 price: 10,
                 image:  require('../image/banner.png')
              },
              {
                 id: 3,
                 name: 'pizza',
                 description: 'cheezy garlic pizza',
                 price: 10,
                 image:  require('../image/banner.png')
              },
          ]
  
      }
  ]
}
export default function FeatureRow({ title, description, }) {
  return (
    <View className= 'px-2'>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 4 }}>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{title}</Text>
          <Text style={{ color: 'gray',  fontWeight: 'bold', fontSize: 18 }}>{description}</Text>
        </View>

        <TouchableOpacity>
          <Text style={{ fontWeight: 'bold' }}>See All</Text>
        </TouchableOpacity>
      </View>
      <View className='flex flex-row'>
        {featured.restaurants.map(restaurant => (
          <ResturantCard
            key={restaurant.id}
            item={restaurant}
           
          />
        ))}
      </View>
      
      
    </View>
  );
}
