// Importa as bibliotecas 
import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Modal, Text } from "react-native";
import { Entypo } from '@expo/vector-icons';

// Define e exporta o componente funcional New
export default function New() {
  // Define um estado para controlar a visibilidade do modal
  const [visibleModal, setVisibleModal] = useState(false);

  // Função chamada quando o botão de adicionar é pressionado
  const handleAddButtonPress = () => {
    setVisibleModal(true);
    console.log('Botão Adicionar pressionado!');
  };

  // Função chamada para fechar o modal
  const handleCloseModal = () => {
    setVisibleModal(false);
  };

  // Função chamada quando o botão de nova obra é pressionado
  const handleFormObra = () => {
    setVisibleModal(false);
    alert("Form nova obra");
  };

  // Função chamada quando o botão de comentário é pressionado
  const handleMensagem = () => {
    setVisibleModal(false);
    alert("Novo comentário");
  };

  // Renderiza o componente
  return (
    <View style={styles.container}>
      {/* Container para posicionar o botão flutuante */}
      <View style={styles.buttonsContainer}>
        {/* Botão flutuante de adicionar */}
        <TouchableOpacity onPress={handleAddButtonPress} style={styles.floatingButton}>
          <Entypo name="circle-with-plus" color="#0B006B" size={85} style={{ marginTop: -34 }} />
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <Modal
        visible={visibleModal}
        transparent={true}
        onRequestClose={() => setVisibleModal(false)}
        animationType="slide"
      >
        {/* Container do modal */}
        <View style={styles.modalContainer}>
          {/* Fundo transparente do modal - fecha o modal quando tocado */}
          <TouchableOpacity style={styles.modalBackground} onPress={handleCloseModal}>
            <Text style={styles.modalText}>Toque fora para fechar</Text>
          </TouchableOpacity>

          {/* Conteúdo do modal */}
          <View style={styles.modalContent}>
            {/* Botão dentro do modal para nova obra */}
            <TouchableOpacity style={styles.actionButton} onPress={handleFormObra}>
              <Text style={styles.actionText}>Nova Obra</Text>
            </TouchableOpacity>
            {/* Botão dentro do modal para comentário */}
            <TouchableOpacity style={styles.actionButton} onPress={handleMensagem}>
              <Text style={styles.actionText}>Comentário</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end', // Alinhar o conteúdo na parte inferior
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
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalBackground: {
    flex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  actionButton: {
    backgroundColor: '#0B006B',
    borderRadius: 6,
    marginTop: 8,
    padding: 12,
    alignItems: 'center',
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalText: {
    color: '#fff',
    textAlign: 'center',
    padding: 8,
  },
});
