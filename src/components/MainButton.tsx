import { ActionButton } from "../styles/global";

interface IProps {
  setStart: (val: boolean) => void;
}
const MainButton: React.FC<IProps> = ({ setStart }) => {
  return (
    <ActionButton onClick={() => setStart(false)} data-testid="main-button">
      start quiz
    </ActionButton>
  );
};

export default MainButton;
