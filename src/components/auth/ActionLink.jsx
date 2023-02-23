import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ActionLink = ({ question, to, text }) => {
  return (
    <S.ActionLink>
      {question} <Link to={to}>{text}</Link>
    </S.ActionLink>
  );
};

const S = {};
S.ActionLink = styled.div`
  font-size: 15px;

  a {
    font-size: 14px;
    color: #777;
  }
`;

export default ActionLink;
