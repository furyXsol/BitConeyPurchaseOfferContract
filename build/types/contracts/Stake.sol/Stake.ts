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
} from "../../common";

export interface StakeInterface extends utils.Interface {
  functions: {
    "BUSD()": FunctionFragment;
    "USDT()": FunctionFragment;
    "aggregator()": FunctionFragment;
    "bitConey()": FunctionFragment;
    "blockInfo(uint256)": FunctionFragment;
    "createBlock(uint256,uint256,uint256)": FunctionFragment;
    "entranceMulter()": FunctionFragment;
    "getUserListFromBlock(uint256)": FunctionFragment;
    "invest(uint256,address,uint256)": FunctionFragment;
    "manager()": FunctionFragment;
    "maxDepositMulter()": FunctionFragment;
    "maxPooledAmountMulter()": FunctionFragment;
    "owner()": FunctionFragment;
    "priceDecimal()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "router()": FunctionFragment;
    "setEntranceMulter(uint256)": FunctionFragment;
    "setLockTimeforReward(uint256)": FunctionFragment;
    "setManager(address)": FunctionFragment;
    "setMaxDepositMulter(uint256)": FunctionFragment;
    "setMaxPooledAmountMulter(uint256)": FunctionFragment;
    "setTreasury(address)": FunctionFragment;
    "setValidTimeforNewBlock(uint256)": FunctionFragment;
    "stakeInfo(uint256,address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "treasury()": FunctionFragment;
    "widthdraw(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "BUSD"
      | "USDT"
      | "aggregator"
      | "bitConey"
      | "blockInfo"
      | "createBlock"
      | "entranceMulter"
      | "getUserListFromBlock"
      | "invest"
      | "manager"
      | "maxDepositMulter"
      | "maxPooledAmountMulter"
      | "owner"
      | "priceDecimal"
      | "renounceOwnership"
      | "router"
      | "setEntranceMulter"
      | "setLockTimeforReward"
      | "setManager"
      | "setMaxDepositMulter"
      | "setMaxPooledAmountMulter"
      | "setTreasury"
      | "setValidTimeforNewBlock"
      | "stakeInfo"
      | "transferOwnership"
      | "treasury"
      | "widthdraw"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "BUSD", values?: undefined): string;
  encodeFunctionData(functionFragment: "USDT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "aggregator",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "bitConey", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "blockInfo",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "createBlock",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "entranceMulter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUserListFromBlock",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "invest",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "manager", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "maxDepositMulter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxPooledAmountMulter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "priceDecimal",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setEntranceMulter",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setLockTimeforReward",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setManager",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxDepositMulter",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxPooledAmountMulter",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setTreasury",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setValidTimeforNewBlock",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeInfo",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "widthdraw",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "BUSD", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "USDT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "aggregator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bitConey", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "blockInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "entranceMulter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserListFromBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "invest", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxDepositMulter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxPooledAmountMulter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "priceDecimal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setEntranceMulter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLockTimeforReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setManager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMaxDepositMulter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxPooledAmountMulter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setValidTimeforNewBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stakeInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "widthdraw", data: BytesLike): Result;

