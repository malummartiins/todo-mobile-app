import { View, TextInput, Text } from 'react-native';
import styles from '../../AppStyles.js'


const Search = ({ search, setSearch }) => {
  return (
    <View style={styles.search}>
      <Text style={styles.subtitle}>Pesquisar:</Text>
      <TextInput
        style={styles.input}
        value={search}
        onChangeText={(text) => setSearch(text)}
        placeholder="Digite para pesquisar..."
      />
    </View>
  );
};

export default Search;