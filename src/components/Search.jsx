import { View, TextInput, Text } from 'react-native';

const Search = ({ search, setSearch }) => {
  return (
    <View className="search">
      <Text>Pesquisar:</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 8 }}
        value={search}
        onChangeText={(text) => setSearch(text)}
        placeholder="Digite para pesquisar..."
      />
    </View>
  );
};

export default Search;
