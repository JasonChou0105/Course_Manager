import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CourseScreen from "./screens/CourseScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen
        name="HomeScreen"
        options={{ title: "My Courses" }}
        component={HomeScreen}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="DrawerScreen" component={AppDrawer} />

        <Stack.Screen name="CourseScreen" component={CourseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
