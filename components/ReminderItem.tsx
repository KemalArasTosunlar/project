import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'lucide-react-native';

interface ReminderItemProps {
  title: string;
  dueDate: string;
}

export default function ReminderItem({ title, dueDate }: ReminderItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Calendar size={20} color="#64748b" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.dueDate}>{dueDate}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f1f5f9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: '#1e293b',
  },
  dueDate: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 2,
  },
});