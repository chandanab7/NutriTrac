
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [food, setFood] = useState('');
  const [nutrition, setNutrition] = useState(null);

  const getNutrition = async () => {
    const response = await fetch('http://localhost:3000/api/nutrition', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ food })
    });
    const data = await response.json();
    setNutrition(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NutriTrack</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter food name"
        value={food}
        onChangeText={setFood}
      />
      <Button title="Get Nutrition" onPress={getNutrition} />
      {nutrition && (
        <View style={styles.result}>
          <Text>Calories: {nutrition.calories?.value} {nutrition.calories?.unit}</Text>
          <Text>Fat: {nutrition.fat?.value} {nutrition.fat?.unit}</Text>
          <Text>Protein: {nutrition.protein?.value} {nutrition.protein?.unit}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
  result: { marginTop: 20 }
});
