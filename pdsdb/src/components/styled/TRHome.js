import styled from "styled-components";

const TRHome = styled.tr`
  padding: 0.5rem;
  border: 1px solid #dddddd;
  text-align: center;

  &:nth-child(odd) {
    background-color: #fff;
  }
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export default TRHome;
