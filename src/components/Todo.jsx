import { View, Text, TouchableOpacity  } from 'react-native';

import styles from '../../AppStyles.js'

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <View style={[styles.todo, todo.isCompleted && styles.completed]}>
      <View style={styles.content}>
        <Text style={todo.isCompleted ? styles.completedText : styles.normalText}>{todo.text}</Text>
        <Text style={styles.category}>({todo.category})</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.completeButton} onPress={() => completeTodo(todo.id)}>
          <Text style={styles.buttonText}>Completar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.removeButton} onPress={() => removeTodo(todo.id)}>
          <Text style={styles.buttonText}>x</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Todo;
