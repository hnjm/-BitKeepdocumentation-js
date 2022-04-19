# How To Connect
This applies to bitkeep, which now supports blockchains, including EVM(Ethereum、BSC、Arbitrum、Polygon、Fantom...), TRON, Solana, Terra Arweave, IOST ...
[Logo](https://github.com/bitkeepwallet/download) 
[Simple demo](https://github.com/bitkeepwallet/download/tree/example)


# Integrate
In order to facilitate special detection, the global object is attached with the ```isBitkeep``` attribute.

<!-- ![Open Bitkeep app browser and scan](../images/connect/isBitkeep.png)(:width='300px' height="300px") -->
<img src='../images/connect/isBitkeep.png' width='300px'/>

If bitkeep is not installed, we recommend that you redirect users to [our website](https://bitkeep.com/download?type=2 )。




## EVM 
Ethereum, Binance Smart Chain, Avalanche-C, Fantom, Polygon, Arbitrum...

[chainlist](https://chainlist.org/) 
[json](https://chainid.network/chains.json)

The test network is not supported for the time being. If there is no mainnet you are looking for, please [Contact us](https://bitkeep.com/about#Contact_us)。 to add it.

#### Introduction 
We provide a [Simple  demo](https://github.com/bitkeepwallet/download/tree/example/example/eth/dapp). You can also refer to [MetaMask Dapp](https://docs.metamask.io/guide/create-dapp.html#project-setup)[MetaMask Dapp demo](https://github.com/BboyAkers/simple-dapp-tutorial). We also support it.


You can also use third-party libraries in conjunction with ```ethereum```, [web3js](https://www.npmjs.com/package/web3)  [ethers](https://www.npmjs.com/package/ethers)... 




#### isInstalled
``` js
    const isBitkeepInstalled = window.ethereum && window.ethereum.isBitkeep
```

#### Provider 
``` js
    window.ethereum 
```

#### eth_requestAccounts(request authorization to connect) 
``` js

    const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
    const account = accounts[0];

    //if used web3
    const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
    const web3 = new Web3(ethereum)
    const [address] = await web3.eth.getAccounts(); // address
    const chainId = await web3.eth.getChainId();  // chainId  

```
#### connected
```js
    window.ethereum.connected
```
#### Event  listeners
used [eventemitter3](https://www.npmjs.com/package/eventemitter3)
```js
    ethereum.removeAllListeners(); 
    ethereum.on("accountsChanged", ([address]) => {
         alert("address changed")
    });
    ethereum.on("chainChanged", async (chainId) => {
          alert("chainid changed")
    });
```

#### sendTransaction(Transfer) 
```js
    const transactionParameters = {
        nonce: '0x00', // ignored by Bitkeep
        gasPrice: '0x09184e72a000', // customizable by user during Bitkeep confirmation.
        gas: '0x2710', // customizable by user during Bitkeep confirmation.
        to: '0x0000000000000000000000000000000000000000', // Required except during contract publications.
        from: ethereum.selectedAddress, // must match user's active address.
        value: '0x00', // Only required to send ether to the recipient from the initiating external account.
        data:
            '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
        chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by Bitkeep.
    };

    // txHash is a hex string
    // As with any RPC call, it may throw an error
    const txHash = await ethereum.request({
    method: 'eth_sendTransaction',
    params: [transactionParameters],
    });

    // if used web3 
    const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
    const web3 = new Web3(ethereum);  
    const result = await web3.eth.sendTransaction({
            from: ethereum.selectedAddress,
            to:"0x0000000000000000000000000000000000000000",
            value: web3.utils.toWei("1", "ether"),
    });

```
#### Using open source libraries
[web3modal](https://github.com/Web3Modal/web3modal)
```js
   import Web3Modal, { connectors } from "web3modal"
   this.web3Modal = new Web3Modal({
        network:'mainnet' ,
        cacheProvider: true,
        providerOptions: {
            "custom-injected": {
                display: {
                logo: "https://cdn.bitkeep.vip/u_b_69b66a00-a046-11ec-a3eb-f758fa002ae8.png",
                name: "BitKeep",
                description: "Connect with the provider in your Browser",
                },
                package: connectors.injected,
                connector: async (ProviderPackage: any, options: any) => {
                const provider = new ProviderPackage(options)
                return provider
            }
        },
    }
    });
```


## Tron
We provide [Simple  demo](https://github.com/bitkeepwallet/download/tree/example/example/tron/dapp) and are compatible with [tronlink dapp](https://developers.tron.network/docs/dapp-integrate-with-tronlink-introduction).



### isInstalled
``` js
    const isBitkeepInstalled = window.tronLink &&  window.isBitkeep
```

#### eth_requestAccounts(request authorization to connect) 
```js
    try{
        await tronLink.request({ method: "tron_requestAccounts" });
        const address = tronWeb.defaultAddress.base58;  
        const balance = await tronWeb.trx.getBalance(address);
    }catch{

    }
```

#### connected
```js
    window.tronWeb.ready
```

#### sendTransaction(Transfer)
```js

    var tronweb = window.tronWeb
    var tx = await tronweb.transactionBuilder.sendTrx('TW8u1VSwbXY7o7H9kC8HmCNTiSXvD69Uiw', 1000000, tronWeb.defaultAddress.base58)
    var signedTx = await tronweb.trx.sign(tx)
    var broastTx = await tronweb.trx.sendRawTransaction(signedTx)
    console.log(broastTx)
    console.log(broastTx.txid)

    //Token
    let decimal = 18
    let Contract = await tronWeb.contract().at("TLa2f6VPqDgRE67v1736s7bJ8Ray5wYjU7") //WIN
    const decimalCall = Contract.decimals || Contract.DECIMALS;
    if (decimalCall) {
        decimal = await decimalCall().call()
    }
    let broastTx = await Contract.transfer(
        "TW8u1VSwbXY7o7H9kC8HmCNTiSXvD69Uiw", 
        // "0xde0b6b3a7640000"
        tronWeb.toHex(2 * Math.pow(10, decimal))
    ).send(
        // {
        //     feeLimit: 10000000
        // }
    )
    console.log(broastTx)
```


## solana
We provide a [Simple  demo](https://github.com/bitkeepwallet/download/tree/example/example/solana/dapp), and you can also refer to [solana-web3](https://solana-labs.github.io/solana-web3.js/)

#### IsInstalled
``` js
    const isBitkeepInstalled = window.solana && window.isBitkeep
```

#### Provider 
``` js
    window.solana
```

#### connect(request authorization to connect)
``` js 
    try{
        await window.solana.connect();
        const publicKey = await window.solana.getAccount()
        window.solana.publicKey.toString()  // Once the web application is connected to Bitkeep, 
    }catch{
        alert("connected error")
    }

```
#### connected
```js
    window.solana.connected
    const publicKey = await window.solana.getAccount() 
    window.solana.publicKey.toString() // Once the web application is connected to Bitkeep
```

#### Event listeners
used [eventemitter3](https://www.npmjs.com/package/eventemitter3)
```js
    window.solana.on("connect", () => console.log("connected!"))  
```

#### sendTransaction 
You can refer to the following demo :
[simple demo](https://github.com/bitkeepwallet/download/blob/example/example/solana/dapp/index.html) 
[web3 demo](https://github.com/solana-labs/solana/tree/master/web3.js/examples) 
[Token demo](https://github.com/solana-labs/solana-program-library/tree/master/token/js/examples)


## Terra
You can refer to the following [simple demo](https://github.com/terra-money/wallet-provider/tree/main/templates) 

## WalletConnect 
#### EVM(WebApp) 
We also support [WalletConnect](https://docs.walletconnect.com/quick-start/dapps/client). Please refer to walletconnect documentation for details. Similarly, we provide a [simple demo](https://github.com/bitkeepwallet/download/tree/example/example/walletConnect)

    npm install --save @walletconnect/client @walletconnect/qrcode-modal
```js
    import WalletConnect from "@walletconnect/client";
    import QRCodeModal from "@walletconnect/qrcode-modal";

    // Create a connector
    const connector = new WalletConnect({
        bridge: "https://bridge.walletconnect.org", // Required
        qrcodeModal: QRCodeModal,
    });

    // Check if connection is already established
    if (!connector.connected) {
        // create new session
        connector.createSession();
    }

    // Subscribe to connection events
    connector.on("connect", (error, payload) => {
        if (error) {
            throw error;
        }

        // Get provided accounts and chainId
        const { accounts, chainId } = payload.params[0];
    });

    connector.on("session_update", (error, payload) => {
        if (error) {
            throw error;
        }

        // Get updated accounts and chainId
        const { accounts, chainId } = payload.params[0];
     });

    connector.on("disconnect", (error, payload) => {
        if (error) {
            throw error;
        }

    // Delete connector
    });
```

#### EVM(Native App SDK)
Please refer to the  [WalletConnect Doc](https://docs.walletconnect.com/quick-start)  and follow to find the docking documentation of your current program



## Used Open source code

[web3modal](https://github.com/Web3Modal/web3modal)

[sushiswap-interface/pulls](https://github.com/sushiswap/sushiswap-interface/pulls)

If you use open source code and need us to support push open source code, please [Contact us](https://bitkeep.com/about#Contact_us)。











