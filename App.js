import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CourseScreen from "./screens/CourseScreen/CourseScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AddCourseScreen from "./screens/AddCourseScreen";
import { store } from "./store/store";
import { Provider } from "react-redux";
import EditCourseScreen from "./screens/EditCourseScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function AppDrawer() {
  return (
    <Provider store={store}>
      <Drawer.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen
          name="CourseScreen"
          component={CourseScreen}
          options={{
            drawerItemStyle: { height: 0 },
          }}
        />
        <Drawer.Screen name="AddCourseScreen" component={AddCourseScreen} />
        <Drawer.Screen name="EditCourseScreen" component={EditCourseScreen} />
      </Drawer.Navigator>
    </Provider>
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
