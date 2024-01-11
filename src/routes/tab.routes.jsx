// Importa as bibliotecas 
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Foundation, Ionicons } from '@expo/vector-icons';

// Importa o componente View do React Native
import { View } from 'react-native';

// Importa as telas principais do aplicativo
import HomeScreen from '../mainScreens/HomeScreen';
import Appointments from '../mainScreens/Appointments';
import New from '../mainScreens/New';
import Notifications from '../mainScreens/Notifications';
import General from '../mainScreens/General';

// Cria um navegador de abas inferior usando createBottomTabNavigator
const Tab = createBottomTabNavigator();

// Define o componente funcional TabRoutes
const TabRoutes = () => {
  // Retorna a configuração do navegador de abas
  return (
    <Tab.Navigator
      initialRouteName="Obras"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#00B029',  // Cor do ícone ativo
        headerStyle: {
          backgroundColor: '#00B029',  // Cor de fundo do cabeçalho
        },
        headerTintColor: '#ffffff',  // Cor do texto do cabeçalho
        headerTitleStyle: {
          fontSize: 18,  // Tamanho do texto do cabeçalho
        },
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Adicionar') {
            // Renderiza um ícone personalizado para a guia "Adicionar"
            return (
              <NewTabButton />
            );
          }
          // Renderiza os outros ícones padrão para as demais guias
          return getDefaultTabIcon(route, color, size);
        },
      })}
    >
      {/* Configuração da tela "Obras" */}
      <Tab.Screen
        name="Obras"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Obras',  // Rótulo na aba
          title: 'Obras',  // Título da tela
        }}
      />
      {/* Configuração da tela "Apontamentos" */}
      <Tab.Screen
        name="Apontamentos"
        component={Appointments}
        options={{
          tabBarLabel: 'Apontamentos',  // Rótulo na aba
          title: 'Apontamentos',  // Título da tela
        }}
      />
      {/* Configuração da tela "Adicionar" */}
      <Tab.Screen
        name="Adicionar"
        component={New}
        options={{
          tabBarLabel: '',  // Rótulo na aba (vazio para esconder)
          tabBarLabelStyle: {
            color: 'gray',  // Cor do rótulo
          },
        }}
      />
      {/* Configuração da tela "Notificações" */}
      <Tab.Screen
        name="Notificacoes"
        component={Notifications}
        options={{
          tabBarLabel: 'Notificações',  // Rótulo na aba
          title: 'Notificações',  // Título da tela
        }}
      />
      {/* Configuração da tela "Geral" */}
      <Tab.Screen
        name="Geral"
        component={General}
        options={{
          tabBarLabel: 'Geral',  // Rótulo na aba
          title: 'Geral',  // Título da tela
        }}
      />
    </Tab.Navigator>
  );
};

// Função para renderizar o ícone padrão das guias
const getDefaultTabIcon = (route, color, size) => {
  switch (route.name) {
    case 'Obras':
      return <MaterialCommunityIcons name="home" color={color} size={size} />;
    case 'Apontamentos':
      return <Foundation name="clipboard-notes" color={color} size={size} />;
    case 'Notificacoes':
      return <Ionicons name="notifications" color={color} size={size} />;
    case 'Geral':
      return <Ionicons name="ios-open" color={color} size={size} />;
    default:
      return null;
  }
};

// Componente para renderizar o botão flutuante na guia "Adicionar"
const NewTabButton = () => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <New />
    </View>
  );
};

// Exporta o componente TabRoutes
export default TabRoutes;
