import React, { useState, useEffect } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Alert } from 'react-native';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Header from '~/components/Header';
import Background from '~/components/Background';

import { Container, ListMeetups } from './styles';

import Card from '~/components/Card';
import api from '~/services/api';

export default function Subscriber() {
  const [meetups, setMeetup] = useState([]);

  async function handleAction(id) {
    try {
      await api.delete(`subscriber/${id}`);

      const newMeetups = await meetups.map(meetup =>
        meetup.id === id
          ? {
              ...meetup,
              canceled: true,
            }
          : meetup
      );

      await setMeetup(newMeetups);

      Alert.alert('Cancelado com sucesso');
    } catch (e) {
      Alert.alert('erro');
    }
  }

  useEffect(() => {
    async function loadSubscriberEvents() {
      const response = await api.get('subscriber');

      const data = response.data.meetapps.map(item => ({
        ...item,
        dateEventFormated: format(parseISO(item.date), "d 'de' MMMM", {
          locale: pt,
        }),
      }));

      // console.tron.log(data);

      setMeetup(data);
    }

    loadSubscriberEvents();
  }, []);

  return (
    <>
      <Header />
      <Background>
        <Container>
          <ListMeetups
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Card
                cancel
                item={item}
                handleAction={() => handleAction(item.id)}
              />
            )}
          />
        </Container>
      </Background>
    </>
  );
}

Subscriber.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};
