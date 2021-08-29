import React from 'react';
import styled from 'styled-components';

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

export const CloseIcon = () => (
  <CloseIconWrapper aria-hidden="true">
    <path d="M27 2L2 27M2 2L27 27" stroke="#2F2E41" strokeWidth="3"/>
  </CloseIconWrapper>
);

