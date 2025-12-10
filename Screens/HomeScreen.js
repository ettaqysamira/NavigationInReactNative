import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Écran d'accueil</Text>
      <Text style={styles.description}>
        Bienvenue dans votre application, Explorez les fonctionnalités disponibles.
      </Text>
      
      <View style={styles.buttonContainer}>
        <Button
          title="Voir les détails"
          onPress={() => navigation.navigate('Details', { 
            id: 42, 
            message: 'Bienvenue aux détails!' 
          })}
          color="#432818"
        />
      </View>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Fonctionnalités</Text>
        <Text style={styles.cardText}>• Navigation</Text>
        <Text style={styles.cardText}>• Interface personnalisée</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 30,
    borderRadius: 10,
    overflow: 'hidden',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: '90%',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#432818',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
});