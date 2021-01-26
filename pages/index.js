import React from 'react';

import styled from 'styled-components';
import { useRouter } from 'next/router';
import Head from 'next/head';
import QuizLogo from '../src/components/QuizLogo';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

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
  const router = useRouter();
  const [name, setName] = React.useState('');
  // eslint-disable-next-line no-console
  console.log('retorno do useState', name, setName);
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Assassins Creed</title>
        {/* <meta property="og:image" content="https://articles.gamerheadquarters.com/images/top10/xbox/assassinscreed/brotherhood.jpg" /> */}
        <meta property="og:title" content="Assins Creed" key="title" />
        <meta property="og:image" content={db.bg} />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Assassins Creed</h1>
          </Widget.Header>
          <Widget.Content>
            {/*  eslint-disable-next-line func-names */}
            <form onSubmit={function (event) {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
              // eslint-disable-next-line no-console
              console.log('Fazendo um submit no react');
              // router manda para próxima pagina
            }}
            >
              <input
                // eslint-disable-next-line func-names
                onChange={function (event) {
                  // eslint-disable-next-line no-console
                  console.log(event.target.value);
                  // State
                  // name = event.target.value;
                  setName(event.target.value);
                }}
                placeholder="Diz ai seu nome..."
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content />
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/nikhenry2212" />
    </QuizBackground>
  );
}
