import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import HabitCard from '../components/HabitCard';

const HabitTrackerScreen = () => {
  const [habits, setHabits] = useState([
    { id: '1', title: 'Drink Water', status: 'Belum Selesai', icon: '💧' },
    { id: '2', title: 'Exercise', status: 'Belum Selesai', icon: '🏋️‍♂️' },
    { id: '3', title: 'Read a Book', status: 'Selesai!', icon: '📚' },
  ]);

  const handleComplete = (id) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id ? { ...habit, status: 'Selesai!' } : habit
      )
    );
  };

  const renderItem = ({ item }) => (
    <HabitCard
      icon={item.icon}
      title={item.title}
      status={item.status}
      onComplete={() => handleComplete(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Habit Tracker</Text>
      <FlatList
        data={habits}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Habit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F9FA',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#212529',
  },
  addButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#20C997',
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default HabitTrackerScreen;