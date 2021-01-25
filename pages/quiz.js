import styled from 'styled-components';
import Link from 'next/link';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';


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

function Quiz() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
        <Widget.Header>
              <h1>QUIZ</h1>
            </Widget.Header>
            <Widget.Content>
            <Link href="/">
                <a>Consegui</a>
            </Link>
          </Widget.Content>
        </Widget>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/nikhenry2212"/>
    </QuizBackground>
    
  )
}
export default Quiz;
