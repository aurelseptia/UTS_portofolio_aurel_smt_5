import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const PROJECTS_DATA = [
  {
    id: '1',
    name: 'E-Learn Pro',
    image: require('../assets/projects/elearn.png'),
    description: 'Aplikasi e-learning yang dirancang untuk memberikan pengalaman belajar yang menarik dan interaktif. Platform ini menggabungkan berbagai fitur pembelajaran modern.',
    features: [
      'Live Classes dengan Expert',
      'Course Videos HD',
      'Mock Tests & Evaluasi',
      'Popular Tutors Access',
      'Dokumentasi Lengkap'
    ],
    technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    status: 'Completed'
  },
  {
    id: '2',
    name: 'Task Manager Pro',
    image: require('../assets/projects/taskmanager.png'),
    description: 'Aplikasi manajemen tugas dengan fitur kolaborasi tim dan tracking progress real-time.',
    features: [
      'Real-time Sync',
      'Team Collaboration',
      'Task Priority',
      'Progress Tracking',
      'Reminder System'
    ],
    technologies: ['React Native', 'MongoDB', 'Express'],
    status: 'In Progress'
  },
  {
    id: '3',
    name: 'Campus Connect',
    image: require('../assets/projects/campus.png'),
    description: 'Sistem informasi kampus terintegrasi untuk mahasiswa dan dosen.',
    features: [
      'Academic Calendar',
      'Grade Management',
      'Course Registration',
      'Student Portal',
      'Online Assessment'
    ],
    technologies: ['React', 'MySQL', 'PHP'],
    status: 'Completed'
  }
];

export default function ProjectsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient 
        colors={['#1a237e', '#3949ab']} 
        style={styles.header}
      >
        <Text style={styles.headerTitle}>My Projects</Text>
        <Text style={styles.headerSubtitle}>Recent Works & Achievements</Text>
      </LinearGradient>
      
      <ScrollView style={styles.content}>
        {PROJECTS_DATA.map((project) => (
          <View key={project.id} style={styles.projectCard}>
            <Image
              source={project.image}
              style={styles.projectImage}
              resizeMode="center"
            />
            
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>{project.status}</Text>
            </View>

            <View style={styles.projectInfo}>
              <Text style={styles.projectTitle}>{project.name}</Text>
              <Text style={styles.projectDescription}>{project.description}</Text>
              
              <Text style={styles.featuresTitle}>Key Features:</Text>
              <View style={styles.featuresList}>
                {project.features.map((feature, index) => (
                  <View key={index} style={styles.featureItem}>
                    <Text style={styles.featureText}>• {feature}</Text>
                  </View>
                ))}
              </View>

              <Text style={styles.techTitle}>Technologies Used:</Text>
              <View style={styles.techStack}>
                {project.technologies.map((tech, index) => (
                  <View key={index} style={styles.techBadge}>
                    <Text style={styles.techText}>{tech}</Text>
                  </View>
                ))}
              </View>
            </View>
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
    marginBottom: 100
  },
  header: {
    padding: 20,
    paddingTop: 70,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#ffffff90',
    marginTop: 5,
  },
  content: {
    padding: 16,
  },
  projectCard: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    position: 'relative',
  },
  projectImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  statusBadge: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: '#4caf50',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  projectInfo: {
    padding: 20,
  },
  projectTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a237e',
    marginBottom: 10,
  },
  projectDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
    marginBottom: 15,
  },
  featuresTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  featuresList: {
    marginBottom: 15,
  },
  featureItem: {
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureText: {
    fontSize: 14,
    color: '#444',
    marginLeft: 5,
  },
  techTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  techStack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  techBadge: {
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  techText: {
    color: '#1565c0',
    fontSize: 12,
    fontWeight: '500',
  },
});