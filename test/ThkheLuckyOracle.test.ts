import { ethers } from 'hardhat'
const colors = require('colors');
import { expect } from 'chai'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { Contract } from 'ethers';
import { parseEther } from 'ethers/lib/utils';

//available functions
describe("Token contract", async () => {
    let deployer: SignerWithAddress;
    let bob: SignerWithAddress;
    let alice: SignerWithAddress;
    let coinFlip: Contract;

    it("1. Get Signer", async () => {
        const signers = await ethers.getSigners();
        if (signers[0] !== undefined) {
            deployer = signers[0];
            console.log(`${colors.cyan('Deployer Address')}: ${colors.yellow(deployer?.address)}`)
        }
        if (signers[1] !== undefined) {
            bob = signers[1];
            console.log(`${colors.cyan('Bob Address')}: ${colors.yellow(bob?.address)}`)
        }
        if (signers[2] !== undefined) {
            alice = signers[2];
            console.log(`${colors.cyan('Alice Address')}: ${colors.yellow(alice?.address)}`)
        }
    });

    it("2. Deploy CoinFlip", async () => {
        const contractName = "CoinFlip"
        const args = 1692;
        const contractFactory = await ethers.getContractFactory(contractName)
        coinFlip = await contractFactory.deploy(args)
        await coinFlip.deployed()
    });

    it("2. Bet", async () => {
        await coinFlip.flipCoin(true, 0, {
            value: parseEther("0.05"),
        });
        expect(1).to.be.eq(1);
    });
});

