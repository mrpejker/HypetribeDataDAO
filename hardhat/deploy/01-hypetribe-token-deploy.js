require("hardhat-deploy")
require("hardhat-deploy-ethers")


const private_key = network.config.accounts[0]
const wallet = new ethers.Wallet(private_key, ethers.provider)

module.exports = async ({ deployments }) => {
    const { deploy } = deployments;

    const  HypetribeTKN= await deploy("HypetribeTKN", {
        from: wallet.address,
        args: [],
        log: true,
    });
}