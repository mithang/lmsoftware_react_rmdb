import React from 'react';

import LoadMoreBtn from './LoadMoreBtn';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/LoadMoreBtn',
  component: LoadMoreBtn,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <LoadMoreBtn {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  text: 'Load More',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Load More',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  text: 'Load More',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  text: 'Load More',
};
