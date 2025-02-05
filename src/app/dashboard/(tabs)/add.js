import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';

const CalorieTracker = () => {
  const [caloriesIntake, setCaloriesIntake] = useState('');
  const [milesRan, setMilesRan] = useState('');
  const [netCalories, setNetCalories] = useState(null);

  const CALORIES_BURNED_PER_MILE = 100; // Estimated calories burned per mile

  const calculateNetCalories = () => {
    const intake = parseFloat(caloriesIntake) || 0;
    const miles = parseFloat(milesRan) || 0;
    const caloriesBurned = miles * CALORIES_BURNED_PER_MILE;
    const net = intake - caloriesBurned;

    setNetCalories(net);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#2E3B4E',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF8A00',
    marginBottom: 30,
    textAlign: 'center',
    letterSpacing: 1.5,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    color: '#D0D0D0',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#3B4A61',
    color: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#FF8A00',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#3B4A61',
    borderRadius: 8,
  },
  resultText: {
    fontSize: 22,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default CalorieTracker;
