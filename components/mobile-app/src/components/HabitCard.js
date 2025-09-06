// This file exports a functional component `HabitCard` that displays a habit with an icon, title, status, and a button to mark it as complete. It includes styles for the card layout, habit information, and button.

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HabitCard = ({ icon, title, status, onComplete }) => {
  const isCompleted = status === 'Selesai!';

  return (
    <View style={styles.card}>
      <View style={styles.habitInfo}>
        <Text style={styles.icon}>{icon}</Text>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={[styles.status, { color: isCompleted ? '#20C997' : '#6C757D' }]}>
            {status}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.checkButton, { backgroundColor: isCompleted ? '#20C997' : '#E9ECEF' }]}
        onPress={onComplete}
        disabled={isCompleted}
      >
        <Text style={[styles.checkText, { color: isCompleted ? '#FFF' : '#6C757D' }]}>✓</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  habitInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  icon: {
    fontSize: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '600', // SemiBold
    color: '#212529',
    fontFamily: 'Poppins-SemiBold', // Asumsi font sudah di-load
  },
  status: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  checkButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HabitCard;