import { Image, StyleSheet, Text, View } from "react-native";

import TweetActionButtons from "./TweetActionButtons";

export default function Tweet({ details }: any) {
  const {
    description,
    photo,
    profilePic,
    name,
    userName,
    Comments,
    retweets,
    likes,
  } = details;

  return (
    <View style={[styles.row, { marginVertical: 20 }]}>
      <Image
        style={styles.profilePic}
        source={{
          uri: profilePic,
        }}
      />
      <View style={{ flex: 1 }}>
        <View style={styles.row}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{name}</Text>
          <Text style={{ color: "gray", marginLeft: 7, fontSize: 16 }}>
            {userName} - 3h
          </Text>
        </View>

        <View style={{ marginTop: 5 }}>
          <Text>{description}</Text>
          {photo ? (
            <View style={styles.tweetImageContainer}>
              <Image
                style={styles.tweetImg}
                source={{
                  uri: "https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
              />
            </View>
          ) : null}
        </View>
        <TweetActionButtons
          Comments={Comments}
          retweets={retweets}
          likes={likes}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  profilePic: {
    width: 35,
    height: 35,
    borderRadius: 35,
    marginRight: 10,
  },
  tweetImageContainer: {
    borderWidth: 1,
    borderColor: "rgb(207, 217, 222)",
    marginTop: 10,
    borderRadius: 10,
  },
  tweetImg: {
    width: "100%",
    height: 260,
    resizeMode: "cover",
    borderRadius: 10,
  },
});
