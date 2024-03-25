// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreens from "../screens/HomeScreens";

// const AppNavigation = () => {
//   const Stack = createNativeStackNavigator();
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialParams="Home">
//         <Stack.Screen
//           name="Home"
//           component={HomeScreens}

//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigation;

// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreens from "../screens/HomeScreens";
// import DrawerContent from "../drower/HomePageDrower";

// const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();

// const HomeStack = () => (
//   <Stack.Navigator>
//     <Stack.Screen
//       name="Home"
//       component={HomeScreens}
//       options={{ headerShown: false }}
//     />
//   </Stack.Navigator>
// );

// const AppNavigation = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
//         <Drawer.Screen name="Home" component={HomeStack} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigation;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreens from "../screens/HomeScreens";
import DrawerContent from "../drower/HomePageDrower";
import NextDayScreen from "../screens/NextDayScreen";
import Announcement from "../screens/Announcement";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" options={{ headerShown: false }}>
          {() => (
            <Stack.Navigator>
              <Stack.Screen
                name="Homes"
                component={HomeScreens}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="NextDay"
                component={NextDayScreen}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="message"
                component={Announcement}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
