import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface ActivityItemProps {
  type: 'fed' | 'walked' | 'medication';
  time: string;
  date?: string;
}

export default function ActivityItem({ type, time, date }: ActivityItemProps) {
  const getIcon = () => {
    switch (type) {
      case 'fed':
        return <MaterialCommunityIcons name="bowl-mix" size={20} color="#64748b" />;
      case 'walked':
        return <MaterialCommunityIcons name="dog" size={20} color="#64748b" />;
      case 'medication':
        return <MaterialCommunityIcons name="pill" size={20} color="#64748b" />;
      default:
        return null;
    }
  };

  const getLabel = () => {
    switch (type) {
      case 'fed':
        return 'Fed';
      case 'walked':
        return 'Walked';
      case 'medication':
        return 'Medication';
      default:
        return '';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{getIcon()}</View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{getLabel()}</Text>
      </View>
      <Text style={styles.time}>{date || time}</Text>
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
  label: {
    fontSize: 16,
    color: '#1e293b',
  },
  time: {
    fontSize: 14,
    color: '#64748b',
  },
});