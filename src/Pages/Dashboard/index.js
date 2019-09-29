import React, { useState, useMemo, useEffect } from 'react';

import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { format, subDays, addDays, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import {
  Container,
  ListEvents,
  DateEvents,
  ButtonBack,
  ButtonForward,
  CurrentDate,
} from './styles';

import Header from '~/components/Header';
import Card from '~/components/Card';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [meetups, setMeetup] = useState([]);

  function handlePrevDays() {
    setDate(subDays(date, 1));
  }

  function handleNextDays() {
    setDate(addDays(date, 1));
  }

  const dateFormated = useMemo(
    () => format(date, "d 'de' MMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('dates/meetups', {
        params: {
          date,
        },
      });

      const res = response.data.message.map(item => ({
        ...item,
        dateEventFormated: format(parseISO(item.date), "d 'de' MMMM", {
          locale: pt,
        }),
      }));

      setMeetup(res);
    }

    loadMeetups();
  }, [date]);

  async function handleAction(id) {
    try {
      await api.post(`subscriber/${id}/meetapp`);
      Alert.alert('Parabéns, cadastro concluido, confira na aba de inscrições');
    } catch (e) {
      Alert.alert(
        'Ocorreu algum erro :(, verifique se o meetup ainda está na data'
      );
    }
  }

  return (
    <>
      <Header />
      <Container>
        <DateEvents>
          <ButtonBack onPress={handlePrevDays}>
            <Icon name="chevron-left" size={20} color="#fff" />
          </ButtonBack>
          <CurrentDate> {dateFormated} </CurrentDate>
          <ButtonForward onPress={handleNextDays}>
            <Icon name="chevron-right" size={20} color="#fff" />
          </ButtonForward>
        </DateEvents>

        <ListEvents
          data={meetups}
          keyExtractor={item => item.title}
          renderItem={({ item }) => (
            <Card item={item} handleAction={() => handleAction(item.id)} />
          )}
        />
      </Container>
    </>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="list" size={20} color={tintColor} />
  ),
};
