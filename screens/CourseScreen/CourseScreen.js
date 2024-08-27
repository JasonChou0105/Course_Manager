import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CourseOverview from "./CourseOverview";
import CourseHomework from "./CourseHomework";

const Tab = createBottomTabNavigator();

function CourseScreen({ route }) {
  //route gives course id
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="CourseOverview"
        component={CourseOverview}
        initialParams={route.params}
      />
      <Tab.Screen
        name="CourseHomework"
        component={CourseHomework}
        initialParams={route.params}
      />
    </Tab.Navigator>
  );
}

export default CourseScreen;
