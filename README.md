https://dribbble.com/shots/11026222-Job-Discussion-Platform



# PARA NAVEGACION 
npm install @react-navigation/native
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

npm install @react-navigation/stack
npm install @react-navigation/bottom-tabs


# PARA FUENTES CON ICONOS 
npm i --save react-native-svg
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/react-native-fontawesome

npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-brands-svg-icons


# PARA FUENTES CON ICONOS 2 fulll
https://github.com/oblador/react-native-vector-icons#installation
npm install --save react-native-vector-icons

EDITAR EL ARCHIVO
android/app/build.gradle

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
project.ext.vectoricons = [
    iconFontNames: [ 'AntDesign.ttf', 'Entypo.ttf' ] // Name of the font files you want to copy
]
