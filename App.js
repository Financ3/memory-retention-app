import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { pickRandomFact } from './src/data/facts';
import {
  loadState,
  savePendingFact,
  saveStreak,
  saveLastAccessDate,
  saveAfternoonNotifId,
  getTodayDateString,
} from './src/utils/storage';
import {
  requestNotificationPermissions,
  hasMorningNotificationScheduled,
  scheduleMorningNotification,
  scheduleAfternoonNotification,
  cancelAfternoonNotification,
} from './src/utils/notifications';

import QuizScreen from './src/screens/QuizScreen';
import QuizResultScreen from './src/screens/QuizResultScreen';
import NewFactScreen from './src/screens/NewFactScreen';
import AlreadyDoneScreen from './src/screens/AlreadyDoneScreen';

// Views: 'loading' | 'quiz' | 'quiz_result' | 'new_fact' | 'already_done'

export default function App() {
  const [currentView, setCurrentView] = useState('loading');
  const [streak, setStreak] = useState(0);
  const [pendingFact, setPendingFact] = useState(null);
  const [todayFact, setTodayFact] = useState(null);
  const [quizResult, setQuizResult] = useState(null);

  useEffect(() => {
    initializeApp();
  }, []);

  async function initializeApp() {
    const state = await loadState();
    const today = getTodayDateString();

    // Cancel the afternoon notification if user opens the app
    if (state.afternoonNotifId) {
      await cancelAfternoonNotification(state.afternoonNotifId);
      await saveAfternoonNotifId(null);
    }

    // If user already practiced today, show the done screen
    if (state.lastAccessDate === today) {
      setStreak(state.streak);
      setCurrentView('already_done');
      return;
    }

    // Set up notifications
    const granted = await requestNotificationPermissions();
    if (granted) {
      const alreadyScheduled = await hasMorningNotificationScheduled();
      if (!alreadyScheduled) {
        await scheduleMorningNotification();
      }
      const afternoonId = await scheduleAfternoonNotification();
      if (afternoonId) {
        await saveAfternoonNotifId(afternoonId);
      }
    }

    setStreak(state.streak);

    if (state.pendingFact !== null) {
      setPendingFact(state.pendingFact);
      setCurrentView('quiz');
    } else {
      // First ever launch — go straight to new fact
      const firstFact = pickRandomFact(null);
      setTodayFact(firstFact);
      setCurrentView('new_fact');
    }
  }

  async function handleQuizAnswer(isCorrect) {
    const newStreak = isCorrect ? streak + 1 : 0;
    await saveStreak(newStreak);
    setStreak(newStreak);
    setQuizResult({ wasCorrect: isCorrect, newStreak });
    setCurrentView('quiz_result');
  }

  async function handleContinueFromResult() {
    // Pick a new fact (not the same as the one they were just quizzed on)
    const newFact = pickRandomFact(pendingFact?.id ?? null);
    setTodayFact(newFact);
    // Save this new fact as the pending one for tomorrow's quiz
    await savePendingFact(newFact);
    await saveLastAccessDate(getTodayDateString());
    setCurrentView('new_fact');
  }

  async function handleNewFactDone() {
    // todayFact is already set; it becomes tomorrow's pendingFact
    await savePendingFact(todayFact);
    await saveLastAccessDate(getTodayDateString());
    setCurrentView('already_done');
  }

  if (currentView === 'loading') {
    return (
      <View style={styles.loading}>
        <StatusBar style="light" />
        <ActivityIndicator size="large" color="#4A90E2" />
      </View>
    );
  }

  if (currentView === 'quiz') {
    return (
      <>
        <StatusBar style="light" />
        <QuizScreen
          fact={pendingFact}
          streak={streak}
          onAnswer={handleQuizAnswer}
        />
      </>
    );
  }

  if (currentView === 'quiz_result') {
    return (
      <>
        <StatusBar style="light" />
        <QuizResultScreen
          wasCorrect={quizResult.wasCorrect}
          newStreak={quizResult.newStreak}
          onContinue={handleContinueFromResult}
        />
      </>
    );
  }

  if (currentView === 'new_fact') {
    return (
      <>
        <StatusBar style="light" />
        <NewFactScreen
          fact={todayFact}
          streak={streak}
          onDone={handleNewFactDone}
        />
      </>
    );
  }

  if (currentView === 'already_done') {
    return (
      <>
        <StatusBar style="light" />
        <AlreadyDoneScreen streak={streak} />
      </>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
