import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Platform } from 'react-native';

const MORNING_NOTIF_IDENTIFIER = 'morning-daily-reminder';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export async function requestNotificationPermissions() {
  if (!Device.isDevice) {
    return false;
  }

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'Daily Reminders',
      importance: Notifications.AndroidImportance.HIGH,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#4A90E2',
    });
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  return finalStatus === 'granted';
}

export async function hasMorningNotificationScheduled() {
  try {
    const scheduled = await Notifications.getAllScheduledNotificationsAsync();
    return scheduled.some((n) => n.identifier === MORNING_NOTIF_IDENTIFIER);
  } catch {
    return false;
  }
}

export async function scheduleMorningNotification() {
  if (!Device.isDevice) return;

  try {
    await Notifications.cancelScheduledNotificationAsync(MORNING_NOTIF_IDENTIFIER).catch(() => {});

    await Notifications.scheduleNotificationAsync({
      identifier: MORNING_NOTIF_IDENTIFIER,
      content: {
        title: 'Time to learn! 🧠',
        body: "Open the app for your daily fact quiz — your streak is waiting!",
        sound: true,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.DAILY,
        hour: 8,
        minute: 0,
      },
    });
  } catch (error) {
    console.error('Failed to schedule morning notification:', error);
  }
}

export async function scheduleAfternoonNotification() {
  if (!Device.isDevice) return null;

  try {
    const now = new Date();
    const trigger = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      14,
      0,
      0
    );

    if (trigger <= now) {
      return null;
    }

    const id = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Don't forget! ⏰",
        body: "You haven't practiced today yet. Keep your streak alive!",
        sound: true,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.DATE,
        date: trigger,
      },
    });

    return id;
  } catch (error) {
    console.error('Failed to schedule afternoon notification:', error);
    return null;
  }
}

export async function cancelAfternoonNotification(id) {
  if (!id) return;
  try {
    await Notifications.cancelScheduledNotificationAsync(id);
  } catch {
    // Notification may have already fired — this is fine
  }
}
