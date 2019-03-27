import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #eee;
  align-items: stretch;
  justify-content: center;
`;

export const Header = styled.View`
  background: #fff;
  justify-content: center;
  align-items: center;
  height: 58px;
  border-bottom-width: 1px;
  border-bottom-color: #cecece;
`;

export const HeaderText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const Item = styled.View`
  flex: 1;
  background: #fff;
  margin: 10px 10px 0 10px;
  padding: 10px;
  border-radius: 4px;
`;

export const ItemName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  padding-bottom: 5px;
`;
export const ItemDescription = styled.Text`
  font-size: 12px;
  color: #666;
`;
