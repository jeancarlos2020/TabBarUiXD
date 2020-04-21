

import React, { Component } from 'react';
//IMPORTAR  ICONOS
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUser, faLock, faHome, faWallet, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faUser, faLock, faHome, faWallet, faChevronLeft, faChevronRight)
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/Ionicons'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  Animated,
  TouchableOpacity,
  Dimensions
} from 'react-native';

//NAVEGACION
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
import Svg, { Circle, Path } from 'react-native-svg';
import * as cc from './Components/Constantes'
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedPath = Animated.createAnimatedComponent(Path);

import CurvedNavBar from './Components/navbar'
import TabButtomCircle from './Components/TabButtomCircle'
const { height, width } = Dimensions.get('window');
function page1() {
  const ancho = 120;
  const alto = 50;
  const colorFondo = "black"
  const colorBarra = cc.Colores.barras
  const ajusteCurva = 0.50;
  const ajustePuntas = 3


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: cc.Colores.fondo }}>
      <Text>PAGINA POR CREAR AUN NO SE TIENE NADA</Text>



      <View>
        <View style={{
          backgroundColor: colorFondo,
          position: 'absolute',
          width: ancho,
          height: alto,
          left: -(ancho / 2),
          bottom: 0,
          shadowColor: "#000", shadowOffset: { width: 1, height: 4 }, shadowOpacity: 0.5, shadowRadius: 10,
        }}>
        </View>
        <View style={{
          backgroundColor: colorBarra, position: 'absolute',
          bottom: 0,
          width: ancho,
          height: (alto / 2) + ajustePuntas,
          left: -(ancho / 2)
        }}>
        </View>

        <View style={{ position: 'absolute', bottom: 0 }}>
          <View style={{
            backgroundColor: colorFondo, position: 'absolute',
            bottom: (alto / 3) - ajusteCurva,

            width: ancho / 2,
            height: alto - ((alto / 3) - ajusteCurva),

            left: - (ancho / 3) + (ancho / 2) / 6,
            borderBottomLeftRadius: (ancho / 2),
            borderBottomRightRadius: (ancho / 2),
          }}></View>

          <View style={{
            backgroundColor: colorBarra, position: 'absolute',
            bottom: 0,
            right: ancho / 6,
            width: ancho / 3,
            height: alto,
            borderTopRightRadius: alto - 10
          }}></View>

          <View style={{
            backgroundColor: colorBarra, position: 'absolute',
            bottom: 0,
            left: ancho / 6,
            width: ancho / 3,
            height: alto,
            borderTopLeftRadius: alto - 10
          }}></View>
        </View>
      </View>

    </View >
  );
}
function page2() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: cc.Colores.fondo}}>
      <Text>page</Text>
  

    </View>
  );
}
function page3() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:cc.Colores.fondo }}>
      <Text>PAGINA POR CREAR AUN NO SE TIENE NADA</Text>
    </View>
  );
}





class App extends Component {

  state = {
    iconColor: 'black', //default color black
    primColor: '#4687FD',
    selectedIconColor: 'white',
    mainOffSetIos: 20,
    mainOffSetAndroid: 0,
    width: 100,
    height: 50,
  }

  render() {
    return (
      <View style={{ backgroundColor: cc.Colores.fondo, flex: 1 }}>
        <NavigationContainer >
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: '#3e1b72',
              inactiveTintColor: '#b9d4dc',
              keyboardHidesTabBar: true,
              showLabel: false,
              showIcon: true,
              style: {
                // width: '100%',
                height: 60,
                backgroundColor: cc.Colores.blanco,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                // borderBottomLeftRadius:30,
                // borderBottomRightRadius:30,
                // borderRadius:30,
                 marginHorizontal:10,
                //  marginBottom: 10,
                borderTopWidth: 0,
                elevation: 0,

              }
            }}
          >
            <Tab.Screen
              name="Inicio2"
              component={page2}
              options={{

                title: "ADASD",
                tabBarIcon: ({ color, size }) => (
                  <Icon name="home" size={30} color={color} />
                  // <FontAwesomeIcon icon="home" size={30} color={color} />
                ),
              }}
            />

            <Tab.Screen
              name="Inicio"
              component={page1}
              options={{

                title: "ADASD",
                tabBarIcon: ({ color, size }) => (
                  <Icon1 name="briefcase" size={30} color={color} />
                  // <FontAwesomeIcon icon="home" size={30} color={color} />
                ),
              }}
            />

            <Tab.Screen
              name="MenuLeo"
              component={page2}
              options={{

                tabBarButton: () => (
                  <View style={{ backgroundColor: cc.Colores.fondo, width: 150, height: 60 }}>
                    <View style={{
                      backgroundColor: '#3e1b72', width: 75, height: 75, position: "absolute",
                      top: -40,
                      left: 38,
                      borderRadius: 50,
                      zIndex: 1,
                      shadowOffset: { width: 75, height: 75 },
                      shadowColor: '#3e1b72',
                      shadowOpacity: 0,
                      elevation: 20,
                      justifyContent:"center",
                      alignItems:"center"
                    }}>
                       <Icon2 name="ios-add" size={45} color={cc.Colores.fondo} />
                    </View>
                    <TabButtomCircle />
                  </View>

                  // <TabButtomCircle />
                )
              }}
            />

            <Tab.Screen
              name="Billetera"
              component={page3}
              options={{
                tabBarIcon: ({ color, size }) => (

                  <Icon name="hdd" size={30} color={color} />
                  // <FontAwesomeIcon icon="wallet" size={30} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Billetera2"
              component={page3}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="user" size={30} color={color} />
                  // <FontAwesomeIcon icon="wallet" size={30} color={color} />
                ),
              }}
            />

          </Tab.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wicon: {
    alignItems: 'center',
    width: width / 6,
    paddingTop: 10,
    top: -10
  }


});

export default App;
