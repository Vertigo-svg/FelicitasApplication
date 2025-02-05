import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const Home = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Today'); // State for active perio
  // d tab

  // State for kcal values for the current day and week
  const [breakfastKcal, setBreakfastKcal] = useState(340);
  const [lunchKcal, setLunchKcal] = useState(400);
  const [dinnerKcal, setDinnerKcal] = useState(500);
  const [snacksKcal, setSnacksKcal] = useState(200);
  const [dessertsKcal, setDessertsKcal] = useState(120);
  const [drinksKcal, setDrinksKcal] = useState(50);

  const [kcalGoal, setKcalGoal] = useState(2000);

  // Sample data for periods
  const periodData = {
    Week: { total: 14000, average: 2000 },
    Month: { total: 60000, average: 2000 },
    '6 Month': { total: 360000, average: 2000 },
  };

  // Calculate total kcal for the current day
  const totalKcal = breakfastKcal + lunchKcal + dinnerKcal + snacksKcal + dessertsKcal + drinksKcal;
  const progressPercentage = (totalKcal / kcalGoal) * 100;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.profileInfo}>
            <Image source={require('../../../../assets/Profile.jpg')} style={styles.profileImage} />
            <Text style={styles.username}>Gabriel Felicitas</Text>
          </View>
          <TouchableOpacity>
            <FontAwesome name="ellipsis-h" size={22} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Title */}
        <Text style={styles.title}>Balances Nutrition</Text>

        {/* Period Tabs */}
        <View style={styles.periodTabs}>
          {['Today', 'Week', 'Month', '6 Month'].map((period) => (
            <TouchableOpacity
              key={period}
              style={[
                styles.periodTab,
                selectedPeriod === period && styles.activePeriodTab,
              ]}
              onPress={() => setSelectedPeriod(period)}
            >
              <Text
                style={[
                  styles.periodText,
                  selectedPeriod === period && styles.activePeriodText,
                ]}
              >
                {period}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Content Based on Selected Period */}
        {selectedPeriod === 'Today' && (
          <View>
            {/* Circular Progress */}
            <View style={styles.chartContainer}>
              <AnimatedCircularProgress
                size={200}
                width={15}
                fill={progressPercentage}
                tintColor="#FF6B6B"
                backgroundColor="#EAEAEA"
                rotation={0}
                lineCap="round"
                duration={1000}
              >
                {() => (
                  <View style={styles.chartCenter}>
                    <Text style={styles.chartCalories}>{totalKcal}</Text>
                    <Text style={styles.chartLabel}>Kcal Gained</Text>
                  </View>
                )}
              </AnimatedCircularProgress>
            </View>

            {/* Meals List */}
            <View style={styles.mealList}>
              {[
                { name: 'Breakfast', value: breakfastKcal, setValue: setBreakfastKcal, icon: 'coffee', color: '#FF6B6B' },
                { name: 'Lunch', value: lunchKcal, setValue: setLunchKcal, icon: 'cutlery', color: '#FFA502' },
                { name: 'Dinner', value: dinnerKcal, setValue: setDinnerKcal, icon: 'moon-o', color: '#4B7BE5' },
                { name: 'Snacks', value: snacksKcal, setValue: setSnacksKcal, icon: 'apple', color: '#28C76F' },
                { name: 'Desserts', value: dessertsKcal, setValue: setDessertsKcal, icon: 'birthday-cake', color: '#FFC107' },
                { name: 'Drinks', value: drinksKcal, setValue: setDrinksKcal, icon: 'coffee', color: '#20B2AA' },
              ].map((meal, index) => (
                <View key={index} style={[styles.mealItem, { backgroundColor: meal.color }]}>
                  <View style={styles.mealInfo}>
                    <FontAwesome name={meal.icon} size={24} color="white" />
                    <View style={styles.mealText}>
                      <Text style={styles.mealName}>{meal.name}</Text>
                      <TextInput
                        style={styles.kcalInput}
                        keyboardType="numeric"
                        value={String(meal.value)}
                        onChangeText={(text) => meal.setValue(Number(text) || 0)}
                      />
                    </View>
                  </View>
                  <Text style={styles.mealCalories}>{meal.value} Kcal</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Weekly Summary */}
        {selectedPeriod !== 'Today' && (
          <View style={styles.summaryContainer}>
            <Text style={styles.summaryTitle}>{selectedPeriod} Summary</Text>
            <Text style={styles.summaryText}>Total Calories: {periodData[selectedPeriod]?.total || 0} Kcal</Text>
            <Text style={styles.summaryText}>Average Calories per Day: {periodData[selectedPeriod]?.average || 0} Kcal</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FB', paddingHorizontal: 20 },
  scrollContainer: { flexGrow: 1, paddingBottom: 50 },

  // Profile
  profileHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40 },
  profileInfo: { flexDirection: 'row', alignItems: 'center' },
  profileImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  username: { fontSize: 18, fontWeight: '600', color: '#333' },

  // Title
  title: { fontSize: 24, fontWeight: 'bold', color: '#333', marginVertical: 20 },

  // Period Tabs
  periodTabs: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#EAEAEA', borderRadius: 20, padding: 10 },
  periodTab: { paddingVertical: 8, paddingHorizontal: 15, borderRadius: 20 },
  periodText: { fontSize: 14, color: '#777' },
  activePeriodTab: { backgroundColor: '#FF6B6B' },
  activePeriodText: { color: '#FFF', fontWeight: '600' },

  // Chart Section
  chartContainer: { alignItems: 'center', marginVertical: 30 },
  chartCenter: { alignItems: 'center' },
  chartCalories: { fontSize: 32, fontWeight: 'bold', color: '#333' },
  chartLabel: { fontSize: 16, color: '#777' },

  // Summary Section
  summaryContainer: { alignItems: 'center', marginTop: 30 },
  summaryTitle: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  summaryText: { fontSize: 16, color: '#555', marginVertical: 5 },

  // Meals List
  mealList: { marginTop: 20 },
  mealItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15, borderRadius: 10, marginBottom: 10 },
  mealInfo: { flexDirection: 'row', alignItems: 'center' },
  mealText: { marginLeft: 10 },
  mealName: { fontSize: 16, fontWeight: 'bold', color: '#FFF' },
  kcalInput: { fontSize: 16, fontWeight: 'bold', color: '#FFF', borderBottomWidth: 1, borderBottomColor: '#FFF', minWidth: 50, textAlign: 'center' },
  mealCalories: { fontSize: 16, fontWeight: 'bold', color: '#FFF' },
});

export default Home;
