import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions'

import App from '../components';

storiesOf('App', module)
  .add('default', () => (
    <App onClick={action('clicked')}/>
  ));
