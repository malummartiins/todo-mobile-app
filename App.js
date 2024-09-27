import { useState } from 'react';
import { View, Text,ScrollView } from 'react-native';
import Todo from '../todo-mobile-app/src/components/Todo';
import TodoForm from '../todo-mobile-app/src/components/TodoForm';
import Search from '../todo-mobile-app/src/components/Search';
import Filter from '../todo-mobile-app/src/components/Filter';
import styles from './AppStyles'; 

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Escrever roteiro",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Maratonar dorama",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    }];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Lista de Tarefas</Text>
        <Search search={search} setSearch={setSearch} />
        <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
        <View style={styles.todoList}>
          {todos
            .filter(todo => 
              filter === "All" ? true : 
              filter === "Completed" ? todo.isCompleted : !todo.isCompleted
            )
            .filter(todo => 
              todo.text.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
            .map(todo => (
              <Todo 
                key={todo.id} 
                todo={todo} 
                removeTodo={removeTodo} 
                completeTodo={completeTodo} 
              />
            ))}
        </View>
        <TodoForm addTodo={addTodo} />
      </View>
    </ScrollView>
  );
}

export default App;
