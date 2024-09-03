import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CourseOverview from "./CourseOverview";
import CourseHomework from "./CourseHomework";
import CourseTests from "./CourseTests";

const Tab = createBottomTabNavigator();

function CourseScreen({ route }) {
  //route gives course id
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="CourseOverview"
    >
      <Tab.Screen
        name="CourseHomework"
        component={CourseHomework}
        initialParams={route.params}
        options={{ title: "Homework" }}
      />
      <Tab.Screen
        name="CourseOverview"
        component={CourseOverview}
        initialParams={route.params}
        options={{ title: "Overview" }}
      />
      <Tab.Screen
        name="CourseTests"
        component={CourseTests}
        initialParams={route.params}
        options={{ title: "Tests" }}
      />
    </Tab.Navigator>
  );
}

export default CourseScreen;
