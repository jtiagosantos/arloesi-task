import trashIcon from '@/assets/icons/trash-icon.svg';
import { Container } from '@/components/Card/styles';

export const Card = () => {
  return (
    <Container>
      <div>
        <h1>Modular Scale</h1>
        <p>Lorem ipsum is a simple dummy text</p>
      </div>
      <button>
        <img src={trashIcon} alt="Trash icon" />
      </button>
    </Container>
  );
};
