import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, styleSheet, Text, View, Image, Dimensions } from 'react-native-gesture-handler';
import React,{useState, useEffect, use} from 'react';

const [width, height] = Dimensions.get('window');

const CartScreen = ({route}) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const product = route.params?.product;
        if (product && !cart.some(item => item.id === product.id)) {
            setCart([...cart,product]);
        }
    },[route.params?.product]);

    const placeOrder = () => {
        alert('Order Placed')
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        {/* <Image source={{ uri: item.image }} style={styles.image}/> */}
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>${item.price}</Text>
                    </View>
                )}
                ListEmptyComponent={<Text>Your Cart is Empty</Text>}
                />
                <button
                    title="Place order (COD)"
                    onPress={placeOrder}
                    />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemContainer: {
        marginBottom: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        backgroundColor: '#f9f9f9',
        shadowOffset: { width: 10, height: 2 },
        shadowOpacity: 0.25,
    },
    image:{
        width: width*0.2,
        height: height*0.1,
        borderRadius: 10,
    }
});


export default CartScreen;