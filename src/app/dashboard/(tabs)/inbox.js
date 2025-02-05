import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity, Image } from 'react-native';

const NutritionSuggestions = () => {
  const suggestions = [
    {
      id: 1,
      title: 'Try Hazelnut Milk',
      description: 'A great source of healthy fats and vitamin E. Pairs well with breakfast cereals or smoothies.',
      kcal: 75,
      color: '#A5DFB2', // Green for fresh
      image: require('../../../../assets/hazel.png'),
    },
    {
      id: 2,
      title: 'Consume Peanut Milk Soon',
      description: 'Rich in protein but nearing expiration. Use in baking or savory dishes to avoid waste.',
      kcal: 60,
      color: '#FFA07A', // Orange for nearing expiration
      image: require('../../../../assets/milk.png'),
    },
    {
      id: 3,
      title: 'Try Brown Rice',
      description: 'A whole grain packed with fiber and nutrients. Great as a base for stir-fries or as a side dish.',
      kcal: 110,
      color: '#D2B48C', // Tan for rice
      image: require('../../../../assets/rice.png'),
    },
    {
      id: 4,
      title: 'Eat Eggs for Protein',
      description: 'A complete protein source. Versatile for breakfast, salads, or sandwiches.',
      kcal: 70,
      color: '#FFD700', // Yellow for eggs
      image: require('../../../../assets/egg.png'),
    },
    {
      id: 5,
      title: 'Fresh Fish for Omega-3s',
      description: 'Rich in omega-3 fatty acids, great for heart health. Enjoy grilled, baked, or in salads.',
      kcal: 150,
      color: '#87CEEB', // Blue for fish
      image: require('../../../../assets/fish.png'),
    },
    {
      id: 6,
      title: 'Avocado for Healthy Fats',
      description: 'Packed with monounsaturated fats and vitamins. Perfect for toast, salads, or smoothies.',
      kcal: 160,
      color: '#98FB98', // Light green for avocado
      image: require('../../../../assets/avocado.png'),
    },
  ];

  const [selectedId, setSelectedId] = useState(null);
  const handlePress = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Nutrition Suggestions</Text>
      <View style={styles.cardGrid}>
        {suggestions.map((suggestion) => (
          <TouchableOpacity
            key={suggestion.id}
            style={styles.cardContainer}
            onPress={() => handlePress(suggestion.id)}
          >
            {/* Product Image */}
            <Image source={suggestion.image} style={styles.productImage} />

            {/* Description (visible only when pressed) */}
            {selectedId === suggestion.id && (
              <View style={[styles.cardOverlay, { backgroundColor: suggestion.color }]}>
                <Text style={styles.cardTitle}>{suggestion.title}</Text>
                <Text style={styles.cardDescription}>{suggestion.description}</Text>
                <View style={styles.infoRow}>
                  <Text style={styles.infoText}>{suggestion.kcal} kcal</Text>
                </View>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.header}>7-Day Meal Plan</Text>
      <MealPlan />
    </ScrollView>
  );
};

const MealPlan = () => {
  const [planType, setPlanType] = useState('bulking'); // Default plan is bulking

  // Meal plans for Bulking and Cutting
  const mealPlans = {
    bulking: [
      { day: 'Monday', meals: ['Oats with Whey Protein', 'Grilled Chicken with Rice', 'Salmon with Quinoa', 'Peanut Butter Smoothie'] },
      { day: 'Tuesday', meals: ['Eggs with Avocado Toast', 'Beef Stir-fry with Vegetables', 'Turkey Sandwich', 'Greek Yogurt with Almonds'] },
      { day: 'Wednesday', meals: ['Smoothie with Banana and Protein', 'Chicken Salad with Olive Oil', 'Pasta with Chicken', 'Cottage Cheese with Berries'] },
      { day: 'Thursday', meals: ['Egg White Scramble with Spinach', 'Grilled Steak with Sweet Potatoes', 'Chicken Wraps', 'Protein Shake'] },
      { day: 'Friday', meals: ['Whole Wheat Pancakes with Berries', 'Chicken and Rice Bowl', 'Salmon Salad', 'Nuts and Seeds'] },
      { day: 'Saturday', meals: ['Egg and Cheese Sandwich', 'Beef Chili with Rice', 'Chicken Quesadilla', 'Protein Bar'] },
      { day: 'Sunday', meals: ['Smoothie with Oats', 'Chicken with Veggies', 'Grilled Salmon', 'Greek Yogurt with Honey'] },
    ],
    cutting: [
      { day: 'Monday', meals: ['Scrambled Eggs with Spinach', 'Grilled Chicken Salad', 'Grilled Salmon with Veggies', 'Protein Shake'] },
      { day: 'Tuesday', meals: ['Boiled Eggs', 'Turkey Salad with Olive Oil', 'Chicken and Broccoli', 'Greek Yogurt'] },
      { day: 'Wednesday', meals: ['Smoothie with Protein', 'Chicken Breast with Zucchini', 'Tuna Salad', 'Almonds'] },
      { day: 'Thursday', meals: ['Avocado Toast with Eggs', 'Chicken Caesar Salad', 'Grilled Chicken with Asparagus', 'Cottage Cheese'] },
      { day: 'Friday', meals: ['Omelette with Mushrooms', 'Tuna Salad with Lettuce', 'Chicken and Spinach', 'Protein Bar'] },
      { day: 'Saturday', meals: ['Egg White Omelette', 'Grilled Fish with Veggies', 'Lean Beef Salad', 'Cucumber with Hummus'] },
      { day: 'Sunday', meals: ['Protein Smoothie', 'Grilled Turkey with Veggies', 'Salmon with Kale', 'Greek Yogurt with Berries'] },
    ],
  };

  // Toggle between Bulking and Cutting meal plan
  const togglePlan = (plan) => {
    setPlanType(plan);
  };

  return (
    <View style={styles.mealPlan}>
      <View style={styles.buttonContainer}>
        <Button title="Bulking Plan" onPress={() => togglePlan('bulking')} />
        <Button title="Cutting Plan" onPress={() => togglePlan('cutting')} />
      </View>

      {mealPlans[planType].map((meal, index) => (
        <View key={index} style={styles.dayContainer}>
          <Text style={styles.dayText}>{meal.day}</Text>
          {meal.meals.map((item, i) => (
            <Text key={i} style={styles.mealText}>{item}</Text>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardContainer: {
    position: 'relative',
    width: '48%',
    marginBottom: 20,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
  cardOverlay: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '600',
    marginLeft: 5,
  },
  mealPlan: {
    marginBottom: 20,
  },
  dayContainer: {
    backgroundColor: '#ffffff',
    marginBottom: 15,
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dayText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  mealText: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
});

export default NutritionSuggestions;
