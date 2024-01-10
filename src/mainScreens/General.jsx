import { StyleSheet, Text, View } from 'react-native';

export default function General() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Empresa (info. da empresa, permissões de usuário e login)</Text>
      <Text style={styles.title}> (meu perfil)</Text>
      <Text style={styles.title}> Sobre o aplicativo (inclui termos e politica de uso )</Text>
      <Text style={styles.title}> Suporte técnico</Text>
      

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
    marginBottom: 20
  }
});
