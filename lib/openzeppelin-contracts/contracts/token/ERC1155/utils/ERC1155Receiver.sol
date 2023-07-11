// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts v4.4.1 (token/ERC1155/utils/ERC1155Receiver.sol)

pragma solidity ^0.8.19;

import {IERC1155Receiver} from "../IERC1155Receiver.sol";
import {IERC165, ERC165} from "../../../utils/introspection/ERC165.sol";

/**
 * @dev Basic contract implementing the ERC-165 interface for {IERC1155Receiver}.
 *
 * NOTE: This contract does not suffice to receive tokens. See {ERC1155Holder}.
 */
abstract contract ERC1155Receiver is ERC165, IERC1155Receiver {
    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {
        return interfaceId == type(IERC1155Receiver).interfaceId || super.supportsInterface(interfaceId);
    }
}
