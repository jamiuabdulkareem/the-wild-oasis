import styled from "styled-components";

const StyledSideBar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey);

  grid-row: 1 / -1;
`;

function SideBar() {
  return <StyledSideBar>SIDEBAR</StyledSideBar>;
}

export default SideBar;
