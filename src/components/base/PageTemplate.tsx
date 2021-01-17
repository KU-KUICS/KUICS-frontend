import styled from 'styled-components';

interface PageTemplateProps {
  isHeader?: boolean;
}

const PageTemplate = styled.div<PageTemplateProps>`
  margin: calc(30px + ${(p) => (p.isHeader ? '60px' : '0px')}) auto;
  max-width: 1290px;

  padding: 0 48px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default PageTemplate;
