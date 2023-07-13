## .env 설정

### DB

DATABASE_USERNAME=

DATABASE_PASSWORD=

DATABASE_NAME=

### JWT 인증

ACCESS_SECRET=

### ETH를 보내 줄 Anvil 계정

FAUCET_SECRET=

FAUCET_ADDRESS=

### 서버 계정 정보

SERVER_ADDRESS=

SERVER_SECRET=

### 배포한 컨트랙트

ERC721_CONTRACT=

ERC20_CONTRACT=

## 실행 방법

### 패키지 설치

```bash
$ npm install
```

### 데이터베이스 세팅<br>

```bash
$ npx sequelize db:create
$ npx sequelize db:migrate
```

### 서버 실행

```bash
$ npm run start
```

### 서버 실행 (nodemon; develop 모드)

```bash
$ npm run start:dev
```

### Daemon(트랜잭션 모니터링) 실행

```bash
$ npm run daemon
```

# <<<<<<< HEAD

<br>

> > > > > > > e1dd7620d3782968f544bf39d2008a637e2d9624

## 서버 초기 설정

post 요청 : /init 로 서버 계정 anvil로부터 가져오기
