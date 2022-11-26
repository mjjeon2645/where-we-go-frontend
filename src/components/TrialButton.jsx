import styled from 'styled-components';

const Button = styled.button`
    font-size: 1em;
    color: #FFF;
    background-color: #4135bb;
    width: 200px;
    height: 50px;
    border-radius: 6px;
    border: none;
`;

export default function TrialButton({ getTrialAccessAuth }) {
  const handleTrialClick = () => {
    getTrialAccessAuth();
  };

  return (
    <Button type="button" onClick={handleTrialClick}>
      ❤️서비스 체험하기❤️
    </Button>
  );
}
