import { Text, View } from "react-native";

export default function Home() {
  return (
    <View>
      <Text>Edit app/home.tsx to edit this screen.</Text>
    </View>
  );
}

















// import { Text, View, Button } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


// export default function Home() {
//   const navigation = useNavigation();
//   const Stack = createNativeStackNavigator();
//   return (

//     <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="About" component={About} />
//     </Stack.Navigator>

//   );
// }