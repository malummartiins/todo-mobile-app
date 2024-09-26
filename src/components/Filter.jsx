import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "../../AppStyles.js";

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
        <TouchableOpacity
          style={styles.customButton}
          onPress={() => setSort("Asc")}
        >
          <Text style={styles.buttonText}>Asc</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.customButton}
          onPress={() => setSort("Desc")}
        >
          <Text style={styles.buttonText}>Desc</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Filter;
