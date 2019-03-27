import React, { Component } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as RepositoriesActions } from '~/store/ducks/repositories';

import {
  Container, Header, HeaderText, Item, ItemName, ItemDescription,
} from './styles';

class Repositories extends Component {
  componentDidMount() {
    const { loadRepositoriesRequest } = this.props;

    loadRepositoriesRequest();
  }

  renderRepositories = () => {
    const { repositories } = this.props;

    return repositories.data.map(repo => (
      <Item key={repo.id}>
        <ItemName>{repo.name}</ItemName>
        <ItemDescription>{repo.description}</ItemDescription>
      </Item>
    ));
  };

  render() {
    const { repositories } = this.props;

    return (
      <Container>
        <Header>
          <HeaderText>Meus Repositórios</HeaderText>
        </Header>
        <ScrollView>
          {repositories.loading ? (
            <ActivityIndicator size="small" color="#999" />
          ) : (
            this.renderRepositories()
          )}
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories,
});

const mapDispatchToProps = dispatch => bindActionCreators(RepositoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Repositories);
