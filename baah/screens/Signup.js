import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export function Signup ({navigation}) {

  return (
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          paddingHorizontal: 20,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Text style={{ fontSize: 40, color: "black", fontWeight: "bold" }}>Signup</Text>
        <Text style={{ fontSize: 20, color: "grey" }}>Enter Details</Text>
        <View style={{marginTop: 30}}>
            <TextInput
              style={{
                padding: 15,
                borderRadius: 10,
                borderWidth: 0.7,
                paddingHorizontal: 60,
              }}
              placeholder="Enter username"
            />
        </View>
        <View style={{marginTop: 10}}>
           <TextInput
              style={{
                 padding: 15,
                 borderRadius: 10,
                 borderWidth: 0.7,
                 paddingHorizontal: 60,
                 }}
              placeholder="Enter Email"
              />
        </View>
        <View style={{ marginTop: 10,}}>
           <TextInput
              secureTextEntry={true}
              onChangeText={(
                e
              )=> {
                console.log(e)
              }}
              style={{
                padding: 15,
                borderRadius: 10,
                borderWidth: 0.7,
                paddingHorizontal: 60,
              }}
              placeholder="Enter password"
           />
        </View>
        <View style={{ marginTop: 10,}}>
           <TextInput
              secureTextEntry={true}
              onChangeText={(
                 e
              )=> {
                 console.log(e)
              }}
              style={{
                 padding: 15,
                 borderRadius: 10,
                 borderWidth: 0.7,
                 paddingHorizontal: 60,
              }}
              placeholder="Enter password"
           />
        </View>
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
          }}>
          <AntDesign/>
          <Text style={{ paddingLeft: 10, color: "white" }}>SignUp</Text>
        </TouchableOpacity>
      </View>
  );
}