import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../components/screens/HomeScreen";
import MypageScreen from "../components/screens/MypageScreen";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { colors } from "../styles/variables/color";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name="home-outline"
                size={24}
                color={focused ? colors.subColor : colors.lightGrey}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Mypage"
        component={MypageScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <AntDesign
                name="profile"
                size={24}
                color={focused ? colors.subColor : colors.lightGrey}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
