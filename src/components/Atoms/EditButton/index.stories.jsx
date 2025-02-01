import { Button } from ".";

export default { component: Button };

export const Default = {
  args: {
    onClick: () => console.log("clicked"),
    onMouseEnter: () => console.log("mouse entered"),
  },
};