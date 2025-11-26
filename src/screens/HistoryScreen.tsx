import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Transacao {
  id: string;
  descricao: string;
  valor: number;
  data: string;
  tipo: 'entrada' | 'saida';
  categoria?: string;
}

interface HistoricoProps {
  navigation: any;
}

const Historico: React.FC<HistoricoProps> = ({ navigation }) => {
  const [transacoes, setTransacoes] = useState<Transacao[]>([
    {
      id: '1',
      descricao: 'Valeju',
      valor: 29.40,
      data: '29/10/25',
      tipo: 'saida',
      categoria: 'Alimentação'
    },
    {
      id: '2',
      descricao: 'Salário',
      valor: 3500.00,
      data: '28/10/25',
      tipo: 'entrada',
      categoria: 'Renda'
    },
    {
      id: '3',
      descricao: 'Mercado',
      valor: 145.80,
      data: '27/10/25',
      tipo: 'saida',
      categoria: 'Compras'
    },
    {
      id: '4',
      descricao: 'Freelance',
      valor: 850.00,
      data: '25/10/25',
      tipo: 'entrada',
      categoria: 'Trabalho Extra'
    },
    {
      id: '5',
      descricao: 'Conta de Luz',
      valor: 198.50,
      data: '24/10/25',
      tipo: 'saida',
      categoria: 'Contas'
    }
  ]);

  const formatarValor = (valor: number, tipo: string): string => {
    const valorFormatado = valor.toFixed(2).replace('.', ',');
    return tipo === 'entrada' ? `+ R$ ${valorFormatado}` : `R$ ${valorFormatado}`;
  };

  const calcularSaldo = (): number => {
    return transacoes.reduce((total, transacao) => {
      return transacao.tipo === 'entrada' 
        ? total + transacao.valor 
        : total - transacao.valor;
    }, 0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Historico</Text>
      </View>

      
      <ScrollView 
        style={styles.listaContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listaContent}
      >
        {transacoes.map((transacao) => (
          <TouchableOpacity
            key={transacao.id}
            style={styles.cardTransacao}
            activeOpacity={0.7}
          >
            <View style={styles.infoTransacao}>
              <Text style={styles.descricao}>{transacao.descricao}</Text>
              <Text style={styles.data}>{transacao.data}</Text>
            </View>
            
            <View style={styles.valorContainer}>
              <Text 
                style={[
                  styles.valor,
                  transacao.tipo === 'entrada' && styles.valorEntrada
                ]}
              >
                {formatarValor(transacao.valor, transacao.tipo)}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      
      <View style={styles.barraNavegacao}>
        <TouchableOpacity 
          style={styles.botaoNav}
          onPress={() => navigation.navigate('Home')}
        >
          <Icon name="home" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.botaoNav}
          onPress={() => navigation.navigate('Cartoes')}
        >
          <Icon name="card" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.botaoNav, styles.botaoNavAtivo]}
          onPress={() => navigation.navigate('Historico')}
        >
          <Icon name="time" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.botaoNav}
          onPress={() => navigation.navigate('Perfil')}
        >
          <Icon name="person" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cabecalho: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    alignItems: 'center'
  },
  titulo: {
    fontFamily: 'Jersey',
    fontSize: 50,
    color: '#000',
  },
  listaContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  listaContent: {
    paddingBottom: 24,
  },
  cardTransacao: {
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoTransacao: {
    flex: 1,
  },
  descricao: {
    fontFamily: 'Jersey',
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  data: {
    fontFamily: 'Jersey',
    fontSize: 14,
    color: '#999',
  },
  valorContainer: {
    marginLeft: 16,
  },
  valor: {
    fontFamily: 'Jersey',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  valorEntrada: {
    color: '#4ade80',
  },
  barraNavegacao: {
    backgroundColor: '#1a1a1a',
    marginHorizontal: 24,
    marginBottom: 24,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  botaoNav: {
    padding: 8,
    borderRadius: 50,
  },
  botaoNavAtivo: {
    backgroundColor: '#333',
  },
});

export default Historico;