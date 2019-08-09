import React from 'react';
import { View, SafeAreaView, Image, StyleSheet, Text } from 'react-native';

import logo from '../assets/logo.png';

export default function Main() {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={logo} />

            <View style={styles.cardsContainer}>
                <View style={styles.card}>
                    <Image source={{ uri: 'https://avatars1.githubusercontent.com/u/33934389?v=4' }} />
                    <View style={styles.footer}>
                        <Text style={styles.name}>Gabriel Gambarra</Text>
                        <Text style={styles.bio}>Estudante de Ciência da Computação. Apaixonado por dar vida ao computador enquanto programa. Intelectual, filantropo... A parte do milionário ainda está vindo.</Text>

                    </View>
                </View>
            </View>

            <View />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});
