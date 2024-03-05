import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";

import RubberBandingList from "@/animations/messages";

const SettingsScreen = () => {
  const paddingBottom = useBottomTabBarHeight();

  return (
    <View style={[styles.container, { paddingBottom }]}>
      <RubberBandingList />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
