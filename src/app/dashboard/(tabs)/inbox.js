import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

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
    </ScrollView>
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
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardContainer: {
    position: 'relative',
    width: '48%',
    marginBottom: 20,
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
});

export default NutritionSuggestions;
