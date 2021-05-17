import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: var(--color-elements);
  box-shadow: 0 0 0.4375rem rgba(0, 0, 0, 0.3);
  padding: 0.375rem 1.4375rem;
  border: none;
  color: var(--color-text);
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.2s linear;

  :hover {
    cursor: pointer;
    transform: translateY(-0.3125rem);
  }
`;

const Button: React.FC<{ handleClick: () => void }> = ({
  children,
  handleClick,
}) => <StyledButton onClick={handleClick}>{children}</StyledButton>;

export default Button;
