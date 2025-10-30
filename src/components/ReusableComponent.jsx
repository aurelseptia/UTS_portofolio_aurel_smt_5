import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

// --- DATA MOCKUP (Hardcoded Data) ---
const CONTACT_DATA = [
    { type: 'Email', value: 'mailto:aurel.natasya@example.com', display: 'aurel.natasya@example.com' },
    { type: 'LinkedIn', value: 'https://linkedin.com/in/aurelnatasya', display: 'Aurel Natasya' },
    { type: 'GitHub', value: 'https://github.com/aurelnatasya', display: 'aurelnatasya' },
];

// 1. SkillTag Component
export const SkillTag = ({ skill }) => (
  <View style={componentStyles.tagContainer}>
    <Text style={componentStyles.tagText}>{skill}</Text>
  </View>
);

// 2. ProjectItem Component
export const ProjectItem = ({ project }) => (
  <View style={componentStyles.projectItemContainer}>
    <Text style={componentStyles.projectItemName}>{project.name}</Text>
    <Text style={componentStyles.projectItemDescription}>{project.description}</Text>
  </View>
);

// 3. ContactLink Component
export const ContactLink = ({ contact }) => {
  const handlePress = () => {
    Linking.openURL(contact.value).catch(err => console.error('Gagal membuka URL:', err));
  };

  return (
    <TouchableOpacity style={componentStyles.contactLinkButton} onPress={handlePress}>
      <Text style={componentStyles.contactLinkType}>{contact.type}:</Text>
      <Text style={componentStyles.contactLinkDisplay}>{contact.display}</Text>
    </TouchableOpacity>
  );
};

// Data Kontak diekspor agar dapat digunakan di ContactScreen
export { CONTACT_DATA };

const componentStyles = StyleSheet.create({
  // Style untuk SkillTag
  tagContainer: {
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#90caf9',
  },
  tagText: {
    color: '#1a237e',
    fontSize: 14,
    fontWeight: '500',
  },
  // Style untuk ProjectItem
  projectItemContainer: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 5,
    borderLeftColor: '#42a5f5',
  },
  projectItemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a237e',
    marginBottom: 5,
  },
  projectItemDescription: {
    fontSize: 14,
    color: '#4f4f4f',
  },
  // Style untuk ContactLink
  contactLinkButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  contactLinkType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a237e',
    marginRight: 8,
    width: 80,
  },
  contactLinkDisplay: {
    fontSize: 16,
    color: '#42a5f5',
    textDecorationLine: 'underline',
    flexShrink: 1,
  },
});