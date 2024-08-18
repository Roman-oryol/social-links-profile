import ComponentWrapper from '../wrapper/ComponentWrapper';
import GlobalStyle from './styles';
import Profile from '../prifile/Profile';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ComponentWrapper>
        <main>
          <Profile />
        </main>
      </ComponentWrapper>
    </>
  );
};

export default App;
