import RubberBandingList from "@/animations/messages";
import { StyleSheet } from "react-native";

const SettingsScreen = () => {
  return <RubberBandingList />;
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
