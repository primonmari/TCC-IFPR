import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons, Entypo,Foundation,Ionicons} from '@expo/vector-icons';

import HomeScreen from '../mainScreens/HomeScreen';
import Appointments from '../mainScreens/Appointments';
import New from '../mainScreens/New';
import Notifications from '../mainScreens/Notifications';
import General from '../mainScreens/General';

//criar um navegador de guias de navegação inferior usando a biblioteca de navegação React Navigation. 
//A função createBottomTabNavigator é uma função fornecida pelo React Navigation 
const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator // componente fornecido pelo pacote @react-navigation/bottom-tabs. Cria um navegador de guias 
    //de navegação inferior (bottom tab navigation) 
      initialRouteName="Obras" //inicia na rota home
      screenOptions={{
        tabBarActiveTintColor: '#00B029', //cor verde ao clicar
        headerStyle: { //estilo pro meu header
          backgroundColor: '#00B029', // Defina a cor de fundo verde do cabeçalho para todas as telas
        },
        headerTintColor: '#ffffff', // Define a cor do texto do cabeçalho para todas as telas
        headerTitleStyle: {
          fontSize: 18, // Defina o tamanho do texto do cabeçalho para todas as telas
        },
      }}
    >
      <Tab.Screen //usado dentro do <Tab.Navigator> para definir uma guia individual
        name="Obras" //Rota
        component={HomeScreen} //Componente renderizado
        options={{
          tabBarLabel: 'Obras', //Nome abaixo do icone 
          tabBarIcon: ({ color, size }) => ( //params cor e tamanho
            <MaterialCommunityIcons name="home" color={color} size={size} /> //biblioteca icone
          ),
          title: 'Obras', // Nome do cabeçalho da rota
        }}
      />
      <Tab.Screen //usado dentro do <Tab.Navigator> para definir uma guia individual
        name="Apontamentos"
        component={Appointments}
        options={{
          tabBarLabel: 'Apontamentos',
          tabBarIcon: ({ color, size }) => (
            <Foundation name="clipboard-notes" color={color} size={size} />
          ),
          title: 'Apontamentos',
        }}
      />
      <Tab.Screen
        name="Adicionar"
        component={New}
        options={{
          tabBarLabel: 'Adicionar',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="circle-with-plus" color={"#0B006B"} size={75} 
            style={{ marginTop: -34 }} />
          ),
          title: 'Adicionar',
          tabBarLabelStyle: {
            color: 'gray', // Cor azul para o texto do tabBarLabel específico para essa guia
          },
        }}
      />
      <Tab.Screen
        name="Notificacoes"
        component={Notifications}
        options={{
          tabBarLabel: 'Notificações',
          tabBarIcon: ({ color, size }) => (
           <Ionicons name="notifications"  color={color} size={size} />
          ),
          title: 'Notificações',
        }}
      />
      <Tab.Screen
        name="Geral"
        component={General}
        options={{
          tabBarLabel: 'Geral',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-open" color={color} size={size} />
          ),
          title: 'Geral',
        }}
      />
    </Tab.Navigator>
  );
}
