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
  const submit = e => {
    e.preventDefault();
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
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                  <input type="email" placeholder="Email Address" />
                  <input type="password" placeholder="Password" />
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
