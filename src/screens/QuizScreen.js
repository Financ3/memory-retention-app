import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import ScoreBanner from '../components/ScoreBanner';

export default function QuizScreen({ fact, streak, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);

  function handleChoice(choice, index) {
    if (answered) return;

    setSelected(index);
    setAnswered(true);

    setTimeout(() => {
      onAnswer(choice.correct);
    }, 1000);
  }

  function getChoiceStyle(choice, index) {
    if (!answered) return styles.choice;
    if (choice.correct) return [styles.choice, styles.choiceCorrect];
    if (index === selected && !choice.correct) return [styles.choice, styles.choiceWrong];
    return [styles.choice, styles.choiceDimmed];
  }

  function getChoiceTextStyle(choice, index) {
    if (!answered) return styles.choiceText;
    if (choice.correct) return [styles.choiceText, styles.choiceTextHighlight];
    if (index === selected && !choice.correct) return [styles.choiceText, styles.choiceTextHighlight];
    return [styles.choiceText, styles.choiceTextDimmed];
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container} bounces={false}>
        <View style={styles.header}>
          <ScoreBanner streak={streak} />
        </View>

        <View style={styles.labelRow}>
          <Text style={styles.labelIcon}>🧠</Text>
          <Text style={styles.label}>Yesterday's Fact Quiz</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.question}>{fact.question}</Text>
        </View>

        <Text style={styles.instruction}>Choose the correct answer:</Text>

        <View style={styles.choices}>
          {fact.choices.map((choice, index) => (
            <TouchableOpacity
              key={index}
              style={getChoiceStyle(choice, index)}
              onPress={() => handleChoice(choice, index)}
              activeOpacity={0.8}
              disabled={answered}
            >
              <Text style={styles.choiceLetter}>
                {['A', 'B', 'C', 'D'][index]}
              </Text>
              <Text style={getChoiceTextStyle(choice, index)}>
                {choice.text}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
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
    borderRadius: 16,
    padding: 24,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: 'rgba(74, 144, 226, 0.2)',
  },
  question: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    lineHeight: 32,
  },
  instruction: {
    fontSize: 13,
    color: '#A0AEC0',
    marginBottom: 12,
    fontWeight: '500',
  },
  choices: {
    gap: 12,
  },
  choice: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#16213E',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  choiceCorrect: {
    backgroundColor: 'rgba(76, 175, 80, 0.15)',
    borderColor: '#4CAF50',
  },
  choiceWrong: {
    backgroundColor: 'rgba(244, 67, 54, 0.15)',
    borderColor: '#F44336',
  },
  choiceDimmed: {
    opacity: 0.4,
  },
  choiceLetter: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.1)',
    textAlign: 'center',
    lineHeight: 28,
    fontSize: 13,
    fontWeight: '700',
    color: '#A0AEC0',
    marginRight: 12,
    overflow: 'hidden',
  },
  choiceText: {
    flex: 1,
    fontSize: 16,
    color: '#CBD5E0',
    fontWeight: '500',
  },
  choiceTextHighlight: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  choiceTextDimmed: {
    color: '#718096',
  },
});
