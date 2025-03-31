import { Input } from ".";

export default {
  title: "Components/Atoms/Input",
  component: Input,
};

export const Default = {
  args: {
    defaultValue: "",
    onEditComplete: (ref) => {
      console.log("編集完了", ref?.value);
    },
  },
};
