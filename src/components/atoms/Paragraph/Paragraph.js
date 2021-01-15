import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

export default Paragraph;
