// const PancakeFactoryV2 = artifacts.require("PancakeFactoryV2");

// let addressFeeSetter = "0x7DB8f5d6fD9BAc3DFa680a76dBB78579F555C77c";

// module.exports = function(deployer) {
//    deployer.deploy(PancakeFactoryV2, addressFeeSetter);
// };

const PancakeRouterV2 = artifacts.require("PancakeRouterV2");

let weth = "0xc778417e063141139fce010982780140aa0cd5ab";
let factory = "0x3ba577F0159034816C9a7004789ECf4531b9cD1B";

module.exports = function(deployer) {
    deployer.deploy(PancakeRouterV2, factory, weth);
};
