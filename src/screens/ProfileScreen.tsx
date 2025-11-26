import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const usuario = {
    nome: "Yuri Collodeti",
    email: "yuricollodeti@monetto.com",
    foto: require("../assets/avatar.png"),
    saldo: "R$ 2.503,00" 
};

const ProfileScreen = () => {
    return (
        <View>
            <ScrollView>
                <View>
                    <View>
                        <Image
                            source={usuario.foto}
                        />
                    </View>
                    <Text>{usuario.nome}</Text>
                    <Text>{usuario.email}</Text>
                </View>

                <View>
                    <Text>Saldo atual</Text>
                    <Text>{usuario.saldo}</Text>
                    <Text>ultima atualização: Hoje, 15:30</Text>
                </View>
                
                <View>
                    <View>
                        <Text>Transações Recentes</Text>
                        <TouchableOpacity>
                            <Text>Ver tudo</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text>supermercado</Text>
                        <Text>-150,00</Text>
                    </View>
                    <Text>22/11/2025</Text>

                    <View>
                        <Text>Padaria</Text>
                        <Text>-20,00</Text>
                    </View>
                    <Text>20/11/2025</Text>
                </View>

                <View>
                    <TouchableOpacity>
                        <Text>depositar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text>despesas</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    );
};

export default ProfileScreen;
