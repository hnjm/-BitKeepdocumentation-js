# Connect Wallet

BitKeep supports common schemes to connect, such as Metamask / TronWeb, etc. Therefore, developers do not need to do additional compatibility. BitKeep supports universal wallet connection by default.

## EVM(Ethereum) Connect

The Metamask protocol is a universal wallet connection scheme for Ethereum or EVM chains. BitKeep complies with the Metamask protocol by default, and will implant `window.ethereum` object in the webview. Developers can directly develop follow [MetaMask Documents](https://docs.metamask.io/guide/ethereum-provider.html) or [Simple demo](https://github.com/bitkeepwallet/download/tree/example/example/eth/dapp)

```javascript
window.ethereum = {
    isBitKeep: true,
    networkId: 1,
    chainId: "0x1",
    rpc: {},
    request: ()=>{},
    send: ()=>{},
    sendAsync: ()=>{}
}
```

::: tip
If the wallet cannot be connected (the `window.ethereum` object cannot be obtained), please delay the initialization time of web3 appropriately.
:::

## Solana Connect

BitKeep webview has built-in Solana object `window.solana`. Developers can directly develop follow [Solona Web3 Documents](https://github.com/solana-labs/solana-web3.js) or [Simple demo](https://github.com/bitkeepwallet/download/tree/example/example/solana/dapp)

```javascript
window.solana = {
    isBitKeep: true,
    connected: true,
    autoApprove: false,
    publicKey: "8RwVBVHoEdfnob4doYnrNJeEsCjptBtX6Ut1Cb2TFSm5",
    connect: ()=>{},
    disconnect: ()=>{}.
    on: (event, callback)=>{},
    async signTransaction: (transaction)=>{
    	//the "transaction" argument is Transaction from "@solana/web3.js"
        //return signed transaction.
    }
}
```

## Tron Connect

BitKeep browser has built-in TronWeb object `window.tronWeb`. You can perform related operations of the TRON chain through tronWeb. Developers can directly develop follow [TronWeb Documents](https://cn.developers.tron.network/reference#tronweb-object) or [Simple demo](https://github.com/bitkeepwallet/download/tree/example/example/tron/dapp)


```javascript
//get address
const address = window.tronWeb.defaultAddress;
//init a contract
const contract = window.tronWeb.contract(ABI, ADDRESS);
//get data from Contract
const result = await contract.myFunction(params1, params2).call();
//send
const tx = await contract.withdraw(params1, params2).send();
````







