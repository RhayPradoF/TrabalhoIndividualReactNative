import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import React from 'react';
import{ CountryPicker } from './src/components/CountryPicker';
import { Login } from './src/screens/Login';
import Welcome from './src/screens/Welcome';
import { Navigator } from "./src/navigation";
import { NavigationContainer } from '@react-navigation/native';
import { MainTabNavigator } from './src/navigation/MainTabNavigator';
// import { NoImplements } from './src/screens/ChatScreen.tsx/NoImplements';



export default function App() {



  return (
    <>
      <StatusBar style="auto" />
      <Navigator/>
      {/* <Login/> //pronta */}
      {/* <Home /> // a Home nesse projeto e a ChatsScreen*/}
      {/* <Welcome /> //pronta */}
      {/* <NoImplements/> */}


       {/* <NavigationContainer>
            <MainTabNavigator/>
        </NavigationContainer> */}


    </>
  );
}

