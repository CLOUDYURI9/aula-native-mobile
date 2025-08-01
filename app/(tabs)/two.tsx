import { StyleSheet, Image, TextInput, Button } from 'react-native';
import { useState } from 'react';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  const [texto, atualizaTexto] = useState('Olá mundo!');
  const [email, atualizaEmail] = useState('exemplo@mail.com');
  const [telefone, atualizaTelefone] = useState('(11) 3325-5577');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aba Dois</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Image
        style={{
          width: 50,
          height: 50
        }}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png'
        }}
      />
      <TextInput
        value={texto}
        onChangeText={atualizaTexto}
      />
      <TextInput

        value={telefone}
        onChangeText={atualizaTelefone}
        inputMode='numeric'
      />
      <TextInput
  
        value={email}
        onChangeText={atualizaEmail}
        inputMode='email'
      />
      <Button
      title='ENVIAR'
      onPress={() => { alert(texto + ' ' + telefone ) }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});