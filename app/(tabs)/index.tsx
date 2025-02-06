import { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function BioScreen() {
  const imageUrl = 'https://avatars.dzeninfra.ru/get-zen_doc/8269145/pub_641ec1d0798be415157b4180_641f3d1cd4b1f54fcf2f0a01/scale_1200';

  return (
    <ThemedView style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.profileImage} />
      <ThemedText type="title" style={[styles.fullName, styles.blackText]}>Никита Толмачев</ThemedText>
      <ThemedText type="subtitle" style={[styles.title, styles.blackText]}>Веб-разработка</ThemedText>
      
      <View style={styles.infoContainer}>
        <Image source={{ uri: 'https://example.com/icon-phone.png' }} style={styles.icon} />
        <ThemedText style={styles.blackText}>+7 (705) 800 473</ThemedText>
      </View>
      <View style={styles.infoContainer}>
        <Image source={{ uri: 'https://example.com/icon-social.png' }} style={styles.icon} />
        <ThemedText style={styles.blackText}>@tolmachev</ThemedText>
      </View>
      <View style={styles.infoContainer}>
        <Image source={{ uri: 'https://example.com/icon-email.png' }} style={styles.icon} />
        <ThemedText style={styles.blackText}>nikitatolmachev@gmail.com</ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  fullName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  blackText: {
    color: '#000',
  },
});
