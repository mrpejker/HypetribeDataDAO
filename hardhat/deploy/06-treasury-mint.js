require("hardhat-deploy")
require("hardhat-deploy-ethers")


const private_key = network.config.accounts[0]
const wallet = new ethers.Wallet(private_key, ethers.provider)

module.exports = async ({ deployments }) => {
    const { get } = deployments;

    const HypetribeTKN = await get("HypetribeTKN")
    const timeLock = await get("TimeLock")

    const HypetribeTKNContract = await ethers.getContractAt("HypetribeTKN", HypetribeTKN.address)


    const transferToTimelock = async () => {
        let amountToTransfer = ethers.utils.parseUnits("900000", 18);
        console.log(`Transferring 900,000 tokens to TimeLock Treasury`);
        let tx = await HypetribeTKNContract.transfer(timeLock.address, amountToTransfer);
    }
    
    //Define function to delegate to deployer wallet
    const delegate = async (
        HypetribeTKNAddress,
        delegatedAccount
    ) => {
        const HypetribeTKN = await ethers.getContractAt(
            "HypetribeTKN",
            HypetribeTKNAddress
        );
        delegateTx = await HypetribeTKN.delegate(delegatedAccount);
        await delegateTx.wait();
        console.log(
            `Checkpoints ${await HypetribeTKN.numCheckpoints(delegatedAccount)}`
        );
    }
    
    //Call delegate function below
    await transferToTimelock();
    console.log("HypetribeTKN has been transferred to the treasury!")
    await delegate(biscuitToken.address, wallet.address);
    console.log("HypetribeTKN has been delegated to deployer wallet!")
}