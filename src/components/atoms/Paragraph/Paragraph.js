import styled from 'styled-components';

const Paragraph = styled.p`
  padding: 0;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

export default Paragraph;
