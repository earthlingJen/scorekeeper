import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, number, button } from '@storybook/addon-knobs/react'

import Button from '../components/Button'
import EditCard from '../components/EditCard'
import PointButtonBar from '../components/PointButtonBar'
import GameScreen from '../components/GameScreen'
import StartScreen from '../components/StartScreen'
import PlayerHeader from '../components/PlayerHeader'
import RoundsBar from '../components/RoundsBar'
import SummaryCard from '../components/SummaryCard'
import SummaryScreen from '../components/SummaryScreen'

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <Button onClick={action('clicked')}>
      {text('Button text', 'Click me')}
    </Button>
  ))

storiesOf('PointButtonBar', module).add('default', () => (
  <PointButtonBar onClick={action('onClick')} />
))

storiesOf('EditCard', module)
  .addDecorator(withKnobs)
  .add('with no points', () => (
    <EditCard
      title={text('Title', 'Some text')}
      score={number('Score', 0, {
        range: true,
        min: 0,
        max: 50,
        step: 1,
      })}
      onUpdate={action('onUpdate')}
    />
  ))
  .add('with many points', () => {
    return (
      <EditCard
        title="Some title"
        score={99999999}
        onUpdate={action('onUpdate')}
      />
    )
  })
  .add('with extra long title', () => (
    <EditCard
      title="Some suuuuuuuuuuper looooooooong title here"
      score={20}
      onUpdate={action('onUpdate')}
    />
  ))

storiesOf('StartScreen', module)
  .add('no players', () => (
    <StartScreen
      players={[]}
      onStartGame={action('onStartGame')}
      onDeleteAllPlayers={action('onDeleteAllPlayers')}
      onAddPlayer={action('onAddPlayer')}
      onDeletePlayer={action('onDeletePlayer')}
    />
  ))
  .add('default', () => (
    <StartScreen
      players={[{ name: 'John', score: 100 }]}
      onStartGame={action('onStartGame')}
      onDeleteAllPlayers={action('onDeleteAllPlayers')}
      onAddPlayer={action('onAddPlayer')}
      onDeletePlayer={action('onDeletePlayer')}
    />
  ))

storiesOf('GameScreen', module)
  .add('single user', () => (
    <GameScreen
      players={[{ name: 'John', score: 0 }]}
      onUpdateScore={action('onUpdateScore')}
      onBack={action('onBack')}
      onResetScores={action('onResetScores')}
    />
  ))
  .add('multiple users', () => (
    <GameScreen
      players={[{ name: 'John', score: 0 }, { name: 'Jane', score: 10 }]}
      onUpdateScore={action('onUpdateScore')}
      onBack={action('onBack')}
      onResetScores={action('onResetScores')}
    />
  ))

storiesOf('PlayerHeader', module)
  .addDecorator(withKnobs)
  .add('short name', () => (
    <PlayerHeader
      title={text('Player', 'Player Name short')}
      score={number('score', 20)}
    />
  ))
  .add('long name big score', () => (
    <PlayerHeader
      title={text('Player', 'Player Name loooooooooooooooooooooooooooooong')}
      score={number('score', 12345678912345678912)}
    />
  ))

storiesOf('RoundsBar', module)
  .addDecorator(withKnobs)
  .add('two digits', () => <RoundsBar round={[{ score: 0 }]} />)

  .add('twelve digits', () => (
    <RoundsBar round={number('score', 123456789012)} />
  ))

storiesOf('SummaryCard', module)
  .addDecorator(withKnobs)
  .add('one player', () => (
    <SummaryCard title="Player 1" score={20} round={number('score', 20)} />
  ))

storiesOf('SummaryScreen', module)
  .addDecorator(withKnobs)
  .add('one player', () => (
    <SummaryScreen
      players={[{ name: 'John', score: 0 }]}
      round={number('score', 20)}
      onAddRound={action('addRound')}
    />
  ))
  .add('multiple players', () => (
    <SummaryScreen
      players={[{ name: 'John', score: 0 }, { name: 'Jane', score: 10 }]}
      round={number('score', 20)}
      onAddRound={action('addRound')}
    />
  ))
