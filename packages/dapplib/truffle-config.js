require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remain method idea area obscure genuine'; 
let testAccounts = [
"0x04694dff0137a8a5a441839b727894e3a0c235478ec73f239c66b8df5e711e38",
"0x3babbaab8fba62604d862b3cf8adef5c919986e6258b20c47bd44abbef269d7a",
"0xb805ec3f4f379c4360958006d3978ac3e23631d48c11d5a8ac15d5c9b584b909",
"0x8df5e1885b3c69c88b21d617fda4f216885d1a9031796d0eec6be8c245da9542",
"0x6917a4320ba2b81a674ba4b8bef76b32351c5b979037e70faa126294e29e9dc3",
"0xb85c02596d7fb5999e1b261fc1dde3e6159b7fe26de0395911401c15266aef25",
"0x955fa869213e08a7999957d06e005ba993940da416ccf7cb647bd5f05af9f01f",
"0x21d4575614dc9424cf8a450e10b70dd63991e85feaee5c8badbe59c5caa995bd",
"0xfa7ff4390c000d27d56eac834827d5a81a8d9b88d73440aa29e39d83b4a70ff1",
"0x1fa2f9df47b307e3a9d45668d3caf752cde9ea1ab7c6335e6907ec7254c214be"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

