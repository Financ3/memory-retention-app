import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const CORRECT_MESSAGES = [
  "That's right! Your memory is sharp.",
  "Nailed it! Keep that streak going.",
  "Correct! You're on fire.",
  "Impressive! You remembered perfectly.",
  "That's the one! Great memory.",
];

const WRONG_MESSAGES = [
  "Not quite — but now it'll stick!",
  "Almost! Learning from mistakes is how memory works.",
  "That one slipped by — you'll get the next one.",
  "Not this time, but your streak starts fresh today.",
];

export default function QuizResultScreen({ wasCorrect, newStreak, onContinue }) {
  const message = wasCorrect
    ? CORRECT_MESSAGES[Math.floor(Math.random() * CORRECT_MESSAGES.length)]
    : WRONG_MESSAGES[Math.floor(Math.random() * WRONG_MESSAGES.length)];

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.resultCircle}>
          <Text style={styles.resultIcon}>{wasCorrect ? '✓' : '✗'}</Text>
        </View>

        <Text style={[styles.resultLabel, wasCorrect ? styles.correctLabel : styles.wrongLabel]}>
          {wasCorrect ? 'Correct!' : 'Not quite!'}
        </Text>

        <Text style={styles.message}>{message}</Text>

        <View style={styles.streakBox}>
          {wasCorrect ? (
            <>
              <Text style={styles.streakIcon}>🔥</Text>
              <Text style={styles.streakNumber}>{newStreak}</Text>
              <Text style={styles.streakLabel}>
                {newStreak === 1 ? 'day streak' : 'day streak'}
              </Text>
            </>
          ) : (
            <>
              <Text style={styles.streakIcon}>💪</Text>
              <Text style={styles.streakResetLabel}>Streak reset — start fresh!</Text>
            </>
          )}
        </View>

        <TouchableOpacity style={styles.button} onPress={onContinue} activeOpacity={0.85}>
          <Text style={styles.buttonText}>See Today's Fact →</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  resultCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#16213E',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  resultIcon: {
    fontSize: 52,
    color: '#FFFFFF',
  },
  resultLabel: {
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 12,
  },
  correctLabel: {
    color: '#4CAF50',
  },
  wrongLabel: {
    color: '#F44336',
  },
  message: {
    fontSize: 17,
    color: '#A0AEC0',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 36,
  },
  streakBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(232, 168, 56, 0.12)',
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 14,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: 'rgba(232, 168, 56, 0.3)',
  },
  streakIcon: {
    fontSize: 22,
    marginRight: 8,
  },
  streakNumber: {
    fontSize: 28,
    fontWeight: '800',
    color: '#E8A838',
    marginRight: 6,
  },
  streakLabel: {
    fontSize: 16,
    color: '#E8A838',
    fontWeight: '600',
  },
  streakResetLabel: {
    fontSize: 16,
    color: '#E8A838',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#4A90E2',
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 40,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
