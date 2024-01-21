// Importa as bibliotecas
import React from "react";
import { Modal, TouchableOpacity, Text, StyleSheet, View } from "react-native";

// Componente funcional ActionModal para lidar com o modal e os botões
export function ActionModal({ visible, handleClose, handleFormObra, handleMensagem }) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      onRequestClose={handleClose}
      animationType="slide"
    >
      {/* Container do modal */}
      <View style={styles.modalContainer}>
        {/* Fundo transparente do modal - fecha o modal quando tocado */}
        <TouchableOpacity style={styles.modalBackground} onPress={handleClose}>
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
  );
}

const styles = StyleSheet.create({
  // Estilos do componente
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

export default ActionModal;
