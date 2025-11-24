import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const usuario = {
    nome: "Peter Parker",
    email: "peterparker@monetto.com",
    foto: require("../../assets/petertrabalho.jpg"),
    frase: "Aprenda a usar seu dinheiro de forma eficiente"
};

export const perfil = () => {
    return (
        <View>
            <ScrollView>
                <Text>Meu Perfil</Text>
                <View>
                    <View>
                        <Image
                            source={usuario.foto}
                        />
                    </View>
                    <Text>{usuario.nome}</Text>
                    <Text>{usuario.email}</Text>
                    <View>
                        <Text>
                            "{usuario.frase}"
                        </Text>
                    </View>
                </View>

                <View>
                    <Text>Configurações da Conta</Text>

                    <View>
                        <Text>Dados Pessoais</Text>
                        
                    </View>

                    <View>
                        <Text>Segurança</Text>
                        
                    </View>

                    <View>
                        <Text>Sobre o App</Text>
        
                    </View>
                </View>

            </ScrollView>
        </View>
    );
};