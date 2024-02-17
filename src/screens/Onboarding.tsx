import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import OnboardingSwiper from "react-native-onboarding-swiper";

import { useStorage } from "@/hooks/useStorage";

const { width } = Dimensions.get("window");

const Onboarding = () => {
  const navigation = useNavigation();
  const { setItem } = useStorage();

  const handleDone = async () => {
    await setItem("onboarded", "onboarded");
    // @ts-ignore
    navigation.navigate("Home");
  };

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <OnboardingSwiper
        onDone={handleDone}
        onSkip={handleDone}
        bottomBarHighlight={false}
        DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#a7f3d0",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require("../../assets/animations/boost.json")}
                  autoPlay
                  loop
                  style={{ flex: 1 }}
                />
              </View>
            ),
            title: "Boost Productivity",
            subtitle: "Subscribe this channel to boost your productivity level",
          },
          {
            backgroundColor: "#fef3c7",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require("../../assets/animations/work.json")}
                  autoPlay
                  loop
                  style={{ flex: 1 }}
                />
              </View>
            ),
            title: "Work Seamlessly",
            subtitle: "Get your work done seamlessly without interruption",
          },
          {
            backgroundColor: "#a78bfa",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require("../../assets/animations/boost.json")}
                  autoPlay
                  loop
                  style={{ flex: 1 }}
                />
              </View>
            ),
            title: "Achieve Higher Goals",
            subtitle:
              "By boosting your productivity we help you to achieve higher goals",
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
  doneButton: {
    padding: 20,
    // backgroundColor: 'white',
    // borderTopLeftRadius: '100%',
    // borderBottomLeftRadius: '100%'
  },
});

export default Onboarding;
