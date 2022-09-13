import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// sepet sağ üst headerShownaram saydım altında cizgi ürün veya kateori ara  , hadiseyi büyüt kahregengi gitsin ,yazı tipini değiştir yumusaş olsun
import Home from './views/product/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from './views/product/Cart';

import Favorite from './views/product/Favorite';
import Profile from './views/product/Profile';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';

import { DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer';
import Magaza from './views/product/Magaza';

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator   >
      <HomeStack.Screen name="Drawer" component={Home} />
      <HomeStack.Screen name="Cart" component={Cart} options={{}} />
      <HomeStack.Screen name="Magaza" component={Magaza} options={{}} />
      <HomeStack.Screen name="Favorite" component={Favorite} options={{}} />
      <HomeStack.Screen name="Profile" component={Profile} options={{}} />
      <HomeStack.Screen name="DrawerScreen" component={DrawerScreen} options={{}} />
    </HomeStack.Navigator>
  );
}
const Drawer = createDrawerNavigator();
const DrawerScreen = ({ navigation }) => {
  return (
    <Drawer.Navigator drawer screenOptions={{
      drawerStyle: { width: 300 },
    }} drawerContent={props => <CustomDrawer {...props} />} >
      <Drawer.Screen name="Home" options={{
        headerRight: () => (
          <TouchableOpacity  >
            <Icon style={{ paddingRight: 15 }} name="cart-outline" size={30} color="black" />
          </TouchableOpacity>
        ), drawerItemStyle: { height: 0 }, title: '',
        headerStyle: { backgroundColor: 'white', elevation: 0 }, headerTintColor: 'black'
      }} component={Home} />
    </Drawer.Navigator>
  )
}

const DrawerScreen2 = ({ navigation }) => {
  return (
    <Drawer.Navigator drawer screenOptions={{
      drawerStyle: { width: 300 },
    }} drawerContent={props => <CustomDrawer {...props} />} >
      <Drawer.Screen name="Magaza" options={{
        headerRight: () => (
          <TouchableOpacity drawer  screenOptions={{
            drawerStyle: { width: 300 },
          }} drawerContent={props => <CustomDrawer2 {...props} />} >
            <Icon style={{ paddingRight: 15 }} name="cart-outline" size={30} color="black" />
          </TouchableOpacity>
        ), drawerItemStyle: { height: 0 }, title: '',
        headerStyle: { backgroundColor: 'white', elevation: 0 }, headerTintColor: 'black'
      }} component={Magaza} />

    </Drawer.Navigator>
  )
}

const CustomDrawer = props => {
  return (
    <View style={{ flex: 1, }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 20,
            height: 160,
            backgroundColor: '#3E93D6',
          }}
        >
          <View style={{
            flexDirection: "row"
          }}>
            <Icon style={{ color: "black", backgroundColor: "white", borderRadius: 100 }} name="person-circle-outline" size={50} ></Icon>
            <View style={{
              paddingLeft: 10,
              flexDirection: "column"
            }}><Text style={{ color: "white", fontSize: 22 }}>John Doe</Text>
              <Text style={{ color: "white" }}>example@email.com</Text>
            </View>
          </View>
        </View>
        <View>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
          left: 0,
          top: 170,
          padding: 20,
        }}
      >
        <Text style={{ color: "black", fontSize: 20 }}>Tema Ayarlarını Sıfırla</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
          left: 0,
          top: 220,
          padding: 20,
        }}
      >
        <Text style={{ color: "black", fontSize: 20 }}>Tema Ayarları</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
          left: 0,
          top: 270,
          padding: 20,
        }}
      >
        <Text style={{ color: "black", fontSize: 20 }}>Dil Seçeneği</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 10,
          padding: 20,
        }}
      >
        <Text style={{ color: "black", fontSize: 20 }}>Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

 const CustomDrawer2 = props => {
   return (
     <View style={{ flex: 1, }}>

     <TouchableOpacity
         style={{
          position: 'absolute',
           right: 0,
           left: 0,
           top: 30,
           padding: 20,
           backgroundColor:"#DEDEDE"
         }}
      >
        <Text style={{ color: "black", fontSize: 20 }}>Kategori</Text>
      </TouchableOpacity>
       <TouchableOpacity
         style={{
           position: 'absolute',
           right: 0,
           left: 0,
           top: 110,
           padding: 20,
           backgroundColor:"#DEDEDE"
         }}
       >
         <Text style={{ color: "black", fontSize: 20 }}>Beden</Text>
       </TouchableOpacity>
      <TouchableOpacity
         style={{
          position: 'absolute',
           right: 0,
           left: 0,
           top: 190,
           padding: 20,
           backgroundColor:"#DEDEDE"
         }}
       >
        <Text style={{ color: "black", fontSize: 20 }}>Fiyat</Text>
       </TouchableOpacity>

     </View>
   );
 };

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { height: 60 },
          headerShown: false,
          tabBarIcon: ({ focused, color, size, text }) => {
            let iconName;
            if (route.name === 'Ana Sayfa') {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === 'Sepet') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Mağaza') {
              iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
            } else if (route.name === 'Favoriler') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Profil') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={35} color={color} />

          },
          tabBarActiveTintColor: '#995D28',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Ana Sayfa" component={DrawerScreen} options={{
          tabBarLabelStyle: {
            fontSize: 13,
            fontFamily: 'Poppins-Medium'
          }
        }} />
        <Tab.Screen name="Sepet" component={Cart} options={{
          tabBarLabelStyle: {
            fontSize: 13,
            fontFamily: 'Poppins-Medium'
          }
        }} />
        <Tab.Screen name="Mağaza" component={DrawerScreen2} options={{
          tabBarLabelStyle: {
            fontSize: 15,
            fontFamily: 'Poppins-Medium'
          }
        }} />
        <Tab.Screen name="Favoriler" component={Favorite} options={{
          tabBarLabelStyle: {
            fontSize: 13,
            fontFamily: 'Poppins-Medium'
          }
        }} />
        <Tab.Screen name="Profil" component={Profile} options={{
          tabBarLabelStyle: {
            fontSize: 13,
            fontFamily: 'Poppins-Medium'
          }
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
