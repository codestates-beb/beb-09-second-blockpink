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

### pinata access key

JWT=

API_KEY=

API_KEY_SECRET=

## Quick Start

### 패키지 설치

```bash
$ cd server
$ npm install
```

### 데이터베이스 세팅

```bash
$ npx sequelize db:create
$ npx sequelize db:migrate
```

### 이미지 파일 업로드 될 폴더 생성

```bash
$ mkdir uploads
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

## 서버 초기 설정

post 요청 : /init 로 서버 계정 anvil로부터 가져오기
