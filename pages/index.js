import styled from 'styled-components';
import Link from 'next/link';
import QuizLogo from '../src/components/QuizLogo'
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Head from 'next/head'




// const BackgroundImage = styled.div`
// background-image: url(${db.bg});
// flex: 1;
// background-size: cover;
// background-position: center;
// `

export const QuizContainer = styled.div`
width: 100%;
max-width: 350px;
padding-top: 45px;
margin: auto 10%;
@media screen and (max-width: 500px) {
  margin: auto;
  padding: 15px;
}
`;



export default function Home() {
  return (
   
    <QuizBackground backgroundImage={db.bg}>

      <QuizContainer>
        <QuizLogo/>
        <Widget>
          <Widget.Header>
            <Head>
            <h1>Assassins Creed</h1>
            </Head>
          </Widget.Header>
          <Widget.Content>
            <p>Quiz </p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quiz da Galera</h1>
            <Link href="/quiz">

              <a>Entrar</a>

            </Link>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/nikhenry2212" />
    </QuizBackground>
  );
}
