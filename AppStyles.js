// AppStyles.js
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingTop: 20, 
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 32, 
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop:80,
  },
  filterContainer: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
  },
  filterLabel: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  picker: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ff0000',
    borderRadius: 3,
    paddingVertical: 5,  // Diminui o padding interno vertical
    paddingHorizontal: 10, // Ajusta o padding horizontal para manter espaçamento interno confortável
    width: '100%',
    height: 70,
    
  },
  pickerItem: {
    fontSize: 18,  
    height: 70,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  searchContainer: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 3,
    padding: 8,
    width: '100%',
    marginBottom: 10,
  },
  todo: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  completed: {
    backgroundColor: '#d3f9d8', 
  },
  normalText: {
    fontSize: 16,
    color: '#333', 
  },
  completedText: {
    textDecorationLine: 'line-through',
    fontSize: 16,
    color: '#888', 
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  category: {
    marginLeft: 10,
    fontStyle: 'italic',
    color: '#555',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 3,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    
  },
  todoForm: {
    paddingBottom: 20,
  },
  formTitle: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize:18,
    marginBottom: 10,
  },
});

export default styles;
