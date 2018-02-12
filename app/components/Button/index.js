/**
*
* Button
*
*/

import styled from 'styled-components';

export default styled.button`
  display: inline-flex;
  padding: 0.25em 1em;
  text-decoration: none;
  border: 1px solid #999;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-size: 18px;
  font-weight: bold;
  background-color: white;
  color: #41ADDD;
  &:active {
    background: #41ADDD;
    color: #FFF;
  }
`;
