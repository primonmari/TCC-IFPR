import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet} from "react-native";

export function ActionModal({handleClose, handleObra, handleMessage}) {
    return (
      <SafeAreaView style={styles.container}> 
        <TouchableOpacity style={{flex:1, zIndex:9}} onPress={handleClose} ></TouchableOpacity>

        <View style={styles.content}>
            <TouchableOpacity
                //activeOpacity={0.9}
                style={styles.actionModalButton}
                //onPress={ () => {}}
                //onPress={() => alert("Teste")}
                onPress={handleObra}
                
            >
                <Text style={styles.actionModalText}>Nova obra</Text>
            </TouchableOpacity>

            <TouchableOpacity
                //activeOpacity={0.9}
                style={styles.actionModalButton}
                onPress={handleMessage}
                
            >
                <Text style={styles.actionModalText}>Comentário</Text>
            </TouchableOpacity>

        </View>
      </SafeAreaView>
    );
  }
  

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    content:{
        marginVertical:20,
        marginLeft: 10,
        marginRight: 10,
    },
    actionModalButton:{
        zIndex:99,
        backgroundColor: '#FFF',
        borderRadius: 6,
        marginTop: 8,
        padding: 8,
        borderWidth: 1,
        borderBlockColor: 'rgba(0,0,0,0.2)',
        shadowColor:'rgba(0,0,0,0.3)',

        shadowOffset: {
            width:0,
            height:2,
        },
        elevation: 5,
        shadowOpacity: 0.28,
        shadowRadius: 4,
    },
    actionModalText:{
        textAlign: 'center',
        fontWeight: 'bold'
    }
})