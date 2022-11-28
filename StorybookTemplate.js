// Template for storybook stories
// more info https://storybook.js.org/docs/react/writing-stories/introduction

import React from 'react';

import { Button } from './Button';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Button', // name of the story
  component: Button, // component to be used
};

export const Primary = () => <Button backgroundColor='#ff0' label='Button' />;
export const Secondary = () => <Button backgroundColor='#ff0' label='😄👍😍💯' />;
export const Tertiary = () => <Button backgroundColor='#ff0' label='📚📕📈🤓' />;
