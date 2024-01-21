import styled from "styled-components";
import { FlexRowJcBetweenAiCenter } from "Styles/Abstract/Mixins";

export const LoaderStyle = styled.div`
  border: 0.1rem solid var(--color-6);
  border-radius: 1.2rem;
  width: 36rem;
  padding: 4rem 1.5rem;
  background-color: #f8f8f8;
  text-align: center;

  .heading {
    border-radius: 1rem;
  }
  .button {
    border-radius: 3.8rem;
  }
`;

export const SectionLoaderStyle = styled.div`
  border: 0.1rem solid var(--color-6);
  border-radius: 1.2rem;
  width: 100%;
  padding: 2rem;
  background-color: #f8f8f8;
  margin-bottom: 2rem;

  ${FlexRowJcBetweenAiCenter}

  .heading {
    border-radius: 1rem;
  }
  .button {
    border-radius: 3.8rem;
  }
`;

export const BookLoaderStyle = styled.div`
  .boo__loader_top {
    border-radius: 1rem;
  }
`;
