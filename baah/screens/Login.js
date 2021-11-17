import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export function Login ({navigation}) {

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text style={{ fontSize: 30, color: "grey" }}>Welcome to Nakata cars</Text>
      <Text style={{ fontSize: 20, color: "grey" }}>We give all varieties of cars </Text>
      <Image
         style={{
           borderRadius: 20,
           marginBottom: 10,
           width: 220,
           height: 220,
         }}
         source={{
           uri: "http://lemonbin.com/wp-content/uploads/2020/06/cars-june112020.jpg",
         }}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("LoginPage");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        <Text style={{ paddingLeft: 10, color: "white" }}>Login</Text>
      </TouchableOpacity>
      <Text> </Text>
      <Text style={{ paddingLeft: 10, color: "grey" }}>want an account Signup Now</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Signup");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}>
        <Text style={{ paddingLeft: 10, color: "white" }}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}