import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import EditCard from '../components/EditCard'
import Button from '../components/Button'

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react'

storiesOf('Button', module).add('with text', () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
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
      title="suuuuuuuuuuuuuper looooooooooooooooooong title"
      score={999999}
      onUpdate={action('onUpdate')}
    />
  ))

const stories = storiesOf('Storybook Knobs', module)
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs)

// Knobs for React props
stories.add('with a button', () => (
  <button disabled={boolean('Disabled', false)}>
    {text('Label', 'Hello Storybook')}
  </button>
))

// Knobs as dynamic variables.
stories.add('as dynamic variables', () => {
  const name = text('Name', 'Arunoda Susiripala')
  const age = number('Age', 89)

  const content = `I am ${name} and I'm ${age} years old.`
  return <div>{content}</div>
})

stories.add('Button with Knobs', () => (
  <Button onClick={action('clicked')} disabled={boolean('Disabled', false)}>
    {text('Label', 'Hello world')}
  </Button>
))
