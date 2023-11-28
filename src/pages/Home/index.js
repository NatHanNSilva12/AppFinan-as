import { StatusBar } from 'expo-status-bar'; //importando o status bar
import { StyleSheet, Text, View, FlatList } from 'react-native'; //importando os estilos do react-native

import Header from '../../components/Header' //importa o componente
import Balance from '../../components/Balance'
import Movements from '../../components/Movements'
import Actions from '../../components/Actions';


const list = [
  {
    id: 1,
    label: 'Boleto Conta Luz',
    value: '150,50',
    date: '30/08/2023',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: '300,00',
    date: '30/08/2023',
    type: 1 // entradas
  },
  {
    id: 3,
    label: 'Salário',
    value: '1500,50',
    date: '30/08/2023',
    type: 1 // entradas
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Usuário Anônimo" />

        <Balance saldo="9.250,00" gastos="-527,00"/>

        <Actions/>

        <Text style={styles.title}>Últimas movimentações</Text>

        <FlatList
          style={styles.list}
          data={list}
          keyExtractor={ (item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={ ({item}) => <Movements data={item} />}
        />
  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list:{
    marginStart: 16,
    marginEnd: 16,
  }
});
