import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    FlatList, 
    ActivityIndicator, 
    TouchableOpacity, 
    Linking
} from 'react-native';
const API_KEY = '5ac9932a3deb464ca70326a08f345737'; 
const SEARCH_TERMS = 'criptomoeda OR bitcoin OR ethereum';
const NEWS_LIMIT = 15; 
const NEWS_URL = `https://newsapi.org/v2/everything?q=${SEARCH_TERMS}&language=pt&sortBy=publishedAt&pageSize=${NEWS_LIMIT}&apiKey=${API_KEY}`;

const NewsScreen = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try { 
      const response = await fetch(NEWS_URL);
      const data = await response.json();
      
      if (data.status === 'ok') {
        setNews(data.articles);
      } else {
        console.error("Erro da API:", data.message);
      }
      
    } catch (error) {
      console.error("Erro ao buscar notícias:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderNewsItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.newsCard} 
      onPress={() => handlePressNews(item.url)}
      activeOpacity={0.7}
    >
      <Text style={styles.newsSource}>{item.source.name}</Text>
      <Text style={styles.newsTitle}>{item.title}</Text>
      <Text style={styles.newsDescription} numberOfLines={2}>{item.description}</Text>
      
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000000ff" />
        <Text>Carregando notícias financeiras...</Text>
      </View>
    );
  }

  const handlePressNews = (url) => {
        if (url) {
            Linking.openURL(url);
        }
    };

  return (
    <View style={styles.container}>
      <Text style={{textAlign: "center", fontFamily: "Jersey", fontSize: 32, marginBottom: 20}}>Feed de Notícias do Mercado</Text>
      
      <FlatList
        data={news}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.url} 
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhuma notícia encontrada.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 40,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  feedTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  listContent: {
    paddingBottom: 150,
  },
  newsCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#000000ff',
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  newsSource: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000000ff',
    marginBottom: 5,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 5,
    color: '#222',
  },
  newsDescription: {
    fontSize: 14,
    color: '#555',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    color: 'gray',
  }
});

export default NewsScreen;