import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainTabNavigator } from "./MainTabNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ContatoScreen } from "../screens/ContatoScreen";
import Welcome from "../../src/screens/Welcome";
import { Login } from "../screens/Login";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home" //depois que terminar colocar a welcome para ser a principal
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "whitesmoke",
                    },
                }}
            >
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{
                        title: "Bem-vindo",
                        headerShadowVisible: false,
                        headerShown: false,
                        fullScreenGestureShadowEnabled: false,
                    }}
                />

                <Stack.Screen
                    name="Home"
                    component={MainTabNavigator}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Contacts"
                    component={ContatoScreen}
                    options={{ headerTitle: "Contatos",
                        headerTitleAlign: "center",
                    }}
                />

                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ title: "Login", headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
