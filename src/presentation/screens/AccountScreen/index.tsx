import React from "react";
import { View, ScrollView } from "react-native";
import { List, Avatar, Button, Divider, Text } from "react-native-paper";
import styles from './styles';

export default function AccountScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Avatar.Image size={80} source={{ uri: "https://picsum.photos/600/600" }} />
        <Text variant="titleLarge" style={styles.nameText}>
          Bilal Baraz
        </Text>
        <Text variant="bodyMedium" style={styles.emailText}>
          bilalbaraz@windowslive.com
        </Text>
      </View>
      
      <Divider />

      <List.Section>
        <List.Item
          title="Siparişlerim"
          titleStyle={styles.itemTitle}
          left={(props) => <List.Icon {...props} icon="cart-outline" />}
          onPress={() => console.log("Siparişlerim açıldı")}
        />
        <List.Item
          title="Favorilerim"
          titleStyle={styles.itemTitle}
          left={(props) => <List.Icon {...props} icon="heart-outline" />}
          onPress={() => console.log("Favorilerim açıldı")}
        />
        <List.Item
          title="Kuponlarım"
          titleStyle={styles.itemTitle}
          left={(props) => <List.Icon {...props} icon="ticket-percent-outline" />}
          onPress={() => console.log("Kuponlarım açıldı")}
        />
      </List.Section>
      
      <Divider />
  
      <List.Section>
        <List.Item
          title="Ayarlar"
          titleStyle={styles.itemTitle}
          left={(props) => <List.Icon {...props} icon="cog-outline" />}
          onPress={() => console.log("Ayarlar açıldı")}
        />
        <List.Item
          title="Destek Merkezi"
          titleStyle={styles.itemTitle}
          left={(props) => <List.Icon {...props} icon="help-circle-outline" />}
          onPress={() => console.log("Destek açıldı")}
        />
      </List.Section>
      
      <Divider />

      <View style={styles.buttonContainer}>
        <Button 
          icon={'logout-variant'} 
          mode="outlined" 
          textColor={'#94A3B8'} 
          labelStyle={styles.logoutButtonLabel} 
          style={styles.logoutButton} 
          onPress={() => console.log("Çıkış yapıldı")}
        >
          Çıkış Yap
        </Button>
      </View>
    </ScrollView>
  );
}
