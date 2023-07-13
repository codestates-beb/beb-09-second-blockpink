## .env 설정

### 없어도 무방

SEPOLIA_RPC_URL=

ETHERSCAN_API_KEY=

### anvil URL

LOCAL_RPC_URL=

### anvil에서 서버 계정으로 사용할 계정의 프라이빗키

SERVER_PRIVATE_KEY=

## ERC-20, ERC721 배포 방법

openzeppelin 설치 및 ERC-20, ERC721 배포

```bash
$ git submodule update --init
```

```bash
$ source .env
$ forge script script/Deploy.s.sol:MyScript --fork-url $LOCAL_RPC_URL --broadcast -vvvv
```
