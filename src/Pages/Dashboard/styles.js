import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background: #402845;
  flex: 1;

  /* justify-content: center; */
`;

export const Card = styled.View`
  background: #fff;
  border-radius: 4px;
  margin-top: 20px;
`;

export const ImageMeetup = styled.Image`
  width: 100%;
  height: 200px;
`;

export const Title = styled.Text`
  margin-left: 18px;
  font-weight: bold;
  font-size: 19px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const DateEvent = styled.View`
  flex-direction: row;
  margin-left: 20px;
  margin-bottom: 10px;
  align-items: center;
`;

export const DateTime = styled.Text`
  font-size: 16px;
  margin-left: 4px;
  color: #989898;
`;

export const Locale = styled.Text`
  font-size: 16px;
  color: #989898;
  margin-left: 4px;
`;

export const LocaleEvent = styled.View`
  margin-left: 20px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
`;

export const CreatorEvent = styled.View`
  flex-direction: row;
  margin-left: 20px;
  margin-bottom: 10px;
  align-items: center;
`;

export const Creator = styled.Text`
  font-size: 16px;
  color: #989898;
  margin-left: 4px;
`;

export const ButtonConfirm = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  background: #ff0059;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 4px;

  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: white;
  font-weight: bold;
`;

export const ListEvents = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 15 },
})``;

export const DateEvents = styled.View`
  margin-top: 40px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const ButtonBack = styled.TouchableOpacity`
  margin-right: 20px;
`;

export const ButtonForward = styled.TouchableOpacity`
  margin-left: 20px;
`;

export const CurrentDate = styled.Text`
  color: #fff;
  font-size: 25px;
  font-weight: bold;
`;
