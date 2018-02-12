/**
*
* Status
*
*/

import styled from 'styled-components';

export default styled.span`
  color: ${(props) => props.saveStatus ? 'green' : 'red'}
`;
