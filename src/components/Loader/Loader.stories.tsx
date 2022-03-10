import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Loader from './';
import CenterView from '../CenterView';

storiesOf('Loader', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <Loader />
  ))

