import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Card, CardItem, Text, Body, Title } from 'native-base';

var RNFS = require('react-native-fs');

var json = {
  foo: 'bar',
  qux: 'moo',
  poo: 123,
}

export default class App extends Component {

  componentDidMount(){
    this.createExcel()
  }


  createExcel = () => {
    var path = RNFS.ExternalStorageDirectoryPath + '/test.txt';

    RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
      .then((success) => {
        console.warn('FILE WRITTEN!', path);
      })
      .catch((err) => {
        console.warn(err.message);
      });
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Карточка таксации</Title>
          </Body>
        </Header>
        <Content>
          <Item floatingLabel>
            <Label>Квартал</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Лесничество</Label>
            <Input />
          </Item>
          <Card>
            <CardItem header>
              <Text>№1</Text>
            </CardItem>
            <Form>
              <Item floatingLabel>
                <Label>№ Выдачи</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Площадь</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Категория угодий</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Способ рубки</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>ОЗУ</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Экспоз. склона</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Крутизна склона</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>ВНУМ</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Вид эрозии</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>Степень эрозии</Label>
                <Input />
              </Item>
            </Form>
          </Card>
          <Card>
            <CardItem header>
              <Text>№2</Text>
            </CardItem>
            <Form>
              <Item floatingLabel>
                <Label>1-е проектируемое мероприятие</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>% проектируемое мероприятие</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>2-е проектируемое мероприятие</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>3-е проектируемое мероприятие</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Целевая порода</Label>
                <Input />
              </Item>
            </Form>
          </Card>
          <Card>
            <CardItem header>
              <Text>№3</Text>
            </CardItem>
            <Form>
              <Item floatingLabel>
                <Label>Порода</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Бон.</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Тип леса</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>ТЛУ</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Год вырубки</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>К-во пней сот. шт./га всего</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>К-во пней сот. шт./га сосны</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Диаметры пеней</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Тип вырубки</Label>
                <Input />
              </Item>
            </Form>
          </Card>
          <Card>
            <CardItem header>
              <Text>№4</Text>
            </CardItem>
            <Form>
              <Item floatingLabel>
                <Label>Захлам. м3/га общая</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Захлам. м3/га ликвид</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Сухост. м3/га</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Текстовая запись</Label>
                <Input />
              </Item>
            </Form>
          </Card>
          <Card>
            <CardItem header>
              <Text>№31 Подрост</Text>
            </CardItem>
            <Form>
              <Item floatingLabel>
                <Label>Количество, тыс.шт.</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Н, м</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>А, лет</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Коэфицент</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Порода</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Коэфицент</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Порода</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Коэфицент</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Оцена</Label>
                <Input />
              </Item>
            </Form>
          </Card>
          <Card>
            <CardItem header>
              <Text>№31 Подлесок</Text>
            </CardItem>
            <Form>
              <Item floatingLabel>
                <Label>Густота</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Порода</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Порода</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Порода</Label>
                <Input />
              </Item>
            </Form>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
