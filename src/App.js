import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Main from "./components/Main.styled";
import Banner from "./components/style/Banner.styled";
import Form from "./components/style/Form.styled";
import GlobalStyle from "./components/style/Global.styled";
import SectionOne from "./components/style/SectionOne.styled";
import SectionTwo from "./components/style/SectionTwo.styled";

const theme = {
  fontWight: {
    normal: 400,
    bold: 500,
    bolder: 600,
    bbolder: 700,
  },
};

function App() {
  // Input empty validation check
  const [isValid, setValid] = useState({
    isFirstName: false,
    isLastName: false,
    isEmail: false,
    isPassword: false,
  });
  // Email Validation
  const [isEmail, setisEmail] = useState(false);

  // User Input update
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // User input handlers
  const firstName = event => {
    setData(pre => {
      return { ...pre, firstName: event.target.value };
    });
    if (event.target.value.length > 0) {
      setValid(pre => {
        return { ...pre, isFirstName: false };
      });
    }
  };
  const lastName = event => {
    setData(pre => {
      return { ...pre, lastName: event.target.value };
    });
    if (event.target.value.length > 0) {
      setValid(pre => {
        return { ...pre, isLastName: false };
      });
    }
  };
  const emailName = event => {
    setData(pre => {
      return { ...pre, email: event.target.value };
    });
    if (event.target.value.length > 0) {
      setValid(pre => {
        return { ...pre, isEmail: false };
      });
    }
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
    ) {
      setisEmail(false);
    } else {
      setisEmail(true);
    }
  };
  const password = event => {
    setData(pre => {
      return { ...pre, password: event.target.value };
    });
    if (event.target.value.length > 0) {
      setValid(pre => {
        return { ...pre, isPassword: false };
      });
    }
  };

  // Form submition
  const submit = e => {
    e.preventDefault();
    if (data.firstName === "") {
      setValid(pre => {
        return { ...pre, isFirstName: true };
      });
    }
    if (data.lastName === "") {
      setValid(pre => {
        return { ...pre, isLastName: true };
      });
    }
    if (data.email === "") {
      setValid(pre => {
        return { ...pre, isEmail: true };
      });
    }
    if (data.password === "") {
      setValid(pre => {
        return { ...pre, isPassword: true };
      });
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle imageUrl={"../assert/images/bg-intro-mobile.png"} />
        <Main>
          <SectionOne>
            <div>
              <h1>Learn to code by watching others</h1>
            </div>
            <div>
              <p>
                See how experienced developers solve problems in real-time.
                Watching scripted tutorials is great, but understadning how
                developers think is invaluable.
              </p>
            </div>
          </SectionOne>
          <SectionTwo>
            <Banner>
              <p>
                <span>Try it free 7 days</span> then $20/mo. thereafter
              </p>
            </Banner>
            <Form>
              <div>
                <form onSubmit={submit}>
                  <input
                    className={isValid.isFirstName && "error"}
                    type="text"
                    placeholder={!isValid.isFirstName && "First Name"}
                    onChange={firstName}
                    value={data.firstName}
                  />

                  {isValid.isFirstName ? (
                    <small>
                      <i>First Name Cannot be empty</i>
                    </small>
                  ) : null}
                  <input
                    className={isValid.isLastName && "error"}
                    type="text"
                    placeholder={!isValid.isLastName && "Last Name"}
                    onChange={lastName}
                    value={data.lastName}
                  />

                  {isValid.isLastName ? (
                    <small>
                      <i>Last Name cannot be empty</i>
                    </small>
                  ) : null}
                  <input
                    className={(isValid.isEmail || isEmail) && "error"}
                    type="email"
                    placeholder={!isValid.isEmail && "Email Address"}
                    onChange={emailName}
                    value={data.email}
                  />
                  {isEmail && !isValid.isEmail ? (
                    <small>
                      <i>Looks like this is not an email</i>
                    </small>
                  ) : null}
                  {isValid.isEmail ? (
                    <small>
                      <i>Email cannot be empty</i>
                    </small>
                  ) : null}
                  <input
                    className={isValid.isPassword && "error"}
                    type="password"
                    placeholder={!isValid.isPassword && "Password"}
                    onChange={password}
                    value={data.password}
                  />
                  {isValid.isPassword ? (
                    <small>
                      <i>Password cannot be empty</i>
                    </small>
                  ) : null}
                  <button type="submit">CLAIM YOUR FREE TRAIL</button>
                </form>
              </div>
              <div>
                <small>
                  By clicking the button, you are agreeing to our{" "}
                  <a href="#">Terms and Services</a>
                </small>
              </div>
            </Form>
          </SectionTwo>
        </Main>
      </>
    </ThemeProvider>
  );
}

export default App;
