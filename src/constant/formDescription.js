// 읽기 전용 객체로 만들어주는 함수
const deepFreeze = (targetObj) => {
  Object.keys(targetObj).forEach((key) => {
    if (typeof key === 'object') {
      deepFreeze(targetObj[key]);
    }
  });
  return Object.freeze(targetObj);
};
export const AUTH_DESCRIPTION = deepFreeze({
  '/signin': {
    EMAIL_PLACEHOLDER: '이메일을 입력하세요.',
    PASSWORD_PLACEHOLDER: '비밀번호를 입력하세요.',
    BUTTON_TEXT: '로그인',
    ACTION_TEXT: '회원가입',
    QUESTION: '계정이 없으신가요?',
    ACTION_LINK: '/signup',
  },
  '/signup': {
    EMAIL_PLACEHOLDER: '@를 포함한 이메일을 입력하세요.',
    PASSWORD_PLACEHOLDER: '8자 이상 입력하세요.',
    BUTTON_TEXT: '회원가입',
    ACTION_TEXT: '로그인',
    QUESTION: '계정이 이미 있으신가요?',
    ACTION_LINK: '/signin',
  },
});
