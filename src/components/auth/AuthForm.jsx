import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { signIn, signUp } from '../../api/auth';
import { AUTH_DESCRIPTION } from '../../constant/formDescription';
import { authContext, AUTH_ACTION } from '../../context/AuthProvider';
import Button from '../common/Button';
import ActionLink from './ActionLink';
import LabelInput from './LabelInput';

const AuthForm = ({
  mode,
  formError,
  handleSubmit,
  handleFocus,
  formUser,
  setFormUser,
  isValidButton,
}) => {
  const {
    EMAIL_PLACEHOLDER,
    PASSWORD_PLACEHOLDER,
    BUTTON_TEXT,
    ACTION_TEXT,
    QUESTION,
    ACTION_LINK,
  } = AUTH_DESCRIPTION[mode];

  return (
    <form onSubmit={handleSubmit}>
      <S.InputWrapper>
        <LabelInput
          type="text"
          id="email"
          label="이메일"
          placeholder={EMAIL_PLACEHOLDER}
          formUser={formUser}
          setFormUser={setFormUser}
          handleFocus={handleFocus}
        />
        {formError.email ? (
          <S.ErrorMessage>@를 포함한 이메일을 입력하세요.</S.ErrorMessage>
        ) : null}

        <LabelInput
          type="password"
          id="password"
          label="비밀번호"
          placeholder={PASSWORD_PLACEHOLDER}
          formUser={formUser}
          setFormUser={setFormUser}
          handleFocus={handleFocus}
        />
        {formError.password ? (
          <S.ErrorMessage>8자 이상의 비밀번호를 입력하세요.</S.ErrorMessage>
        ) : null}
      </S.InputWrapper>
      <S.ActionWrapper>
        <Button
          type="submit"
          disabled={isValidButton}
          data-testid={`${mode}-button`}
        >
          {BUTTON_TEXT}
        </Button>
        <ActionLink question={QUESTION} to={ACTION_LINK} text={ACTION_TEXT} />
      </S.ActionWrapper>
    </form>
  );
};

const S = {};
S.InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

S.ActionWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
  align-items: center;
`;

S.ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 14px;
`;

export default AuthForm;
