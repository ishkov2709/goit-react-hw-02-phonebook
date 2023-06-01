import styled from '@emotion/styled';

export const Item = styled.li`
  font-size: 22px;
  text-align: center;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Text = styled.p`
  display: inline-block;
  margin: 0 50px 0 0;
`;

export const Btn = styled.button`
  background: transparent;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid #cacaca;
  border-radius: 4px;

  transition: background 50ms linear;

  &:active {
    background: #3f78e2;
  }
`;
