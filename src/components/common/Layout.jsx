import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
  return (
    <S.Main>
      <S.Container>
        <Outlet />
      </S.Container>
    </S.Main>
  );
};

const S = {};
S.Main = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
S.Container = styled.div`
  flex: 1;
  max-width: 500px;
  padding: 24px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  margin-inline: 16px;
`;

export default Layout;
