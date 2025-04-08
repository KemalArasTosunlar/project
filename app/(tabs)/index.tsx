import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Plus } from 'lucide-react-native';
import DogProfile from '@/components/DogProfile';
import ActivityItem from '@/components/ActivityItem';
import ReminderItem from '@/components/ReminderItem';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.title}>DogLogbook</Text>
        <TouchableOpacity style={styles.newEntryButton}>
          <Text style={styles.newEntryText}>New Entry</Text>
        </TouchableOpacity>
      </View>

      <DogProfile name="Max" />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>TODAY</Text>
        <ActivityItem type="fed" time="8:00 AM" />
        <ActivityItem type="walked" time="7:30 AM" />
        <ActivityItem type="medication" time="Yesterday" />
        
        <TouchableOpacity style={styles.addButton}>
          <Plus size={20} color="#6366f1" />
          <Text style={styles.addButtonText}>Add Activity</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>REMINDERS</Text>
        <ReminderItem 
          title="Flea & tick prevention"
          dueDate="Due in 3 days"
        />
        <ReminderItem 
          title="Next vaccination"
          dueDate="May 4"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>WELLNESS INSIGHTS</Text>
        <View style={styles.insightCard}>
          <Text style={styles.insightText}>
            Max's activity level seems low. Try longer walks or new toys!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  newEntryButton: {
    backgroundColor: '#6366f1',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  newEntryText: {
    color: '#fff',
    fontWeight: '600',
  },
  section: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748b',
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginTop: 12,
    borderWidth: 2,
    borderColor: '#e2e8f0',
    borderStyle: 'dashed',
    borderRadius: 8,
  },
  addButtonText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#6366f1',
    fontWeight: '600',
  },
  insightCard: {
    backgroundColor: '#f1f5f9',
    padding: 16,
    borderRadius: 8,
  },
  insightText: {
    fontSize: 16,
    color: '#334155',
    lineHeight: 24,
  },
});
