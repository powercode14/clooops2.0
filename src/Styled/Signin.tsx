import styled from 'styled-components';
import bgLogin from 'assets/images/bg_login.jpg';

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const LoginContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  &:before {
    content: '';
    z-index: -1;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #f3f5f7;
    background-image: url(${bgLogin});
    background-size: cover;
  }
`;

const WrapForm = styled.div`
  position: relative;
  width: 620px;
  min-height: 73vh;
  max-height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: auto;
  .login-logo-wrap {
    margin-bottom: 30px;
    text-align: center;
  }
  .btn-login-wrap {
    text-align: center;
    .btn {
      margin-left: 10px;
    }
    .btn {
      &:first-child {
        margin-left: 0;
      }
    }
  }
  .info-box {
    margin-top: 40px;
  }
`;

const LoginTopLine = styled.div`
  width: 100%;
  height: 4px;
  background: #642977;
  background-image: linear-gradient(to right, #642977, #5129cf);
`;

const LoginBottomLine = styled.div`
  width: 100%;
  height: 20px;
  background: #eae9f1;
  border-radius: 100px;
`;

const Inner = styled.div`
  padding: 5% 17%;
`;

const LoginForm = styled.form`
  .fm-control {
    height: 60px;
    padding: 0 30px;
    font-size: 15px;
    background: #f9f9f9;
  }
  .fm-control::placeholder {
    font-size: 15px;
  }
`;

const Field = styled.div`
  margin: 0 0 1.5em;
`;

const LoginTitleWrap = styled.div`
  margin-bottom: 10px;
  text-align: center;
  .login-logo {
    margin-bottom: 30px;
  }
  p {
    margin-top: 10px;
    letter-spacing: -0.2px;
    font-size: 16px;
  }
`;

const LoginFooter = styled.div`
  text-align: center;
  margin-top: 15%;
  color: #888888;
`;

const AgreeWrap = styled.div`
  ul {
    border-top: 1px solid #dadada;
    margin: 12px 0 30px 0;
    padding-top: 6px;
  }
  ul li {
    display: flex;
    padding: 6px 0;
  }
  ul li button {
    margin-left: auto;
  }
  .checkbox-link {
    font-size: 15px;
  }
`;

export {
  LoginContainer,
  LoginContent,
  WrapForm,
  LoginTopLine,
  LoginBottomLine,
  LoginTitleWrap,
  LoginFooter,
  Inner,
  LoginForm,
  Field,
};
