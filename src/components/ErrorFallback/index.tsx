import styled from 'styled-components';

export const Notification = styled.p`
  text-align: center;
  font-size: 2rem;
  padding-top: 2rem;
  color: var(--color-text);
`;

const ErrorFallback = (): JSX.Element => {
  return <Notification>Something went wrong. Please try again.</Notification>;
};

export default ErrorFallback;
