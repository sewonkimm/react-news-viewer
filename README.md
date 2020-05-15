# react-news-viewer

react로 외부 API와 연동하여 news viewer 만들기

### 🚩학습 목표

- 비동기 작업 이해하기
- axios로 API 호출해서 데이터 받아오기
- newsapi API 키 발급 받기
- UI 만들기
- 데이터 연동하기
- 카테고리 기능 구현하기
- 리액트 라우터 적용하기

### 🍱정리

- API 연동하는 법(Promise)
- useEffect에 등록하는 함수는 async로 작성하면 안된다. useEffect에서 반환해야 하는 값은 콜백함수이기 때문! 따라서 함수 내부에 async 함수를 따로 만들어 줄 것!
- 커스텀 Hook으로 Promise를 사용하는 코드를 간결하게 만들어 줄 수 있다.
