import { StatusBar } from 'expo-status-bar';
import { FlatList, styleSheet, Text, View, Image, Dimensions } from 'react-native-gesture-handler';
import { Button } from 'react-native-web';

const {width, height} = Dimensions.get('window');

const ProductDetailsScreen = (route,navigation) => {
    const { product } = route.params;
    return (
        <View style={styles.container}>
            <image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.text}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Button
            title='add to cart'
            onPress={() => navigation.navigate('Cart', { product})}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    image: {
        width: width*0.9,
        height: height*0.9,
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default ProductDetailsScreen;