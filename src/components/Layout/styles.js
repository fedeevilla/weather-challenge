import styled from "styled-components/macro";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;

  .ant-layout {
    min-height: 100%;
  }

  hr {
    border-top: 1px solid ${({ theme }) => theme["@primary"]};
  }

  .layout-header {
    padding: 0 16px !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #343a40;
    width: 100%;
  }
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

export const Title = styled.span`
  color: white;
  font-size: 28px;
`;
