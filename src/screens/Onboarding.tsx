import LottieView from "lottie-react-native";

const Onboarding = () => {
  return (
    <LottieView
      source={require("../../assets/animations/achieve.json")}
      style={{ width: "100%", height: "100%" }}
      autoPlay
      loop
    />
  );
};

export default Onboarding;
