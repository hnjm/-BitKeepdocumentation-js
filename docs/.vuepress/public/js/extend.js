window.onload = function () {
  var links = document.querySelectorAll('.nav-link');
  var linkArr = Array.prototype.slice.call(links);
  linkArr.forEach((element) => {
    if (element.href == 'https://bitkeep.com/') {
        element.setAttribute("title",'The Best Decentralized Multi-chain Crypto Wallet')
    }
  });
};
