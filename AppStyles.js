// AppStyles.js
import { StyleSheet } from 'react-native';

const AppStyles = StyleSheet.create({
  app: {
    margin: 0,
    marginBottom: 100,
    backgroundColor: '#e545',
    padding: 10,
    borderRadius: 10,
  },
  body: {
    fontFamily: 'Arial, Helvetica, sans-serif', 
    backgroundColor: '#f4f4f4',
    padding: 30,
    color: '#333',
   
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    marginBottom: 10,
    fontSize: 18,
  },
  paragraph: {
    margin: 10,
    fontSize: 16,
  },
  input: {
    padding: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 3,
    width: '100%',
  },
  button: {
    backgroundColor: '#9d673a',
    color: '#fff',
    padding: 5,
    marginRight: 10,
    borderWidth: 0,
    borderRadius: 3,
    cursor: 'pointer',
    opacity: 0.8,
  },
  buttonHover: {
    opacity: 1,
  },
  complete: {
    backgroundColor: '#5cb85c',
  },
  remove: {
    backgroundColor: '#d9534f',
  },
  todoList: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#555',
  },
  todo: {
    backgroundColor: '#e545',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)', 
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  completed: {
    backgroundColor: '#d3ffd3',
  },
  content: {
    flex: 1,
    paddingRight: 10,
  },
  category: {
    color: '#666',
  },
  buttons: {
    flexDirection: 'row',
    gap: 10, // ajuste conforme necessário
  },
  completedText: {
    textDecorationLine: 'line-through',
  },
  normalText: {
    textDecorationLine: 'none',
  },
  // Adicione outros estilos que você precisar

  todoForm: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#efefef',
    borderRadius: 10,
  },
  formTitle: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    padding: 8,
    borderRadius: 5,
    width: '100%', // Garantir que o input ocupe a largura total
  },
  picker: {
    marginBottom: 10,
    height: 50,
    width: '100%',
  },
  filter: {
    borderBottomWidth: 1,
    borderColor: '#555',
    marginBottom: 20,
    paddingBottom: 20,
  },
  filterOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  filterOption: {
    flex: 1,
    marginRight: 10,
  },
});

export default AppStyles;




