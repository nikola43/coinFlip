import { ethers } from 'hardhat'
const colors = require('colors/safe');
const test_util = require('./util');

async function main() {
    const [deployer] = await ethers.getSigners()
    if (deployer === undefined) throw new Error('Deployer is undefined.')
    console.log(colors.cyan('Deployer Address: ') + colors.yellow(deployer.address));
    console.log();
    console.log(colors.yellow('Deploying...'));
    console.log();
    const contractName = "VRFv2Consumer"
    const contractFactory = await ethers.getContractFactory(contractName)
    const contractDeployed = await contractFactory.deploy()
    await contractDeployed.deployed()

    console.log(
        `${colors.cyan(contractName + " Address: ")} ${colors.yellow(
            contractDeployed.address
        )}`
    );

    await test_util.updateABI(contractName)
    await test_util.verify(contractDeployed.address, contractName)
}

main()
    .then(async () => {
        console.log("Done")
    })
    .catch(error => {
        console.error(error);
        return undefined;
    })