import { userStories } from "@/data/stories";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const InstagramStories = () => {
  const [userIndex, setUserIndex] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);

  const user = userStories[userIndex];
  const story = user.stories[storyIndex];

  const gotoNextStory = () => {
    setStoryIndex((index) => {
      if (index === user.stories.length - 1) {
        gotoNextUser();
        return 0;
      } else {
        return index + 1;
      }
    });
  };
  const gotoPrevStory = () => {
    setStoryIndex((index) => {
      if (index === 0) {
        gotoPrevUser();
        return 0;
      } else {
        return index - 1;
      }
    });
  };

  const gotoNextUser = () => {
    setUserIndex((index) => {
      if (index === userStories.length - 1) {
        return 0;
      }
      return index + 1;
    });
  };
  const gotoPrevUser = () => {
    setUserIndex((index) => {
      if (index === 0) {
        return userStories.length - 1;
      }
      return index - 1;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: story.uri }} style={styles.image} />

      <Pressable style={styles.navPressable} onPress={gotoPrevStory} />
      <Pressable
        style={[styles.navPressable, { right: 0 }]}
        onPress={gotoNextStory}
      />

      <View style={styles.header}>
        <LinearGradient
          colors={["rgba(0,0,0,0.8)", "transparent"]}
          style={StyleSheet.absoluteFill}
        />
        <View style={styles.indicatorRow}>
          {user.stories.map((s, i) => (
            <View
              key={i}
              style={[
                styles.indicator,
                {
                  backgroundColor: i <= storyIndex ? "ghostwhite" : "darkgray",
                },
              ]}
            />
          ))}
        </View>
        <Text style={styles.username}>{user.username}</Text>
      </View>

      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default InstagramStories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    position: "absolute",
    top: 0,
    width: "100%",
    paddingTop: 65,
    paddingHorizontal: 20,
  },
  indicatorRow: {
    flexDirection: "row",
    gap: 5,
    marginBottom: 20,
  },
  indicator: {
    flex: 1,
    height: 3,
    borderRadius: 10,
  },
  username: {
    color: "white",
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  navPressable: {
    position: "absolute",
    width: "30%",
    height: "100%",
  },
});
