import React, { Fragment, useContext, useEffect } from 'react';
import { connect } from 'react-redux';

import { DataServiceContext } from '../../services';
import { fetchData } from '../../actions';

import { PageHeader } from '../page-header';
import { CopyField } from '../copy-field';
import { FirstGallery, SecondGallery } from '../gallery';
import { TextBlock1 } from '../text-block1';
import { Form } from '../form';
import { ErrorIndicator } from '../error-indicator';
import { Spinner } from '../spinner';

import { Props, MapStateToProps, MapDispatchToProps } from './types';

import './app.scss';

const App: React.FC = () => {
  return (
    <Fragment>
      <PageHeader />
      <h1>NewApp</h1>
      <CopyField />
      <FirstGallery />
      <SecondGallery />
      {/* <TextBlock1 /> */}
      <Form />
    </Fragment>
  );
};

const AppContainer: React.FC<Props> = ({ loading, error, fetchData }) => {
  const { getData } = useContext<any>(DataServiceContext);

  useEffect(() => {
    fetchData(getData);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator error={error} />;
  }

  return <App />;
};

const mapStateToProps: MapStateToProps = ({ loading, error }) => {
  return {
    loading,
    error,
  };
};

const mapDispatchToProps: MapDispatchToProps = {
  fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
