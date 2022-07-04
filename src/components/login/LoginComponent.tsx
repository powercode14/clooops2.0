import styled from 'styled-components';
import logo from 'images/clooops_logo.png';

const Container = styled.div`
  width: 450px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-top: ${(props) => props.theme.color.main};
  border-color: ${(props) => props.theme.color.main};
  border-width: 3px 0 0 0;
  border-style: solid;
`;

const LogoImage = styled.div`
  width: 280px;
  height: 60px;
  margin: 30px;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const WelcomeText = styled.p<{ fontWeight?: number }>`
  font-family: 'HaboroSoft';
  font-size: 0.8em;
  margin-top: 3px;
  margin-bottom: 3px;
  font-weight: ${(props) => props.fontWeight};
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const InputForm = styled.input`
  width: 290px;
  padding: 10px 15px 10px 15px;
  border-radius: 20px;
  border: 0.5px solid #eee;
  background-color: #f9f9f9;
  font-size: 0.5em;
  margin-top: 5px;
`;

const BtnLogin = styled.button`
  background-color: ${(props) => props.theme.color.main};
  color: white;
  font-size: 0.7em;
  width: 320px;
  padding: 10px 15px 10px 15px;
  border-radius: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const CopyRigntDiv = styled.div`
  margin-top: 30px;
  text-align: center;
  p {
    color: #888888;
    font-family: 'HaboroSoft';
    font-size: 0.4em;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

export {
  Container,
  LogoImage,
  WelcomeText,
  InputContainer,
  InputForm,
  BtnLogin,
  CopyRigntDiv,
};
