import { useEffect, useState } from 'react';
import { Button, FlatList, Image, Text, View, ScrollView, SafeAreaView, } from 'react-native';

interface Product {
  id: number;
  name: string;
  price: number;
  photo: string;
}

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const products = [
      {
        id: 1,
        name: 'A',
        price: 150,
        photo:
          'https://cf.shopee.co.id/file/fdcd4090ffcc2841e2afe184cbf2d586',
      },
      {
        id: 2,
        name: 'B',
        price: 100,
        photo:
          'https://s2.bukalapak.com/img/2325636561/s-1000-1000/Tshirt_Baju_Kaos_Distro_Beat_Wave___ROYALSTORE.jpg',
      },
      {
        id: 3,
        name: 'C',
        price: 150,
        photo:
          'https://cf.shopee.co.id/file/6427a0c403007fcb5acbed4b54da089a',
      },
      {
        id: 4,
        name: 'D',
        price: 200,
        photo:
          'https://cf.shopee.co.id/file/fdcd4090ffcc2841e2afe184cbf2d586',
      },
      {
        id: 5,
        name: 'E',
        price: 100,
        photo:
          'https://4.bp.blogspot.com/-oXwo_LeBxwM/VQKaEehj2FI/AAAAAAAAAUM/Uk9496O_6eg/s1600/gambar%2Bbaju%2Bdistro.jpg',
      },
      {
        id: 6,
        name: 'F',
        price: 150,
        photo:
          'https://cf.shopee.co.id/file/fdcd4090ffcc2841e2afe184cbf2d586',
      },
      {
        id: 7,
        name: 'G',
        price: 150,
        photo:
          'https://cf.shopee.co.id/file/fdcd4090ffcc2841e2afe184cbf2d586',
      },
      {
        id: 8,
        name: 'H',
        price: 150,
        photo:
          'https://cf.shopee.co.id/file/fdcd4090ffcc2841e2afe184cbf2d586',
      },
      
    ];
    setProducts(products);
  }, []);

  return (
    <ScrollView>
        <SafeAreaView style={{ padding: 10 }}>
          <FlatList
            data={products}
            numColumns={3}
            ListHeaderComponent={() => (
              <Text
                style={{
                  fontSize: 25,
                  textAlign: 'left',
                  marginTop: 20,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                Toko
              </Text>
            )}
            renderItem={({ item }) => (
              <View
                style={{
                  backgroundColor: 'white',
                  maxWidth: '45%',
                  maxHeight: 400,
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 10,
                  padding: 30,
                  borderRadius: 7,
                  borderWidth: 2,
                  shadowRadius: 5,
                }}>
                <Image
                  source={{ uri: item.photo }}
                  style={{ width: 100, height: 75, borderRadius: 3 }} />
                <Text style={{ paddingVertical: 10 }}>{item.name}</Text>
                <Text style={{ paddingBottom: 10 }}>Price: ${item.price}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()} />
        </SafeAreaView>
      </ScrollView>
  );
};

export default App;