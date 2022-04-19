# Switch Network

Because BitKeep is a multi-chain wallet, all main chains can be managed under one wallet, so DApp can also connect to multiple main chain ecosystems under the current wallet.
There are two ways to switch the main network:

## URL Parameter Switch

Add the parameter `_needChain=Main Chain Coin` to the URL, and the BitKeep browser will automatically insert the corresponding main chain ecological code, such as:

- ETH Network：`https://bitkeep.com?_needChain=eth#/swap`
- BSC Network：`https://bitkeep.com?_needChain=bnb#/swap`
- Heco Network：`https://bitkeep.com?_needChain=ht#/swap`

To use this, the page need to be refreshed.

## Function Call

use `wallet_switchEthereumChain/wallet_addEthereumChain`

BitKeep has integrated the above two methods of Metamask, and you can switch between ETH and EVM networks by calling this method;

::: tip
There are two ways to determine whether it is in the BitKeep browser: whether the userAgent contains BitKeep, or window.isBitKeep
:::