  events: {
    "CreateBlock(uint256,uint256,uint256)": EventFragment;
    "Invest(uint256,address,uint256,uint256,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Withdraw(uint256,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CreateBlock"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Invest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export interface CreateBlockEventObject {
  blockNumber: BigNumber;
  prizeAmount: BigNumber;
  startTime: BigNumber;
}
export type CreateBlockEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  CreateBlockEventObject
>;

export type CreateBlockEventFilter = TypedEventFilter<CreateBlockEvent>;

export interface InvestEventObject {
  blockNumber: BigNumber;
  coin: string;
  amount: BigNumber;
  stakedTime: BigNumber;
  user: string;
}
export type InvestEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber, string],
  InvestEventObject
>;

export type InvestEventFilter = TypedEventFilter<InvestEvent>;

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

export interface WithdrawEventObject {
  _blockNumber: BigNumber;
  user: string;
  reward: BigNumber;
  entrance: BigNumber;
}
export type WithdrawEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber],
  WithdrawEventObject
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface Stake extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StakeInterface;

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
    BUSD(overrides?: CallOverrides): Promise<[string]>;

    USDT(overrides?: CallOverrides): Promise<[string]>;

    aggregator(overrides?: CallOverrides): Promise<[string]>;

    bitConey(overrides?: CallOverrides): Promise<[string]>;

    blockInfo(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        blockNumber: BigNumber;
        prizeAmount: BigNumber;
        startTime: BigNumber;
        price: BigNumber;
        pooledAmount: BigNumber;
      }
    >;

    createBlock(
      _blockNumber: PromiseOrValue<BigNumberish>,
      _prizeAmount: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    entranceMulter(overrides?: CallOverrides): Promise<[BigNumber]>;

    getUserListFromBlock(
      _blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[]] & { userList: string[] }>;

    invest(
      _blockNumber: PromiseOrValue<BigNumberish>,
      _coin: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    manager(overrides?: CallOverrides): Promise<[string]>;

    maxDepositMulter(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxPooledAmountMulter(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    priceDecimal(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    router(overrides?: CallOverrides): Promise<[string]>;

    setEntranceMulter(
      _multer: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setLockTimeforReward(
      time: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setManager(
      _manager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMaxDepositMulter(
      _multer: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMaxPooledAmountMulter(
      _multer: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTreasury(
      _wallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setValidTimeforNewBlock(
      time: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stakeInfo(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, boolean] & {
        coin: string;
        amount: BigNumber;
        stakedTime: BigNumber;
        refunded: boolean;
      }
    >;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    treasury(overrides?: CallOverrides): Promise<[string]>;

    widthdraw(
      _blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  BUSD(overrides?: CallOverrides): Promise<string>;

  USDT(overrides?: CallOverrides): Promise<string>;

  aggregator(overrides?: CallOverrides): Promise<string>;

  bitConey(overrides?: CallOverrides): Promise<string>;

  blockInfo(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      blockNumber: BigNumber;
      prizeAmount: BigNumber;
      startTime: BigNumber;
      price: BigNumber;
      pooledAmount: BigNumber;
    }
  >;

  createBlock(
    _blockNumber: PromiseOrValue<BigNumberish>,
    _prizeAmount: PromiseOrValue<BigNumberish>,
    _price: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  entranceMulter(overrides?: CallOverrides): Promise<BigNumber>;

  getUserListFromBlock(
    _blockNumber: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  invest(
    _blockNumber: PromiseOrValue<BigNumberish>,
    _coin: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  manager(overrides?: CallOverrides): Promise<string>;

  maxDepositMulter(overrides?: CallOverrides): Promise<BigNumber>;

  maxPooledAmountMulter(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  priceDecimal(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  router(overrides?: CallOverrides): Promise<string>;

  setEntranceMulter(
    _multer: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setLockTimeforReward(
    time: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setManager(
    _manager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMaxDepositMulter(
    _multer: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMaxPooledAmountMulter(
    _multer: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTreasury(
    _wallet: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setValidTimeforNewBlock(
    time: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stakeInfo(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, boolean] & {
      coin: string;
      amount: BigNumber;
      stakedTime: BigNumber;
      refunded: boolean;
    }
  >;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  treasury(overrides?: CallOverrides): Promise<string>;

  widthdraw(
    _blockNumber: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    BUSD(overrides?: CallOverrides): Promise<string>;

    USDT(overrides?: CallOverrides): Promise<string>;

    aggregator(overrides?: CallOverrides): Promise<string>;

    bitConey(overrides?: CallOverrides): Promise<string>;

    blockInfo(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        blockNumber: BigNumber;
        prizeAmount: BigNumber;
        startTime: BigNumber;
        price: BigNumber;
        pooledAmount: BigNumber;
      }
    >;

    createBlock(
      _blockNumber: PromiseOrValue<BigNumberish>,
      _prizeAmount: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    entranceMulter(overrides?: CallOverrides): Promise<BigNumber>;

    getUserListFromBlock(
      _blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    invest(
      _blockNumber: PromiseOrValue<BigNumberish>,
      _coin: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    manager(overrides?: CallOverrides): Promise<string>;

    maxDepositMulter(overrides?: CallOverrides): Promise<BigNumber>;

    maxPooledAmountMulter(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    priceDecimal(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    router(overrides?: CallOverrides): Promise<string>;

    setEntranceMulter(
      _multer: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setLockTimeforReward(
      time: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setManager(
      _manager: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxDepositMulter(
      _multer: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxPooledAmountMulter(
      _multer: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTreasury(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setValidTimeforNewBlock(
      time: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    stakeInfo(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, boolean] & {
        coin: string;
        amount: BigNumber;
        stakedTime: BigNumber;
        refunded: boolean;
      }
    >;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    treasury(overrides?: CallOverrides): Promise<string>;

    widthdraw(
      _blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "CreateBlock(uint256,uint256,uint256)"(
      blockNumber?: PromiseOrValue<BigNumberish> | null,
      prizeAmount?: null,
      startTime?: null
    ): CreateBlockEventFilter;
    CreateBlock(
      blockNumber?: PromiseOrValue<BigNumberish> | null,
      prizeAmount?: null,
      startTime?: null
    ): CreateBlockEventFilter;

    "Invest(uint256,address,uint256,uint256,address)"(
      blockNumber?: PromiseOrValue<BigNumberish> | null,
      coin?: null,
      amount?: null,
      stakedTime?: null,
      user?: PromiseOrValue<string> | null
    ): InvestEventFilter;
    Invest(
      blockNumber?: PromiseOrValue<BigNumberish> | null,
      coin?: null,
      amount?: null,
      stakedTime?: null,
      user?: PromiseOrValue<string> | null
    ): InvestEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Withdraw(uint256,address,uint256,uint256)"(
      _blockNumber?: PromiseOrValue<BigNumberish> | null,
      user?: PromiseOrValue<string> | null,
      reward?: null,
      entrance?: null
    ): WithdrawEventFilter;
    Withdraw(
      _blockNumber?: PromiseOrValue<BigNumberish> | null,
      user?: PromiseOrValue<string> | null,
      reward?: null,
      entrance?: null
    ): WithdrawEventFilter;
  };

  estimateGas: {
    BUSD(overrides?: CallOverrides): Promise<BigNumber>;

    USDT(overrides?: CallOverrides): Promise<BigNumber>;

    aggregator(overrides?: CallOverrides): Promise<BigNumber>;

    bitConey(overrides?: CallOverrides): Promise<BigNumber>;

    blockInfo(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createBlock(
      _blockNumber: PromiseOrValue<BigNumberish>,
      _prizeAmount: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    entranceMulter(overrides?: CallOverrides): Promise<BigNumber>;

    getUserListFromBlock(
      _blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    invest(
      _blockNumber: PromiseOrValue<BigNumberish>,
      _coin: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    manager(overrides?: CallOverrides): Promise<BigNumber>;

    maxDepositMulter(overrides?: CallOverrides): Promise<BigNumber>;

    maxPooledAmountMulter(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    priceDecimal(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    router(overrides?: CallOverrides): Promise<BigNumber>;

    setEntranceMulter(
      _multer: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setLockTimeforReward(
      time: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setManager(
      _manager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMaxDepositMulter(
      _multer: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMaxPooledAmountMulter(
      _multer: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTreasury(
      _wallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setValidTimeforNewBlock(
      time: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stakeInfo(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<BigNumber>;

    widthdraw(
      _blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BUSD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    USDT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    aggregator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bitConey(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    blockInfo(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createBlock(
      _blockNumber: PromiseOrValue<BigNumberish>,
      _prizeAmount: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    entranceMulter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUserListFromBlock(
      _blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    invest(
      _blockNumber: PromiseOrValue<BigNumberish>,
      _coin: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxDepositMulter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxPooledAmountMulter(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceDecimal(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    router(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setEntranceMulter(
      _multer: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setLockTimeforReward(
      time: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setManager(
      _manager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMaxDepositMulter(
      _multer: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMaxPooledAmountMulter(
      _multer: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTreasury(
      _wallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setValidTimeforNewBlock(
      time: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stakeInfo(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    widthdraw(
      _blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
