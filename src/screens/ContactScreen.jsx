import React from 'react';
import { ScrollView, StyleSheet, Text, SafeAreaView, View, Image, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const PROFILE_INFO = {
  name: 'Aurel Septia',
  email: 'aurelseptia@gmail.com',
  phone: '+62 812-3456-7890',
  avatar: require('../assets/ppaurel.jpg'),
  settings: [
    {
      id: 1,
      icon: require('../assets/icon/profile.png'),
      title: 'Profile Information',
      value: 'Mahasiswa'
    },
    {
      id: 2,
      icon: require('../assets/icon/email.png'),
      title: 'Email',
      value: 'aurelseptia@gmail.com'
    },
    {
      id: 3,
      icon: require('../assets/icon/phone.png'),
      title: 'Phone',
      value: '+62 821-1849-1912'
    },
    {
      id: 4,
      icon: require('../assets/icon/web.png'),
      title: 'Website',
      value: 'aurelseptia.dev'
    },
    {
      id: 5,
      icon: require('../assets/icon/location.png'),
      title: 'Location',
      value: 'Cirebon, Indonesia'
    },
    {
      id: 6,
      icon: require('../assets/icon/github.png'),
      title: 'GitHub',
      value: '@aurelseptia',
      link: 'https://github.com/aurelseptia'
    },
    {
      id: 7,
      icon: require('../assets/icon/instagram.png'),
      title: 'Instagram',
      value: '@aurel.septia',
      link: 'https://instagram.com/aurel.septia'
    },
    {
      id: 8,
      icon: require('../assets/icon/linkedin.png'),
      title: 'LinkedIn',
      value: 'Aurel Septia',
      link: 'https://linkedin.com/in/aurelseptia'
    }
  ]
};

export default function ContactScreen() {
  const handlePress = (link) => {
    if (link) {
      Linking.openURL(link)
        .catch((err) => console.error('Error opening link:', err));
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#1a237e', '#3949ab']}
        style={styles.header}
      >
        <View style={styles.profileSection}>
          <Image
            source={PROFILE_INFO.avatar}
            style={styles.avatar}
          />
          <Text style={styles.name}>{PROFILE_INFO.name}</Text>
          <Text 
            style={styles.email}
          >Mahasiswa Informatika Semester 5
          </Text>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content}>
        {PROFILE_INFO.settings.map((item) => (
          <View key={item.id} style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Image 
                source={item.icon}
                style={styles.settingIcon}
              />
              <Text style={styles.settingTitle}>{item.title}</Text>
            </View>
            <Text 
              style={[styles.settingValue, item.link && styles.linkText]}
              onPress={() => item.link && handlePress(item.link)}
            >
              {item.value}
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 30,
  },
  profileSection: {
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#ffffff90',
  },
  content: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#ffffff',
    marginBottom: 1,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  settingTitle: {
    fontSize: 16,
    color: '#333333',
  },
  settingValue: {
    fontSize: 14,
    color: '#666666',
  },
  linkText: {
    color: '#1565c0',
    textDecorationLine: 'underline',
  },
  settingValue: {
    fontSize: 14,
    color: '#666666',
  }
});