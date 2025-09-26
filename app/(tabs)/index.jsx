import { StyleSheet, View } from 'react-native';
import BotaoCustomizado from '../../components/BotaoCustomizado';
import CartaoPerfil from '../../components/CartaoPerfil';

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default function App() {
  return (
    <View style={styles.container}>
      <CartaoPerfil 
        nome="Ana Maria"
        profissao="Engenheira de Software"
        urlFoto="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
      />
      <CartaoPerfil 
        nome="Carlos Souza"
        profissao="Designer de Produto"
        urlFoto="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
      />
      <BotaoCustomizado titulo='teste'/>
      
    </View>
  );
}
