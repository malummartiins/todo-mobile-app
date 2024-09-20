import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../../AppStyles.js'

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  };

  return (
    <View style={styles.todoForm}>
      <Text style={styles.formTitle}>Criar Tarefa</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite o título'
        value={value}
        onChangeText={(text) => setValue(text)}
      />

      <Picker
        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Selecione uma categoria" value="" />
        <Picker.Item label="Trabalho" value="Trabalho" />
        <Picker.Item label="Pessoal" value="Pessoal" />
        <Picker.Item label="Estudos" value="Estudos" />
      </Picker>

      <Button title='Criar tarefa' onPress={handleSubmit} />
    </View>
  );
};

export default TodoForm;
