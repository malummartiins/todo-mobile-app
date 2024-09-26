import React from 'react';
import { View, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../../AppStyles.js'

const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <View style={styles.filter}>
      <Text style={styles.subtitle}>Status:</Text>
      <Picker
        selectedValue={filter}
        onValueChange={(itemValue) => setFilter(itemValue)}
        style={styles.picker}
        itemStyle={styles.pickerItem}
      >
        <Picker.Item label="Todas" value="All" />
        <Picker.Item label="Completas" value="Completed" />
        <Picker.Item label="Incompletas" value="Incomplete" />
      </Picker>

      <Text style={styles.subtitle}>Ordem alfabética:</Text>
      <View style={styles.buttonContainer}>
        <Button title="Asc" onPress={() => setSort('Asc')} />
        <Button title="Desc" onPress={() => setSort('Desc')} />
      </View>
    </View>
  );
};

export default Filter;