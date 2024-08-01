import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const Ejercicio1 = () => {
    const [pares, setPares] = useState<number[]>([]);
    const [impares, setImpares] = useState<number[]>([]);
    const [clasificado, setClasificado] = useState<boolean>(false);

  const clasificar = () => {
    const numerosPares = numeros.filter(num => num % 2 === 0);
    const numerosImpares = numeros.filter(num => num % 2 !== 0);
    setPares(numerosPares);
    setImpares(numerosImpares);
    setClasificado(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>BIENVENIDO</Text>
      <Text style={styles.vector}>Vector: {numeros.join(', ')}</Text>
      
      <TouchableOpacity style={styles.boton} onPress={clasificar}>
        <Text style={styles.botonTexto}>CLASIFICAR</Text>
      </TouchableOpacity>
      
        <View>
            <Text style={styles.resultado}>Pares: {pares.join(', ')}</Text>
            <Text style={styles.resultado}>Impares: {impares.join(', ')}</Text>
        </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  vector: {
    fontSize: 16,
    marginBottom: 20,
  },
  boton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  botonTexto: {
    color: 'white',
    fontSize: 18,
  },
  resultado: {
    fontSize: 16,
    marginTop: 10,
  }
});

export default Ejercicio1;