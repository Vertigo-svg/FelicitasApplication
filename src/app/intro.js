import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

const WelcomeScreen = () => {
  const router = useRouter();

  // Load the Poppins font
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const navigateToLogin = () => {
    router.push('logIn'); // Replace 'logIn' with the actual route to your login page
  };

  return (
    <LinearGradient
      colors={['#1B1B41', '#FDAD00']}
      start={{ x: 1, y: 0 }}
      end={{ x: 2, y: 1 }}
      style={styles.gradientBackground}
    >
      <SafeAreaView style={styles.container}>
        {/* Top Header Section with Logo and Text in Row */}
        <View style={styles.header}>
          <Image
            source={require('../assets/BuyNaBay.png')} // Replace with the path to your logo
            style={styles.logo}
          />
          <Text style={[styles.logoText, { fontFamily: 'Poppins_700Bold' }]}>BuyNaBay</Text>
        </View>

        {/* Content Section */}
        <View style={styles.content}>
          <Text style={[styles.title, { fontFamily: 'Poppins_700Bold' }]}>
            Track, Burn, and Achieve: Your Personalized Calorie Journey
          </Text>
          <Text style={[styles.description, { fontFamily: 'Poppins_400Regular' }]}>
            Your go-to app for calculating your calorie intake and miles ran. Offfers Nutrition
            Suggestions for a better and healthy lifestyle.
          </Text>
        </View>

        {/* Navigation Arrows */}
        <TouchableOpacity style={styles.arrowButton} onPress={navigateToLogin}>
          <View style={styles.arrowRow}>
            <Text style={[styles.arrow, { opacity: 0.3 }]}> &gt; </Text>
            <Text style={[styles.arrow, { opacity: 0.5 }]}> &gt; </Text>
            <Text style={[styles.arrow, { opacity: 0.7 }]}> &gt; </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row', // Row layout for logo and text
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 30,
  },
  logo: {
    width: 35, // Adjusted size for better alignment
    height: 35,
    resizeMode: 'contain',
    marginRight: 2, // Space between logo and text
  },
  logoText: {
    fontSize: 20,
    color: '#FFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 35,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#d1d1d1',
    textAlign: 'left', // Left-aligned text
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  arrowButton: {
    marginBottom: 50,
    marginTop: 5,
    alignItems: 'center',
    marginRight: 200,
  },
  arrowRow: {
    flexDirection: 'row', // Row layout for arrows
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    fontSize: 32, // Size of each arrow
    color: '#FFF',
    marginHorizontal: -3, // Reduced space between arrows
  },
});

export default WelcomeScreen;
