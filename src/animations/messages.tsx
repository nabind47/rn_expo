import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { messages } from "@/data/messages";

import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

type ListItemType = {
  item: (typeof messages)[0];
  index: number;
};

const ListItem: React.FC<ListItemType> = ({ item, index }) => {
  return (
    <Animated.View style={[styles.listItem]}>
      <Image style={styles.avatar} source={item.image} />
      <View style={styles.chatInfoView}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.lastMsg}>{item.message}</Text>
      </View>
    </Animated.View>
  );
};

const RubberBandingList = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Animated.FlatList
          ListHeaderComponent={
            <View style={{ height: 60 }}>
              <Text style={{ fontSize: 32, fontWeight: "bold" }}>Messages</Text>
            </View>
          }
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          data={messages}
          renderItem={({ item, index }) => <ListItem {...{ item, index }} />}
          keyExtractor={(item, index) => `${item.name}_${index}`}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  avatar: { width: 56, height: 56 },
  chatInfoView: { flex: 1, gap: 6 },
  itemTitle: { fontSize: 17, fontWeight: "600" },
  lastMsg: { color: "grey" },
});

export default RubberBandingList;
