import { View, Text, Button } from 'react-native';

import styles from '../../AppStyles.js'

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <View style={[styles.todo, todo.isCompleted && styles.completed]}>
      <View style={styles.content}>
        <Text style={todo.isCompleted ? styles.completedText : styles.normalText}>{todo.text}</Text>
        <Text style={styles.category}>({todo.category})</Text>
      </View>
      <View style={styles.buttons}>
        <Button title="Completar" onPress={() => completeTodo(todo.id)} />
        <Button title="x" onPress={() => removeTodo(todo.id)} />
      </View>
    </View>
  );
};

export default Todo;
