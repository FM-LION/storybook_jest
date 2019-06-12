import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/Button';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action, withActions } from '@storybook/addon-actions';
import { withTests } from '@storybook/addon-jest';
import * as results from '../jest-test-results.json';

const adapterTest = withTests({ results }) as any;

let actionOjb = action('onClick');
storiesOf('Button', module)
  .addDecorator(adapterTest)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <Button text={text('Label', 'Hello Storybook')} action={actionOjb}/>
  ),{jest: ['button.test.tsx','hoisting.test.tsx','scope_closure.test.tsx']})
  .add('with emoji', () => (
    <Button text={text('abc', '😀 😎 👍 💯')}/>
  ));  