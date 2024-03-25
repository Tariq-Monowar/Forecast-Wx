import { AppContextProvider } from "./context/AppContext";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerContent from "./drower/HomePageDrower";
import HomeScreens from "./screens/HomeScreens";
import NextDayScreen from "./screens/NextDayScreen";
import Announcement from "./screens/Announcement";

export default function App() {
  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();
  return (
    <AppContextProvider>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}
        >
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
    </AppContextProvider>
  );
}
