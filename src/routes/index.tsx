import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";

import Home from "@/screens/Home";
import Onboarding from "@/screens/Onboarding";

import { useStorage } from "@/hooks/useStorage";

const Stack = createNativeStackNavigator();

const Routes = () => {
  const [showOnboarding, setShowOnboarding] = useState<boolean | null>(null);
  const { getItem } = useStorage();

  useEffect(() => {
    checkIfAlreadyOnboarded();
  }, []);

  const checkIfAlreadyOnboarded = async () => {
    const onboarded = await getItem("onboarded");
    setShowOnboarding(!onboarded);
  };

  if (showOnboarding === null) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={showOnboarding ? "Onboarding" : "Home"}
      >
        <Stack.Screen
          name="Onboarding"
          options={{ headerShown: false }}
          component={Onboarding}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
