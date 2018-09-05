import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import EditCard from '../components/EditCard'
import Button from '../components/Button'

storiesOf('Button', module).add('with text', () => (
  <Button onClick={action('clicked')}>Hello Button </Button>
))

storiesOf('EditCard', module)
  .add('with no points', () => (
    <EditCard title="Some title" score={0} onUpdate={action('onUpdate')} />
  ))
  .add('with many points', () => (
    <EditCard title="Some title" score={999999} onUpdate={action('onUpdate')} />
  ))
  .add('with extra long title', () => (
    <EditCard
      title="suuuper looong title"
      score={999999}
      onUpdate={action('onUpdate')}
    />
  ))
