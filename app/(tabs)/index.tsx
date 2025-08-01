import { StyleSheet, Image, TextInput, Button } from 'react-native';
import { use, useState } from 'react';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { blue } from 'react-native-reanimated/lib/typescript/Colors';

export default function TabOneScreen() {
  const [nome, atualizaNome] = useState('Nome');
  const [sobrenome, atualizaSobrenome] = useState('Sobrenome');
  const [cpf, atualizaCpf] = useState('CPF');
  const [email, atualizaEmail] = useState('exemplo@mail.com');
  const [telefone, atualizaTelefone] = useState('(11) 3325-5577');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aba um</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <TextInput
              value={nome}
              onChangeText={atualizaNome}
              inputMode='text'
            />
            <TextInput
              value={sobrenome}
              onChangeText={atualizaSobrenome}
              inputMode='text'
            />
            <TextInput
              value={cpf}
              onChangeText={atualizaCpf}
              inputMode='numeric'
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
            onPress={() => { alert(nome + ' ' + sobrenome + ' ' + cpf + ' ' + telefone + ' ' + email ) }}
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
