import React from 'react';

import Header from './Header';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Header',
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Header {...args} />;

export const HeaderPrimary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HeaderPrimary.args = {
  primary: true,
  text: 'Load More',
 
};

export const HeaderSecondary = Template.bind({});
HeaderSecondary.args = {
  text: 'Load More',
};
