// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import {SweetToken} from "../src/SweetToken.sol";
import {NFTLootBox} from "../src/NFTLootBox.sol";

contract MyScript is Script {
    function setUp() public {}

    function run() public {
        // uint256 deployerPrivateKey = vm.envUint("SERVER_PRIVATE_KEY");
        uint256 deployerPrivateKey = 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80;

        vm.startBroadcast(deployerPrivateKey);

        // ERC20 토큰 및 NFTLootBox 컨트랙트 배포
        SweetToken sweetToken = new SweetToken("Sweet Token", "SWT");
        NFTLootBox nftLootBox = new NFTLootBox();

        // NFTLootBox 컨트랙트의 setToken 함수 실행하며 앞서 배포한 ERC20 주소를 인자로 넘겨줌
        // 여기서 사용한 0Xf39... 계정 주소는 서버 계정 주소(Anvil 첫번째 계정)이다.
        // uint64 nonce = vm.getNonce(0xAdeb833eee668e50761B4BC8b3Ef476Dc2C86946);
        // address swtAddr = computeCreateAddress(
        //     0xAdeb833eee668e50761B4BC8b3Ef476Dc2C86946,
        //     nonce
        // );
        // nftLootBox.setToken(swtAddr);

        vm.stopBroadcast();
    }
}
