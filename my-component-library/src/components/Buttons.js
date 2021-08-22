import styled from 'styled-components';
import { defaultTheme, typeScale } from '../utils';

const secondaryPink = "#EF4C7F";
const tertiaryPink = "#F5BCCE";

const Button = styled.button`
  padding: 12px 24px;
  margin: 5px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${defaultTheme.primaryColorHover};
    color: ${defaultTheme.textColorOnPrimary}
  }

  &:focus {
    outline: 3px solid ${defaultTheme.primaryColorHover};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${defaultTheme.primaryColorActive};
    border-color: ${defaultTheme.primaryColorActive};
    color: ${defaultTheme.textColorOnPrimary};
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: none;
  color: white;

  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: "#181818";
    cursor: not-allowed;
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: ${secondaryPink};
  border: none;
  color: white;

  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: "#181818";
    cursor: not-allowed;
  }
`;

export const TertiaryButton = styled(Button)`
  background-color: ${tertiaryPink};
  border: none;
  color: "#181818";

  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: "#181818";
    cursor: not-allowed;
  }
`;

export default PrimaryButton;