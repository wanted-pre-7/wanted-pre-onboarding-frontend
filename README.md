# 원티드 프리온보딩 1주차
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/styled component-DB7093?style=flat-square&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=React Router&logoColor=white">   
</br>

## 📚 과제

동료학습을 통해서 팀에서 생각한 원티드 프리온보딩 프론트엔드 [인턴십 선발 과제](https://github.com/walking-sunset/selection-task)의 Best Pratice를 만들고 제출해주세요  
  > Best Practice란 팀원들이 각자의 구현방법을 설명하고 토론했을 때 팀 안에서 이 방법이 가장 효율적이라고 판단되는 것

<br/>  

## 🌟 최종 결과

### [배포 URL](http://wanted-pre-onboarding-frontend-che.s3-website.ap-northeast-2.amazonaws.com/signin)  

<img src="https://user-images.githubusercontent.com/80516736/221163889-f6e55521-5a84-402b-bb25-977f35efd3a1.gif">

</br>

## ❓ 실행 방법

루트 경로에 `.env` 파일 생성 후 백엔드 주소 추가  
(REACT_APP_API_URL=https://pre-onboarding-selection-task.shop/)

```bash
$ npm i
$ npm start
```
<br/>  

## 🔥 과제 수행 방식

1. 협업 Tool 선정
2. 사전에 수행한 과제에 대한 설명을 각자 노션에 공유
3. 작성된 노션과 git을 보며 각자의 구현방법을 설명 및 토론
4. Best Practice 선정 및 폴더 구조 결정
5. 컨벤션 산정
5. 선정된 Best Practice를 모은 뒤 재 토론
6. 최종 결과물 도출

<br/>

## 🔨 협업 Tool

* 노션
  - 각자 과제에 대한 설명 기술
  - 의견공유
  - Convention 결정

* 슬랙
  - 주된 의사소통

<br/>

## 👍 Best Practice

**<a href="https://github.com/wanted-pre-7/wanted-pre-onboarding-frontend/wiki/auth%EC%99%80-todo-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC">1. auth와 todo</a>**   
    논의 : status와 Context 사용  
    결과 : auth에는 Context API를 사용하고 Todo 상태관리시에는 reducx를 사용  
    이유 : 프로젝트 규모가 작아 Status만으로 충분한 듯 보이지만 auth는 전역으로 쓰이기 때문에 Context API가 적합함  
    Todo는 props drilling이 일어나기엔 규모가 작아 Status로 충분해 보임 하지만 reducer를 사용하면 상태를 분리해 재사용성을 높이고 다양한 액션을 가진 todo 상태 간의 관계을 파악하기 쉬움 가독성을 높일 수 있음
    
**<a href="https://github.com/wanted-pre-7/wanted-pre-onboarding-frontend/wiki/%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%97%AC%EB%B6%80%EC%97%90-%EB%94%B0%EB%A5%B8-%EB%A6%AC%EB%8B%A4%EC%9D%B4%EB%A0%89%ED%8A%B8-%EC%B2%98%EB%A6%AC-%EB%B0%A9%EC%8B%9D">2. 로그인 여부에 따른 리다이렉트 처리</a>**    
   논의 : useEffect vs Router  
   결과 : Router를 이용한 리다이렉트 처리  
   이유 : 로직의 간결화, 가독성, 중복코드의 절약, 페이지가 마운트 되기전 리다이렉트 가능

**<a href="https://github.com/wanted-pre-7/wanted-pre-onboarding-frontend/wiki/%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC">3. 유효성 검사</a>**    
   논의 : 유효성 검사 추가 필요성  
   결과 : 유효성 검사 include 사용  
   이유 : 과제의 가이드라인 준수를 위해 유효성 검사는 추가하지 않음 다만 에러 처리 강화 로직 채택 ( 수정 모드 때 변경 사항 없으면 api 요청 하지않음, 로그인 폼 중복 제출 방지, todo 추가 시 공백 제외 1글자 이상일때 추가 등 )

**<a href="https://github.com/wanted-pre-7/wanted-pre-onboarding-frontend/wiki/%EC%8A%A4%ED%83%80%EC%9D%BC%EB%A7%81">4. 스타일링</a>**  
   논의 : 가장 좋은 style  
   결과 : styled-components 사용  
   이유 : 동적으로 사용하기 용이함, 유지보수와 효율성을 높임, 전역 스타일링을 통해 일관적인 스타일 코드 작성 가능

**<a href="https://github.com/wanted-pre-7/wanted-pre-onboarding-frontend/wiki/api">5. api 함수</a>**  
   논의 : axios instance interceptor 사용 유무  
   결과 : axios interceptor 사용 + api 분리  
   이유 : error를 전역으로 관리 가능, api를 분리함으로써 확장성과 가독성을 높임

<br/>

## 👏 convention

### **git Flow**
* branch : 기능별 작업
* main(master) : 최종 배포
<img src="https://user-images.githubusercontent.com/80516736/221170041-8b7d3762-1152-4407-a600-d9fe1e87e08d.png">

### **Commit Message Pre-fix**
- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 내부 문서 추가/수정
- style: 코드 스타일 수정
- refactor: 코드 리팩토링
- test: 테스트 추가/수정
- chore: 빌드 관련 코드 수정

### **prettier**
```
{
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 80,
  "useTabs": false,
  "endOfLine": "lf"
}
```
### **lint**
```
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended"
  ],
  "overrides": [],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {
    "no-param-reassign": "off",
    "import/no-extraneous-dependencies": ["off"],
    "react/jsx-uses-react": ["off"],
    "react/react-in-jsx-scope": ["off"],
    "react/jsx-props-no-spreading": ["warn"],
    "react/function-component-definition": [
      2,
      { "namedComponents": "arrow-function" }
    ],
    "no-shadow": "off",
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "no-unused-vars": "warn",
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        "labelAttributes": ["htmlFor"]
      }
    ],
    "prettier/prettier": ["error", { "endOfLine": "auto" }] 
  }
}
```
<br/>

## ✏️ 회고 및 회의록
[회고](https://www.notion.so/solwork/1-070861fff8d444b1ae9639b392c16314)  
[7팀 과제 수행 회의록](https://solwork.notion.site/cfbf7c8530ab43f29695dcac5923fd1c)   
[git wiki](https://github.com/wanted-pre-7/wanted-pre-onboarding-frontend/wiki)  

<br/>

## 😃 팀원


<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/yujiseok"><img src="https://avatars.githubusercontent.com/u/83855636?v=4" width="100px;" alt=""/><br /><sub><b>유지석(팀장)</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/kimhw7"><img src="https://avatars.githubusercontent.com/u/100066239?v=4" width="100px;" alt=""/><br /><sub><b>김현우</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/Everylisy"><img src="https://avatars.githubusercontent.com/u/60170829?v=4" width="100px;" alt=""/><br /><sub><b>이영우</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/hansejun"><img src="https://avatars.githubusercontent.com/u/86880916?v=4" width="100px;" alt=""/><br /><sub><b>한세준</b></sub></a><br /></td>
     <tr/>
     <td align="center"><a href="https://github.com/cwonho"><img src="https://avatars.githubusercontent.com/u/104820973?v=4" width="100px;" alt=""/><br /><sub><b>정원호</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/sol-pine"><img src="https://avatars.githubusercontent.com/u/105091138?v=4" width="100px;" alt=""/><br /><sub><b>조해솔</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/ilgon0110"><img src="https://avatars.githubusercontent.com/u/82035356?v=4" width="100px;" alt=""/><br /><sub><b>김일곤</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/che-97"><img src="https://avatars.githubusercontent.com/u/80516736?v=4" width="100px;" alt=""/><br /><sub><b>최하은</b></sub></a><br /></td>
     <tr/>
  </tbody>
</table>
