// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import {SweetToken} from "../src/SweetToken.sol";
import {NFTLootBox} from "../src/NFTLootBox.sol";

contract MyScript is Script {
    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("SERVER_PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        // ERC20 토큰 및 NFTLootBox 컨트랙트 배포
        SweetToken sweetToken = new SweetToken("Sweet Token", "SWT");
        NFTLootBox nftLootBox = new NFTLootBox();

        // NFTLootBox 컨트랙트의 setToken 함수 실행하며 앞서 배포한 ERC20 주소를 인자로 넘겨줌
        // 여기서 사용한 0Xf39... 계정 주소는 서버 계정 주소(Anvil 첫번째 계정)이다.
        uint64 nonce = vm.getNonce(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266);
        address swtAddr = computeCreateAddress(
            0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266,
            nonce
        );
        nftLootBox.setToken(swtAddr);

        vm.stopBroadcast();
    }
}
