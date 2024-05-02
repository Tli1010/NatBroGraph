const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Onboarding from "./screens/Onboarding";
import AuswahlLoginSignUp from "./screens/AuswahlLoginSignUp";
import Listen from "./screens/Listen";
import SignUp from "./screens/SignUp";
import Liste from "./screens/Liste";
import Liste1 from "./screens/Liste1";
import NeueListeErstellen from "./screens/NeueListeErstellen";
import EinkaufWirdVerglichenAmGn from "./screens/EinkaufWirdVerglichenAmGn";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Outfit-Regular": require("./assets/fonts/Outfit-Regular.ttf"),
    "Outfit-SemiBold": require("./assets/fonts/Outfit-SemiBold.ttf"),
    "Outfit-Bold": require("./assets/fonts/Outfit-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AuswahlLoginSignUp"
              component={AuswahlLoginSignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Listen"
              component={Listen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Liste"
              component={Liste}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Liste1"
              component={Liste1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NeueListeErstellen"
              component={NeueListeErstellen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EinkaufWirdVerglichenAmGn"
              component={EinkaufWirdVerglichenAmGn}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
