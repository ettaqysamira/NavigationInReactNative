import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AppBar() {
  return (
    <View style={styles.appBar}>
      <View style={styles.appBarContent}>
       
        <View>
          <Text style={styles.appBarTitle}>Navigation Test</Text>
        </View>
      </View>
      <Ionicons name="notifications-outline" size={24} color="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 80,
    backgroundColor: '#283618',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  appBarContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginRight: 15,
  },
  appBarTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
 
});