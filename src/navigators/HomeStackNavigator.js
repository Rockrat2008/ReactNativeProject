import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { StyleSheet, Text, View } from "react-native";
import { StackActions } from "@react-navigation/routers";

const HomeStackNav = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <HomeStackNav.Navigator>
      <HomeStackNav.Screen name="Home Screen" component={HomeScreen} />
    </HomeStackNav.Navigator>
  );
}
