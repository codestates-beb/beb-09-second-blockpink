# beb-09-second-02

## 팀명

### BlockPink

## 팀 구성 및 역할

- 박찬우(팀장)

  잡부(백엔드, 컨트랙트, 프론트엔드)

  - 컨트랙트 배포

    - ERC20
    - ERC721URIStorage - NFTLootBox 형태, 지정한 ERC 20 토큰의 특정 양으로 구매가능

  - API Docs 작성
  - API 구현

    - users.js - 특정 유저의 정보 조회
    - posts.js - 게시글 조회, 게시글 작성, 게시글 삭제, 게시글 수정
    - fildUpload.js - 로컬에 파일 저장, ipfs에 이미지 파일 pinning 및 ipfsHash 가져오기
    - nft.js - NFTLootBox 로 NFT 민팅

  - 클라이언트 API 연동

    - 회원가입, 로그인, 게시글 조회, 유저 정보 조회, eth-faucet 요청, 게시글 포스팅, nft 민팅

  - 클라이언트 유저 정보 관리(react Context hook, localStorage 사용)

  - 프로젝트 진행 과정 매니징

<br>

- 금윤수

  백엔드

  - Schema & API Docs 작성
  - Server 구축, DB 연결 등 초기 환경 세팅
  - API 구현(init.js ,join.js, auth.js, ethFaucet.js, sendToken.js)
  - Daemon.js(트랜잭션 실시간 모니터링) 구현
  - BackEnd Architecture 작성, Contracts,Server,Client README Files 정리

<br>

- 유채원

  프론드엔드(Sign In, Login, Create NFT, MyPage, Header Logout 초기 구현), Flow Chart 작성

<br>

- 한재경

  프론트엔드

  - Wireframe 작성
  - Herder, Footer, Sidebar.. 등 전체적인 홈페이지 UI&UX DESIGN
  - Spinner, Notfound 페이지 구현

<br>

## Quick Start

Follow these steps to get started:

### 1. **Installing the foundry and running anvil**:

**foundry**

```bash
$ curl -L https://foundry.paradigm.xyz
$ foundryup
```

**anvil**

```bash
$ anvil
```

### 2. **Contract Deployment**: Deploy the contracts by following the instructions in the [contracts/README.md](./contracts/README.md) file.

### 3. **Server Execution**: Start the server by following the instructions in the [server/README.md](./server/README.md) file.

### 4. **Client Execution**: Run the client application by following the instructions in the [client/README.md](./client/README.md) file.

<br>

## 프로젝트 소개

### 백엔드 아키텍처

![스크린샷 2023-07-12 오후 2 11 31](https://github.com/codestates-beb/beb-09-second-blockpink/assets/82312931/20db29b6-2158-44fb-91ea-bab48c00d894)

### 프론트엔드 플로우차트

![Screen Shot 2023-07-12 at 10 51 18 AM](https://github.com/codestates-beb/beb-09-second-blockpink/assets/9794836/f2363244-6a03-449b-bb3c-123ac4d3b490)

## 기술 스택

### Contracts

Foundry - 컨트랙트 배포(`forge`) 및 로컬 블록체인 노드 운영(`anvil`)

### Backend

Express.js - 서버 구축

MySQL - DB 구축

Sequelize - ORM 이용

Multer - 파일을 다루기 위한 Node.js 미들웨어

### Frontend

React

Material UI(MUI) - CSS 라이브러리

## 프로젝트 기간

2023년 7월 3일 ~ 2023년 7월 13일

# Page View

## 🖥️ 메인페이지

![메인화면](https://github.com/codestates-beb/beb-09-second-blockpink/assets/126448531/a2a973a3-1f5d-4af7-af58-e09b01d09b75)

## 🖥️ 게시글 상세페이지

![게시글 상세](https://github.com/codestates-beb/beb-09-second-blockpink/assets/126448531/edafcc87-8d5a-4fc8-99f0-a23accca95ba)

## 🖥️ 회원가입후 로그인 페이지 이동

![회원가입후 로그인 페이지 이동](https://github.com/codestates-beb/beb-09-second-blockpink/assets/126448531/55d05154-a06c-4d58-b98c-c5ea4c05ebdd)

## 🖥️ 로그인후 마이페이지 이동

![로그인후 마이페이지 이동](https://github.com/codestates-beb/beb-09-second-blockpink/assets/126448531/ae68de6b-68b1-4d4e-8aaa-d62b866b231e)

## 🖥️ 마이페이지

![마이페이지](https://github.com/codestates-beb/beb-09-second-blockpink/assets/126448531/6c750011-6abd-4c98-b0d0-ebdf920c4739)

## 🖥️ 로그아웃후 로그인 페이지 이동

![로그아웃후 로그인 페이지 이동](https://github.com/codestates-beb/beb-09-second-blockpink/assets/126448531/6666ba32-548e-4f99-b309-05b1de032b3c)

## 🖥️ 오류페이지

<img width="600" height="500" alt="오류페이지" src="https://github.com/codestates-beb/beb-09-second-blockpink/assets/126448531/b5f56500-e771-4460-8073-0084860027f5">

## 🖥️ 게시글 작성페이지

![posting](https://github.com/codestates-beb/beb-09-second-blockpink/assets/96476768/ae8a03d0-f80a-479c-9e90-5ba3279f6732)

## 🖥️ 게시글 삭제 기능

![delete](https://github.com/codestates-beb/beb-09-second-blockpink/assets/96476768/61787c4f-7866-42ff-81e3-73bfedb3b4e8)

## 🖥️ NFT 민팅페이지

![nft minting](https://github.com/codestates-beb/beb-09-second-blockpink/assets/96476768/31f481f2-e758-456f-9534-40a713cd5912)

## 🖥️ ETH Faucet 버튼

![ETH Faucet 버튼](https://github.com/codestates-beb/beb-09-second-blockpink/assets/126448531/2b5d4d05-c2b7-4b3a-8015-c6eb2a062364)

## 🖥️ 로딩화면

![로딩화면](https://github.com/codestates-beb/beb-09-second-blockpink/assets/126448531/5e6db54c-d5c6-402e-a39b-14cf8df24e5c)
