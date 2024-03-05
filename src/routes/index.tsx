import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import FavoritesScreen from "@/screens/Favorites";
import HomeScreen from "@/screens/Home";
import LibraryScreen from "@/screens/Library";
import SettingsScreen from "@/screens/Settings";

type TabType = {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconActive: keyof typeof Ionicons.glyphMap;
  component: () => React.JSX.Element;
}[];

const TABS: TabType = [
  {
    title: "home",
    icon: "home",
    iconActive: "home-outline",
    component: HomeScreen,
  },
  {
    title: "favorites",
    icon: "heart",
    iconActive: "heart-outline",
    component: FavoritesScreen,
  },
  {
    title: "library",
    icon: "book",
    iconActive: "book-outline",
    component: LibraryScreen,
  },
  {
    title: "settings",
    icon: "settings",
    iconActive: "settings-outline",
    component: SettingsScreen,
  },
];
const BottomTab = createBottomTabNavigator();

const Routes = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              // position absolute is required to extend the tab screens to also scroll behind the tab bar area,
              // so the blur effect would only work if there is some content showing behind it.
              position: "absolute",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              shadowColor: "rgb(47, 64, 85)",
              shadowOffset: { width: 0, height: -4 },
              shadowOpacity: 0.12,
              shadowRadius: 16,
            },
            tabBarBackground: () => (
              <BlurView
                // tint="default"
                // control the intensity of the blur effect
                intensity={40}
                style={{
                  ...StyleSheet.absoluteFillObject,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  // The overflow hidden is just to apply above radius.
                  overflow: "hidden",
                  // We can also apply background to tweak blur color
                  backgroundColor: "transparent",
                  // backgroundColor: "rgba(101, 92, 155, 0.4)",
                }}
              />
            ),
          }}
        >
          {TABS.map((tab, index) => (
            <BottomTab.Screen
              key={`${tab.title}_${index}`}
              name={tab.title}
              component={tab.component}
              options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                  <Ionicons
                    name={focused ? tab.icon : tab.iconActive}
                    size={24}
                    color={focused ? "#2E1F57" : "black"}
                  />
                ),
                tabBarLabelPosition: "below-icon",
              }}
            />
          ))}
        </BottomTab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default Routes;
