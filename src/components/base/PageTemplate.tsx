import styled from 'styled-components';

interface PageTemplateProps {
  isHeader?: boolean;
}

const PageTemplate = styled.div<PageTemplateProps>`
  margin: calc(30px + ${(p) => (p.isHeader ? '60px' : '0px')});

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default PageTemplate;
