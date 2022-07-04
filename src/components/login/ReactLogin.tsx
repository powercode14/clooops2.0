import {
  Container,
  LogoImage,
  WelcomeText,
  InputContainer,
  InputForm,
  BtnLogin,
  CopyRigntDiv,
} from './LoginComponent';

const ReactLogin = () => {
  return (
    <div>
      <p>React + Styled-component 버전</p>
      <Container>
        <LogoImage />
        <WelcomeText fontWeight={600}>Welcome to ClooOps</WelcomeText>
        <WelcomeText>
          Experience the best tools for cloud management.
        </WelcomeText>
        <InputContainer>
          <InputForm type="text" placeholder="ID(Email)" />
          <InputForm type="password" placeholder="Password" />
        </InputContainer>
        <BtnLogin type="button">LOGIN</BtnLogin>
        <CopyRigntDiv>
          <p>Copyright ⓒ 2022</p>
          <p>Cloocus Co. Ltd. All rights reserved.</p>
        </CopyRigntDiv>
      </Container>
    </div>
  );
};

export default ReactLogin;
