# graphql

## 1. graphql 설치방법 및 node js 기본 설정


### 먼저 Node js 기본 설정에 대해 알아보자.

#### Nodemon

> 서버에서 코드를 수정할 때마다, 서버를 재시작해야 한다.
> 하지만 nodemon 을 사용하면 자동으로 재시작해준다.


* * * 
npm install -g nodemon

설치 후 package.json 파일을 수정한다.

"scripts": {
    "start": "nodemon index.js"
  },


Yarn
새로운 자바스크립트 패키지 매니저이다. 
npm 보다 빠르고 안정적이며 보안성이 뛰어나다고 한다(?).

npm install -g yarn


Babel
ES6로 작성한 코드를 변경해 주는 역할을 한다. 
babel-node는 ES6로 작성한 노드 코드를 실행하는 역할을 한다. 

npm install babel-node -g
npm install babel-cli -g

설치 후 package.json 파일을 수정한다.

"scripts": {
    "start": "nodemon --exec babel-node index.js"
  },



Graphql 설치

graphql-yoga는 GraphQL 서버를 실행하는 가장 쉬운 방법이다.
기본 설정이 가능하며 최소한의 설정으로 필요한 모든 것을 포함한다.

npm install graphql-yoga
//yarn add graphql-yoga

설치 후 package.json 파일을 수정한다.

{
  "presets": ["env", "stage-3"]
}

index.js 파일
console.log("Graphql Running!");
// Graphql Running!

서버를 구동하면 Graphql Runing! 을 확인할 수 있다.



2. Graphql 기초편

graphql의 기초적인 부분을 설명하고자 한다.
사람들의 정보를 받을 수 있도록 graphql을 작성해보자.
우선 데이터베이스나 API를 통해 데이터를 받지않고 직접 만들어서 진행했다.


index.js
resolvers.js
db.js


위의 소스코드를 실행하고 http://localhost:4000/ 에 접속한다.
아래와 같은 그림이 나오며, 오른쪽의 스키마 등을 참고하여 실제로 데이터의 속성 등을 쉽게 파악할 수 있다는 장점이 있다.
실제로 graphql을 작성해서 결과를 확인할 수 있다.


id 2를 가진 사람을 찾는 쿼리(name, age만 검색)

# Write your query or mutation here
query {
  person(id:2) {
    name
    age
  }
}


실행 결과

{
  "data": {
    "person": {
      "name": "Lee",
      "age": 26
    }
  }
}


모든 사람들을 검색하는 쿼리(name, age만 검색)

# Write your query or mutation here
query {
  people{
    name
    age
  }
}


실행 결과

{
  "data": {
    "people": [
      {
        "name": "seung2",
        "age": 18
      },
      {
        "name": "Lee",
        "age": 26
      },
      {
        "name": "Koo",
        "age": 22
      },
      {
        "name": "Kim",
        "age": 28
      }
    ]
  }
}
