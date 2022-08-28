/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface TykheLuckyOracleInterface extends utils.Interface {
  functions: {
    "addConsumer(address)": FunctionFragment;
    "askOracle()": FunctionFragment;
    "cancelSubscription(address)": FunctionFragment;
    "getLinkBalance()": FunctionFragment;
    "getSubscriptionDetails()": FunctionFragment;
    "initialize(address,address,bytes32,uint64)": FunctionFragment;
    "pendingRequestExists()": FunctionFragment;
    "removeConsumer(address)": FunctionFragment;
    "requestRandomWords()": FunctionFragment;
    "s_randomWords(uint256)": FunctionFragment;
    "s_requestId()": FunctionFragment;
    "s_subscriptionId()": FunctionFragment;
    "topUpSubscription(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdraw(uint256,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addConsumer"
      | "askOracle"
      | "cancelSubscription"
      | "getLinkBalance"
      | "getSubscriptionDetails"
      | "initialize"
      | "pendingRequestExists"
      | "removeConsumer"
      | "requestRandomWords"
      | "s_randomWords"
      | "s_requestId"
      | "s_subscriptionId"
      | "topUpSubscription"
      | "transferOwnership"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addConsumer",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "askOracle", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "cancelSubscription",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getLinkBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSubscriptionDetails",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingRequestExists",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeConsumer",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "requestRandomWords",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "s_randomWords",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "s_requestId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "s_subscriptionId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "topUpSubscription",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "addConsumer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "askOracle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelSubscription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLinkBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSubscriptionDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingRequestExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeConsumer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestRandomWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "s_randomWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "s_requestId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "s_subscriptionId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "topUpSubscription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface TykheLuckyOracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TykheLuckyOracleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addConsumer(
      consumerAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    askOracle(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    cancelSubscription(
      receivingWallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getLinkBalance(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    getSubscriptionDetails(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, string[]] & {
        balance: BigNumber;
        reqCount: BigNumber;
        owner: string;
        consumers: string[];
      }
    >;

    initialize(
      _vrfCoordinator: PromiseOrValue<string>,
      _link_token_contract: PromiseOrValue<string>,
      _keyHash: PromiseOrValue<BytesLike>,
      subscriptionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    pendingRequestExists(overrides?: CallOverrides): Promise<[boolean]>;

    removeConsumer(
      consumerAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    requestRandomWords(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    s_randomWords(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    s_requestId(overrides?: CallOverrides): Promise<[BigNumber]>;

    s_subscriptionId(overrides?: CallOverrides): Promise<[BigNumber]>;

    topUpSubscription(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addConsumer(
    consumerAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  askOracle(overrides?: CallOverrides): Promise<BigNumber[]>;

  cancelSubscription(
    receivingWallet: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getLinkBalance(overrides?: CallOverrides): Promise<BigNumber>;

  getSubscriptionDetails(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string, string[]] & {
      balance: BigNumber;
      reqCount: BigNumber;
      owner: string;
      consumers: string[];
    }
  >;

  initialize(
    _vrfCoordinator: PromiseOrValue<string>,
    _link_token_contract: PromiseOrValue<string>,
    _keyHash: PromiseOrValue<BytesLike>,
    subscriptionId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  pendingRequestExists(overrides?: CallOverrides): Promise<boolean>;

  removeConsumer(
    consumerAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  requestRandomWords(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  s_randomWords(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  s_requestId(overrides?: CallOverrides): Promise<BigNumber>;

  s_subscriptionId(overrides?: CallOverrides): Promise<BigNumber>;

  topUpSubscription(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    amount: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addConsumer(
      consumerAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    askOracle(overrides?: CallOverrides): Promise<BigNumber[]>;

    cancelSubscription(
      receivingWallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getLinkBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getSubscriptionDetails(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, string[]] & {
        balance: BigNumber;
        reqCount: BigNumber;
        owner: string;
        consumers: string[];
      }
    >;

    initialize(
      _vrfCoordinator: PromiseOrValue<string>,
      _link_token_contract: PromiseOrValue<string>,
      _keyHash: PromiseOrValue<BytesLike>,
      subscriptionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    pendingRequestExists(overrides?: CallOverrides): Promise<boolean>;

    removeConsumer(
      consumerAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    requestRandomWords(overrides?: CallOverrides): Promise<void>;

    s_randomWords(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    s_requestId(overrides?: CallOverrides): Promise<BigNumber>;

    s_subscriptionId(overrides?: CallOverrides): Promise<BigNumber>;

    topUpSubscription(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    addConsumer(
      consumerAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    askOracle(overrides?: CallOverrides): Promise<BigNumber>;

    cancelSubscription(
      receivingWallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getLinkBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getSubscriptionDetails(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _vrfCoordinator: PromiseOrValue<string>,
      _link_token_contract: PromiseOrValue<string>,
      _keyHash: PromiseOrValue<BytesLike>,
      subscriptionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    pendingRequestExists(overrides?: CallOverrides): Promise<BigNumber>;

    removeConsumer(
      consumerAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    requestRandomWords(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    s_randomWords(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    s_requestId(overrides?: CallOverrides): Promise<BigNumber>;

    s_subscriptionId(overrides?: CallOverrides): Promise<BigNumber>;

    topUpSubscription(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addConsumer(
      consumerAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    askOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cancelSubscription(
      receivingWallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getLinkBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSubscriptionDetails(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _vrfCoordinator: PromiseOrValue<string>,
      _link_token_contract: PromiseOrValue<string>,
      _keyHash: PromiseOrValue<BytesLike>,
      subscriptionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    pendingRequestExists(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeConsumer(
      consumerAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    requestRandomWords(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    s_randomWords(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    s_requestId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    s_subscriptionId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    topUpSubscription(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
