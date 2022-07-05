import logoImage from 'assets/images/login_logo.png';
import { Divide } from 'Styled/Common';
import {
  LoginContainer,
  LoginContent,
  WrapForm,
  LoginTitleWrap,
  LoginFooter,
  LoginTopLine,
  LoginBottomLine,
  Inner,
  LoginForm,
  Field,
} from 'Styled/Signin';

const ReactSignIn = () => {
  return (
    <LoginContainer>
      <LoginContent>
        <WrapForm>
          <LoginTopLine />
          <Inner>
            <LoginTitleWrap>
              <h1 className="login-logo">
                <img src={logoImage} alt="로고" />
              </h1>
              <p>
                <b>Welcome to ClooOps.</b>
                <br />
                Experience the best tools for cloud management.
              </p>
            </LoginTitleWrap>
            <Divide />
            <LoginForm>
              <Field>
                <input
                  type="text"
                  className="fm-control round w-100"
                  placeholder="ID (Email)"
                  title="이메일"
                />
              </Field>
              <Field>
                <input
                  type="password"
                  className="fm-control round w-100"
                  placeholder="Password"
                  title="비밀번호"
                />
              </Field>
            </LoginForm>
            <button type="button" className="btn btn-solid big round w-100">
              LOGIN
            </button>
            <LoginFooter>
              <p className="ft-100">Copyright ⓒ 2022</p>
              <p className="ft-100">Cloocus Co. Ltd. All rights reserved.</p>
            </LoginFooter>
          </Inner>
          <LoginBottomLine />
        </WrapForm>
      </LoginContent>
    </LoginContainer>
  );
};

export default ReactSignIn;
