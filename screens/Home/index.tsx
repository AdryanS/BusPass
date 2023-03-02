import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
        <View style={{
          flex: 1,
          backgroundColor: "#323849",
          alignItems: "center",
          justifyContent: "center"
        }}>
            <Text style={{color: "#fff", fontSize: 32}}>Home</Text>
        </View>
    </>
  );
}

export default Home;