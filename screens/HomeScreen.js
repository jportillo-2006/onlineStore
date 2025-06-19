import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, styleSheet, Text, View, Image, Dimensions } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

const products = [
    { id: '1', name: 'Product 1', price: 10.00, image: 'https://picsum.photos/200/300/?random' },
    { id: '2', name: 'Product 2', price: 20.00, image: 'https://picsum.photos/200/300/?random'},
    { id: '3', name: 'Product 3', price: 30.00, image: 'https://picsum.photos/200/300/?random'},
]

const HomeScreen = (navigation) => {
    return (
        <View style={styles.container}>
            <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                    <Image source={{ uri: item.image }} style={styles.image}/>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={styles.text}>${item.price}</Text>

                    <button
                    title="View Details"
                    onPress={() => navigation.navigate('ProductDetails', { product: item })}
                    />
                </View>
            )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
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
});

export default HomeScreen;