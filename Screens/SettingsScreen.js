import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Switch, 
  TouchableOpacity 
} from 'react-native';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);

  const settingsOptions = [
    {
      title: 'Compte',
      items: [
        { icon: '', label: 'Profil', action: 'profile' },
        { icon: '', label: 'Sécurité', action: 'security' },
        { icon: '', label: 'Paiement', action: 'payment' },
      ],
    },
    {
      title: 'Préférences',
      items: [
        { 
          icon: '', 
          label: 'Notifications', 
          type: 'switch',
          value: notifications,
          onValueChange: setNotifications,
        },
        { 
          icon: '', 
          label: 'Mode sombre', 
          type: 'switch',
          value: darkMode,
          onValueChange: setDarkMode,
        },
        { 
          icon: '', 
          label: 'Sauvegarde auto', 
          type: 'switch',
          value: autoSave,
          onValueChange: setAutoSave,
        },
      ],
    },
    {
      title: 'Support',
      items: [
        { icon: '', label: 'Aide & Support', action: 'help' },
        { icon: '', label: 'À propos', action: 'about' },
        { icon: '', label: 'Nous contacter', action: 'contact' },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>⚙️ Paramètres</Text>
        <Text style={styles.headerSubtitle}>
          Personnalisez votre expérience
        </Text>
      </View>

      {settingsOptions.map((section, sectionIndex) => (
        <View key={sectionIndex} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <View style={styles.sectionContent}>
            {section.items.map((item, itemIndex) => (
              <TouchableOpacity 
                key={itemIndex} 
                style={styles.optionItem}
                onPress={() => item.action && console.log(`Action: ${item.action}`)}
                activeOpacity={0.7}
              >
                <View style={styles.optionLeft}>
                  <Text style={styles.optionIcon}>{item.icon}</Text>
                  <Text style={styles.optionLabel}>{item.label}</Text>
                </View>
                
                {item.type === 'switch' ? (
                  <Switch
                    value={item.value}
                    onValueChange={item.onValueChange}
                    trackColor={{ false: '#767577', true: '#606c38' }}
                    thumbColor={item.value ? '#432818' : '#f4f3f4'}
                  />
                ) : (
                  <Text style={styles.optionArrow}>›</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}

      <View style={styles.versionContainer}>
        <Text style={styles.versionText}>Version 1.0.0</Text>
        <Text style={styles.copyright}>© 2024 Navigation App</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    backgroundColor: '#606c38',
    padding: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  section: {
    marginTop: 25,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  sectionContent: {
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    fontSize: 20,
    marginRight: 15,
  },
  optionLabel: {
    fontSize: 16,
    color: '#333',
  },
  optionArrow: {
    fontSize: 24,
    color: '#999',
  },
  versionContainer: {
    alignItems: 'center',
    marginVertical: 30,
    paddingHorizontal: 20,
  },
  versionText: {
    fontSize: 14,
    color: '#999',
    marginBottom: 5,
  },
  copyright: {
    fontSize: 12,
    color: '#CCC',
  },
});