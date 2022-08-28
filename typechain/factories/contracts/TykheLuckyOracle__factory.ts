/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  TykheLuckyOracle,
  TykheLuckyOracleInterface,
} from "../../contracts/TykheLuckyOracle";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "consumerAddress",
        type: "address",
      },
    ],
    name: "addConsumer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "askOracle",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receivingWallet",
        type: "address",
      },
    ],
    name: "cancelSubscription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getLinkBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSubscriptionDetails",
    outputs: [
      {
        internalType: "uint96",
        name: "balance",
        type: "uint96",
      },
      {
        internalType: "uint64",
        name: "reqCount",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "consumers",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_vrfCoordinator",
        type: "address",
      },
      {
        internalType: "address",
        name: "_link_token_contract",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_keyHash",
        type: "bytes32",
      },
      {
        internalType: "uint64",
        name: "subscriptionId",
        type: "uint64",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingRequestExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "consumerAddress",
        type: "address",
      },
    ],
    name: "removeConsumer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "requestRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "s_randomWords",
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
  {
    inputs: [],
    name: "s_requestId",
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
  {
    inputs: [],
    name: "s_subscriptionId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "topUpSubscription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610f3b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100c45760003560e01c8062f714ce146100c95780630d5de6df146100de5780630e27e3df146100ff578063112940f91461011257806350c5f9751461012557806386850e931461013b5780638ac000211461014e57806393d81d581461016e578063a3ced7b914610181578063e0c8628914610199578063e89e106a146101a1578063ed6f0792146101aa578063f2fde38b146101bf578063f6eaffc8146101d2578063fa1f390d146101e5575b600080fd5b6100dc6100d7366004610b36565b6101f8565b005b6100e6610292565b6040516100f69493929190610b66565b60405180910390f35b6100dc61010d366004610be4565b61032f565b6100dc610120366004610be4565b6103c6565b61012d610428565b6040519081526020016100f6565b6100dc610149366004610c08565b61049a565b600854610161906001600160401b031681565b6040516100f69190610c21565b6100dc61017c366004610be4565b61056a565b610189610686565b60405190151581526020016100f6565b6100dc61074d565b61012d60075481565b6101b2610827565b6040516100f69190610c35565b6100dc6101cd366004610be4565b61087f565b61012d6101e0366004610c08565b610960565b6100dc6101f3366004610c8e565b610981565b600554600160501b90046001600160a01b0316331461021657600080fd5b60015460405163a9059cbb60e01b81526001600160a01b038381166004830152602482018590529091169063a9059cbb906044016020604051808303816000875af1158015610269573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028d9190610ce1565b505050565b6000805460085460405163523e3b4b60e11b815283928392606092620100009092046001600160a01b03169163a47c7696916102dc916001600160401b0390911690600401610c21565b600060405180830381865afa1580156102f9573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103219190810190610d29565b935093509350935090919293565b600554600160501b90046001600160a01b0316331461034d57600080fd5b600054600854604051639f87fad760e01b8152620100009092046001600160a01b031691639f87fad791610391916001600160401b03909116908590600401610e35565b600060405180830381600087803b1580156103ab57600080fd5b505af11580156103bf573d6000803e3d6000fd5b5050505050565b600554600160501b90046001600160a01b031633146103e457600080fd5b600054600854604051631cd0704360e21b8152620100009092046001600160a01b031691637341c10c91610391916001600160401b03909116908590600401610e35565b6001546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015610471573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104959190610e57565b905090565b600554600160501b90046001600160a01b031633146104b857600080fd5b6001546000546008546040516001600160a01b0393841693634000aea093620100009004169185916104f6916001600160401b031690602001610c21565b6040516020818303038152906040526040518463ffffffff1660e01b815260040161052393929190610ea0565b6020604051808303816000875af1158015610542573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105669190610ce1565b5050565b600554600160501b90046001600160a01b0316331461058857600080fd5b6008546001600160401b03166105fd5760405162461bcd60e51b815260206004820152602f60248201527f4120737562736372697074696f6e20646f6573206e6f7420657869737420666f60448201526e1c881d1a1a5cc818dbdb9d1c9858dd608a1b60648201526084015b60405180910390fd5b600054600854604051630d7ae1d360e41b8152620100009092046001600160a01b03169163d7ae1d3091610641916001600160401b03909116908590600401610e35565b600060405180830381600087803b15801561065b57600080fd5b505af115801561066f573d6000803e3d6000fd5b5050600880546001600160401b0319169055505050565b6000805460085460405183926201000090046001600160a01b0316916106ba916001600160401b0390911690602401610c21565b60408051601f198184030181529181526020820180516001600160e01b0316633a0ab5f560e21b179052516106ef9190610ee9565b600060405180830381855afa9150503d806000811461072a576040519150601f19603f3d011682016040523d82523d6000602084013e61072f565b606091505b50915050808060200190518101906107479190610ce1565b91505090565b600554600160501b90046001600160a01b0316331461076b57600080fd5b600054600480546008546005546040516305d3b1d360e41b8152938401929092526001600160401b03166024830152600160201b810461ffff16604483015263ffffffff8082166064840152600160301b909104166084820152620100009091046001600160a01b031690635d3b1d309060a4016020604051808303816000875af11580156107fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108229190610e57565b600755565b6060600680548060200260200160405190810160405280929190818152602001828054801561087557602002820191906000526020600020905b815481526020019060010190808311610861575b5050505050905090565b600554600160501b90046001600160a01b0316331461089d57600080fd5b6001600160a01b0381166109025760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016105f4565b600580546001600160a01b03838116600160501b818102600160501b600160f01b031985161790945560405193909204169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6006818154811061097057600080fd5b600091825260209091200154905081565b600054610100900460ff16158080156109a15750600054600160ff909116105b806109bb5750303b1580156109bb575060005460ff166001145b610a1e5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016105f4565b6000805460ff191660011790558015610a41576000805461ff0019166101001790555b60058054600280546001600160a01b03199081166001600160a01b038a81169182179093556003805490921692891692909217905560048690556000805462010000600160b01b0319166201000090920291909117905566020003000186a06001600160f01b031990911633600160501b0217179055600880546001600160401b0319166001600160401b03841617905580156103bf576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050505050565b6001600160a01b0381168114610b3357600080fd5b50565b60008060408385031215610b4957600080fd5b823591506020830135610b5b81610b1e565b809150509250929050565b6001600160601b03851681526001600160401b0384166020808301919091526001600160a01b038481166040840152608060608401819052845190840181905260009285810192909160a0860190855b81811015610bd4578551841683529484019491840191600101610bb6565b50909a9950505050505050505050565b600060208284031215610bf657600080fd5b8135610c0181610b1e565b9392505050565b600060208284031215610c1a57600080fd5b5035919050565b6001600160401b0391909116815260200190565b6020808252825182820181905260009190848201906040850190845b81811015610c6d57835183529284019291840191600101610c51565b50909695505050505050565b6001600160401b0381168114610b3357600080fd5b60008060008060808587031215610ca457600080fd5b8435610caf81610b1e565b93506020850135610cbf81610b1e565b9250604085013591506060850135610cd681610c79565b939692955090935050565b600060208284031215610cf357600080fd5b81518015158114610c0157600080fd5b8051610d0e81610b1e565b919050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215610d3f57600080fd5b84516001600160601b0381168114610d5657600080fd5b80945050602080860151610d6981610c79565b6040870151909450610d7a81610b1e565b60608701519093506001600160401b0380821115610d9757600080fd5b818801915088601f830112610dab57600080fd5b815181811115610dbd57610dbd610d13565b8060051b604051601f19603f83011681018181108582111715610de257610de2610d13565b60405291825284820192508381018501918b831115610e0057600080fd5b938501935b82851015610e2557610e1685610d03565b84529385019392850192610e05565b989b979a50959850505050505050565b6001600160401b039290921682526001600160a01b0316602082015260400190565b600060208284031215610e6957600080fd5b5051919050565b60005b83811015610e8b578181015183820152602001610e73565b83811115610e9a576000848401525b50505050565b60018060a01b03841681528260208201526060604082015260008251806060840152610ed3816080850160208701610e70565b601f01601f191691909101608001949350505050565b60008251610efb818460208701610e70565b919091019291505056fea2646970667358221220e7b61f4f6b6a52b69680f2295395d4318414bf73ca4d7549af5b5799d644196a64736f6c634300080f0033";

type TykheLuckyOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TykheLuckyOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TykheLuckyOracle__factory extends ContractFactory {
  constructor(...args: TykheLuckyOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TykheLuckyOracle> {
    return super.deploy(overrides || {}) as Promise<TykheLuckyOracle>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TykheLuckyOracle {
    return super.attach(address) as TykheLuckyOracle;
  }
  override connect(signer: Signer): TykheLuckyOracle__factory {
    return super.connect(signer) as TykheLuckyOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TykheLuckyOracleInterface {
    return new utils.Interface(_abi) as TykheLuckyOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TykheLuckyOracle {
    return new Contract(address, _abi, signerOrProvider) as TykheLuckyOracle;
  }
}
