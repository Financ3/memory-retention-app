import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import ScoreBanner from '../components/ScoreBanner';

export default function AlreadyDoneScreen({ streak }) {
  const getTomorrowWeekday = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return days[tomorrow.getDay()];
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.bigIcon}>🎉</Text>

        <Text style={styles.title}>Great work today!</Text>
        <Text style={styles.subtitle}>You've completed your daily practice.</Text>

        <View style={styles.streakSection}>
          <ScoreBanner streak={streak} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardIcon}>📅</Text>
          <Text style={styles.cardTitle}>Come back {getTomorrowWeekday()}</Text>
          <Text style={styles.cardBody}>
            We'll quiz you on today's fact and give you a brand new one to remember.
          </Text>
        </View>

        <View style={styles.tipsBox}>
          <Text style={styles.tipsTitle}>Memory tip</Text>
          <Text style={styles.tipsBody}>
            Try recalling today's fact a few times before bed — spacing out your reviews dramatically improves retention.
          </Text>
        </View>
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
    paddingHorizontal: 28,
  },
  bigIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#A0AEC0',
    marginBottom: 28,
    textAlign: 'center',
  },
  streakSection: {
    marginBottom: 32,
  },
  card: {
    backgroundColor: '#16213E',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(74, 144, 226, 0.2)',
  },
  cardIcon: {
    fontSize: 28,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  cardBody: {
    fontSize: 14,
    color: '#718096',
    textAlign: 'center',
    lineHeight: 22,
  },
  tipsBox: {
    backgroundColor: 'rgba(232, 168, 56, 0.08)',
    borderRadius: 12,
    padding: 16,
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(232, 168, 56, 0.2)',
  },
  tipsTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#E8A838',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 6,
  },
  tipsBody: {
    fontSize: 13,
    color: '#A0AEC0',
    lineHeight: 20,
  },
});
