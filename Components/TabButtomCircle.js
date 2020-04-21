import React, { Component } from 'react';
import {
    View,
    Image,
} from 'react-native';

class TabButtomCircle extends Component {

    state = {
        ancho: 150,
        alto: 60,
        colorFondo:'#eef4f6',
        colorBarra: '#ffffff',//'#d1d2d4'
        ajusteCurva: 3,
        ajustePuntas: 5
    }

    render() {
        return (
            <View style={{ height: this.state.alto, width: this.state.ancho, padding: 0, margin: 0, borderWidth: 0 }}>
                <View style={{
                    backgroundColor: this.colorFondo,
                    position: 'absolute',
                    width: this.state.ancho,
                    height: this.state.alto,
                    left: 0,
                    bottom: 0,
                }}>
                </View>
                <View style={{
                    backgroundColor: this.state.colorBarra, position: 'absolute',
                    bottom: 0,
                    width: this.state.ancho,
                    height: (this.state.alto / 2) + this.state.ajustePuntas,
                    left: 0
                }}>
                </View>

                <View style={{ position: 'absolute', bottom: 0 }}>
                    <View style={{
                        backgroundColor: this.state.colorFondo, position: 'absolute',
                        bottom: (this.state.alto / 3) - this.state.ajusteCurva,

                        width: this.state.ancho / 2,
                        height: this.state.alto - ((this.state.alto / 3) - this.state.ajusteCurva),

                        left: (this.state.ancho / 3) - (this.state.ancho / 2) / 6,
                        borderBottomLeftRadius: (this.state.ancho / 2),
                        borderBottomRightRadius: (this.state.ancho / 2),
                    }}></View>

                    <View style={{
                        backgroundColor: this.state.colorBarra, position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: this.state.ancho / 3,
                        height: this.state.alto,
                        borderTopRightRadius: this.state.alto - 10
                    }}></View>

                    <View style={{
                        backgroundColor: this.state.colorBarra, position: 'absolute',
                        bottom: 0,
                        right: -this.state.ancho,
                        width: this.state.ancho / 3,
                        height: this.state.alto,
                        borderTopLeftRadius: this.state.alto - 10
                    }}></View>
                </View>
            </View>
        );
    }
}
export default TabButtomCircle;