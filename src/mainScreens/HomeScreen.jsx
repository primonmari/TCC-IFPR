import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Refresh, pesquisar</Text>
      

      <Text style={styles.title}>Lista card de formulario:Forms/ addWork.js</Text>

      <Text style={styles.title}>Ao clicar em uma obra me redireciona para screens/Work.jsx</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize:22,
    fontWeight: 'bold',
    marginBottom: 100
  }
});
