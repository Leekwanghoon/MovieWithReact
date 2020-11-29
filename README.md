시연영상 : https://www.youtube.com/watch?v=QdEPMn4Qa2E

주제: 영화 api를 이용하여 React WebPage를 구성

개발환경: vscode, git,
실행방법: yarn run dev, npm run dev

참고사이트
- https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%85%B8%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%98%81%ED%99%94%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0 (JohnAnn 무료강의)
- https://ant.design/  antd (디자인 프레임워크)
- https://ko.reactjs.org/docs/getting-started.html - react document
 


<목차>
1. 무엇을 만들었는가?
- 영화 api를 이용하여 영화에대한 정보를 유저에게 보여주는 사이트를 만들었다
- 시연영상 링크
https://www.youtube.com/watch?v=QdEPMn4Qa2E

2. 어떤 식으로 구성하였는가?
- backend는 nodejs와 mongoDB 디자인은 antd 그리고 frontend는 react 그리고 redux를 이용하여 데이터를 처리하였다

3. 무엇을 배웠는가?
-  api를 이용하여 데이터를 가져오는법
-  redux를 사용하는 이유와 redux를 사용하여 state를 효과적으로 사용하는 방법, 그리고 redux의 흐름
-  mongoDb에 데이터를 넣는 방법과 약간의 mongoDB언어
-  antd Framework를 사용하는방법

4. 고쳐야 할 것은 무엇인가?
-  useState와 같은 Hook함수를 사용하였지만 최적화가 되어있지않음. 이를 Hook component를 만들어 관리에 용이하게 할 예정
-  최적화에 필요한 React.memo, useCallback을 사용할 예정
-  styled-component를 통해 유지보수에 용이하게 만들예정
-  component와 module을 더 작게 쪼개놓아 유지보수에 용이하게 해야함
-  Prop-types와 react-helmet을 추가적으로 도입해야함


11/29

react-helmet 수정함

추가적인 기능
- 출연진에 대한 정보 자세히 조회가능하게 인스타처럼 Overlay효과 구현할 예정
- 렌더링 횟수 줄이는 방법 고안(React.memo and useCallback,)
- 맞춤형 hook만들기 input,form,button 
- styled-components추가하기