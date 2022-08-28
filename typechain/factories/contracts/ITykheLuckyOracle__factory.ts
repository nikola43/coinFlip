/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ITykheLuckyOracle,
  ITykheLuckyOracleInterface,
} from "../../contracts/ITykheLuckyOracle";

const _abi = [
  {
    inputs: [],
    name: "askOracle",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ITykheLuckyOracle__factory {
  static readonly abi = _abi;
  static createInterface(): ITykheLuckyOracleInterface {
    return new utils.Interface(_abi) as ITykheLuckyOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITykheLuckyOracle {
    return new Contract(address, _abi, signerOrProvider) as ITykheLuckyOracle;
  }
}