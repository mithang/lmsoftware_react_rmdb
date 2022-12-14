export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
import StoryRouter from 'storybook-react-router'; 
import { addDecorator } from "@storybook/react"; 
addDecorator(StoryRouter()); 