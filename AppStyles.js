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
    color: "#ba7b7c",
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
    borderColor: '#ba7b7c',
    borderRadius: 3,
    paddingVertical: 5,  
    paddingHorizontal: 10, 
    width: '100%',
    height: 70,
    
  },
  pickerItem: {
    fontSize: 18,  
    height: 70,
    
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  
  customButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2, 
    borderColor: '#ba7b7c', 
    borderRadius: 5,
    backgroundColor: '#d7a9a9', 
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
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
  },
  completed: {
    backgroundColor: '#d3f9d8', 
  },
  normalText: {
    fontSize: 18,
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
    marginLeft: 15,
  },
  category: {
    marginLeft: 10,
    fontStyle: 'italic',
    color: '#555',
  },

  completeButton: {
    backgroundColor: '#8ab364', 
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  removeButton: {
    backgroundColor: '#ba7b7c', 
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
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
    fontSize: 24,
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ba7b7c'
  },
  subtitle: {
    fontSize:16,
    marginBottom: 10,
    marginLeft: 15,
  },

  createButton: {
    backgroundColor: '#8ab364', 
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 2,
    
    borderColor: '#218838',
    alignItems: 'center',
    marginTop: 10,
  },
  
});

export default styles;
