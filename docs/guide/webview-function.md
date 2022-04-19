# Webview Method(Mobile)

BitKeep provides some public methods for Dapp to interact with the wallet. you can copy this url to the BitKeep DApp search bar, and try it. 

`http://106.75.67.107:8001/demo.html` 
#### Open Bitkeep app browser and scan
![Open Bitkeep app browser and scan](../images/qrcode.png)

[[toc]]

## isBitKeep

```javascript
// check the UserAgent include "BitKeep"
var isBitKeep = navigator.userAgent.indexOf('BitKeep') > 0;
// check the var
var isBitKeep = window.isBitKeep;
```

## Get Wallet Identity
```javascript
BitKeepInvoke.getIdentity(callback);
```

## Get Address
```javascript
BitKeepInvoke.getAddress(callback);
```

## Select Coin
```javascript
BitKeepInvoke.selectCoin(callback);
```

## Toast
```javascript
BitKeepInvoke.toast("Hello World");
```

## Alert
```javascript
BitKeepInvoke.alert("Hello", callback);
```

## Confirm
```javascript
BitKeepInvoke.confirm("Hello?", callback);
```

## Close Page
```javascript
BitKeepInvoke.close();
```

## Show/Hide Loading
```javascript
BitKeepInvoke.showLoading();
BitKeepInvoke.hideLoading();
```

## Open URL
```javascript
//In APP
BitKeepInvoke.openUrl("https://www.google.com");
//Our Of APP
BitKeepInvoke.openUrl2("https://www.google.com");
```

## Show Text Button in right-top Corner
```javascript
BitKeepInvoke.setTextAction("Text", function(){
    //Click Callback
});
```

## Show Image Button in right-top Corner
```javascript
BitKeepInvoke.setIconAction("http://xxx.png", function(){
    //Click Callback
});
```

## Share Text
```javascript
BitKeepInvoke.shareText("message", callback);
```

## Share Image
```javascript
BitKeepInvoke.shareImage("http://xxx.png", callback);
```

## Share Screenshot
```javascript
BitKeepInvoke.shareScreenshot(callback)
```

## Share URL
```javascript
BitKeepInvoke.shareUrl("title", "description", "url", "icon", callback);
```

## Close Page
```javascript
BitKeepInvoke.close();
```

## Close Page
```javascript
BitKeepInvoke.close();
```

## Transfer
```javascript
BitKeepInvoke.pay(ChainCoin, Params，Callback);

//Chain Coin Transfer
BitKeepInvoke.pay("eth", {
    "coin": "eth",
    "to": "0x.....",
    "amount": "0.1",
    "gas": "400000"
}, function(err, reply){

});

//Token Transfer
BitKeepInvoke.pay("eth", {
    "coin": "uni",
    "contract": "token contract",
    "to": "0x.....",
    "amount": "0.1",
    "gas": "400000"
}, function(err, reply){

});

//Call Contract
BitKeepInvoke.pay("eth", {
    "coin": "uni",
    "to": "token contract",
    "data": "abi data",
    "amount": "0.1",
    "gas": "400000"
}, function(err, reply){

});
```







