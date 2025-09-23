import { CartaoPerfil } from '.components\CartaoPerfil.tsx';
import { View, Text, Image, StyleSheet } from 'react-native';
 
export default function App() {
  return (
      <View style={styles.cartao}>
        <Image 
          source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' }}
          style={{ width: 100, height: 100 }}
        />
        <Text>gustavo</Text>
        <Text>aluno</Text>
      </View>
  );
}