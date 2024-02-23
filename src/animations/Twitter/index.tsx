import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "./header";
import Tweet from "./tweet";

const tweets = [
  {
    name: "Victor Noguera",
    userName: "@nvictorme",
    profilePic:
      "https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg",
    description: `The State of React Native 2022 results ARE OUT! 🎉 We've designed this survey.`,
    Comments: 8,
    retweets: 63,
    likes: 127,
  },
  {
    name: "Minh-Phuc Tran",
    userName: "@thymikee",
    profilePic:
      "https://assets.zoom.us/images/en-us/desktop/generic/virtual-background-green-screen-example.jpg",
    description: `hey global @reactjs community. we need a little help. we’d like to feature a few community photos.`,
    Comments: 63,
    retweets: 17,
    likes: 35,
  },

  {
    name: "Michał Pierzchała",
    userName: "@inkdrop_app",
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQ-YHX2i3RvTDDmpfnde4qyb2P8up7Wi3Ww&usqp=CAU",
    description: "New Vue Router docs are live 🌟",
    photo:
      "https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Comments: 28,
    retweets: 3,
    likes: 6,
  },
];

export default function TwitterLikeAnimation() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        {tweets.map((data, i) => (
          <Tweet key={i} details={data} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
