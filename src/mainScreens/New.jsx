// Importa as bibliotecas 
import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';
//import { useNavigation } from '@react-navigation/native';
import ActionModal from '../components/Actions/ActionModal';

// Define e exporta o componente funcional New
export default function New() {
  const [visibleModal, setVisibleModal] = useState(false);
  //const navigation = useNavigation();

  const handleAddButtonPress = () => {
    setVisibleModal(true);
    console.log('Botão Adicionar pressionado!');
  };

  const handleCloseModal = () => {
    setVisibleModal(false);
  };

  const handleFormObra = () => {
    setVisibleModal(false);
    //navigation.navigate('AddWorkScreen');
    alert("Novo comentário");


  };

  const handleMensagem = () => {
    setVisibleModal(false);
    alert("Novo comentário");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleAddButtonPress} style={styles.floatingButton}>
          <Entypo name="circle-with-plus" color="#0B006B" size={85} style={{ marginTop: -34 }} />
        </TouchableOpacity>
      </View>

      {/* Chama o componente ActionModal diretamente no componente New */}
      <ActionModal
        visible={visibleModal}
        handleClose={handleCloseModal}
        handleFormObra={handleFormObra}
        handleMensagem={handleMensagem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // Estilos do componente
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 3,
    left: -40,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 0,
  },
});
