import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, } from 'react-native';

import { Container, Texto, Card, Botao } from './styles';
import Background from '~/components/Background';
import styles from '../Apresentation/styles';
import { NavigationEvents } from 'react-navigation';

export default function Lessons({ navigation }) {

    function nextLesson() {
        navigation.navigate('Lesson2');
    }

    return (

        <Background>
            <Container>
                <ScrollView>
                    <Card>
                        <Texto comentario={true}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                          aute irure dolor in reprehenderit in voluptate velit esse 
                          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                           cupidatat non proident, sunt in culpa qui officia deserunt 
                           mollit anim id est laborum."
                           ******Fim Lição 1******
                        </Texto>
                    </Card>
                    <TouchableOpacity

                        onPress={nextLesson}>
                        <Botao>Proxima lição</Botao>
                    </TouchableOpacity>
                </ScrollView>
            </Container>
        </Background>
    );

}
