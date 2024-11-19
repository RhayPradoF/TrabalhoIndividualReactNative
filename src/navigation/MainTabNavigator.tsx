import { View, Text, Platform } from 'react-native'
import React from 'react'
import { Ionicons, Entypo } from "@expo/vector-icons"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NoImplements } from '../../src/screens/NoImplements';
import { ChatsScreen } from '../screens/Conversas/ChatsScreen';
import { colors } from '../styles/colors';
import { useNavigation } from '@react-navigation/native';
import Welcome from '../screens/Welcome';


export function MainTabNavigator() {

    const Tab = createBottomTabNavigator();
    const navigation = useNavigation();

    return (
        <Tab.Navigator
            initialRouteName="Chats"
            screenOptions={{
                headerTitleAlign: "center",
                headerTintColor: "#000",
                tabBarStyle: {
                    height: Platform.OS === "android" ? 60 : 80,
                    paddingBottom: Platform.OS === "android" ? 10 : 25,
                    backgroundColor: "whitesmoke",
                },
                headerStyle: {
                    backgroundColor: "whitsmoke",
                },
            }}>


            <Tab.Screen
                name="Status"
                component={NoImplements}
                options={({ navigation }) => ({
                    headerTitle: "Status",
                    tabBarLabel: "Status",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='logo-whatsapp'
                            size={size}
                            color={color}
                        />
                    )
                })} />


            <Tab.Screen
                name="Call"
                component={NoImplements}
                options={({ navigation }) => ({
                    headerTitle: "Ligar",
                    tabBarLabel: "Ligar",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='call-outline'
                            size={size}
                            color={color}
                        />
                    )
                })} />



            <Tab.Screen
                name="Camera"
                component={NoImplements}
                options={({ navigation }) => ({
                    headerTitle: "Camera",
                    tabBarLabel: "Camera",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='camera-outline'
                            size={size}
                            color={color}
                        />
                    )
                })} />


            <Tab.Screen
                name="Mensagens"
                component={ChatsScreen}
                options={({ navigation }) => ({
                    headerTitle: "Mensagens",
                    tabBarLabel: "Mensagens",
                    headerRight: () => (
                        <Entypo
                            name="new-message"
                            style={{ marginRight: 15 }}
                            size={Platform.OS === "android" ? 24 : 25}
                            colors="royalblue"
                            onPress={() => navigation.navigate("Contacts")}
                        />
                    ),


                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='chatbubbles-sharp'
                            size={size}
                            color={color}
                        />

                    ),

                })} />

            <Tab.Screen
                name="Settings"
                component={NoImplements}
                options={({ navigation }) => ({
                    headerTitle: "Ajustes",
                    tabBarLabel: "Ajustes",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='settings-outline'
                            size={size}
                            color={color}
                        />
                    )
                })} />

            {/* <Tab.Screen
                name="Welcome"
                component={Welcome}
                options={({ navigation }) => ({
                    headerTitle: "Bem-Vindo",
                    tabBarLabel: "Bem-Vindo",

                })} /> */}
        </Tab.Navigator>

    );
};
