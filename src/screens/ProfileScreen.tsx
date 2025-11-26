import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const usuario = {
    nome: "Yuri Collodeti",
    email: "yuricollodeti@monetto.com",
    foto: require("../assets/avatar.png"),
    saldo: "R$ 2, 503,00" 
};

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header} />

            <ScrollView contentContainerStyle={styles.conteudo}>
                
                <View style={styles.areaPerfil}>
                    <View>
                        <Image
                            source={usuario.foto}
                            style={styles.foto}
                        />
                    </View>
                    <Text style={styles.nome}>{usuario.nome}</Text>
                    <Text style={styles.email}>{usuario.email}</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.tituloCartao}>Saldo atual</Text>
                    <Text style={styles.valorSaldo}>{usuario.saldo}</Text>
                    <Text style={styles.textoAtualizacao}>ultima atualização: Hoje, 15:30</Text>
                </View>
                
                <View style={styles.card}>
                    <View style={styles.cabecalhoTransacao}>
                        <Text style={styles.tituloSecao}>Transações Recentes</Text>
                        <TouchableOpacity>
                            <Text style={styles.linkVerTudo}>Ver tudo</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.linhaTransacao}>
                        <Text style={styles.nomeTransacao}>supermercado</Text>
                        <Text style={styles.valorTransacao}>-150,00</Text>
                    </View>
                    <Text style={styles.dataTransacao}>22/11/2025</Text>

                    <View style={styles.linhaTransacao}>
                        <Text style={styles.nomeTransacao}>Padaria</Text>
                        <Text style={styles.valorTransacao}>-20,00</Text>
                    </View>
                    <Text style={styles.dataTransacao}>20/11/2025</Text>
                </View>

                <View style={styles.areaBotoes}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>depositar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>despesa</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0',
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 150,
        backgroundColor: '#121212',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    conteudo: {
        paddingHorizontal: 20,
        paddingBottom: 90,
    },
    areaPerfil: {
        alignItems: 'center',
        marginTop: 80,
        marginBottom: 30,
    },

    foto: {
        width: 130,
        height: 130,
        borderRadius: 65,
    },
    nome: {
        fontSize: 45,
        color: '#000000',
        fontFamily: 'Jersey', 
    },
    email: {
        fontSize: 16,
        color: '#666666',
        marginTop: 4,
        fontWeight: '600',
        fontFamily: 'Jersey',
    },
    card: {
        backgroundColor: '#1A1A1A',
        borderRadius: 24,
        padding: 24,
        marginBottom: 20,
        shadowColor: "#000",
        shadowRadius: 5,
    },
    tituloCartao: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Jersey',
    },
    valorSaldo: {
        color: '#FFFFFF',
        fontSize: 42,
        fontFamily: 'Jersey',
        marginTop: 10,
        marginBottom: 5,
    },
    textoAtualizacao: {
        color: '#999999',
        fontSize: 12,
        fontWeight: '600',
    },
    cabecalhoTransacao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    tituloSecao: {
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: 'Jersey',
    },
    linkVerTudo: {
        color: '#194fffff',
        fontSize: 20,
       fontFamily: 'Jersey',
    },
    linhaTransacao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    nomeTransacao: {
        color: '#ffffffff',
        fontSize: 20,
        fontFamily: 'Jersey',
    },
    valorTransacao: {
        color: '#FF3333',
        fontSize: 20,
        fontFamily: 'Jersey',
    },
    dataTransacao: {
        color: '#999999',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 4,
        marginBottom: 8,
    },
    areaBotoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    button: {
        backgroundColor: '#1A1A1A',
        width: '48%',
        paddingVertical: 18,
        borderRadius: 16,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'Jersey',
    }
});

export default ProfileScreen;