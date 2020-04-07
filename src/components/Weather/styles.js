import styled from "styled-components/macro";

export const WrapperRecents = styled.div`
  width: 150px;
  padding: 20px;
  border: 1px solid #f0f0f0;
  margin-left: 5px;

  p {
    margin-bottom: 5px;
  }
`;

export const Title = styled.span`
  font-size: 22px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
`;

export const WrapperDetails = styled.div`
  width: 50%;
`;

export const WrapperIcon = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;

  img {
    width: 100px;
    height: 100px;
  }
`;

export const WrapperTitle = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const WrapperInfo = styled.div`
  display: flex;
`;
