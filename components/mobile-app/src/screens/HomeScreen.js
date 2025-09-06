import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import HabitCard from '../components/HabitCard';

const HomeScreen = () => {
  const habits = [
    { id: 1, icon: '🏃', title: 'Exercise', status: 'Selesai!' },
    { id: 2, icon: '📚', title: 'Read a Book', status: 'Belum Selesai' },
    { id: 3, icon: '🧘', title: 'Meditate', status: 'Selesai!' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daily Habits</Text>
      <ScrollView>
        {habits.map(habit => (
          <HabitCard
            key={habit.id}
            icon={habit.icon}
            title={habit.title}
            status={habit.status}
            onComplete={() => console.log(`${habit.title} completed`)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F8F9FA',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#212529',
  },
});

export default HomeScreen;