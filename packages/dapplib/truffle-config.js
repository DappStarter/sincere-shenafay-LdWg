require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note soap arrow hover arctic obscure velvet'; 
let testAccounts = [
"0xf03991cae53fd52f097178edd26377eeda7fd11442775a868a4c73aa79ed7235",
"0xd7a6e760079f90c0c21e1f8b7d9d2720086a53a603821f741c19ff54fe04fa04",
"0xfb2870f7f0c6a94ce671ac32f2f95426ada1471707c3bc145df0ab0cad1c07c4",
"0xa8541ab4210eee5133e387842743cfe1eebf309928358fd4f608ffa17fdd668b",
"0x3d0feb7359346ae999d9560c7fddd8e2d4b27801195c460a05598e7ffbfa9957",
"0x868e9c35027fc8a5380c2ae595cd35c0d6cadde2bcad840eb6d1a36b787231de",
"0x82778496c3b45d16527785f2632fb04279e588912acb504078a0ab90e0b349f1",
"0xeb72489687d4773ce413c29f5995834569d5b99e174446459c47ea05146bfb51",
"0x5e4ce86acd229974aa830ef5015ed86174f6aa513bba9fa8c8ad503601b52368",
"0x1f55e22c84b36579ebf7b6ce598630d8f9c5b53c6d72cc16ce00db46c49230fc"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

