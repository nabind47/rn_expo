import { useStorage } from "@/hooks/useStorage";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

const Home = () => {
  const navigation = useNavigation();
  const { removeItem } = useStorage();
  const handleReset = async () => {
    await removeItem("onboarded");
    // @ts-ignore
    navigation.push("Onboarding");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lottie}>
        <LottieView
          source={require("../../assets/animations/confetti.json")}
          autoPlay
          loop
        />
      </View>
      <Text style={styles.text}>Home Page</Text>
      <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
  text: {
    fontSize: width * 0.09,
    marginBottom: 20,
  },
  resetButton: {
    backgroundColor: "#34d399",
    padding: 10,
    borderRadius: 10,
  },
});

export default Home;
