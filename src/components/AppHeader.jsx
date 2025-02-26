import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 50px;
  font-size: 1.7em;
  line-height: 1.7em;
  font-weight: bold;
  font-family: 'Product Sans';
  color: #000;

  & > svg {
    position: relative;
    top: -0.1em;
    margin-left: 0.2em;
  }

  background-color: white;
  border-bottom: 1px solid #ddd;
`;

const StyledHeaderLabel = styled.label``;

const AppHeader = props => (
  <StyledHeader>
    <StyledHeaderLabel>BloomBus</StyledHeaderLabel>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
      clipRule="evenodd"
      width="32"
      height="31"
    >
      <g>
        <path
          fill="#fff"
          stroke="#33a3f4"
          strokeWidth="1.78"
          d="M9.7 24.97c0-1.32-1.16-2.39-2.6-2.39-1.44 0-2.6 1.07-2.6 2.4v2.43c0 1.32 1.16 2.4 2.6 2.4 1.44 0 2.6-1.08 2.6-2.4v-2.44zM26.61 24.97c0-1.32-1.17-2.39-2.6-2.39-1.44 0-2.61 1.07-2.61 2.4v2.43c0 1.32 1.17 2.4 2.6 2.4 1.44 0 2.61-1.08 2.61-2.4v-2.44z"
        />
        <path
          fill="#33a3f4"
          d="M28.88 5.74c0-1.28-1.14-2.33-2.54-2.33H4.74c-1.4 0-2.54 1.05-2.54 2.33v18.6c0 1.27 1.14 2.31 2.54 2.31h21.6c1.4 0 2.54-1.04 2.54-2.32V5.73z"
        />
        <ellipse cx="15.58" cy="5.75" fill="#fff" stroke="#33a3f4" strokeWidth="2.22" rx="12.15" ry="4.01" />
        <path
          fill="#33a3f4"
          d="M31.19 9.17c0-1.21-1.08-2.2-2.4-2.2H2.37c-1.33 0-2.4.99-2.4 2.2v4.4c0 1.22 1.07 2.21 2.4 2.21h26.4c1.33 0 2.4-.99 2.4-2.2v-4.4z"
        />
        <path
          fill="#fff"
          d="M28.88 10.38c0-.61-.54-1.1-1.2-1.1H3.4c-.67 0-1.2.49-1.2 1.1v2.2c0 .62.53 1.11 1.2 1.11h24.26c.67 0 1.21-.5 1.21-1.1v-2.21z"
        />
        <path
          fill="#fff"
          d="M26.61 6c0-.54-.48-.98-1.07-.98H5.57c-.6 0-1.08.44-1.08.98v17.65c0 .54.48.98 1.08.98h19.97c.6 0 1.07-.44 1.07-.98V6z"
        />
        <path
          fill="none"
          stroke="#33a3f4"
          strokeWidth="1.78"
          d="M23.34 9.68c0-1.5-1.33-2.71-2.96-2.71h-9.4c-1.64 0-2.96 1.21-2.96 2.7v2.8c0 1.49 1.32 2.7 2.95 2.7h9.4c1.64 0 2.97-1.21 2.97-2.7v-2.8z"
        />
        <ellipse cx="9.19" cy="20.28" fill="#ffd800" rx="1.41" ry="1.29" />
        <ellipse cx="21.66" cy="20.28" fill="#ffd800" rx="1.41" ry="1.29" />
      </g>
    </svg>
  </StyledHeader>
);

export default AppHeader;
