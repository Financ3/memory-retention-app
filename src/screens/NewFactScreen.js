import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import ScoreBanner from '../components/ScoreBanner';

export default function NewFactScreen({ fact, streak, onDone }) {
  if (!fact) return null;

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container} bounces={false}>
        <View style={styles.header}>
          <ScoreBanner streak={streak} />
        </View>

        <View style={styles.labelRow}>
          <Text style={styles.labelIcon}>💡</Text>
          <Text style={styles.label}>Today's Fact</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.factText}>{fact.fact}</Text>
        </View>

        <View style={styles.hintBox}>
          <Text style={styles.hintIcon}>⏰</Text>
          <Text style={styles.hintText}>
            We'll quiz you on this tomorrow. Read it carefully and try to remember the key detail!
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={onDone} activeOpacity={0.85}>
          <Text style={styles.buttonText}>Got it, I'll remember! ✓</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 28,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  labelIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
    color: '#4A90E2',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  card: {
    backgroundColor: '#16213E',
    borderRadius: 20,
    padding: 28,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(74, 144, 226, 0.25)',
    shadowColor: '#4A90E2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  factText: {
    fontSize: 19,
    color: '#FFFFFF',
    lineHeight: 30,
    fontWeight: '500',
  },
  hintBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(74, 144, 226, 0.08)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: 'rgba(74, 144, 226, 0.15)',
  },
  hintIcon: {
    fontSize: 16,
    marginRight: 10,
    marginTop: 1,
  },
  hintText: {
    flex: 1,
    fontSize: 14,
    color: '#718096',
    lineHeight: 21,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#4A90E2',
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
