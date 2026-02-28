import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  PENDING_FACT: '@mem:pendingFact',
  STREAK: '@mem:streak',
  LAST_ACCESS: '@mem:lastAccessDate',
  AFTERNOON_ID: '@mem:afternoonNotifId',
};

export async function loadState() {
  try {
    const [pendingFactRaw, streakRaw, lastAccessDate, afternoonNotifId] =
      await AsyncStorage.multiGet([
        KEYS.PENDING_FACT,
        KEYS.STREAK,
        KEYS.LAST_ACCESS,
        KEYS.AFTERNOON_ID,
      ]);

    let pendingFact = null;
    try {
      if (pendingFactRaw[1]) {
        pendingFact = JSON.parse(pendingFactRaw[1]);
      }
    } catch {
      pendingFact = null;
    }

    return {
      pendingFact,
      streak: streakRaw[1] ? parseInt(streakRaw[1], 10) : 0,
      lastAccessDate: lastAccessDate[1] || null,
      afternoonNotifId: afternoonNotifId[1] || null,
    };
  } catch (error) {
    console.error('Failed to load state:', error);
    return {
      pendingFact: null,
      streak: 0,
      lastAccessDate: null,
      afternoonNotifId: null,
    };
  }
}

export async function savePendingFact(fact) {
  try {
    await AsyncStorage.setItem(KEYS.PENDING_FACT, JSON.stringify(fact));
  } catch (error) {
    console.error('Failed to save pending fact:', error);
  }
}

export async function clearPendingFact() {
  try {
    await AsyncStorage.removeItem(KEYS.PENDING_FACT);
  } catch (error) {
    console.error('Failed to clear pending fact:', error);
  }
}

export async function saveStreak(n) {
  try {
    await AsyncStorage.setItem(KEYS.STREAK, String(n));
  } catch (error) {
    console.error('Failed to save streak:', error);
  }
}

export async function saveLastAccessDate(dateStr) {
  try {
    await AsyncStorage.setItem(KEYS.LAST_ACCESS, dateStr);
  } catch (error) {
    console.error('Failed to save last access date:', error);
  }
}

export async function saveAfternoonNotifId(id) {
  try {
    if (id === null) {
      await AsyncStorage.removeItem(KEYS.AFTERNOON_ID);
    } else {
      await AsyncStorage.setItem(KEYS.AFTERNOON_ID, id);
    }
  } catch (error) {
    console.error('Failed to save afternoon notif id:', error);
  }
}

export function getTodayDateString() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
