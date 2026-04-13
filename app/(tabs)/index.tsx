import { StyleSheet, View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Val Anthony C.Cinco</Text>
      <Text style={styles.text2}>2nd Year Bachelor of Science in Information Technology</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    color: 'white',
    fontSize: 30,
  },
  text2: {
    color: 'white',
    fontSize: 30,
  },
});
