## .env 설정

### Not necessary

ETHERSCAN_API_KEY=

### anvil URL

LOCAL_RPC_URL=

### anvil에서 서버 계정으로 사용할 계정의 프라이빗키

SERVER_PRIVATE_KEY=

## Quick Start

```bash
$ cd contracts
```

### submodule의 openzeppelin/openzeppelin-contracts 설치

```bash
$ git submodule update --init
```

### ERC-20, ERC-721 배포

```bash
$ source .env
$ forge script script/Deploy.s.sol:MyScript --fork-url $LOCAL_RPC_URL --broadcast -vvvv
```
