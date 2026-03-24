import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is my first (not really) React Native app</Text>
      <StatusBar style="auto" />
      <Image source={require("./assets/user1.jpg")} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
