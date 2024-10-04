import React from 'react';
import { Text, View, ScrollView, FlatList, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, MaterialIcons, Feather } from '@expo/vector-icons';

// Sample product data for FlatList
const products = [
  { id: '1', name: 'AERO SPORT INFINITY PRO', price: 'Rp400.000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQRd0iVFy4FYQVigjsGc7V2j5h-xhmpaKklg&s' },
  { id: '2', name: 'SPORT - INVINCIBLE PRO', price: 'Rp399.000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl0sW84sHxE1nVnl8LyXHlgqszD293M1_4fA&s' },
  { id: '3', name: 'SPORT SNEAKERS - BLUE', price: 'Rp200.000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkrLhWaF3qgVhSoMIsj9hoOMOqTU4GhOP49g&s' },
  { id: '4', name: 'SPORT - INVINCIBLE MAX', price: 'Rp393.000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSHiLLZg4bWyG1IiEpA3Ij8PYimBZIy6Wqkg&s' },
  { id: '5', name: 'AIR SPORT', price: 'Rp200.000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYvtuOXqhlJtfz5AfR2AsdVzDmaP_RJPD4ag&s' },
  { id: '6', name: 'SPORT MAX', price: 'Rp350.000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZlREwCPZMpp7QHnHq7Hcd1DvZXOWsWS-CUA&s' }
];

// Home Screen Component
function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Sport Shoes</Text>
        <View style={styles.searchContainer}>
          <TextInput placeholder="Search items" style={styles.searchInput} />
        </View>
      </View>

      {/* Wallet Section */}
      <View style={styles.walletSection}>
        <View style={styles.walletInfo}>
          <Text>Wallet balance</Text>
          <Text style={styles.balanceText}>Rp1.000.000</Text>
          <TouchableOpacity style={styles.topUpButton}>
            <Text style={styles.topUpText}>Top up</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.offerText}>15% OFF All Items</Text>
      </View>

      {/* Categories Section */}
      <Text style={styles.sectionTitle}>Shop by Category</Text>
      <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryButton}>
          <FontAwesome5 name="shoe-prints" size={24} color="orange" />
          <Text>Footwear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <FontAwesome5 name="shopping-bag" size={24} color="orange" />
          <Text>Bag</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <FontAwesome5 name="tshirt" size={24} color="orange" />
          <Text>Apparel</Text>
        </TouchableOpacity>
      </View>

      {/* Product Section */}
      <Text style={styles.sectionTitle}>For You</Text>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
}

// Wishlist Screen Component
function WishlistScreen() {
  return (
    <FlatList
      data={products.slice(0, 4)}  // Displaying fewer items for Wishlist
      numColumns={2}
      renderItem={({ item }) => (
        <View style={styles.product}>
          <Image source={{ uri: item.image }} style={styles.productImage} />
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>{item.price}</Text>
        </View>
      )}
      keyExtractor={item => item.id}
    />
  );
}

// Notification Screen Component
function NotificationScreen() {
  return (
    <View style={{ padding: 10 }}>
      <Text style={styles.notificationTitle}>Limited-Time Promo - Up to 50% OFF!</Text>
      <Text style={styles.notificationText}>
        Don't miss out on this special opportunity! Get up to 50% off on all our sports shoes.
      </Text>
      <Text style={styles.notificationTitle}>Flash Sale Alert - Save Big Today!</Text>
      <Text style={styles.notificationText}>
        Hurry, our flash sale is live now! Grab your favorite sports shoes at unbeatable prices.
      </Text>
      <Text style={styles.notificationTitle}>Good Morning, Runner!</Text>
      <Text style={styles.notificationText}>
        It's time to step out and run. Give your best today and enjoy every step.
      </Text>
      <Text style={styles.notificationTitle}>Exclusive Discount Just for You</Text>
      <Text style={styles.notificationText}>
        Enjoy an exclusive 15% discount on our shoe products. Use the code EXCLUSIVE15 at checkout.
      </Text>
    </View>
  );
}

// Profile Screen Component
function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

// Exchange Screen Component
function ExchangeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Exchange Screen</Text>
    </View>
  );
}

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();

// Main App Component
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Home') {
              return <MaterialIcons name="home" size={size} color={color} />;
            } else if (route.name === 'Wishlist') {
              return <Feather name="heart" size={size} color={color} />;
            } else if (route.name === 'Notifications') {
              return <Feather name="bell" size={size} color={color} />;
            } else if (route.name === 'Profile') {
              return <MaterialIcons name="person" size={size} color={color} />;
            } else if (route.name === 'Exchange') {
              return <MaterialIcons name="swap-horiz" size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: '#ff6f00',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { paddingBottom: 5, height: 60 },
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIconStyle: { marginBottom: -5 }, // Matches the icon position in your image
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Wishlist" component={WishlistScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Notifications" component={NotificationScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Exchange" component={ExchangeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchInput: {
    flex: 1,
  },
  walletSection: {
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  walletInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceText: {
    fontWeight: 'bold',
  },
  topUpButton: {
    backgroundColor: '#ff6f00',
    padding: 5,
    borderRadius: 5,
  },
  topUpText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  offerText: {
    marginTop: 10,
    color: '#ff6f00',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryButton: {
    alignItems: 'center',
    padding: 10,
  },
  product: {
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  productImage: {
    width: '100%',
    height: 100,
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  productPrice: {
    color: 'orange',
    fontSize: 12,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  notificationText: {
    fontSize: 14,
    marginBottom: 20,
  },
});
