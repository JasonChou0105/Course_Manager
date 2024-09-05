import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CourseOverview from "./CourseOverview";
import CourseHomework from "./CourseHomework";
import CourseTests from "./CourseTests";
import COLORS from "../../constants/Colors/COLORS";

//icons
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

function CourseScreen({ route }) {
  //route gives course id
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.highlight,
        tabBarInactiveTintColor: "gray",
      }}
      initialRouteName="CourseOverview"
    >
      <Tab.Screen
        name="CourseHomework"
        component={CourseHomework}
        initialParams={route.params}
        options={{
          title: "Homework",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="book"
              size={24}
              color={focused ? COLORS.highlight : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CourseOverview"
        component={CourseOverview}
        initialParams={route.params}
        options={{
          title: "Overview",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="grid"
              size={24}
              color={focused ? COLORS.highlight : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CourseTests"
        component={CourseTests}
        initialParams={route.params}
        options={{
          title: "Tests",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="assignment"
              size={24}
              color={focused ? COLORS.highlight : "gray"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default CourseScreen;
