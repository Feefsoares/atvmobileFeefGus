import { View, Text, Image, StyleSheet } from 'react-native';
 
export default function App() {
  return (
      <View>
        <Image 
          source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' }}
          style={{ width: 100, height: 100 }}
        />
        <Text>gustavo</Text>
        <Text>aluno</Text>
      </View>
  );
} 

const styles = StyleSheet.create({
  cartao: {
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profissao: {
    fontSize: 16,
    color: 'gray',
  }
});