import { View, Text, ScrollView,SafeAreaView ,TextInput,TouchableOpacity, Image,FlatList } from 'react-native'
import * as Icon from "react-native-feather";
import Categories from '../components/categories';
import FeatureRow from '../components/featured';

export const categories = [
    {
        id: 1,
        name: 'Pizza',
        image:  require('../image/banner.png')
    },
    {
        id: 2,
        name: 'Burger',
        image:  require('../image/banner.png')
    },
    {
        id: 3,
        name: 'Italian',
        image:  require('../image/banner.png')
    },
    {
        id: 4,
        name: 'Chinese',
        image:  require('../image/banner.png')
    },
    {
        id: 5,
        name: 'Noodles',
        image:  require('../image/empty.png')
    },
    {
        id: 6,
        name: 'Sweets',
        image:  require('../image/empty.png')
    },

]


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
export default function home() {
    return (
      <SafeAreaView className="bg-white" >
   
    {/* search bar */}
        <View className="flex-row items-center space-x-2 px-4 pt-3 pb-2 ">
            <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                <Icon.Search height="25" width="25" stroke="gray" />
                <TextInput placeholder='Resturants' className="ml-2 flex-1" keyboardType='default' />
                <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                    <Icon.MapPin height="20" width="20" stroke="gray" />
                    <Text className="text-gray-600">New York, NYC</Text>
                </View>
            </View>
            <View style={{backgroundColor:'red'}} className="p-3 rounded-full">
                <Icon.Sliders height={20} width={20} strokeWidth="2.5" stroke="white" />
            </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}>
          {/* categories */}
          <Categories />
  
          {/* featured */}
          <View style={{ marginTop: 5 }}>
            {featured.restaurants.map(item => (
              <FeatureRow
                key={item.id}
                title={item.title}
                description={item.description}
                restaurants={item.restaurants}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }