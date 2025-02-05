import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const CalorieTracker = () => {
  const [caloriesIntake, setCaloriesIntake] = useState('');
  const [milesRan, setMilesRan] = useState('');
  const [netCalories, setNetCalories] = useState(null);

  const CALORIES_BURNED_PER_MILE = 100;

  const calculateNetCalories = () => {
    const intake = parseFloat(caloriesIntake) || 0;
    const miles = parseFloat(milesRan) || 0;
    const caloriesBurned = miles * CALORIES_BURNED_PER_MILE;
    const net = intake - caloriesBurned;

    setNetCalories(net);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>Calorie Tracker</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Calories Intake</Text>
          <TextInput
            style={styles.input}
            value={caloriesIntake}
            onChangeText={setCaloriesIntake}
            placeholder="Enter calories consumed"
            placeholderTextColor="#D0D0D0"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Miles Ran</Text>
          <TextInput
            style={styles.input}
            value={milesRan}
            onChangeText={setMilesRan}
            placeholder="Enter miles ran"
            placeholderTextColor="#D0D0D0"
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={calculateNetCalories}>
          <Text style={styles.buttonText}>Calculate Net Calories</Text>
        </TouchableOpacity>

        {netCalories !== null && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>
              Net Calories: {netCalories} kcal
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Contact Info Section at the bottom */}
      <View style={styles.contactInfoContainer}>
        <Text style={styles.contactInfo}>Contact Us: gabriel.felicitas11@gmail.com</Text>
        <Text style={styles.contactInfo}>Follow us on social media for updates!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: '700',
    color: '#FF8A00',
    marginBottom: 40,
    textAlign: 'center',
    letterSpacing: 1.5,
    paddingVertical: 10,  // Adds vertical padding to make the background appear more balanced
    backgroundColor: '#FFFFFF',  // Adds a background color
    borderRadius: 15,  // Rounds the corners
    shadowColor: '#000',  // Adds shadow for a more aesthetic look
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  
  inputContainer: {
    marginBottom: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    padding: 15,
  },
  label: {
    color: '#4A4A4A',
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F1F1F1',
    color: '#333',
    padding: 12,
    borderRadius: 8,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#D0D0D0',
  },
  button: {
    backgroundColor: '#FF8A00',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  resultContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#FF8A00',
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  resultText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  contactInfoContainer: {
    padding: 20,
    backgroundColor: '#3B4A61',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    marginTop: 'auto', // Ensures it's placed at the bottom
  },
  contactInfo: {
    fontSize: 16,
    color: '#D0D0D0',
    textAlign: 'center',
    marginBottom: 5,
  },
});

export default CalorieTracker;
