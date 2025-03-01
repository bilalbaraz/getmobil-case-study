import React from "react";
import { View, ScrollView } from "react-native";
import { List, Avatar, Button, Divider, Text } from "react-native-paper";
import { FONTS } from "@constants/fonts";
import { COLORS } from "@constants/colors";

export default function AccountScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <View style={{ alignItems: "center", padding: 20, backgroundColor: "" }}>
        <Avatar.Image size={80} source={{ uri: "https://picsum.photos/600/600" }} />
        <Text variant="titleLarge" style={{ marginTop: 10, fontFamily: FONTS.Poppins.regular }}>
          Bilal Baraz
        </Text>
        <Text variant="bodyMedium" style={{ color: "gray", fontFamily: FONTS.Poppins.regular }}>
          bilalbaraz@windowslive.com
        </Text>
      </View>
      
      <Divider />

      <List.Section>
        <List.Item
          title="Siparişlerim"
          titleStyle={{fontFamily: FONTS.Poppins.regular}}
          left={(props) => <List.Icon {...props} icon="cart-outline" />}
          onPress={() => console.log("Siparişlerim açıldı")}
        />
        <List.Item
          title="Favorilerim"
          titleStyle={{fontFamily: FONTS.Poppins.regular}}
          left={(props) => <List.Icon {...props} icon="heart-outline" />}
          onPress={() => console.log("Favorilerim açıldı")}
        />
        <List.Item
          title="Kuponlarım"
          titleStyle={{fontFamily: FONTS.Poppins.regular}}
          left={(props) => <List.Icon {...props} icon="ticket-percent-outline" />}
          onPress={() => console.log("Kuponlarım açıldı")}
        />
      </List.Section>
      
      <Divider />
  
      <List.Section>
        <List.Item
          title="Ayarlar"
          titleStyle={{fontFamily: FONTS.Poppins.regular}}
          left={(props) => <List.Icon {...props} icon="cog-outline" />}
          onPress={() => console.log("Ayarlar açıldı")}
        />
        <List.Item
          title="Destek Merkezi"
          titleStyle={{fontFamily: FONTS.Poppins.regular}}
          left={(props) => <List.Icon {...props} icon="help-circle-outline" />}
          onPress={() => console.log("Destek açıldı")}
        />
      </List.Section>
      
      <Divider />

      <View style={{ padding: 20 }}>
        <Button icon={'logout-variant'} mode="outlined" textColor={'#94A3B8'} labelStyle={{fontFamily: FONTS.Poppins.regular}} style={{borderColor: '#94A3B8', borderRadius: 5}} onPress={() => console.log("Çıkış yapıldı")}>Çıkış Yap</Button>
      </View>
    </ScrollView>
  );
}
