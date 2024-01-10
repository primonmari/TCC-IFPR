import { StyleSheet, Text, View } from 'react-native';

export default function Notifications() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ex: Funcionário X adicionou relatório</Text>
      <Text style={styles.title}>Ex: Funcionario Y comentou na obra A</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize:22,
    fontWeight: 'bold',
    marginBottom: 50
  }
});
