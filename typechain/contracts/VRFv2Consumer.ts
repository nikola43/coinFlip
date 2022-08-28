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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface VRFv2ConsumerInterface extends utils.Interface {
  functions: {
    "addConsumer(address)": FunctionFragment;
    "cancelSubscription(address)": FunctionFragment;
    "fundAndRequestRandomWords(uint256)": FunctionFragment;
    "rawFulfillRandomWords(uint256,uint256[])": FunctionFragment;
    "removeConsumer(address)": FunctionFragment;
    "requestRandomWords()": FunctionFragment;
    "s_randomWords(uint256)": FunctionFragment;
    "s_requestId()": FunctionFragment;
    "topUpSubscription(uint256)": FunctionFragment;
    "withdraw(uint256,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addConsumer"
      | "cancelSubscription"
      | "fundAndRequestRandomWords"
      | "rawFulfillRandomWords"
      | "removeConsumer"
      | "requestRandomWords"
      | "s_randomWords"
      | "s_requestId"
      | "topUpSubscription"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addConsumer",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelSubscription",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "fundAndRequestRandomWords",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "rawFulfillRandomWords",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>[]]
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
    functionFragment: "topUpSubscription",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "addConsumer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelSubscription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fundAndRequestRandomWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rawFulfillRandomWords",
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
    functionFragment: "topUpSubscription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {};
}

export interface VRFv2Consumer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VRFv2ConsumerInterface;

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

    cancelSubscription(
      receivingWallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fundAndRequestRandomWords(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    rawFulfillRandomWords(
      requestId: PromiseOrValue<BigNumberish>,
      randomWords: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

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

    topUpSubscription(
      amount: PromiseOrValue<BigNumberish>,
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

  cancelSubscription(
    receivingWallet: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fundAndRequestRandomWords(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  rawFulfillRandomWords(
    requestId: PromiseOrValue<BigNumberish>,
    randomWords: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

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

  topUpSubscription(
    amount: PromiseOrValue<BigNumberish>,
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

    cancelSubscription(
      receivingWallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    fundAndRequestRandomWords(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    rawFulfillRandomWords(
      requestId: PromiseOrValue<BigNumberish>,
      randomWords: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

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

    topUpSubscription(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addConsumer(
      consumerAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cancelSubscription(
      receivingWallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fundAndRequestRandomWords(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    rawFulfillRandomWords(
      requestId: PromiseOrValue<BigNumberish>,
      randomWords: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

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

    topUpSubscription(
      amount: PromiseOrValue<BigNumberish>,
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

    cancelSubscription(
      receivingWallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fundAndRequestRandomWords(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    rawFulfillRandomWords(
      requestId: PromiseOrValue<BigNumberish>,
      randomWords: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
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

    topUpSubscription(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
