import React, {useState} from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Card, Paragraph, Searchbar, Title } from 'react-native-paper';
import styles from './styles';
import { FONTS } from '../../../constants/fonts';

const dummyProducts = [
  { id: "1", name: "iPhone 12", price: "₺10.999", image: "https://picsum.photos/150?random=1" },
  { id: "2", name: "Samsung Galaxy S21", price: "₺9.499", image: "https://picsum.photos/150?random=2" },
  { id: "3", name: "Xiaomi Mi 11", price: "₺7.999", image: "https://picsum.photos/150?random=3" },
];

const dummyCampaigns = [
  { id: "1", title: "Yaz Kampanyası", description: "Tüm ürünlerde %20 indirim!" },
  { id: "2", title: "Kargo Bedava", description: "₺500 üzeri alışverişlerde kargo ücretsiz!" },
  { id: "3", title: "Kargo Bedava", description: "₺500 üzeri alışverişlerde kargo ücretsiz!" },
  { id: "4", title: "Kargo Bedava", description: "₺500 üzeri alışverişlerde kargo ücretsiz!" },
  { id: "5", title: "Kargo Bedava", description: "₺500 üzeri alışverişlerde kargo ücretsiz!" },
];

const dummyTopRatedPhones = [
  { id: "1", name: "iPhone 11", rating: "4.8", image: "https://picsum.photos/150?random=4" },
  { id: "2", name: "OnePlus 9", rating: "4.7", image: "https://picsum.photos/150?random=5" },
  { id: "3", name: "OnePlus 9", rating: "4.7", image: "https://picsum.photos/150?random=6" },
];

const Section = ({ title, data }: any) => (
  <View style={{ marginVertical: 10 }}>
    <Title style={{ paddingHorizontal: 15, fontFamily: FONTS.Poppins.semibold }}>{title}</Title>
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Card style={{ margin: 10, width: 150 }}>
          <Card.Cover source={{ uri: item.image }} style={{ height: 100 }} />
          <Card.Content>
            <Title>{item.name || item.title}</Title>
            {item.price && <Paragraph>{item.price}</Paragraph>}
            {item.rating && <Paragraph>⭐ {item.rating}</Paragraph>}
            {item.description && <Paragraph>{item.description}</Paragraph>}
          </Card.Content>
          <Card.Actions>
            <Button>İncele</Button>
          </Card.Actions>
        </Card>
      )}
    />
  </View>
);

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Cihaz ara"
        onChangeText={setSearchQuery}
        value={searchQuery}
        mode={'bar'}
        style={{margin: 10, borderRadius: 5, height: 40}}
        inputStyle={{paddingTop: 0, fontSize: 13}}
      />
      <ScrollView style={{ flex: 1 }}>
        <Section title="Haftanın Fırsat Ürünleri" data={dummyProducts} />
        <Section title="Kampanyalar" data={dummyCampaigns} />
        <Section title="Çok Beğenilen Yenilenmiş Telefonlar" data={dummyTopRatedPhones} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;