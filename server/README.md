## .env 설정

DB

DATABASE_USERNAME=<br>
DATABASE_PASSWORD=<br>
DATABASE_NAME=

JWT 인증

ACCESS_SECRET=

Eth를 보내 줄 Anvil 계정

FAUCET_SECRET=<br>
FAUCET_ADDRESS=

서버 계정 정보

SERVER_ADDRESS=<br>
SERVER_SECRET=

배포한 컨트랙트

ERC721_CONTRACT=<br>
ERC20_CONTRACT=<br>


## 실행 방법

패키지 설치<br>

```bash
$ npm install
```

데이터베이스 세팅<br>

```bash
$ npx sequelize db:create
$ npx sequelize db:migrate
```

서버 실행<br>

```bash
$ npm run start
```

서버 실행 (nodemon)<br>

```bash
$ npm run start:dev
```

Daemon(트랜잭션 모니터링) 실행

```bash
$ npm run daemon
```


## 서버 초기 설정


post 요청 : /init 로 서버 계정 anvil로부터 가져오기<br>
