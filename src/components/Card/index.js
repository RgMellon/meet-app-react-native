import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native';
import {
  Container,
  ImageMeetup,
  Title,
  DateEvent,
  DateTime,
  Locale,
  LocaleEvent,
  CreatorEvent,
  Creator,
  ButtonConfirm,
  TextButton,
} from './styles';

export default function Card({ item, handleAction, cancel }) {
  return (
    <Container canceled={item.canceled}>
      <Image source={{ uri: 'http://localhost:2222/files/dc45fdffd879.png'}} />
      <ImageMeetup
        source={{
          uri: item.image.url,
        }}
      />

      <Title> {item.title} </Title>

      <DateEvent>
        <Icon name="event" size={18} color="#989898" />
        <DateTime> {item.dateEventFormated} </DateTime>
      </DateEvent>

      <LocaleEvent>
        <Icon name="map" size={18} color="#989898" />
        <Locale> {item.location} </Locale>
      </LocaleEvent>

      <CreatorEvent>
        <Icon name="person" size={18} color="#989898" />
        <Creator> Organizador : {item.user.name} </Creator>
      </CreatorEvent>

      <ButtonConfirm onPress={handleAction}>
        {!cancel ? (
          <TextButton> Realizar inscrição </TextButton>
        ) : (
          <TextButton> Cancelar inscrição </TextButton>
        )}
      </ButtonConfirm>
    </Container>
  );
}
