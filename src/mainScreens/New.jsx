import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import {ActionModal} from '../components/Actions/ActionModal'


export default function New(){
  const [visibleModal, setVisibleModal] = useState(false);
  
  return(
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.button} onPress={() =>setVisibleModal(true)}>
        <Text>Botao ADD</Text>
      </TouchableOpacity>

      <Modal
        visible={visibleModal}
        transparent={true}
        onRequestClose={ () => setVisibleModal(false)}
        animationType="slide"
      >
        <ActionModal
        
        handleClose={ () => setVisibleModal(false)}
        handleObra={ () => alert ("FORM NOVA OBRA")}
        handleMessage={ () => alert ("NOVA MENSAGEM")}
        />
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1EDFA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button:{
    backgroundColor:'red',
    borderColor:'#000000',
    padding:4,
    marginVertical:8,
    width:'78%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:4,
  }
});

//button:{
    //backgroundColor:'red',
    //borderColor:'#000000',
    //padding:4,
    //marginVertical:8,
    //width:'78%',
    //justifyContent:'center',
    //alignItems:'center',
   // borderRadius:4,
  //}