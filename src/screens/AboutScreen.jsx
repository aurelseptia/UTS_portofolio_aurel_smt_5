import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, SafeAreaView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

// --- DATA HARDCODED (Disesuaikan untuk desain baru) ---
const PROFILE_DATA = {
  profileImage: require('../assets/ppaurel.jpg'),
  mainName: 'AUREL SEPTIA',
  mainTitle: 'Informatika',
  quote: '“Every object tells a story if you know how to read it.”',
  bio: 'Mahasiswa Informatika di ITEKES MAHARDIKA dengan minat tinggi pada Mobile Development, web development dan Data Analyst',
  skillsIcons: [
    { name: 'html5', icon: require('../assets/icon/html.png') },
    { name: 'CSS 3', icon: require('../assets/icon/css.png') },
    { name: 'React Native', icon: require('../assets/icon/react.png') },
    { name: 'Java Script', icon: require('../assets/icon/js.png') },
    { name: 'Python', icon: require('../assets/icon/python.png') },
    { name: 'Tailwind Css', icon: require('../assets/icon/tailwind.png') },
    { name: 'Figma', icon: require('../assets/icon/figma.png') },
  ],
  skillsList: [
    'Wireframe & Prototype', 'Mobile Application Design',
    'Data Analyst', 'UI UX DESIGN',
    'Typography & Color', 'Front-end',
    'Design Systems', 'Back-end',
    'Responsive Designs',
    'Visualization Data',
  ],
};

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.aboutContainer}>
        {/* Header Besar */}
        <Text style={styles.mainName}>{PROFILE_DATA.mainName}</Text>
        <Text style={styles.mainTitle}>{PROFILE_DATA.mainTitle}</Text>

        {/* Kutipan */}
        <Text style={styles.quoteText}>{PROFILE_DATA.quote}</Text>

        {/* Kartu Profil & Skills Wrapper */}
        <View style={styles.infoCardWrapper}>
          {/* Kartu Informasi Diri (Kiri) */}
          <View style={styles.profileCard}>
            <Image
              source={PROFILE_DATA.profileImage }
              style={styles.profileImage}
            />
            <Text style={styles.profileCardName}>{PROFILE_DATA.mainName.split(' ')[0]}</Text>
            <Text style={styles.profileCardTitle}>{PROFILE_DATA.mainTitle}</Text>
            <Text style={styles.profileCardBio}>{PROFILE_DATA.bio}</Text>
          </View>

          {/* Bagian Skills (Kanan) */}
          <View style={styles.skillsCard}>
            <Text style={styles.skillsCardTitle}>Skills</Text>
            {/* Ikon Skills */}
            <View style={styles.skillsIconContainer}>
              {PROFILE_DATA.skillsIcons.map((skill, index) => (
                // Menggunakan Image untuk ikon dari URL SVG
                <Image key={index} source={ skill.icon } style={styles.skillIcon} />
              ))}
            </View>
            {/* Daftar Skill Poin-Poin */}
            <View style={styles.skillsListContainer}>
              {PROFILE_DATA.skillsList.map((skill, index) => (
                <Text key={index} style={styles.skillListItem}>• {skill}</Text>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// --- STYLING KHUSUS UNTUK LAYAR INI ---
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginBottom: 100,
    marginTop:50
  },
  aboutContainer: {
    paddingVertical: 30,
    paddingHorizontal: width > 768 ? width * 0.1 : 20, // Responsif padding
    alignItems: 'center',
    minHeight: '100%',
  },
  mainName: {
    fontSize: width > 768 ? 60 : 40,
    fontWeight: '900',
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center',
  },
  mainTitle: {
    fontSize: width > 768 ? 24 : 18,
    color: '#555555',
    marginBottom: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  quoteText: {
    fontSize: width > 768 ? 20 : 16,
    fontStyle: 'italic',
    color: '#666666',
    marginBottom: 40,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  infoCardWrapper: {
    flexDirection: width > 768 ? 'row' : 'column',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 1000,
  },
  // Kartu Profil
  profileCard: {
    flex: width > 768 ? 0.4 : 1,
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
    margin: width > 768 ? 15 : 10,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 0,
    marginBottom: 15,
    borderWidth: 0,
    borderColor: '#AAAAAA',
  },
  profileCardName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  profileCardTitle: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 15,
    fontStyle: 'italic',
  },
  profileCardBio: {
    fontSize: 14,
    color: '#444444',
    textAlign: 'center',
    lineHeight: 22,
  },
  // Kartu Skills
  skillsCard: {
    flex: width > 768 ? 0.6 : 1,
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
    margin: width > 768 ? 15 : 10,
  },
  skillsCardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingBottom: 10,
  },
  skillsIconContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  skillIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
    marginBottom: 10,
  },
  skillsListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  skillListItem: {
    fontSize: 14,
    color: '#444444',
    marginBottom: 8,
    width: width > 768 ? '48%' : '100%',
  },
});