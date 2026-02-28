import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ScoreBanner({ streak }) {
  if (streak === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.icon}>🔥</Text>
        <Text style={styles.text}>No streak yet — start today!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🔥</Text>
      <Text style={styles.score}>{streak}</Text>
      <Text style={styles.text}>
        {streak === 1 ? 'day streak' : 'day streak'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(232, 168, 56, 0.15)',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'rgba(232, 168, 56, 0.3)',
  },
  icon: {
    fontSize: 18,
    marginRight: 6,
  },
  score: {
    fontSize: 20,
    fontWeight: '800',
    color: '#E8A838',
    marginRight: 4,
  },
  text: {
    fontSize: 14,
    color: '#E8A838',
    fontWeight: '600',
  },
});
