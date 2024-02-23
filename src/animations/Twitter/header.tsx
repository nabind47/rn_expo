import { Image, StyleSheet } from "react-native";

export default function Header() {
  return (
    <Image
      style={styles.profilePic}
      source={{
        uri: "https://121clicks.com/wp-content/uploads/2022/08/best_dating_profile_picture_02.jpg",
      }}
    />
  );
}

const styles = StyleSheet.create({
  profilePic: {
    width: 35,
    height: 35,
    borderRadius: 35,
    alignSelf: "flex-end",
  },
});
