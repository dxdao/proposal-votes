import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Allowance = {
  __typename?: 'Allowance';
  amount: Scalars['BigInt'];
  id: Scalars['ID'];
  owner: Scalars['Bytes'];
  spender: Scalars['Bytes'];
  token: Scalars['Bytes'];
};

export type Allowance_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  spender?: InputMaybe<Scalars['Bytes']>;
  spender_contains?: InputMaybe<Scalars['Bytes']>;
  spender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  spender_not?: InputMaybe<Scalars['Bytes']>;
  spender_not_contains?: InputMaybe<Scalars['Bytes']>;
  spender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum Allowance_OrderBy {
  Amount = 'amount',
  Id = 'id',
  Owner = 'owner',
  Spender = 'spender',
  Token = 'token'
}

export type AvatarContract = {
  __typename?: 'AvatarContract';
  address: Scalars['Bytes'];
  balance: Scalars['BigInt'];
  id: Scalars['ID'];
  name: Scalars['String'];
  nativeReputation: Scalars['Bytes'];
  nativeToken: Scalars['Bytes'];
  owner: Scalars['Bytes'];
};

export type AvatarContract_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nativeReputation?: InputMaybe<Scalars['Bytes']>;
  nativeReputation_contains?: InputMaybe<Scalars['Bytes']>;
  nativeReputation_in?: InputMaybe<Array<Scalars['Bytes']>>;
  nativeReputation_not?: InputMaybe<Scalars['Bytes']>;
  nativeReputation_not_contains?: InputMaybe<Scalars['Bytes']>;
  nativeReputation_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  nativeToken?: InputMaybe<Scalars['Bytes']>;
  nativeToken_contains?: InputMaybe<Scalars['Bytes']>;
  nativeToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  nativeToken_not?: InputMaybe<Scalars['Bytes']>;
  nativeToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  nativeToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum AvatarContract_OrderBy {
  Address = 'address',
  Balance = 'balance',
  Id = 'id',
  Name = 'name',
  NativeReputation = 'nativeReputation',
  NativeToken = 'nativeToken',
  Owner = 'owner'
}

export type BlacklistedDao = {
  __typename?: 'BlacklistedDAO';
  id: Scalars['ID'];
};

export type BlacklistedDao_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export enum BlacklistedDao_OrderBy {
  Id = 'id'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Cl4RLock = {
  __typename?: 'CL4RLock';
  amount: Scalars['BigInt'];
  dao: Dao;
  id: Scalars['ID'];
  locker: Scalars['Bytes'];
  lockingId: Scalars['BigInt'];
  lockingTime: Scalars['BigInt'];
  period: Scalars['BigInt'];
  redeemed?: Maybe<Array<Cl4RRedeem>>;
  released: Scalars['Boolean'];
  releasedAt?: Maybe<Scalars['BigInt']>;
  scheme: ControllerScheme;
};


export type Cl4RLockRedeemedArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Cl4RRedeem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Cl4RRedeem_Filter>;
};

export type Cl4RLock_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dao?: InputMaybe<Scalars['String']>;
  dao_?: InputMaybe<Dao_Filter>;
  dao_contains?: InputMaybe<Scalars['String']>;
  dao_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_ends_with?: InputMaybe<Scalars['String']>;
  dao_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_gt?: InputMaybe<Scalars['String']>;
  dao_gte?: InputMaybe<Scalars['String']>;
  dao_in?: InputMaybe<Array<Scalars['String']>>;
  dao_lt?: InputMaybe<Scalars['String']>;
  dao_lte?: InputMaybe<Scalars['String']>;
  dao_not?: InputMaybe<Scalars['String']>;
  dao_not_contains?: InputMaybe<Scalars['String']>;
  dao_not_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_not_ends_with?: InputMaybe<Scalars['String']>;
  dao_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_not_in?: InputMaybe<Array<Scalars['String']>>;
  dao_not_starts_with?: InputMaybe<Scalars['String']>;
  dao_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dao_starts_with?: InputMaybe<Scalars['String']>;
  dao_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  locker?: InputMaybe<Scalars['Bytes']>;
  locker_contains?: InputMaybe<Scalars['Bytes']>;
  locker_in?: InputMaybe<Array<Scalars['Bytes']>>;
  locker_not?: InputMaybe<Scalars['Bytes']>;
  locker_not_contains?: InputMaybe<Scalars['Bytes']>;
  locker_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lockingId?: InputMaybe<Scalars['BigInt']>;
  lockingId_gt?: InputMaybe<Scalars['BigInt']>;
  lockingId_gte?: InputMaybe<Scalars['BigInt']>;
  lockingId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockingId_lt?: InputMaybe<Scalars['BigInt']>;
  lockingId_lte?: InputMaybe<Scalars['BigInt']>;
  lockingId_not?: InputMaybe<Scalars['BigInt']>;
  lockingId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockingTime?: InputMaybe<Scalars['BigInt']>;
  lockingTime_gt?: InputMaybe<Scalars['BigInt']>;
  lockingTime_gte?: InputMaybe<Scalars['BigInt']>;
  lockingTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockingTime_lt?: InputMaybe<Scalars['BigInt']>;
  lockingTime_lte?: InputMaybe<Scalars['BigInt']>;
  lockingTime_not?: InputMaybe<Scalars['BigInt']>;
  lockingTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  period?: InputMaybe<Scalars['BigInt']>;
  period_gt?: InputMaybe<Scalars['BigInt']>;
  period_gte?: InputMaybe<Scalars['BigInt']>;
  period_in?: InputMaybe<Array<Scalars['BigInt']>>;
  period_lt?: InputMaybe<Scalars['BigInt']>;
  period_lte?: InputMaybe<Scalars['BigInt']>;
  period_not?: InputMaybe<Scalars['BigInt']>;
  period_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  redeemed_?: InputMaybe<Cl4RRedeem_Filter>;
  released?: InputMaybe<Scalars['Boolean']>;
  releasedAt?: InputMaybe<Scalars['BigInt']>;
  releasedAt_gt?: InputMaybe<Scalars['BigInt']>;
  releasedAt_gte?: InputMaybe<Scalars['BigInt']>;
  releasedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  releasedAt_lt?: InputMaybe<Scalars['BigInt']>;
  releasedAt_lte?: InputMaybe<Scalars['BigInt']>;
  releasedAt_not?: InputMaybe<Scalars['BigInt']>;
  releasedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  released_in?: InputMaybe<Array<Scalars['Boolean']>>;
  released_not?: InputMaybe<Scalars['Boolean']>;
  released_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  scheme?: InputMaybe<Scalars['String']>;
  scheme_?: InputMaybe<ControllerScheme_Filter>;
  scheme_contains?: InputMaybe<Scalars['String']>;
  scheme_contains_nocase?: InputMaybe<Scalars['String']>;
  scheme_ends_with?: InputMaybe<Scalars['String']>;
  scheme_ends_with_nocase?: InputMaybe<Scalars['String']>;
  scheme_gt?: InputMaybe<Scalars['String']>;
  scheme_gte?: InputMaybe<Scalars['String']>;
  scheme_in?: InputMaybe<Array<Scalars['String']>>;
  scheme_lt?: InputMaybe<Scalars['String']>;
  scheme_lte?: InputMaybe<Scalars['String']>;
  scheme_not?: InputMaybe<Scalars['String']>;
  scheme_not_contains?: InputMaybe<Scalars['String']>;
  scheme_not_contains_nocase?: InputMaybe<Scalars['String']>;
  scheme_not_ends_with?: InputMaybe<Scalars['String']>;
  scheme_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  scheme_not_in?: InputMaybe<Array<Scalars['String']>>;
  scheme_not_starts_with?: InputMaybe<Scalars['String']>;
  scheme_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  scheme_starts_with?: InputMaybe<Scalars['String']>;
  scheme_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Cl4RLock_OrderBy {
  Amount = 'amount',
  Dao = 'dao',
  Id = 'id',
  Locker = 'locker',
  LockingId = 'lockingId',
  LockingTime = 'lockingTime',
  Period = 'period',
  Redeemed = 'redeemed',
  Released = 'released',
  ReleasedAt = 'releasedAt',
  Scheme = 'scheme'
}

export type Cl4RRedeem = {
  __typename?: 'CL4RRedeem';
  amount: Scalars['BigInt'];
  batchIndex: Scalars['BigInt'];
  id: Scalars['ID'];
  lock: Cl4RLock;
  redeemedAt: Scalars['BigInt'];
};

export type Cl4RRedeem_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  batchIndex?: InputMaybe<Scalars['BigInt']>;
  batchIndex_gt?: InputMaybe<Scalars['BigInt']>;
  batchIndex_gte?: InputMaybe<Scalars['BigInt']>;
  batchIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  batchIndex_lt?: InputMaybe<Scalars['BigInt']>;
  batchIndex_lte?: InputMaybe<Scalars['BigInt']>;
  batchIndex_not?: InputMaybe<Scalars['BigInt']>;
  batchIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lock?: InputMaybe<Scalars['String']>;
  lock_?: InputMaybe<Cl4RLock_Filter>;
  lock_contains?: InputMaybe<Scalars['String']>;
  lock_contains_nocase?: InputMaybe<Scalars['String']>;
  lock_ends_with?: InputMaybe<Scalars['String']>;
  lock_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lock_gt?: InputMaybe<Scalars['String']>;
  lock_gte?: InputMaybe<Scalars['String']>;
  lock_in?: InputMaybe<Array<Scalars['String']>>;
  lock_lt?: InputMaybe<Scalars['String']>;
  lock_lte?: InputMaybe<Scalars['String']>;
  lock_not?: InputMaybe<Scalars['String']>;
  lock_not_contains?: InputMaybe<Scalars['String']>;
  lock_not_contains_nocase?: InputMaybe<Scalars['String']>;
  lock_not_ends_with?: InputMaybe<Scalars['String']>;
  lock_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lock_not_in?: InputMaybe<Array<Scalars['String']>>;
  lock_not_starts_with?: InputMaybe<Scalars['String']>;
  lock_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lock_starts_with?: InputMaybe<Scalars['String']>;
  lock_starts_with_nocase?: InputMaybe<Scalars['String']>;
  redeemedAt?: InputMaybe<Scalars['BigInt']>;
  redeemedAt_gt?: InputMaybe<Scalars['BigInt']>;
  redeemedAt_gte?: InputMaybe<Scalars['BigInt']>;
  redeemedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  redeemedAt_lt?: InputMaybe<Scalars['BigInt']>;
  redeemedAt_lte?: InputMaybe<Scalars['BigInt']>;
  redeemedAt_not?: InputMaybe<Scalars['BigInt']>;
  redeemedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Cl4RRedeem_OrderBy {
  Amount = 'amount',
  BatchIndex = 'batchIndex',
  Id = 'id',
  Lock = 'lock',
  RedeemedAt = 'redeemedAt'
}

export type CompetitionProposal = {
  __typename?: 'CompetitionProposal';
  admin: Scalars['Bytes'];
  contract: Scalars['Bytes'];
  contributionReward: ControllerScheme;
  createdAt: Scalars['BigInt'];
  dao: Dao;
  endTime: Scalars['BigInt'];
  id: Scalars['ID'];
  numberOfVotesPerVoters: Scalars['BigInt'];
  numberOfWinners: Scalars['BigInt'];
  numberOfWinningSuggestions: Scalars['BigInt'];
  proposal: Proposal;
  rewardSplit?: Maybe<Array<Scalars['BigInt']>>;
  snapshotBlock?: Maybe<Scalars['BigInt']>;
  startTime: Scalars['BigInt'];
  suggestions?: Maybe<Array<CompetitionSuggestion>>;
  suggestionsEndTime: Scalars['BigInt'];
  totalSuggestions: Scalars['BigInt'];
  totalVotes: Scalars['BigInt'];
  votes?: Maybe<Array<CompetitionVote>>;
  votingStartTime: Scalars['BigInt'];
  winningSuggestions?: Maybe<Array<CompetitionSuggestion>>;
};


export type CompetitionProposalSuggestionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CompetitionSuggestion_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CompetitionSuggestion_Filter>;
};


export type CompetitionProposalVotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CompetitionVote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CompetitionVote_Filter>;
};


export type CompetitionProposalWinningSuggestionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CompetitionSuggestion_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CompetitionSuggestion_Filter>;
};

export type CompetitionProposal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  admin?: InputMaybe<Scalars['Bytes']>;
  admin_contains?: InputMaybe<Scalars['Bytes']>;
  admin_in?: InputMaybe<Array<Scalars['Bytes']>>;
  admin_not?: InputMaybe<Scalars['Bytes']>;
  admin_not_contains?: InputMaybe<Scalars['Bytes']>;
  admin_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract?: InputMaybe<Scalars['Bytes']>;
  contract_contains?: InputMaybe<Scalars['Bytes']>;
  contract_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract_not?: InputMaybe<Scalars['Bytes']>;
  contract_not_contains?: InputMaybe<Scalars['Bytes']>;
  contract_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contributionReward?: InputMaybe<Scalars['String']>;
  contributionReward_?: InputMaybe<ControllerScheme_Filter>;
  contributionReward_contains?: InputMaybe<Scalars['String']>;
  contributionReward_contains_nocase?: InputMaybe<Scalars['String']>;
  contributionReward_ends_with?: InputMaybe<Scalars['String']>;
  contributionReward_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contributionReward_gt?: InputMaybe<Scalars['String']>;
  contributionReward_gte?: InputMaybe<Scalars['String']>;
  contributionReward_in?: InputMaybe<Array<Scalars['String']>>;
  contributionReward_lt?: InputMaybe<Scalars['String']>;
  contributionReward_lte?: InputMaybe<Scalars['String']>;
  contributionReward_not?: InputMaybe<Scalars['String']>;
  contributionReward_not_contains?: InputMaybe<Scalars['String']>;
  contributionReward_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contributionReward_not_ends_with?: InputMaybe<Scalars['String']>;
  contributionReward_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contributionReward_not_in?: InputMaybe<Array<Scalars['String']>>;
  contributionReward_not_starts_with?: InputMaybe<Scalars['String']>;
  contributionReward_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contributionReward_starts_with?: InputMaybe<Scalars['String']>;
  contributionReward_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dao?: InputMaybe<Scalars['String']>;
  dao_?: InputMaybe<Dao_Filter>;
  dao_contains?: InputMaybe<Scalars['String']>;
  dao_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_ends_with?: InputMaybe<Scalars['String']>;
  dao_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_gt?: InputMaybe<Scalars['String']>;
  dao_gte?: InputMaybe<Scalars['String']>;
  dao_in?: InputMaybe<Array<Scalars['String']>>;
  dao_lt?: InputMaybe<Scalars['String']>;
  dao_lte?: InputMaybe<Scalars['String']>;
  dao_not?: InputMaybe<Scalars['String']>;
  dao_not_contains?: InputMaybe<Scalars['String']>;
  dao_not_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_not_ends_with?: InputMaybe<Scalars['String']>;
  dao_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_not_in?: InputMaybe<Array<Scalars['String']>>;
  dao_not_starts_with?: InputMaybe<Scalars['String']>;
  dao_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dao_starts_with?: InputMaybe<Scalars['String']>;
  dao_starts_with_nocase?: InputMaybe<Scalars['String']>;
  endTime?: InputMaybe<Scalars['BigInt']>;
  endTime_gt?: InputMaybe<Scalars['BigInt']>;
  endTime_gte?: InputMaybe<Scalars['BigInt']>;
  endTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endTime_lt?: InputMaybe<Scalars['BigInt']>;
  endTime_lte?: InputMaybe<Scalars['BigInt']>;
  endTime_not?: InputMaybe<Scalars['BigInt']>;
  endTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  numberOfVotesPerVoters?: InputMaybe<Scalars['BigInt']>;
  numberOfVotesPerVoters_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfVotesPerVoters_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfVotesPerVoters_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfVotesPerVoters_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfVotesPerVoters_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfVotesPerVoters_not?: InputMaybe<Scalars['BigInt']>;
  numberOfVotesPerVoters_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfWinners?: InputMaybe<Scalars['BigInt']>;
  numberOfWinners_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfWinners_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfWinners_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfWinners_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfWinners_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfWinners_not?: InputMaybe<Scalars['BigInt']>;
  numberOfWinners_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfWinningSuggestions?: InputMaybe<Scalars['BigInt']>;
  numberOfWinningSuggestions_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfWinningSuggestions_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfWinningSuggestions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfWinningSuggestions_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfWinningSuggestions_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfWinningSuggestions_not?: InputMaybe<Scalars['BigInt']>;
  numberOfWinningSuggestions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposal?: InputMaybe<Scalars['String']>;
  proposal_?: InputMaybe<Proposal_Filter>;
  proposal_contains?: InputMaybe<Scalars['String']>;
  proposal_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_ends_with?: InputMaybe<Scalars['String']>;
  proposal_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_gt?: InputMaybe<Scalars['String']>;
  proposal_gte?: InputMaybe<Scalars['String']>;
  proposal_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_lt?: InputMaybe<Scalars['String']>;
  proposal_lte?: InputMaybe<Scalars['String']>;
  proposal_not?: InputMaybe<Scalars['String']>;
  proposal_not_contains?: InputMaybe<Scalars['String']>;
  proposal_not_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_not_starts_with?: InputMaybe<Scalars['String']>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_starts_with?: InputMaybe<Scalars['String']>;
  proposal_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rewardSplit?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardSplit_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardSplit_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardSplit_not?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardSplit_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardSplit_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  snapshotBlock?: InputMaybe<Scalars['BigInt']>;
  snapshotBlock_gt?: InputMaybe<Scalars['BigInt']>;
  snapshotBlock_gte?: InputMaybe<Scalars['BigInt']>;
  snapshotBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  snapshotBlock_lt?: InputMaybe<Scalars['BigInt']>;
  snapshotBlock_lte?: InputMaybe<Scalars['BigInt']>;
  snapshotBlock_not?: InputMaybe<Scalars['BigInt']>;
  snapshotBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startTime?: InputMaybe<Scalars['BigInt']>;
  startTime_gt?: InputMaybe<Scalars['BigInt']>;
  startTime_gte?: InputMaybe<Scalars['BigInt']>;
  startTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startTime_lt?: InputMaybe<Scalars['BigInt']>;
  startTime_lte?: InputMaybe<Scalars['BigInt']>;
  startTime_not?: InputMaybe<Scalars['BigInt']>;
  startTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  suggestions?: InputMaybe<Array<Scalars['String']>>;
  suggestionsEndTime?: InputMaybe<Scalars['BigInt']>;
  suggestionsEndTime_gt?: InputMaybe<Scalars['BigInt']>;
  suggestionsEndTime_gte?: InputMaybe<Scalars['BigInt']>;
  suggestionsEndTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  suggestionsEndTime_lt?: InputMaybe<Scalars['BigInt']>;
  suggestionsEndTime_lte?: InputMaybe<Scalars['BigInt']>;
  suggestionsEndTime_not?: InputMaybe<Scalars['BigInt']>;
  suggestionsEndTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  suggestions_?: InputMaybe<CompetitionSuggestion_Filter>;
  suggestions_contains?: InputMaybe<Array<Scalars['String']>>;
  suggestions_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  suggestions_not?: InputMaybe<Array<Scalars['String']>>;
  suggestions_not_contains?: InputMaybe<Array<Scalars['String']>>;
  suggestions_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  totalSuggestions?: InputMaybe<Scalars['BigInt']>;
  totalSuggestions_gt?: InputMaybe<Scalars['BigInt']>;
  totalSuggestions_gte?: InputMaybe<Scalars['BigInt']>;
  totalSuggestions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSuggestions_lt?: InputMaybe<Scalars['BigInt']>;
  totalSuggestions_lte?: InputMaybe<Scalars['BigInt']>;
  totalSuggestions_not?: InputMaybe<Scalars['BigInt']>;
  totalSuggestions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVotes?: InputMaybe<Scalars['BigInt']>;
  totalVotes_gt?: InputMaybe<Scalars['BigInt']>;
  totalVotes_gte?: InputMaybe<Scalars['BigInt']>;
  totalVotes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVotes_lt?: InputMaybe<Scalars['BigInt']>;
  totalVotes_lte?: InputMaybe<Scalars['BigInt']>;
  totalVotes_not?: InputMaybe<Scalars['BigInt']>;
  totalVotes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  votes_?: InputMaybe<CompetitionVote_Filter>;
  votingStartTime?: InputMaybe<Scalars['BigInt']>;
  votingStartTime_gt?: InputMaybe<Scalars['BigInt']>;
  votingStartTime_gte?: InputMaybe<Scalars['BigInt']>;
  votingStartTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  votingStartTime_lt?: InputMaybe<Scalars['BigInt']>;
  votingStartTime_lte?: InputMaybe<Scalars['BigInt']>;
  votingStartTime_not?: InputMaybe<Scalars['BigInt']>;
  votingStartTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  winningSuggestions?: InputMaybe<Array<Scalars['String']>>;
  winningSuggestions_?: InputMaybe<CompetitionSuggestion_Filter>;
  winningSuggestions_contains?: InputMaybe<Array<Scalars['String']>>;
  winningSuggestions_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  winningSuggestions_not?: InputMaybe<Array<Scalars['String']>>;
  winningSuggestions_not_contains?: InputMaybe<Array<Scalars['String']>>;
  winningSuggestions_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
};

export enum CompetitionProposal_OrderBy {
  Admin = 'admin',
  Contract = 'contract',
  ContributionReward = 'contributionReward',
  CreatedAt = 'createdAt',
  Dao = 'dao',
  EndTime = 'endTime',
  Id = 'id',
  NumberOfVotesPerVoters = 'numberOfVotesPerVoters',
  NumberOfWinners = 'numberOfWinners',
  NumberOfWinningSuggestions = 'numberOfWinningSuggestions',
  Proposal = 'proposal',
  RewardSplit = 'rewardSplit',
  SnapshotBlock = 'snapshotBlock',
  StartTime = 'startTime',
  Suggestions = 'suggestions',
  SuggestionsEndTime = 'suggestionsEndTime',
  TotalSuggestions = 'totalSuggestions',
  TotalVotes = 'totalVotes',
  Votes = 'votes',
  VotingStartTime = 'votingStartTime',
  WinningSuggestions = 'winningSuggestions'
}

export type CompetitionSuggestion = {
  __typename?: 'CompetitionSuggestion';
  beneficiary: Scalars['Bytes'];
  createdAt: Scalars['BigInt'];
  description?: Maybe<Scalars['String']>;
  descriptionHash: Scalars['String'];
  id: Scalars['ID'];
  positionInWinnerList?: Maybe<Scalars['BigInt']>;
  proposal: CompetitionProposal;
  redeemedAt?: Maybe<Scalars['BigInt']>;
  rewardPercentage?: Maybe<Scalars['BigInt']>;
  suggester: Scalars['Bytes'];
  suggestionId: Scalars['BigInt'];
  tags?: Maybe<Array<Tag>>;
  title?: Maybe<Scalars['String']>;
  totalVotes: Scalars['BigInt'];
  url?: Maybe<Scalars['String']>;
  votes?: Maybe<Array<CompetitionVote>>;
};


export type CompetitionSuggestionTagsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Tag_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Tag_Filter>;
};


export type CompetitionSuggestionVotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CompetitionVote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CompetitionVote_Filter>;
};

export type CompetitionSuggestion_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  beneficiary?: InputMaybe<Scalars['Bytes']>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  description?: InputMaybe<Scalars['String']>;
  descriptionHash?: InputMaybe<Scalars['String']>;
  descriptionHash_contains?: InputMaybe<Scalars['String']>;
  descriptionHash_contains_nocase?: InputMaybe<Scalars['String']>;
  descriptionHash_ends_with?: InputMaybe<Scalars['String']>;
  descriptionHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  descriptionHash_gt?: InputMaybe<Scalars['String']>;
  descriptionHash_gte?: InputMaybe<Scalars['String']>;
  descriptionHash_in?: InputMaybe<Array<Scalars['String']>>;
  descriptionHash_lt?: InputMaybe<Scalars['String']>;
  descriptionHash_lte?: InputMaybe<Scalars['String']>;
  descriptionHash_not?: InputMaybe<Scalars['String']>;
  descriptionHash_not_contains?: InputMaybe<Scalars['String']>;
  descriptionHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  descriptionHash_not_ends_with?: InputMaybe<Scalars['String']>;
  descriptionHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  descriptionHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  descriptionHash_not_starts_with?: InputMaybe<Scalars['String']>;
  descriptionHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  descriptionHash_starts_with?: InputMaybe<Scalars['String']>;
  descriptionHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  positionInWinnerList?: InputMaybe<Scalars['BigInt']>;
  positionInWinnerList_gt?: InputMaybe<Scalars['BigInt']>;
  positionInWinnerList_gte?: InputMaybe<Scalars['BigInt']>;
  positionInWinnerList_in?: InputMaybe<Array<Scalars['BigInt']>>;
  positionInWinnerList_lt?: InputMaybe<Scalars['BigInt']>;
  positionInWinnerList_lte?: InputMaybe<Scalars['BigInt']>;
  positionInWinnerList_not?: InputMaybe<Scalars['BigInt']>;
  positionInWinnerList_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposal?: InputMaybe<Scalars['String']>;
  proposal_?: InputMaybe<CompetitionProposal_Filter>;
  proposal_contains?: InputMaybe<Scalars['String']>;
  proposal_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_ends_with?: InputMaybe<Scalars['String']>;
  proposal_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_gt?: InputMaybe<Scalars['String']>;
  proposal_gte?: InputMaybe<Scalars['String']>;
  proposal_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_lt?: InputMaybe<Scalars['String']>;
  proposal_lte?: InputMaybe<Scalars['String']>;
  proposal_not?: InputMaybe<Scalars['String']>;
  proposal_not_contains?: InputMaybe<Scalars['String']>;
  proposal_not_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_not_starts_with?: InputMaybe<Scalars['String']>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_starts_with?: InputMaybe<Scalars['String']>;
  proposal_starts_with_nocase?: InputMaybe<Scalars['String']>;
  redeemedAt?: InputMaybe<Scalars['BigInt']>;
  redeemedAt_gt?: InputMaybe<Scalars['BigInt']>;
  redeemedAt_gte?: InputMaybe<Scalars['BigInt']>;
  redeemedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  redeemedAt_lt?: InputMaybe<Scalars['BigInt']>;
  redeemedAt_lte?: InputMaybe<Scalars['BigInt']>;
  redeemedAt_not?: InputMaybe<Scalars['BigInt']>;
  redeemedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardPercentage?: InputMaybe<Scalars['BigInt']>;
  rewardPercentage_gt?: InputMaybe<Scalars['BigInt']>;
  rewardPercentage_gte?: InputMaybe<Scalars['BigInt']>;
  rewardPercentage_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardPercentage_lt?: InputMaybe<Scalars['BigInt']>;
  rewardPercentage_lte?: InputMaybe<Scalars['BigInt']>;
  rewardPercentage_not?: InputMaybe<Scalars['BigInt']>;
  rewardPercentage_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  suggester?: InputMaybe<Scalars['Bytes']>;
  suggester_contains?: InputMaybe<Scalars['Bytes']>;
  suggester_in?: InputMaybe<Array<Scalars['Bytes']>>;
  suggester_not?: InputMaybe<Scalars['Bytes']>;
  suggester_not_contains?: InputMaybe<Scalars['Bytes']>;
  suggester_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  suggestionId?: InputMaybe<Scalars['BigInt']>;
  suggestionId_gt?: InputMaybe<Scalars['BigInt']>;
  suggestionId_gte?: InputMaybe<Scalars['BigInt']>;
  suggestionId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  suggestionId_lt?: InputMaybe<Scalars['BigInt']>;
  suggestionId_lte?: InputMaybe<Scalars['BigInt']>;
  suggestionId_not?: InputMaybe<Scalars['BigInt']>;
  suggestionId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tags_?: InputMaybe<Tag_Filter>;
  tags_contains?: InputMaybe<Array<Scalars['String']>>;
  tags_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  tags_not?: InputMaybe<Array<Scalars['String']>>;
  tags_not_contains?: InputMaybe<Array<Scalars['String']>>;
  tags_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_contains_nocase?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']>;
  totalVotes?: InputMaybe<Scalars['BigInt']>;
  totalVotes_gt?: InputMaybe<Scalars['BigInt']>;
  totalVotes_gte?: InputMaybe<Scalars['BigInt']>;
  totalVotes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVotes_lt?: InputMaybe<Scalars['BigInt']>;
  totalVotes_lte?: InputMaybe<Scalars['BigInt']>;
  totalVotes_not?: InputMaybe<Scalars['BigInt']>;
  totalVotes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_contains_nocase?: InputMaybe<Scalars['String']>;
  url_ends_with?: InputMaybe<Scalars['String']>;
  url_ends_with_nocase?: InputMaybe<Scalars['String']>;
  url_gt?: InputMaybe<Scalars['String']>;
  url_gte?: InputMaybe<Scalars['String']>;
  url_in?: InputMaybe<Array<Scalars['String']>>;
  url_lt?: InputMaybe<Scalars['String']>;
  url_lte?: InputMaybe<Scalars['String']>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_contains_nocase?: InputMaybe<Scalars['String']>;
  url_not_ends_with?: InputMaybe<Scalars['String']>;
  url_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<Scalars['String']>>;
  url_not_starts_with?: InputMaybe<Scalars['String']>;
  url_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  url_starts_with?: InputMaybe<Scalars['String']>;
  url_starts_with_nocase?: InputMaybe<Scalars['String']>;
  votes_?: InputMaybe<CompetitionVote_Filter>;
};

export enum CompetitionSuggestion_OrderBy {
  Beneficiary = 'beneficiary',
  CreatedAt = 'createdAt',
  Description = 'description',
  DescriptionHash = 'descriptionHash',
  Id = 'id',
  PositionInWinnerList = 'positionInWinnerList',
  Proposal = 'proposal',
  RedeemedAt = 'redeemedAt',
  RewardPercentage = 'rewardPercentage',
  Suggester = 'suggester',
  SuggestionId = 'suggestionId',
  Tags = 'tags',
  Title = 'title',
  TotalVotes = 'totalVotes',
  Url = 'url',
  Votes = 'votes'
}

export type CompetitionVote = {
  __typename?: 'CompetitionVote';
  createdAt: Scalars['BigInt'];
  id: Scalars['ID'];
  proposal: CompetitionProposal;
  reputation: Scalars['BigInt'];
  suggestion: CompetitionSuggestion;
  voter: Scalars['Bytes'];
};

export type CompetitionVote_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  proposal?: InputMaybe<Scalars['String']>;
  proposal_?: InputMaybe<CompetitionProposal_Filter>;
  proposal_contains?: InputMaybe<Scalars['String']>;
  proposal_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_ends_with?: InputMaybe<Scalars['String']>;
  proposal_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_gt?: InputMaybe<Scalars['String']>;
  proposal_gte?: InputMaybe<Scalars['String']>;
  proposal_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_lt?: InputMaybe<Scalars['String']>;
  proposal_lte?: InputMaybe<Scalars['String']>;
  proposal_not?: InputMaybe<Scalars['String']>;
  proposal_not_contains?: InputMaybe<Scalars['String']>;
  proposal_not_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_not_starts_with?: InputMaybe<Scalars['String']>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_starts_with?: InputMaybe<Scalars['String']>;
  proposal_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reputation?: InputMaybe<Scalars['BigInt']>;
  reputation_gt?: InputMaybe<Scalars['BigInt']>;
  reputation_gte?: InputMaybe<Scalars['BigInt']>;
  reputation_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reputation_lt?: InputMaybe<Scalars['BigInt']>;
  reputation_lte?: InputMaybe<Scalars['BigInt']>;
  reputation_not?: InputMaybe<Scalars['BigInt']>;
  reputation_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  suggestion?: InputMaybe<Scalars['String']>;
  suggestion_?: InputMaybe<CompetitionSuggestion_Filter>;
  suggestion_contains?: InputMaybe<Scalars['String']>;
  suggestion_contains_nocase?: InputMaybe<Scalars['String']>;
  suggestion_ends_with?: InputMaybe<Scalars['String']>;
  suggestion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  suggestion_gt?: InputMaybe<Scalars['String']>;
  suggestion_gte?: InputMaybe<Scalars['String']>;
  suggestion_in?: InputMaybe<Array<Scalars['String']>>;
  suggestion_lt?: InputMaybe<Scalars['String']>;
  suggestion_lte?: InputMaybe<Scalars['String']>;
  suggestion_not?: InputMaybe<Scalars['String']>;
  suggestion_not_contains?: InputMaybe<Scalars['String']>;
  suggestion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  suggestion_not_ends_with?: InputMaybe<Scalars['String']>;
  suggestion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  suggestion_not_in?: InputMaybe<Array<Scalars['String']>>;
  suggestion_not_starts_with?: InputMaybe<Scalars['String']>;
  suggestion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  suggestion_starts_with?: InputMaybe<Scalars['String']>;
  suggestion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  voter?: InputMaybe<Scalars['Bytes']>;
  voter_contains?: InputMaybe<Scalars['Bytes']>;
  voter_in?: InputMaybe<Array<Scalars['Bytes']>>;
  voter_not?: InputMaybe<Scalars['Bytes']>;
  voter_not_contains?: InputMaybe<Scalars['Bytes']>;
  voter_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum CompetitionVote_OrderBy {
  CreatedAt = 'createdAt',
  Id = 'id',
  Proposal = 'proposal',
  Reputation = 'reputation',
  Suggestion = 'suggestion',
  Voter = 'voter'
}

export type ContinuousLocking4ReputationParams = {
  __typename?: 'ContinuousLocking4ReputationParams';
  agreementHash?: Maybe<Scalars['String']>;
  batchTime: Scalars['BigInt'];
  batchesIndexCap?: Maybe<Scalars['BigInt']>;
  id: Scalars['ID'];
  maxLockingBatches?: Maybe<Scalars['BigInt']>;
  redeemEnableTime: Scalars['BigInt'];
  repRewardConstA?: Maybe<Scalars['BigInt']>;
  repRewardConstB?: Maybe<Scalars['BigInt']>;
  startTime: Scalars['BigInt'];
  token: Scalars['Bytes'];
  tokenName?: Maybe<Scalars['String']>;
  tokenSymbol?: Maybe<Scalars['String']>;
};

export type ContinuousLocking4ReputationParams_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  agreementHash?: InputMaybe<Scalars['String']>;
  agreementHash_contains?: InputMaybe<Scalars['String']>;
  agreementHash_contains_nocase?: InputMaybe<Scalars['String']>;
  agreementHash_ends_with?: InputMaybe<Scalars['String']>;
  agreementHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  agreementHash_gt?: InputMaybe<Scalars['String']>;
  agreementHash_gte?: InputMaybe<Scalars['String']>;
  agreementHash_in?: InputMaybe<Array<Scalars['String']>>;
  agreementHash_lt?: InputMaybe<Scalars['String']>;
  agreementHash_lte?: InputMaybe<Scalars['String']>;
  agreementHash_not?: InputMaybe<Scalars['String']>;
  agreementHash_not_contains?: InputMaybe<Scalars['String']>;
  agreementHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  agreementHash_not_ends_with?: InputMaybe<Scalars['String']>;
  agreementHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  agreementHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  agreementHash_not_starts_with?: InputMaybe<Scalars['String']>;
  agreementHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  agreementHash_starts_with?: InputMaybe<Scalars['String']>;
  agreementHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  batchTime?: InputMaybe<Scalars['BigInt']>;
  batchTime_gt?: InputMaybe<Scalars['BigInt']>;
  batchTime_gte?: InputMaybe<Scalars['BigInt']>;
  batchTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  batchTime_lt?: InputMaybe<Scalars['BigInt']>;
  batchTime_lte?: InputMaybe<Scalars['BigInt']>;
  batchTime_not?: InputMaybe<Scalars['BigInt']>;
  batchTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  batchesIndexCap?: InputMaybe<Scalars['BigInt']>;
  batchesIndexCap_gt?: InputMaybe<Scalars['BigInt']>;
  batchesIndexCap_gte?: InputMaybe<Scalars['BigInt']>;
  batchesIndexCap_in?: InputMaybe<Array<Scalars['BigInt']>>;
  batchesIndexCap_lt?: InputMaybe<Scalars['BigInt']>;
  batchesIndexCap_lte?: InputMaybe<Scalars['BigInt']>;
  batchesIndexCap_not?: InputMaybe<Scalars['BigInt']>;
  batchesIndexCap_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  maxLockingBatches?: InputMaybe<Scalars['BigInt']>;
  maxLockingBatches_gt?: InputMaybe<Scalars['BigInt']>;
  maxLockingBatches_gte?: InputMaybe<Scalars['BigInt']>;
  maxLockingBatches_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maxLockingBatches_lt?: InputMaybe<Scalars['BigInt']>;
  maxLockingBatches_lte?: InputMaybe<Scalars['BigInt']>;
  maxLockingBatches_not?: InputMaybe<Scalars['BigInt']>;
  maxLockingBatches_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  redeemEnableTime?: InputMaybe<Scalars['BigInt']>;
  redeemEnableTime_gt?: InputMaybe<Scalars['BigInt']>;
  redeemEnableTime_gte?: InputMaybe<Scalars['BigInt']>;
  redeemEnableTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  redeemEnableTime_lt?: InputMaybe<Scalars['BigInt']>;
  redeemEnableTime_lte?: InputMaybe<Scalars['BigInt']>;
  redeemEnableTime_not?: InputMaybe<Scalars['BigInt']>;
  redeemEnableTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  repRewardConstA?: InputMaybe<Scalars['BigInt']>;
  repRewardConstA_gt?: InputMaybe<Scalars['BigInt']>;
  repRewardConstA_gte?: InputMaybe<Scalars['BigInt']>;
  repRewardConstA_in?: InputMaybe<Array<Scalars['BigInt']>>;
  repRewardConstA_lt?: InputMaybe<Scalars['BigInt']>;
  repRewardConstA_lte?: InputMaybe<Scalars['BigInt']>;
  repRewardConstA_not?: InputMaybe<Scalars['BigInt']>;
  repRewardConstA_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  repRewardConstB?: InputMaybe<Scalars['BigInt']>;
  repRewardConstB_gt?: InputMaybe<Scalars['BigInt']>;
  repRewardConstB_gte?: InputMaybe<Scalars['BigInt']>;
  repRewardConstB_in?: InputMaybe<Array<Scalars['BigInt']>>;
  repRewardConstB_lt?: InputMaybe<Scalars['BigInt']>;
  repRewardConstB_lte?: InputMaybe<Scalars['BigInt']>;
  repRewardConstB_not?: InputMaybe<Scalars['BigInt']>;
  repRewardConstB_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startTime?: InputMaybe<Scalars['BigInt']>;
  startTime_gt?: InputMaybe<Scalars['BigInt']>;
  startTime_gte?: InputMaybe<Scalars['BigInt']>;
  startTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startTime_lt?: InputMaybe<Scalars['BigInt']>;
  startTime_lte?: InputMaybe<Scalars['BigInt']>;
  startTime_not?: InputMaybe<Scalars['BigInt']>;
  startTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  tokenName?: InputMaybe<Scalars['String']>;
  tokenName_contains?: InputMaybe<Scalars['String']>;
  tokenName_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenName_ends_with?: InputMaybe<Scalars['String']>;
  tokenName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenName_gt?: InputMaybe<Scalars['String']>;
  tokenName_gte?: InputMaybe<Scalars['String']>;
  tokenName_in?: InputMaybe<Array<Scalars['String']>>;
  tokenName_lt?: InputMaybe<Scalars['String']>;
  tokenName_lte?: InputMaybe<Scalars['String']>;
  tokenName_not?: InputMaybe<Scalars['String']>;
  tokenName_not_contains?: InputMaybe<Scalars['String']>;
  tokenName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenName_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenName_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenName_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenName_starts_with?: InputMaybe<Scalars['String']>;
  tokenName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  tokenSymbol_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_gt?: InputMaybe<Scalars['String']>;
  tokenSymbol_gte?: InputMaybe<Scalars['String']>;
  tokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_lt?: InputMaybe<Scalars['String']>;
  tokenSymbol_lte?: InputMaybe<Scalars['String']>;
  tokenSymbol_not?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum ContinuousLocking4ReputationParams_OrderBy {
  AgreementHash = 'agreementHash',
  BatchTime = 'batchTime',
  BatchesIndexCap = 'batchesIndexCap',
  Id = 'id',
  MaxLockingBatches = 'maxLockingBatches',
  RedeemEnableTime = 'redeemEnableTime',
  RepRewardConstA = 'repRewardConstA',
  RepRewardConstB = 'repRewardConstB',
  StartTime = 'startTime',
  Token = 'token',
  TokenName = 'tokenName',
  TokenSymbol = 'tokenSymbol'
}

export type ContractInfo = {
  __typename?: 'ContractInfo';
  address: Scalars['Bytes'];
  alias: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  version: Scalars['String'];
};

export type ContractInfo_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  alias?: InputMaybe<Scalars['String']>;
  alias_contains?: InputMaybe<Scalars['String']>;
  alias_contains_nocase?: InputMaybe<Scalars['String']>;
  alias_ends_with?: InputMaybe<Scalars['String']>;
  alias_ends_with_nocase?: InputMaybe<Scalars['String']>;
  alias_gt?: InputMaybe<Scalars['String']>;
  alias_gte?: InputMaybe<Scalars['String']>;
  alias_in?: InputMaybe<Array<Scalars['String']>>;
  alias_lt?: InputMaybe<Scalars['String']>;
  alias_lte?: InputMaybe<Scalars['String']>;
  alias_not?: InputMaybe<Scalars['String']>;
  alias_not_contains?: InputMaybe<Scalars['String']>;
  alias_not_contains_nocase?: InputMaybe<Scalars['String']>;
  alias_not_ends_with?: InputMaybe<Scalars['String']>;
  alias_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  alias_not_in?: InputMaybe<Array<Scalars['String']>>;
  alias_not_starts_with?: InputMaybe<Scalars['String']>;
  alias_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  alias_starts_with?: InputMaybe<Scalars['String']>;
  alias_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
  version_contains?: InputMaybe<Scalars['String']>;
  version_contains_nocase?: InputMaybe<Scalars['String']>;
  version_ends_with?: InputMaybe<Scalars['String']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']>;
  version_gt?: InputMaybe<Scalars['String']>;
  version_gte?: InputMaybe<Scalars['String']>;
  version_in?: InputMaybe<Array<Scalars['String']>>;
  version_lt?: InputMaybe<Scalars['String']>;
  version_lte?: InputMaybe<Scalars['String']>;
  version_not?: InputMaybe<Scalars['String']>;
  version_not_contains?: InputMaybe<Scalars['String']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']>;
  version_not_ends_with?: InputMaybe<Scalars['String']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  version_not_in?: InputMaybe<Array<Scalars['String']>>;
  version_not_starts_with?: InputMaybe<Scalars['String']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  version_starts_with?: InputMaybe<Scalars['String']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum ContractInfo_OrderBy {
  Address = 'address',
  Alias = 'alias',
  Id = 'id',
  Name = 'name',
  Version = 'version'
}

export type ContributionRewardExtParam = {
  __typename?: 'ContributionRewardExtParam';
  id: Scalars['ID'];
  rewarder: Scalars['Bytes'];
  voteParams: GenesisProtocolParam;
  votingMachine: Scalars['Bytes'];
};

export type ContributionRewardExtParam_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  rewarder?: InputMaybe<Scalars['Bytes']>;
  rewarder_contains?: InputMaybe<Scalars['Bytes']>;
  rewarder_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewarder_not?: InputMaybe<Scalars['Bytes']>;
  rewarder_not_contains?: InputMaybe<Scalars['Bytes']>;
  rewarder_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  voteParams?: InputMaybe<Scalars['String']>;
  voteParams_?: InputMaybe<GenesisProtocolParam_Filter>;
  voteParams_contains?: InputMaybe<Scalars['String']>;
  voteParams_contains_nocase?: InputMaybe<Scalars['String']>;
  voteParams_ends_with?: InputMaybe<Scalars['String']>;
  voteParams_ends_with_nocase?: InputMaybe<Scalars['String']>;
  voteParams_gt?: InputMaybe<Scalars['String']>;
  voteParams_gte?: InputMaybe<Scalars['String']>;
  voteParams_in?: InputMaybe<Array<Scalars['String']>>;
  voteParams_lt?: InputMaybe<Scalars['String']>;
  voteParams_lte?: InputMaybe<Scalars['String']>;
  voteParams_not?: InputMaybe<Scalars['String']>;
  voteParams_not_contains?: InputMaybe<Scalars['String']>;
  voteParams_not_contains_nocase?: InputMaybe<Scalars['String']>;
  voteParams_not_ends_with?: InputMaybe<Scalars['String']>;
  voteParams_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  voteParams_not_in?: InputMaybe<Array<Scalars['String']>>;
  voteParams_not_starts_with?: InputMaybe<Scalars['String']>;
  voteParams_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  voteParams_starts_with?: InputMaybe<Scalars['String']>;
  voteParams_starts_with_nocase?: InputMaybe<Scalars['String']>;
  votingMachine?: InputMaybe<Scalars['Bytes']>;
  votingMachine_contains?: InputMaybe<Scalars['Bytes']>;
  votingMachine_in?: InputMaybe<Array<Scalars['Bytes']>>;
  votingMachine_not?: InputMaybe<Scalars['Bytes']>;
  votingMachine_not_contains?: InputMaybe<Scalars['Bytes']>;
  votingMachine_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum ContributionRewardExtParam_OrderBy {
  Id = 'id',
  Rewarder = 'rewarder',
  VoteParams = 'voteParams',
  VotingMachine = 'votingMachine'
}

export type ContributionRewardNewContributionProposal = {
  __typename?: 'ContributionRewardNewContributionProposal';
  avatar: Scalars['Bytes'];
  beneficiary: Scalars['Bytes'];
  contract: Scalars['Bytes'];
  descriptionHash: Scalars['String'];
  ethReward: Scalars['BigInt'];
  externalToken: Scalars['Bytes'];
  externalTokenReward: Scalars['BigInt'];
  id: Scalars['ID'];
  nativeTokenReward: Scalars['BigInt'];
  periodLength?: Maybe<Scalars['BigInt']>;
  periods: Scalars['BigInt'];
  proposalId: Scalars['Bytes'];
  reputationReward: Scalars['BigInt'];
  txHash: Scalars['Bytes'];
  votingMachine: Scalars['Bytes'];
};

export type ContributionRewardNewContributionProposal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  avatar?: InputMaybe<Scalars['Bytes']>;
  avatar_contains?: InputMaybe<Scalars['Bytes']>;
  avatar_in?: InputMaybe<Array<Scalars['Bytes']>>;
  avatar_not?: InputMaybe<Scalars['Bytes']>;
  avatar_not_contains?: InputMaybe<Scalars['Bytes']>;
  avatar_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary?: InputMaybe<Scalars['Bytes']>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract?: InputMaybe<Scalars['Bytes']>;
  contract_contains?: InputMaybe<Scalars['Bytes']>;
  contract_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract_not?: InputMaybe<Scalars['Bytes']>;
  contract_not_contains?: InputMaybe<Scalars['Bytes']>;
  contract_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  descriptionHash?: InputMaybe<Scalars['String']>;
  descriptionHash_contains?: InputMaybe<Scalars['String']>;
  descriptionHash_contains_nocase?: InputMaybe<Scalars['String']>;
  descriptionHash_ends_with?: InputMaybe<Scalars['String']>;
  descriptionHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  descriptionHash_gt?: InputMaybe<Scalars['String']>;
  descriptionHash_gte?: InputMaybe<Scalars['String']>;
  descriptionHash_in?: InputMaybe<Array<Scalars['String']>>;
  descriptionHash_lt?: InputMaybe<Scalars['String']>;
  descriptionHash_lte?: InputMaybe<Scalars['String']>;
  descriptionHash_not?: InputMaybe<Scalars['String']>;
  descriptionHash_not_contains?: InputMaybe<Scalars['String']>;
  descriptionHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  descriptionHash_not_ends_with?: InputMaybe<Scalars['String']>;
  descriptionHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  descriptionHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  descriptionHash_not_starts_with?: InputMaybe<Scalars['String']>;
  descriptionHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  descriptionHash_starts_with?: InputMaybe<Scalars['String']>;
  descriptionHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ethReward?: InputMaybe<Scalars['BigInt']>;
  ethReward_gt?: InputMaybe<Scalars['BigInt']>;
  ethReward_gte?: InputMaybe<Scalars['BigInt']>;
  ethReward_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ethReward_lt?: InputMaybe<Scalars['BigInt']>;
  ethReward_lte?: InputMaybe<Scalars['BigInt']>;
  ethReward_not?: InputMaybe<Scalars['BigInt']>;
  ethReward_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  externalToken?: InputMaybe<Scalars['Bytes']>;
  externalTokenReward?: InputMaybe<Scalars['BigInt']>;
  externalTokenReward_gt?: InputMaybe<Scalars['BigInt']>;
  externalTokenReward_gte?: InputMaybe<Scalars['BigInt']>;
  externalTokenReward_in?: InputMaybe<Array<Scalars['BigInt']>>;
  externalTokenReward_lt?: InputMaybe<Scalars['BigInt']>;
  externalTokenReward_lte?: InputMaybe<Scalars['BigInt']>;
  externalTokenReward_not?: InputMaybe<Scalars['BigInt']>;
  externalTokenReward_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  externalToken_contains?: InputMaybe<Scalars['Bytes']>;
  externalToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  externalToken_not?: InputMaybe<Scalars['Bytes']>;
  externalToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  externalToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  nativeTokenReward?: InputMaybe<Scalars['BigInt']>;
  nativeTokenReward_gt?: InputMaybe<Scalars['BigInt']>;
  nativeTokenReward_gte?: InputMaybe<Scalars['BigInt']>;
  nativeTokenReward_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nativeTokenReward_lt?: InputMaybe<Scalars['BigInt']>;
  nativeTokenReward_lte?: InputMaybe<Scalars['BigInt']>;
  nativeTokenReward_not?: InputMaybe<Scalars['BigInt']>;
  nativeTokenReward_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  periodLength?: InputMaybe<Scalars['BigInt']>;
  periodLength_gt?: InputMaybe<Scalars['BigInt']>;
  periodLength_gte?: InputMaybe<Scalars['BigInt']>;
  periodLength_in?: InputMaybe<Array<Scalars['BigInt']>>;
  periodLength_lt?: InputMaybe<Scalars['BigInt']>;
  periodLength_lte?: InputMaybe<Scalars['BigInt']>;
  periodLength_not?: InputMaybe<Scalars['BigInt']>;
  periodLength_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  periods?: InputMaybe<Scalars['BigInt']>;
  periods_gt?: InputMaybe<Scalars['BigInt']>;
  periods_gte?: InputMaybe<Scalars['BigInt']>;
  periods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  periods_lt?: InputMaybe<Scalars['BigInt']>;
  periods_lte?: InputMaybe<Scalars['BigInt']>;
  periods_not?: InputMaybe<Scalars['BigInt']>;
  periods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposalId?: InputMaybe<Scalars['Bytes']>;
  proposalId_contains?: InputMaybe<Scalars['Bytes']>;
  proposalId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proposalId_not?: InputMaybe<Scalars['Bytes']>;
  proposalId_not_contains?: InputMaybe<Scalars['Bytes']>;
  proposalId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  reputationReward?: InputMaybe<Scalars['BigInt']>;
  reputationReward_gt?: InputMaybe<Scalars['BigInt']>;
  reputationReward_gte?: InputMaybe<Scalars['BigInt']>;
  reputationReward_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reputationReward_lt?: InputMaybe<Scalars['BigInt']>;
  reputationReward_lte?: InputMaybe<Scalars['BigInt']>;
  reputationReward_not?: InputMaybe<Scalars['BigInt']>;
  reputationReward_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  votingMachine?: InputMaybe<Scalars['Bytes']>;
  votingMachine_contains?: InputMaybe<Scalars['Bytes']>;
  votingMachine_in?: InputMaybe<Array<Scalars['Bytes']>>;
  votingMachine_not?: InputMaybe<Scalars['Bytes']>;
  votingMachine_not_contains?: InputMaybe<Scalars['Bytes']>;
  votingMachine_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum ContributionRewardNewContributionProposal_OrderBy {
  Avatar = 'avatar',
  Beneficiary = 'beneficiary',
  Contract = 'contract',
  DescriptionHash = 'descriptionHash',
  EthReward = 'ethReward',
  ExternalToken = 'externalToken',
  ExternalTokenReward = 'externalTokenReward',
  Id = 'id',
  NativeTokenReward = 'nativeTokenReward',
  PeriodLength = 'periodLength',
  Periods = 'periods',
  ProposalId = 'proposalId',
  ReputationReward = 'reputationReward',
  TxHash = 'txHash',
  VotingMachine = 'votingMachine'
}

export type ContributionRewardParam = {
  __typename?: 'ContributionRewardParam';
  id: Scalars['ID'];
  voteParams: GenesisProtocolParam;
  votingMachine: Scalars['Bytes'];
};

export type ContributionRewardParam_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  voteParams?: InputMaybe<Scalars['String']>;
  voteParams_?: InputMaybe<GenesisProtocolParam_Filter>;
  voteParams_contains?: InputMaybe<Scalars['String']>;
  voteParams_contains_nocase?: InputMaybe<Scalars['String']>;
  voteParams_ends_with?: InputMaybe<Scalars['String']>;
  voteParams_ends_with_nocase?: InputMaybe<Scalars['String']>;
  voteParams_gt?: InputMaybe<Scalars['String']>;
  voteParams_gte?: InputMaybe<Scalars['String']>;
  voteParams_in?: InputMaybe<Array<Scalars['String']>>;
  voteParams_lt?: InputMaybe<Scalars['String']>;
  voteParams_lte?: InputMaybe<Scalars['String']>;
  voteParams_not?: InputMaybe<Scalars['String']>;
  voteParams_not_contains?: InputMaybe<Scalars['String']>;
  voteParams_not_contains_nocase?: InputMaybe<Scalars['String']>;
  voteParams_not_ends_with?: InputMaybe<Scalars['String']>;
  voteParams_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  voteParams_not_in?: InputMaybe<Array<Scalars['String']>>;
  voteParams_not_starts_with?: InputMaybe<Scalars['String']>;
  voteParams_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  voteParams_starts_with?: InputMaybe<Scalars['String']>;
  voteParams_starts_with_nocase?: InputMaybe<Scalars['String']>;
  votingMachine?: InputMaybe<Scalars['Bytes']>;
  votingMachine_contains?: InputMaybe<Scalars['Bytes']>;
  votingMachine_in?: InputMaybe<Array<Scalars['Bytes']>>;
  votingMachine_not?: InputMaybe<Scalars['Bytes']>;
  votingMachine_not_contains?: InputMaybe<Scalars['Bytes']>;
  votingMachine_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum ContributionRewardParam_OrderBy {
  Id = 'id',
  VoteParams = 'voteParams',
  VotingMachine = 'votingMachine'
}

export type ContributionRewardProposal = {
  __typename?: 'ContributionRewardProposal';
  alreadyRedeemedEthPeriods?: Maybe<Scalars['BigInt']>;
  alreadyRedeemedExternalTokenPeriods?: Maybe<Scalars['BigInt']>;
  alreadyRedeemedNativeTokenPeriods?: Maybe<Scalars['BigInt']>;
  alreadyRedeemedReputationPeriods?: Maybe<Scalars['BigInt']>;
  avatar: Scalars['Bytes'];
  beneficiary: Scalars['Bytes'];
  contract: Scalars['Bytes'];
  descriptionHash: Scalars['String'];
  ethReward: Scalars['BigInt'];
  ethRewardLeft?: Maybe<Scalars['BigInt']>;
  executedAt?: Maybe<Scalars['BigInt']>;
  externalToken: Scalars['Bytes'];
  externalTokenReward: Scalars['BigInt'];
  externalTokenRewardLeft?: Maybe<Scalars['BigInt']>;
  id: Scalars['ID'];
  nativeTokenReward: Scalars['BigInt'];
  nativeTokenRewardLeft?: Maybe<Scalars['BigInt']>;
  periodLength?: Maybe<Scalars['BigInt']>;
  periods: Scalars['BigInt'];
  proposalId: Scalars['Bytes'];
  reputationChangeLeft?: Maybe<Scalars['BigInt']>;
  reputationReward: Scalars['BigInt'];
  votingMachine: Scalars['Bytes'];
};

export type ContributionRewardProposalResolved = {
  __typename?: 'ContributionRewardProposalResolved';
  avatar: Scalars['Bytes'];
  contract: Scalars['Bytes'];
  id: Scalars['ID'];
  passed?: Maybe<Scalars['Boolean']>;
  proposalId: Scalars['Bytes'];
  txHash: Scalars['Bytes'];
};

export type ContributionRewardProposalResolved_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  avatar?: InputMaybe<Scalars['Bytes']>;
  avatar_contains?: InputMaybe<Scalars['Bytes']>;
  avatar_in?: InputMaybe<Array<Scalars['Bytes']>>;
  avatar_not?: InputMaybe<Scalars['Bytes']>;
  avatar_not_contains?: InputMaybe<Scalars['Bytes']>;
  avatar_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract?: InputMaybe<Scalars['Bytes']>;
  contract_contains?: InputMaybe<Scalars['Bytes']>;
  contract_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract_not?: InputMaybe<Scalars['Bytes']>;
  contract_not_contains?: InputMaybe<Scalars['Bytes']>;
  contract_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  passed?: InputMaybe<Scalars['Boolean']>;
  passed_in?: InputMaybe<Array<Scalars['Boolean']>>;
  passed_not?: InputMaybe<Scalars['Boolean']>;
  passed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  proposalId?: InputMaybe<Scalars['Bytes']>;
  proposalId_contains?: InputMaybe<Scalars['Bytes']>;
  proposalId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proposalId_not?: InputMaybe<Scalars['Bytes']>;
  proposalId_not_contains?: InputMaybe<Scalars['Bytes']>;
  proposalId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum ContributionRewardProposalResolved_OrderBy {
  Avatar = 'avatar',
  Contract = 'contract',
  Id = 'id',
  Passed = 'passed',
  ProposalId = 'proposalId',
  TxHash = 'txHash'
}

export type ContributionRewardProposal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  alreadyRedeemedEthPeriods?: InputMaybe<Scalars['BigInt']>;
  alreadyRedeemedEthPeriods_gt?: InputMaybe<Scalars['BigInt']>;
  alreadyRedeemedEthPeriods_gte?: InputMaybe<Scalars['BigInt']>;
  alreadyRedeemedEthPeriods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  alreadyRedeemedEthPeriods_lt?: InputMaybe<Scalars['BigInt']>;
  alreadyRedeemedEthPeriods_lte?: InputMaybe<Scalars['BigInt']>;
  alreadyRedeemedEthPeriods_not?: InputMaybe<Scalars['BigInt']>;
  alreadyRedeemedEthPeriods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  alreadyRedeemedExternalTokenPeriods?: InputMaybe<Scalars['BigInt']>;
  alreadyRedeemedExternalTokenPeriods_gt?: InputMaybe<Scalars['BigInt']>;
  alreadyRedeemedExternalTokenPeriods_gte?: InputMaybe<Scalars['BigInt']>;
  alreadyRedeemedExternalTokenPeriods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  alreadyRedeemedExternalTokenPeriods_lt?: InputMaybe<Scalars['BigInt']>;
  alreadyRedeemedExternalTokenPeriods_lte?: InputMaybe<Scalars['BigInt']>;
  alreadyRedeemedExternalTokenPeriods_not?: InputMaybe<Scalars['BigInt']>;
  alreadyRedeemedExternalTokenPeriods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  alreadyRedeemedNativeTokenPeriods?: InputMaybe<Scalars['BigInt']>;
  alreadyRedeemedNativeTokenPeriods_gt?: InputMaybe<Scalars['BigInt']>;
  alreadyRedeemedNativeTokenPeriods_gte?: InputMaybe<Scalars['BigInt']>;
  alreadyRedeemedNativeTokenPeriods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  alreadyRedeemedNativeTokenPeriods_lt?: InputMaybe<Scalars['BigInt']>;
  alreadyRedeemedNativeTokenPeriods_lte?: InputMaybe<Scalars['BigInt']>;
  alreadyRedeemedNativeTokenPeriods_not?: InputMaybe<Scalars['BigInt']>;
  alreadyRedeemedNativeTokenPeriods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  alreadyRedeemedReputationPeriods?: InputMaybe<Scalars['BigInt']>;
  alreadyRedeemedReputationPeriods_gt?: InputMaybe<Scalars['BigInt']>;
  alreadyRedeemedReputationPeriods_gte?: InputMaybe<Scalars['BigInt']>;
  alreadyRedeemedReputationPeriods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  alreadyRedeemedReputationPeriods_lt?: InputMaybe<Scalars['BigInt']>;
  alreadyRedeemedReputationPeriods_lte?: InputMaybe<Scalars['BigInt']>;
  alreadyRedeemedReputationPeriods_not?: InputMaybe<Scalars['BigInt']>;
  alreadyRedeemedReputationPeriods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  avatar?: InputMaybe<Scalars['Bytes']>;
  avatar_contains?: InputMaybe<Scalars['Bytes']>;
  avatar_in?: InputMaybe<Array<Scalars['Bytes']>>;
  avatar_not?: InputMaybe<Scalars['Bytes']>;
  avatar_not_contains?: InputMaybe<Scalars['Bytes']>;
  avatar_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary?: InputMaybe<Scalars['Bytes']>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract?: InputMaybe<Scalars['Bytes']>;
  contract_contains?: InputMaybe<Scalars['Bytes']>;
  contract_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract_not?: InputMaybe<Scalars['Bytes']>;
  contract_not_contains?: InputMaybe<Scalars['Bytes']>;
  contract_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  descriptionHash?: InputMaybe<Scalars['String']>;
  descriptionHash_contains?: InputMaybe<Scalars['String']>;
  descriptionHash_contains_nocase?: InputMaybe<Scalars['String']>;
  descriptionHash_ends_with?: InputMaybe<Scalars['String']>;
  descriptionHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  descriptionHash_gt?: InputMaybe<Scalars['String']>;
  descriptionHash_gte?: InputMaybe<Scalars['String']>;
  descriptionHash_in?: InputMaybe<Array<Scalars['String']>>;
  descriptionHash_lt?: InputMaybe<Scalars['String']>;
  descriptionHash_lte?: InputMaybe<Scalars['String']>;
  descriptionHash_not?: InputMaybe<Scalars['String']>;
  descriptionHash_not_contains?: InputMaybe<Scalars['String']>;
  descriptionHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  descriptionHash_not_ends_with?: InputMaybe<Scalars['String']>;
  descriptionHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  descriptionHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  descriptionHash_not_starts_with?: InputMaybe<Scalars['String']>;
  descriptionHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  descriptionHash_starts_with?: InputMaybe<Scalars['String']>;
  descriptionHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ethReward?: InputMaybe<Scalars['BigInt']>;
  ethRewardLeft?: InputMaybe<Scalars['BigInt']>;
  ethRewardLeft_gt?: InputMaybe<Scalars['BigInt']>;
  ethRewardLeft_gte?: InputMaybe<Scalars['BigInt']>;
  ethRewardLeft_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ethRewardLeft_lt?: InputMaybe<Scalars['BigInt']>;
  ethRewardLeft_lte?: InputMaybe<Scalars['BigInt']>;
  ethRewardLeft_not?: InputMaybe<Scalars['BigInt']>;
  ethRewardLeft_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ethReward_gt?: InputMaybe<Scalars['BigInt']>;
  ethReward_gte?: InputMaybe<Scalars['BigInt']>;
  ethReward_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ethReward_lt?: InputMaybe<Scalars['BigInt']>;
  ethReward_lte?: InputMaybe<Scalars['BigInt']>;
  ethReward_not?: InputMaybe<Scalars['BigInt']>;
  ethReward_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedAt?: InputMaybe<Scalars['BigInt']>;
  executedAt_gt?: InputMaybe<Scalars['BigInt']>;
  executedAt_gte?: InputMaybe<Scalars['BigInt']>;
  executedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedAt_lt?: InputMaybe<Scalars['BigInt']>;
  executedAt_lte?: InputMaybe<Scalars['BigInt']>;
  executedAt_not?: InputMaybe<Scalars['BigInt']>;
  executedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  externalToken?: InputMaybe<Scalars['Bytes']>;
  externalTokenReward?: InputMaybe<Scalars['BigInt']>;
  externalTokenRewardLeft?: InputMaybe<Scalars['BigInt']>;
  externalTokenRewardLeft_gt?: InputMaybe<Scalars['BigInt']>;
  externalTokenRewardLeft_gte?: InputMaybe<Scalars['BigInt']>;
  externalTokenRewardLeft_in?: InputMaybe<Array<Scalars['BigInt']>>;
  externalTokenRewardLeft_lt?: InputMaybe<Scalars['BigInt']>;
  externalTokenRewardLeft_lte?: InputMaybe<Scalars['BigInt']>;
  externalTokenRewardLeft_not?: InputMaybe<Scalars['BigInt']>;
  externalTokenRewardLeft_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  externalTokenReward_gt?: InputMaybe<Scalars['BigInt']>;
  externalTokenReward_gte?: InputMaybe<Scalars['BigInt']>;
  externalTokenReward_in?: InputMaybe<Array<Scalars['BigInt']>>;
  externalTokenReward_lt?: InputMaybe<Scalars['BigInt']>;
  externalTokenReward_lte?: InputMaybe<Scalars['BigInt']>;
  externalTokenReward_not?: InputMaybe<Scalars['BigInt']>;
  externalTokenReward_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  externalToken_contains?: InputMaybe<Scalars['Bytes']>;
  externalToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  externalToken_not?: InputMaybe<Scalars['Bytes']>;
  externalToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  externalToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  nativeTokenReward?: InputMaybe<Scalars['BigInt']>;
  nativeTokenRewardLeft?: InputMaybe<Scalars['BigInt']>;
  nativeTokenRewardLeft_gt?: InputMaybe<Scalars['BigInt']>;
  nativeTokenRewardLeft_gte?: InputMaybe<Scalars['BigInt']>;
  nativeTokenRewardLeft_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nativeTokenRewardLeft_lt?: InputMaybe<Scalars['BigInt']>;
  nativeTokenRewardLeft_lte?: InputMaybe<Scalars['BigInt']>;
  nativeTokenRewardLeft_not?: InputMaybe<Scalars['BigInt']>;
  nativeTokenRewardLeft_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nativeTokenReward_gt?: InputMaybe<Scalars['BigInt']>;
  nativeTokenReward_gte?: InputMaybe<Scalars['BigInt']>;
  nativeTokenReward_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nativeTokenReward_lt?: InputMaybe<Scalars['BigInt']>;
  nativeTokenReward_lte?: InputMaybe<Scalars['BigInt']>;
  nativeTokenReward_not?: InputMaybe<Scalars['BigInt']>;
  nativeTokenReward_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  periodLength?: InputMaybe<Scalars['BigInt']>;
  periodLength_gt?: InputMaybe<Scalars['BigInt']>;
  periodLength_gte?: InputMaybe<Scalars['BigInt']>;
  periodLength_in?: InputMaybe<Array<Scalars['BigInt']>>;
  periodLength_lt?: InputMaybe<Scalars['BigInt']>;
  periodLength_lte?: InputMaybe<Scalars['BigInt']>;
  periodLength_not?: InputMaybe<Scalars['BigInt']>;
  periodLength_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  periods?: InputMaybe<Scalars['BigInt']>;
  periods_gt?: InputMaybe<Scalars['BigInt']>;
  periods_gte?: InputMaybe<Scalars['BigInt']>;
  periods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  periods_lt?: InputMaybe<Scalars['BigInt']>;
  periods_lte?: InputMaybe<Scalars['BigInt']>;
  periods_not?: InputMaybe<Scalars['BigInt']>;
  periods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposalId?: InputMaybe<Scalars['Bytes']>;
  proposalId_contains?: InputMaybe<Scalars['Bytes']>;
  proposalId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proposalId_not?: InputMaybe<Scalars['Bytes']>;
  proposalId_not_contains?: InputMaybe<Scalars['Bytes']>;
  proposalId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  reputationChangeLeft?: InputMaybe<Scalars['BigInt']>;
  reputationChangeLeft_gt?: InputMaybe<Scalars['BigInt']>;
  reputationChangeLeft_gte?: InputMaybe<Scalars['BigInt']>;
  reputationChangeLeft_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reputationChangeLeft_lt?: InputMaybe<Scalars['BigInt']>;
  reputationChangeLeft_lte?: InputMaybe<Scalars['BigInt']>;
  reputationChangeLeft_not?: InputMaybe<Scalars['BigInt']>;
  reputationChangeLeft_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reputationReward?: InputMaybe<Scalars['BigInt']>;
  reputationReward_gt?: InputMaybe<Scalars['BigInt']>;
  reputationReward_gte?: InputMaybe<Scalars['BigInt']>;
  reputationReward_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reputationReward_lt?: InputMaybe<Scalars['BigInt']>;
  reputationReward_lte?: InputMaybe<Scalars['BigInt']>;
  reputationReward_not?: InputMaybe<Scalars['BigInt']>;
  reputationReward_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  votingMachine?: InputMaybe<Scalars['Bytes']>;
  votingMachine_contains?: InputMaybe<Scalars['Bytes']>;
  votingMachine_in?: InputMaybe<Array<Scalars['Bytes']>>;
  votingMachine_not?: InputMaybe<Scalars['Bytes']>;
  votingMachine_not_contains?: InputMaybe<Scalars['Bytes']>;
  votingMachine_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum ContributionRewardProposal_OrderBy {
  AlreadyRedeemedEthPeriods = 'alreadyRedeemedEthPeriods',
  AlreadyRedeemedExternalTokenPeriods = 'alreadyRedeemedExternalTokenPeriods',
  AlreadyRedeemedNativeTokenPeriods = 'alreadyRedeemedNativeTokenPeriods',
  AlreadyRedeemedReputationPeriods = 'alreadyRedeemedReputationPeriods',
  Avatar = 'avatar',
  Beneficiary = 'beneficiary',
  Contract = 'contract',
  DescriptionHash = 'descriptionHash',
  EthReward = 'ethReward',
  EthRewardLeft = 'ethRewardLeft',
  ExecutedAt = 'executedAt',
  ExternalToken = 'externalToken',
  ExternalTokenReward = 'externalTokenReward',
  ExternalTokenRewardLeft = 'externalTokenRewardLeft',
  Id = 'id',
  NativeTokenReward = 'nativeTokenReward',
  NativeTokenRewardLeft = 'nativeTokenRewardLeft',
  PeriodLength = 'periodLength',
  Periods = 'periods',
  ProposalId = 'proposalId',
  ReputationChangeLeft = 'reputationChangeLeft',
  ReputationReward = 'reputationReward',
  VotingMachine = 'votingMachine'
}

export type ContributionRewardRedeemEther = {
  __typename?: 'ContributionRewardRedeemEther';
  amount: Scalars['BigInt'];
  avatar: Scalars['Bytes'];
  beneficiary: Scalars['Bytes'];
  contract: Scalars['Bytes'];
  id: Scalars['ID'];
  proposalId: Scalars['Bytes'];
  txHash: Scalars['Bytes'];
};

export type ContributionRewardRedeemEther_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  avatar?: InputMaybe<Scalars['Bytes']>;
  avatar_contains?: InputMaybe<Scalars['Bytes']>;
  avatar_in?: InputMaybe<Array<Scalars['Bytes']>>;
  avatar_not?: InputMaybe<Scalars['Bytes']>;
  avatar_not_contains?: InputMaybe<Scalars['Bytes']>;
  avatar_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary?: InputMaybe<Scalars['Bytes']>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract?: InputMaybe<Scalars['Bytes']>;
  contract_contains?: InputMaybe<Scalars['Bytes']>;
  contract_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract_not?: InputMaybe<Scalars['Bytes']>;
  contract_not_contains?: InputMaybe<Scalars['Bytes']>;
  contract_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  proposalId?: InputMaybe<Scalars['Bytes']>;
  proposalId_contains?: InputMaybe<Scalars['Bytes']>;
  proposalId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proposalId_not?: InputMaybe<Scalars['Bytes']>;
  proposalId_not_contains?: InputMaybe<Scalars['Bytes']>;
  proposalId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum ContributionRewardRedeemEther_OrderBy {
  Amount = 'amount',
  Avatar = 'avatar',
  Beneficiary = 'beneficiary',
  Contract = 'contract',
  Id = 'id',
  ProposalId = 'proposalId',
  TxHash = 'txHash'
}

export type ContributionRewardRedeemExternalToken = {
  __typename?: 'ContributionRewardRedeemExternalToken';
  amount: Scalars['BigInt'];
  avatar: Scalars['Bytes'];
  beneficiary: Scalars['Bytes'];
  contract: Scalars['Bytes'];
  id: Scalars['ID'];
  proposalId: Scalars['Bytes'];
  txHash: Scalars['Bytes'];
};

export type ContributionRewardRedeemExternalToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  avatar?: InputMaybe<Scalars['Bytes']>;
  avatar_contains?: InputMaybe<Scalars['Bytes']>;
  avatar_in?: InputMaybe<Array<Scalars['Bytes']>>;
  avatar_not?: InputMaybe<Scalars['Bytes']>;
  avatar_not_contains?: InputMaybe<Scalars['Bytes']>;
  avatar_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary?: InputMaybe<Scalars['Bytes']>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract?: InputMaybe<Scalars['Bytes']>;
  contract_contains?: InputMaybe<Scalars['Bytes']>;
  contract_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract_not?: InputMaybe<Scalars['Bytes']>;
  contract_not_contains?: InputMaybe<Scalars['Bytes']>;
  contract_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  proposalId?: InputMaybe<Scalars['Bytes']>;
  proposalId_contains?: InputMaybe<Scalars['Bytes']>;
  proposalId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proposalId_not?: InputMaybe<Scalars['Bytes']>;
  proposalId_not_contains?: InputMaybe<Scalars['Bytes']>;
  proposalId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum ContributionRewardRedeemExternalToken_OrderBy {
  Amount = 'amount',
  Avatar = 'avatar',
  Beneficiary = 'beneficiary',
  Contract = 'contract',
  Id = 'id',
  ProposalId = 'proposalId',
  TxHash = 'txHash'
}

export type ContributionRewardRedeemNativeToken = {
  __typename?: 'ContributionRewardRedeemNativeToken';
  amount: Scalars['BigInt'];
  avatar: Scalars['Bytes'];
  beneficiary: Scalars['Bytes'];
  contract: Scalars['Bytes'];
  id: Scalars['ID'];
  proposalId: Scalars['Bytes'];
  txHash: Scalars['Bytes'];
};

export type ContributionRewardRedeemNativeToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  avatar?: InputMaybe<Scalars['Bytes']>;
  avatar_contains?: InputMaybe<Scalars['Bytes']>;
  avatar_in?: InputMaybe<Array<Scalars['Bytes']>>;
  avatar_not?: InputMaybe<Scalars['Bytes']>;
  avatar_not_contains?: InputMaybe<Scalars['Bytes']>;
  avatar_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary?: InputMaybe<Scalars['Bytes']>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract?: InputMaybe<Scalars['Bytes']>;
  contract_contains?: InputMaybe<Scalars['Bytes']>;
  contract_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract_not?: InputMaybe<Scalars['Bytes']>;
  contract_not_contains?: InputMaybe<Scalars['Bytes']>;
  contract_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  proposalId?: InputMaybe<Scalars['Bytes']>;
  proposalId_contains?: InputMaybe<Scalars['Bytes']>;
  proposalId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proposalId_not?: InputMaybe<Scalars['Bytes']>;
  proposalId_not_contains?: InputMaybe<Scalars['Bytes']>;
  proposalId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum ContributionRewardRedeemNativeToken_OrderBy {
  Amount = 'amount',
  Avatar = 'avatar',
  Beneficiary = 'beneficiary',
  Contract = 'contract',
  Id = 'id',
  ProposalId = 'proposalId',
  TxHash = 'txHash'
}

export type ContributionRewardRedeemReputation = {
  __typename?: 'ContributionRewardRedeemReputation';
  amount: Scalars['BigInt'];
  avatar: Scalars['Bytes'];
  beneficiary: Scalars['Bytes'];
  contract: Scalars['Bytes'];
  id: Scalars['ID'];
  proposalId: Scalars['Bytes'];
  txHash: Scalars['Bytes'];
};

export type ContributionRewardRedeemReputation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  avatar?: InputMaybe<Scalars['Bytes']>;
  avatar_contains?: InputMaybe<Scalars['Bytes']>;
  avatar_in?: InputMaybe<Array<Scalars['Bytes']>>;
  avatar_not?: InputMaybe<Scalars['Bytes']>;
  avatar_not_contains?: InputMaybe<Scalars['Bytes']>;
  avatar_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary?: InputMaybe<Scalars['Bytes']>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract?: InputMaybe<Scalars['Bytes']>;
  contract_contains?: InputMaybe<Scalars['Bytes']>;
  contract_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract_not?: InputMaybe<Scalars['Bytes']>;
  contract_not_contains?: InputMaybe<Scalars['Bytes']>;
  contract_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  proposalId?: InputMaybe<Scalars['Bytes']>;
  proposalId_contains?: InputMaybe<Scalars['Bytes']>;
  proposalId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proposalId_not?: InputMaybe<Scalars['Bytes']>;
  proposalId_not_contains?: InputMaybe<Scalars['Bytes']>;
  proposalId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum ContributionRewardRedeemReputation_OrderBy {
  Amount = 'amount',
  Avatar = 'avatar',
  Beneficiary = 'beneficiary',
  Contract = 'contract',
  Id = 'id',
  ProposalId = 'proposalId',
  TxHash = 'txHash'
}

export type ControllerAddGlobalConstraint = {
  __typename?: 'ControllerAddGlobalConstraint';
  controller: Scalars['Bytes'];
  globalConstraint: Scalars['Bytes'];
  id: Scalars['ID'];
  paramsHash: Scalars['Bytes'];
  txHash: Scalars['Bytes'];
  type: Scalars['String'];
};

export type ControllerAddGlobalConstraint_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  controller?: InputMaybe<Scalars['Bytes']>;
  controller_contains?: InputMaybe<Scalars['Bytes']>;
  controller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  controller_not?: InputMaybe<Scalars['Bytes']>;
  controller_not_contains?: InputMaybe<Scalars['Bytes']>;
  controller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  globalConstraint?: InputMaybe<Scalars['Bytes']>;
  globalConstraint_contains?: InputMaybe<Scalars['Bytes']>;
  globalConstraint_in?: InputMaybe<Array<Scalars['Bytes']>>;
  globalConstraint_not?: InputMaybe<Scalars['Bytes']>;
  globalConstraint_not_contains?: InputMaybe<Scalars['Bytes']>;
  globalConstraint_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  paramsHash?: InputMaybe<Scalars['Bytes']>;
  paramsHash_contains?: InputMaybe<Scalars['Bytes']>;
  paramsHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  paramsHash_not?: InputMaybe<Scalars['Bytes']>;
  paramsHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  paramsHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  type?: InputMaybe<Scalars['String']>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_contains_nocase?: InputMaybe<Scalars['String']>;
  type_ends_with?: InputMaybe<Scalars['String']>;
  type_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<Scalars['String']>>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_not?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']>;
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  type_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_in?: InputMaybe<Array<Scalars['String']>>;
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  type_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_starts_with?: InputMaybe<Scalars['String']>;
  type_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum ControllerAddGlobalConstraint_OrderBy {
  Controller = 'controller',
  GlobalConstraint = 'globalConstraint',
  Id = 'id',
  ParamsHash = 'paramsHash',
  TxHash = 'txHash',
  Type = 'type'
}

export type ControllerGlobalConstraint = {
  __typename?: 'ControllerGlobalConstraint';
  address: Scalars['Bytes'];
  id: Scalars['ID'];
  paramsHash: Scalars['Bytes'];
  type: Scalars['String'];
};

export type ControllerGlobalConstraint_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  paramsHash?: InputMaybe<Scalars['Bytes']>;
  paramsHash_contains?: InputMaybe<Scalars['Bytes']>;
  paramsHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  paramsHash_not?: InputMaybe<Scalars['Bytes']>;
  paramsHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  paramsHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  type?: InputMaybe<Scalars['String']>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_contains_nocase?: InputMaybe<Scalars['String']>;
  type_ends_with?: InputMaybe<Scalars['String']>;
  type_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<Scalars['String']>>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_not?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']>;
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  type_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_in?: InputMaybe<Array<Scalars['String']>>;
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  type_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_starts_with?: InputMaybe<Scalars['String']>;
  type_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum ControllerGlobalConstraint_OrderBy {
  Address = 'address',
  Id = 'id',
  ParamsHash = 'paramsHash',
  Type = 'type'
}

export type ControllerOrganization = {
  __typename?: 'ControllerOrganization';
  avatarAddress: Scalars['Bytes'];
  controller: Scalars['Bytes'];
  id: Scalars['ID'];
  nativeReputation: ReputationContract;
  nativeToken: TokenContract;
};

export type ControllerOrganization_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  avatarAddress?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_contains?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  avatarAddress_not?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  controller?: InputMaybe<Scalars['Bytes']>;
  controller_contains?: InputMaybe<Scalars['Bytes']>;
  controller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  controller_not?: InputMaybe<Scalars['Bytes']>;
  controller_not_contains?: InputMaybe<Scalars['Bytes']>;
  controller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  nativeReputation?: InputMaybe<Scalars['String']>;
  nativeReputation_?: InputMaybe<ReputationContract_Filter>;
  nativeReputation_contains?: InputMaybe<Scalars['String']>;
  nativeReputation_contains_nocase?: InputMaybe<Scalars['String']>;
  nativeReputation_ends_with?: InputMaybe<Scalars['String']>;
  nativeReputation_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nativeReputation_gt?: InputMaybe<Scalars['String']>;
  nativeReputation_gte?: InputMaybe<Scalars['String']>;
  nativeReputation_in?: InputMaybe<Array<Scalars['String']>>;
  nativeReputation_lt?: InputMaybe<Scalars['String']>;
  nativeReputation_lte?: InputMaybe<Scalars['String']>;
  nativeReputation_not?: InputMaybe<Scalars['String']>;
  nativeReputation_not_contains?: InputMaybe<Scalars['String']>;
  nativeReputation_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nativeReputation_not_ends_with?: InputMaybe<Scalars['String']>;
  nativeReputation_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nativeReputation_not_in?: InputMaybe<Array<Scalars['String']>>;
  nativeReputation_not_starts_with?: InputMaybe<Scalars['String']>;
  nativeReputation_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nativeReputation_starts_with?: InputMaybe<Scalars['String']>;
  nativeReputation_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nativeToken?: InputMaybe<Scalars['String']>;
  nativeToken_?: InputMaybe<TokenContract_Filter>;
  nativeToken_contains?: InputMaybe<Scalars['String']>;
  nativeToken_contains_nocase?: InputMaybe<Scalars['String']>;
  nativeToken_ends_with?: InputMaybe<Scalars['String']>;
  nativeToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nativeToken_gt?: InputMaybe<Scalars['String']>;
  nativeToken_gte?: InputMaybe<Scalars['String']>;
  nativeToken_in?: InputMaybe<Array<Scalars['String']>>;
  nativeToken_lt?: InputMaybe<Scalars['String']>;
  nativeToken_lte?: InputMaybe<Scalars['String']>;
  nativeToken_not?: InputMaybe<Scalars['String']>;
  nativeToken_not_contains?: InputMaybe<Scalars['String']>;
  nativeToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nativeToken_not_ends_with?: InputMaybe<Scalars['String']>;
  nativeToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nativeToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  nativeToken_not_starts_with?: InputMaybe<Scalars['String']>;
  nativeToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nativeToken_starts_with?: InputMaybe<Scalars['String']>;
  nativeToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum ControllerOrganization_OrderBy {
  AvatarAddress = 'avatarAddress',
  Controller = 'controller',
  Id = 'id',
  NativeReputation = 'nativeReputation',
  NativeToken = 'nativeToken'
}

export type ControllerRegisterScheme = {
  __typename?: 'ControllerRegisterScheme';
  contract: Scalars['Bytes'];
  controller: Scalars['Bytes'];
  id: Scalars['ID'];
  scheme: Scalars['Bytes'];
  txHash: Scalars['Bytes'];
};

export type ControllerRegisterScheme_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  contract?: InputMaybe<Scalars['Bytes']>;
  contract_contains?: InputMaybe<Scalars['Bytes']>;
  contract_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract_not?: InputMaybe<Scalars['Bytes']>;
  contract_not_contains?: InputMaybe<Scalars['Bytes']>;
  contract_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  controller?: InputMaybe<Scalars['Bytes']>;
  controller_contains?: InputMaybe<Scalars['Bytes']>;
  controller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  controller_not?: InputMaybe<Scalars['Bytes']>;
  controller_not_contains?: InputMaybe<Scalars['Bytes']>;
  controller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  scheme?: InputMaybe<Scalars['Bytes']>;
  scheme_contains?: InputMaybe<Scalars['Bytes']>;
  scheme_in?: InputMaybe<Array<Scalars['Bytes']>>;
  scheme_not?: InputMaybe<Scalars['Bytes']>;
  scheme_not_contains?: InputMaybe<Scalars['Bytes']>;
  scheme_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum ControllerRegisterScheme_OrderBy {
  Contract = 'contract',
  Controller = 'controller',
  Id = 'id',
  Scheme = 'scheme',
  TxHash = 'txHash'
}

export type ControllerRemoveGlobalConstraint = {
  __typename?: 'ControllerRemoveGlobalConstraint';
  controller: Scalars['Bytes'];
  globalConstraint: Scalars['Bytes'];
  id: Scalars['ID'];
  isPre?: Maybe<Scalars['Boolean']>;
  txHash: Scalars['Bytes'];
};

export type ControllerRemoveGlobalConstraint_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  controller?: InputMaybe<Scalars['Bytes']>;
  controller_contains?: InputMaybe<Scalars['Bytes']>;
  controller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  controller_not?: InputMaybe<Scalars['Bytes']>;
  controller_not_contains?: InputMaybe<Scalars['Bytes']>;
  controller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  globalConstraint?: InputMaybe<Scalars['Bytes']>;
  globalConstraint_contains?: InputMaybe<Scalars['Bytes']>;
  globalConstraint_in?: InputMaybe<Array<Scalars['Bytes']>>;
  globalConstraint_not?: InputMaybe<Scalars['Bytes']>;
  globalConstraint_not_contains?: InputMaybe<Scalars['Bytes']>;
  globalConstraint_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isPre?: InputMaybe<Scalars['Boolean']>;
  isPre_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isPre_not?: InputMaybe<Scalars['Boolean']>;
  isPre_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum ControllerRemoveGlobalConstraint_OrderBy {
  Controller = 'controller',
  GlobalConstraint = 'globalConstraint',
  Id = 'id',
  IsPre = 'isPre',
  TxHash = 'txHash'
}

export type ControllerScheme = {
  __typename?: 'ControllerScheme';
  address: Scalars['Bytes'];
  alias?: Maybe<Scalars['String']>;
  canDelegateCall?: Maybe<Scalars['Boolean']>;
  canManageGlobalConstraints?: Maybe<Scalars['Boolean']>;
  canRegisterSchemes?: Maybe<Scalars['Boolean']>;
  canUpgradeController?: Maybe<Scalars['Boolean']>;
  continuousLocking4ReputationParams?: Maybe<ContinuousLocking4ReputationParams>;
  contributionRewardExtParams?: Maybe<ContributionRewardExtParam>;
  contributionRewardParams?: Maybe<ContributionRewardParam>;
  dao: Dao;
  error?: Maybe<Scalars['BigInt']>;
  genericSchemeMultiCallParams?: Maybe<GenericSchemeMultiCallParam>;
  genericSchemeParams?: Maybe<GenericSchemeParam>;
  gpQueue?: Maybe<GpQueue>;
  id: Scalars['ID'];
  isRegistered: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  numberOfBoostedProposals: Scalars['BigInt'];
  numberOfExpiredInQueueProposals: Scalars['BigInt'];
  numberOfPreBoostedProposals: Scalars['BigInt'];
  numberOfQueuedProposals: Scalars['BigInt'];
  paramsHash: Scalars['Bytes'];
  schemeRegistrarParams?: Maybe<SchemeRegistrarParam>;
  uGenericSchemeParams?: Maybe<UGenericSchemeParam>;
  version?: Maybe<Scalars['String']>;
};

export type ControllerScheme_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  alias?: InputMaybe<Scalars['String']>;
  alias_contains?: InputMaybe<Scalars['String']>;
  alias_contains_nocase?: InputMaybe<Scalars['String']>;
  alias_ends_with?: InputMaybe<Scalars['String']>;
  alias_ends_with_nocase?: InputMaybe<Scalars['String']>;
  alias_gt?: InputMaybe<Scalars['String']>;
  alias_gte?: InputMaybe<Scalars['String']>;
  alias_in?: InputMaybe<Array<Scalars['String']>>;
  alias_lt?: InputMaybe<Scalars['String']>;
  alias_lte?: InputMaybe<Scalars['String']>;
  alias_not?: InputMaybe<Scalars['String']>;
  alias_not_contains?: InputMaybe<Scalars['String']>;
  alias_not_contains_nocase?: InputMaybe<Scalars['String']>;
  alias_not_ends_with?: InputMaybe<Scalars['String']>;
  alias_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  alias_not_in?: InputMaybe<Array<Scalars['String']>>;
  alias_not_starts_with?: InputMaybe<Scalars['String']>;
  alias_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  alias_starts_with?: InputMaybe<Scalars['String']>;
  alias_starts_with_nocase?: InputMaybe<Scalars['String']>;
  canDelegateCall?: InputMaybe<Scalars['Boolean']>;
  canDelegateCall_in?: InputMaybe<Array<Scalars['Boolean']>>;
  canDelegateCall_not?: InputMaybe<Scalars['Boolean']>;
  canDelegateCall_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  canManageGlobalConstraints?: InputMaybe<Scalars['Boolean']>;
  canManageGlobalConstraints_in?: InputMaybe<Array<Scalars['Boolean']>>;
  canManageGlobalConstraints_not?: InputMaybe<Scalars['Boolean']>;
  canManageGlobalConstraints_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  canRegisterSchemes?: InputMaybe<Scalars['Boolean']>;
  canRegisterSchemes_in?: InputMaybe<Array<Scalars['Boolean']>>;
  canRegisterSchemes_not?: InputMaybe<Scalars['Boolean']>;
  canRegisterSchemes_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  canUpgradeController?: InputMaybe<Scalars['Boolean']>;
  canUpgradeController_in?: InputMaybe<Array<Scalars['Boolean']>>;
  canUpgradeController_not?: InputMaybe<Scalars['Boolean']>;
  canUpgradeController_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  continuousLocking4ReputationParams?: InputMaybe<Scalars['String']>;
  continuousLocking4ReputationParams_?: InputMaybe<ContinuousLocking4ReputationParams_Filter>;
  continuousLocking4ReputationParams_contains?: InputMaybe<Scalars['String']>;
  continuousLocking4ReputationParams_contains_nocase?: InputMaybe<Scalars['String']>;
  continuousLocking4ReputationParams_ends_with?: InputMaybe<Scalars['String']>;
  continuousLocking4ReputationParams_ends_with_nocase?: InputMaybe<Scalars['String']>;
  continuousLocking4ReputationParams_gt?: InputMaybe<Scalars['String']>;
  continuousLocking4ReputationParams_gte?: InputMaybe<Scalars['String']>;
  continuousLocking4ReputationParams_in?: InputMaybe<Array<Scalars['String']>>;
  continuousLocking4ReputationParams_lt?: InputMaybe<Scalars['String']>;
  continuousLocking4ReputationParams_lte?: InputMaybe<Scalars['String']>;
  continuousLocking4ReputationParams_not?: InputMaybe<Scalars['String']>;
  continuousLocking4ReputationParams_not_contains?: InputMaybe<Scalars['String']>;
  continuousLocking4ReputationParams_not_contains_nocase?: InputMaybe<Scalars['String']>;
  continuousLocking4ReputationParams_not_ends_with?: InputMaybe<Scalars['String']>;
  continuousLocking4ReputationParams_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  continuousLocking4ReputationParams_not_in?: InputMaybe<Array<Scalars['String']>>;
  continuousLocking4ReputationParams_not_starts_with?: InputMaybe<Scalars['String']>;
  continuousLocking4ReputationParams_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  continuousLocking4ReputationParams_starts_with?: InputMaybe<Scalars['String']>;
  continuousLocking4ReputationParams_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contributionRewardExtParams?: InputMaybe<Scalars['String']>;
  contributionRewardExtParams_?: InputMaybe<ContributionRewardExtParam_Filter>;
  contributionRewardExtParams_contains?: InputMaybe<Scalars['String']>;
  contributionRewardExtParams_contains_nocase?: InputMaybe<Scalars['String']>;
  contributionRewardExtParams_ends_with?: InputMaybe<Scalars['String']>;
  contributionRewardExtParams_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contributionRewardExtParams_gt?: InputMaybe<Scalars['String']>;
  contributionRewardExtParams_gte?: InputMaybe<Scalars['String']>;
  contributionRewardExtParams_in?: InputMaybe<Array<Scalars['String']>>;
  contributionRewardExtParams_lt?: InputMaybe<Scalars['String']>;
  contributionRewardExtParams_lte?: InputMaybe<Scalars['String']>;
  contributionRewardExtParams_not?: InputMaybe<Scalars['String']>;
  contributionRewardExtParams_not_contains?: InputMaybe<Scalars['String']>;
  contributionRewardExtParams_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contributionRewardExtParams_not_ends_with?: InputMaybe<Scalars['String']>;
  contributionRewardExtParams_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contributionRewardExtParams_not_in?: InputMaybe<Array<Scalars['String']>>;
  contributionRewardExtParams_not_starts_with?: InputMaybe<Scalars['String']>;
  contributionRewardExtParams_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contributionRewardExtParams_starts_with?: InputMaybe<Scalars['String']>;
  contributionRewardExtParams_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contributionRewardParams?: InputMaybe<Scalars['String']>;
  contributionRewardParams_?: InputMaybe<ContributionRewardParam_Filter>;
  contributionRewardParams_contains?: InputMaybe<Scalars['String']>;
  contributionRewardParams_contains_nocase?: InputMaybe<Scalars['String']>;
  contributionRewardParams_ends_with?: InputMaybe<Scalars['String']>;
  contributionRewardParams_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contributionRewardParams_gt?: InputMaybe<Scalars['String']>;
  contributionRewardParams_gte?: InputMaybe<Scalars['String']>;
  contributionRewardParams_in?: InputMaybe<Array<Scalars['String']>>;
  contributionRewardParams_lt?: InputMaybe<Scalars['String']>;
  contributionRewardParams_lte?: InputMaybe<Scalars['String']>;
  contributionRewardParams_not?: InputMaybe<Scalars['String']>;
  contributionRewardParams_not_contains?: InputMaybe<Scalars['String']>;
  contributionRewardParams_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contributionRewardParams_not_ends_with?: InputMaybe<Scalars['String']>;
  contributionRewardParams_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contributionRewardParams_not_in?: InputMaybe<Array<Scalars['String']>>;
  contributionRewardParams_not_starts_with?: InputMaybe<Scalars['String']>;
  contributionRewardParams_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contributionRewardParams_starts_with?: InputMaybe<Scalars['String']>;
  contributionRewardParams_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dao?: InputMaybe<Scalars['String']>;
  dao_?: InputMaybe<Dao_Filter>;
  dao_contains?: InputMaybe<Scalars['String']>;
  dao_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_ends_with?: InputMaybe<Scalars['String']>;
  dao_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_gt?: InputMaybe<Scalars['String']>;
  dao_gte?: InputMaybe<Scalars['String']>;
  dao_in?: InputMaybe<Array<Scalars['String']>>;
  dao_lt?: InputMaybe<Scalars['String']>;
  dao_lte?: InputMaybe<Scalars['String']>;
  dao_not?: InputMaybe<Scalars['String']>;
  dao_not_contains?: InputMaybe<Scalars['String']>;
  dao_not_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_not_ends_with?: InputMaybe<Scalars['String']>;
  dao_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_not_in?: InputMaybe<Array<Scalars['String']>>;
  dao_not_starts_with?: InputMaybe<Scalars['String']>;
  dao_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dao_starts_with?: InputMaybe<Scalars['String']>;
  dao_starts_with_nocase?: InputMaybe<Scalars['String']>;
  error?: InputMaybe<Scalars['BigInt']>;
  error_gt?: InputMaybe<Scalars['BigInt']>;
  error_gte?: InputMaybe<Scalars['BigInt']>;
  error_in?: InputMaybe<Array<Scalars['BigInt']>>;
  error_lt?: InputMaybe<Scalars['BigInt']>;
  error_lte?: InputMaybe<Scalars['BigInt']>;
  error_not?: InputMaybe<Scalars['BigInt']>;
  error_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  genericSchemeMultiCallParams?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCallParams_?: InputMaybe<GenericSchemeMultiCallParam_Filter>;
  genericSchemeMultiCallParams_contains?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCallParams_contains_nocase?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCallParams_ends_with?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCallParams_ends_with_nocase?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCallParams_gt?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCallParams_gte?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCallParams_in?: InputMaybe<Array<Scalars['String']>>;
  genericSchemeMultiCallParams_lt?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCallParams_lte?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCallParams_not?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCallParams_not_contains?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCallParams_not_contains_nocase?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCallParams_not_ends_with?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCallParams_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCallParams_not_in?: InputMaybe<Array<Scalars['String']>>;
  genericSchemeMultiCallParams_not_starts_with?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCallParams_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCallParams_starts_with?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCallParams_starts_with_nocase?: InputMaybe<Scalars['String']>;
  genericSchemeParams?: InputMaybe<Scalars['String']>;
  genericSchemeParams_?: InputMaybe<GenericSchemeParam_Filter>;
  genericSchemeParams_contains?: InputMaybe<Scalars['String']>;
  genericSchemeParams_contains_nocase?: InputMaybe<Scalars['String']>;
  genericSchemeParams_ends_with?: InputMaybe<Scalars['String']>;
  genericSchemeParams_ends_with_nocase?: InputMaybe<Scalars['String']>;
  genericSchemeParams_gt?: InputMaybe<Scalars['String']>;
  genericSchemeParams_gte?: InputMaybe<Scalars['String']>;
  genericSchemeParams_in?: InputMaybe<Array<Scalars['String']>>;
  genericSchemeParams_lt?: InputMaybe<Scalars['String']>;
  genericSchemeParams_lte?: InputMaybe<Scalars['String']>;
  genericSchemeParams_not?: InputMaybe<Scalars['String']>;
  genericSchemeParams_not_contains?: InputMaybe<Scalars['String']>;
  genericSchemeParams_not_contains_nocase?: InputMaybe<Scalars['String']>;
  genericSchemeParams_not_ends_with?: InputMaybe<Scalars['String']>;
  genericSchemeParams_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  genericSchemeParams_not_in?: InputMaybe<Array<Scalars['String']>>;
  genericSchemeParams_not_starts_with?: InputMaybe<Scalars['String']>;
  genericSchemeParams_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  genericSchemeParams_starts_with?: InputMaybe<Scalars['String']>;
  genericSchemeParams_starts_with_nocase?: InputMaybe<Scalars['String']>;
  gpQueue?: InputMaybe<Scalars['String']>;
  gpQueue_?: InputMaybe<GpQueue_Filter>;
  gpQueue_contains?: InputMaybe<Scalars['String']>;
  gpQueue_contains_nocase?: InputMaybe<Scalars['String']>;
  gpQueue_ends_with?: InputMaybe<Scalars['String']>;
  gpQueue_ends_with_nocase?: InputMaybe<Scalars['String']>;
  gpQueue_gt?: InputMaybe<Scalars['String']>;
  gpQueue_gte?: InputMaybe<Scalars['String']>;
  gpQueue_in?: InputMaybe<Array<Scalars['String']>>;
  gpQueue_lt?: InputMaybe<Scalars['String']>;
  gpQueue_lte?: InputMaybe<Scalars['String']>;
  gpQueue_not?: InputMaybe<Scalars['String']>;
  gpQueue_not_contains?: InputMaybe<Scalars['String']>;
  gpQueue_not_contains_nocase?: InputMaybe<Scalars['String']>;
  gpQueue_not_ends_with?: InputMaybe<Scalars['String']>;
  gpQueue_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  gpQueue_not_in?: InputMaybe<Array<Scalars['String']>>;
  gpQueue_not_starts_with?: InputMaybe<Scalars['String']>;
  gpQueue_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  gpQueue_starts_with?: InputMaybe<Scalars['String']>;
  gpQueue_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isRegistered?: InputMaybe<Scalars['Boolean']>;
  isRegistered_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isRegistered_not?: InputMaybe<Scalars['Boolean']>;
  isRegistered_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  numberOfBoostedProposals?: InputMaybe<Scalars['BigInt']>;
  numberOfBoostedProposals_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfBoostedProposals_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfBoostedProposals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfBoostedProposals_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfBoostedProposals_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfBoostedProposals_not?: InputMaybe<Scalars['BigInt']>;
  numberOfBoostedProposals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfExpiredInQueueProposals?: InputMaybe<Scalars['BigInt']>;
  numberOfExpiredInQueueProposals_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfExpiredInQueueProposals_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfExpiredInQueueProposals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfExpiredInQueueProposals_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfExpiredInQueueProposals_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfExpiredInQueueProposals_not?: InputMaybe<Scalars['BigInt']>;
  numberOfExpiredInQueueProposals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfPreBoostedProposals?: InputMaybe<Scalars['BigInt']>;
  numberOfPreBoostedProposals_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfPreBoostedProposals_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfPreBoostedProposals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfPreBoostedProposals_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfPreBoostedProposals_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfPreBoostedProposals_not?: InputMaybe<Scalars['BigInt']>;
  numberOfPreBoostedProposals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfQueuedProposals?: InputMaybe<Scalars['BigInt']>;
  numberOfQueuedProposals_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfQueuedProposals_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfQueuedProposals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfQueuedProposals_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfQueuedProposals_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfQueuedProposals_not?: InputMaybe<Scalars['BigInt']>;
  numberOfQueuedProposals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  paramsHash?: InputMaybe<Scalars['Bytes']>;
  paramsHash_contains?: InputMaybe<Scalars['Bytes']>;
  paramsHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  paramsHash_not?: InputMaybe<Scalars['Bytes']>;
  paramsHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  paramsHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  schemeRegistrarParams?: InputMaybe<Scalars['String']>;
  schemeRegistrarParams_?: InputMaybe<SchemeRegistrarParam_Filter>;
  schemeRegistrarParams_contains?: InputMaybe<Scalars['String']>;
  schemeRegistrarParams_contains_nocase?: InputMaybe<Scalars['String']>;
  schemeRegistrarParams_ends_with?: InputMaybe<Scalars['String']>;
  schemeRegistrarParams_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schemeRegistrarParams_gt?: InputMaybe<Scalars['String']>;
  schemeRegistrarParams_gte?: InputMaybe<Scalars['String']>;
  schemeRegistrarParams_in?: InputMaybe<Array<Scalars['String']>>;
  schemeRegistrarParams_lt?: InputMaybe<Scalars['String']>;
  schemeRegistrarParams_lte?: InputMaybe<Scalars['String']>;
  schemeRegistrarParams_not?: InputMaybe<Scalars['String']>;
  schemeRegistrarParams_not_contains?: InputMaybe<Scalars['String']>;
  schemeRegistrarParams_not_contains_nocase?: InputMaybe<Scalars['String']>;
  schemeRegistrarParams_not_ends_with?: InputMaybe<Scalars['String']>;
  schemeRegistrarParams_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schemeRegistrarParams_not_in?: InputMaybe<Array<Scalars['String']>>;
  schemeRegistrarParams_not_starts_with?: InputMaybe<Scalars['String']>;
  schemeRegistrarParams_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schemeRegistrarParams_starts_with?: InputMaybe<Scalars['String']>;
  schemeRegistrarParams_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uGenericSchemeParams?: InputMaybe<Scalars['String']>;
  uGenericSchemeParams_?: InputMaybe<UGenericSchemeParam_Filter>;
  uGenericSchemeParams_contains?: InputMaybe<Scalars['String']>;
  uGenericSchemeParams_contains_nocase?: InputMaybe<Scalars['String']>;
  uGenericSchemeParams_ends_with?: InputMaybe<Scalars['String']>;
  uGenericSchemeParams_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uGenericSchemeParams_gt?: InputMaybe<Scalars['String']>;
  uGenericSchemeParams_gte?: InputMaybe<Scalars['String']>;
  uGenericSchemeParams_in?: InputMaybe<Array<Scalars['String']>>;
  uGenericSchemeParams_lt?: InputMaybe<Scalars['String']>;
  uGenericSchemeParams_lte?: InputMaybe<Scalars['String']>;
  uGenericSchemeParams_not?: InputMaybe<Scalars['String']>;
  uGenericSchemeParams_not_contains?: InputMaybe<Scalars['String']>;
  uGenericSchemeParams_not_contains_nocase?: InputMaybe<Scalars['String']>;
  uGenericSchemeParams_not_ends_with?: InputMaybe<Scalars['String']>;
  uGenericSchemeParams_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uGenericSchemeParams_not_in?: InputMaybe<Array<Scalars['String']>>;
  uGenericSchemeParams_not_starts_with?: InputMaybe<Scalars['String']>;
  uGenericSchemeParams_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uGenericSchemeParams_starts_with?: InputMaybe<Scalars['String']>;
  uGenericSchemeParams_starts_with_nocase?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
  version_contains?: InputMaybe<Scalars['String']>;
  version_contains_nocase?: InputMaybe<Scalars['String']>;
  version_ends_with?: InputMaybe<Scalars['String']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']>;
  version_gt?: InputMaybe<Scalars['String']>;
  version_gte?: InputMaybe<Scalars['String']>;
  version_in?: InputMaybe<Array<Scalars['String']>>;
  version_lt?: InputMaybe<Scalars['String']>;
  version_lte?: InputMaybe<Scalars['String']>;
  version_not?: InputMaybe<Scalars['String']>;
  version_not_contains?: InputMaybe<Scalars['String']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']>;
  version_not_ends_with?: InputMaybe<Scalars['String']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  version_not_in?: InputMaybe<Array<Scalars['String']>>;
  version_not_starts_with?: InputMaybe<Scalars['String']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  version_starts_with?: InputMaybe<Scalars['String']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum ControllerScheme_OrderBy {
  Address = 'address',
  Alias = 'alias',
  CanDelegateCall = 'canDelegateCall',
  CanManageGlobalConstraints = 'canManageGlobalConstraints',
  CanRegisterSchemes = 'canRegisterSchemes',
  CanUpgradeController = 'canUpgradeController',
  ContinuousLocking4ReputationParams = 'continuousLocking4ReputationParams',
  ContributionRewardExtParams = 'contributionRewardExtParams',
  ContributionRewardParams = 'contributionRewardParams',
  Dao = 'dao',
  Error = 'error',
  GenericSchemeMultiCallParams = 'genericSchemeMultiCallParams',
  GenericSchemeParams = 'genericSchemeParams',
  GpQueue = 'gpQueue',
  Id = 'id',
  IsRegistered = 'isRegistered',
  Name = 'name',
  NumberOfBoostedProposals = 'numberOfBoostedProposals',
  NumberOfExpiredInQueueProposals = 'numberOfExpiredInQueueProposals',
  NumberOfPreBoostedProposals = 'numberOfPreBoostedProposals',
  NumberOfQueuedProposals = 'numberOfQueuedProposals',
  ParamsHash = 'paramsHash',
  SchemeRegistrarParams = 'schemeRegistrarParams',
  UGenericSchemeParams = 'uGenericSchemeParams',
  Version = 'version'
}

export type ControllerUnregisterScheme = {
  __typename?: 'ControllerUnregisterScheme';
  contract: Scalars['Bytes'];
  controller: Scalars['Bytes'];
  id: Scalars['ID'];
  scheme: Scalars['Bytes'];
  txHash: Scalars['Bytes'];
};

export type ControllerUnregisterScheme_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  contract?: InputMaybe<Scalars['Bytes']>;
  contract_contains?: InputMaybe<Scalars['Bytes']>;
  contract_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract_not?: InputMaybe<Scalars['Bytes']>;
  contract_not_contains?: InputMaybe<Scalars['Bytes']>;
  contract_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  controller?: InputMaybe<Scalars['Bytes']>;
  controller_contains?: InputMaybe<Scalars['Bytes']>;
  controller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  controller_not?: InputMaybe<Scalars['Bytes']>;
  controller_not_contains?: InputMaybe<Scalars['Bytes']>;
  controller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  scheme?: InputMaybe<Scalars['Bytes']>;
  scheme_contains?: InputMaybe<Scalars['Bytes']>;
  scheme_in?: InputMaybe<Array<Scalars['Bytes']>>;
  scheme_not?: InputMaybe<Scalars['Bytes']>;
  scheme_not_contains?: InputMaybe<Scalars['Bytes']>;
  scheme_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum ControllerUnregisterScheme_OrderBy {
  Contract = 'contract',
  Controller = 'controller',
  Id = 'id',
  Scheme = 'scheme',
  TxHash = 'txHash'
}

export type ControllerUpgradeController = {
  __typename?: 'ControllerUpgradeController';
  controller: Scalars['Bytes'];
  id: Scalars['ID'];
  newController: Scalars['Bytes'];
  txHash: Scalars['Bytes'];
};

export type ControllerUpgradeController_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  controller?: InputMaybe<Scalars['Bytes']>;
  controller_contains?: InputMaybe<Scalars['Bytes']>;
  controller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  controller_not?: InputMaybe<Scalars['Bytes']>;
  controller_not_contains?: InputMaybe<Scalars['Bytes']>;
  controller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  newController?: InputMaybe<Scalars['Bytes']>;
  newController_contains?: InputMaybe<Scalars['Bytes']>;
  newController_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newController_not?: InputMaybe<Scalars['Bytes']>;
  newController_not_contains?: InputMaybe<Scalars['Bytes']>;
  newController_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum ControllerUpgradeController_OrderBy {
  Controller = 'controller',
  Id = 'id',
  NewController = 'newController',
  TxHash = 'txHash'
}

export type Dao = {
  __typename?: 'DAO';
  avatarContract: AvatarContract;
  error?: Maybe<Scalars['String']>;
  gpQueues?: Maybe<Array<GpQueue>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  nativeReputation: Rep;
  nativeToken: Token;
  numberOfBoostedProposals: Scalars['BigInt'];
  numberOfExpiredInQueueProposals: Scalars['BigInt'];
  numberOfPreBoostedProposals: Scalars['BigInt'];
  numberOfQueuedProposals: Scalars['BigInt'];
  proposals?: Maybe<Array<Proposal>>;
  register: Scalars['String'];
  reputationHolders?: Maybe<Array<ReputationHolder>>;
  reputationHoldersCount: Scalars['BigInt'];
  rewards?: Maybe<Array<GpReward>>;
  schemes?: Maybe<Array<ControllerScheme>>;
};


export type DaoGpQueuesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GpQueue_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GpQueue_Filter>;
};


export type DaoProposalsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Proposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Proposal_Filter>;
};


export type DaoReputationHoldersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReputationHolder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReputationHolder_Filter>;
};


export type DaoRewardsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GpReward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GpReward_Filter>;
};


export type DaoSchemesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ControllerScheme_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ControllerScheme_Filter>;
};

export type DaoRegistryContract = {
  __typename?: 'DAORegistryContract';
  address: Scalars['Bytes'];
  id: Scalars['ID'];
  owner: Scalars['Bytes'];
};

export type DaoRegistryContract_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum DaoRegistryContract_OrderBy {
  Address = 'address',
  Id = 'id',
  Owner = 'owner'
}

export type DaoTrackerContract = {
  __typename?: 'DAOTrackerContract';
  address: Scalars['Bytes'];
  id: Scalars['ID'];
  owner: Scalars['Bytes'];
};

export type DaoTrackerContract_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum DaoTrackerContract_OrderBy {
  Address = 'address',
  Id = 'id',
  Owner = 'owner'
}

export type Dao_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  avatarContract?: InputMaybe<Scalars['String']>;
  avatarContract_?: InputMaybe<AvatarContract_Filter>;
  avatarContract_contains?: InputMaybe<Scalars['String']>;
  avatarContract_contains_nocase?: InputMaybe<Scalars['String']>;
  avatarContract_ends_with?: InputMaybe<Scalars['String']>;
  avatarContract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  avatarContract_gt?: InputMaybe<Scalars['String']>;
  avatarContract_gte?: InputMaybe<Scalars['String']>;
  avatarContract_in?: InputMaybe<Array<Scalars['String']>>;
  avatarContract_lt?: InputMaybe<Scalars['String']>;
  avatarContract_lte?: InputMaybe<Scalars['String']>;
  avatarContract_not?: InputMaybe<Scalars['String']>;
  avatarContract_not_contains?: InputMaybe<Scalars['String']>;
  avatarContract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  avatarContract_not_ends_with?: InputMaybe<Scalars['String']>;
  avatarContract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  avatarContract_not_in?: InputMaybe<Array<Scalars['String']>>;
  avatarContract_not_starts_with?: InputMaybe<Scalars['String']>;
  avatarContract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  avatarContract_starts_with?: InputMaybe<Scalars['String']>;
  avatarContract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  error?: InputMaybe<Scalars['String']>;
  error_contains?: InputMaybe<Scalars['String']>;
  error_contains_nocase?: InputMaybe<Scalars['String']>;
  error_ends_with?: InputMaybe<Scalars['String']>;
  error_ends_with_nocase?: InputMaybe<Scalars['String']>;
  error_gt?: InputMaybe<Scalars['String']>;
  error_gte?: InputMaybe<Scalars['String']>;
  error_in?: InputMaybe<Array<Scalars['String']>>;
  error_lt?: InputMaybe<Scalars['String']>;
  error_lte?: InputMaybe<Scalars['String']>;
  error_not?: InputMaybe<Scalars['String']>;
  error_not_contains?: InputMaybe<Scalars['String']>;
  error_not_contains_nocase?: InputMaybe<Scalars['String']>;
  error_not_ends_with?: InputMaybe<Scalars['String']>;
  error_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  error_not_in?: InputMaybe<Array<Scalars['String']>>;
  error_not_starts_with?: InputMaybe<Scalars['String']>;
  error_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  error_starts_with?: InputMaybe<Scalars['String']>;
  error_starts_with_nocase?: InputMaybe<Scalars['String']>;
  gpQueues_?: InputMaybe<GpQueue_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nativeReputation?: InputMaybe<Scalars['String']>;
  nativeReputation_?: InputMaybe<Rep_Filter>;
  nativeReputation_contains?: InputMaybe<Scalars['String']>;
  nativeReputation_contains_nocase?: InputMaybe<Scalars['String']>;
  nativeReputation_ends_with?: InputMaybe<Scalars['String']>;
  nativeReputation_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nativeReputation_gt?: InputMaybe<Scalars['String']>;
  nativeReputation_gte?: InputMaybe<Scalars['String']>;
  nativeReputation_in?: InputMaybe<Array<Scalars['String']>>;
  nativeReputation_lt?: InputMaybe<Scalars['String']>;
  nativeReputation_lte?: InputMaybe<Scalars['String']>;
  nativeReputation_not?: InputMaybe<Scalars['String']>;
  nativeReputation_not_contains?: InputMaybe<Scalars['String']>;
  nativeReputation_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nativeReputation_not_ends_with?: InputMaybe<Scalars['String']>;
  nativeReputation_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nativeReputation_not_in?: InputMaybe<Array<Scalars['String']>>;
  nativeReputation_not_starts_with?: InputMaybe<Scalars['String']>;
  nativeReputation_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nativeReputation_starts_with?: InputMaybe<Scalars['String']>;
  nativeReputation_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nativeToken?: InputMaybe<Scalars['String']>;
  nativeToken_?: InputMaybe<Token_Filter>;
  nativeToken_contains?: InputMaybe<Scalars['String']>;
  nativeToken_contains_nocase?: InputMaybe<Scalars['String']>;
  nativeToken_ends_with?: InputMaybe<Scalars['String']>;
  nativeToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nativeToken_gt?: InputMaybe<Scalars['String']>;
  nativeToken_gte?: InputMaybe<Scalars['String']>;
  nativeToken_in?: InputMaybe<Array<Scalars['String']>>;
  nativeToken_lt?: InputMaybe<Scalars['String']>;
  nativeToken_lte?: InputMaybe<Scalars['String']>;
  nativeToken_not?: InputMaybe<Scalars['String']>;
  nativeToken_not_contains?: InputMaybe<Scalars['String']>;
  nativeToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nativeToken_not_ends_with?: InputMaybe<Scalars['String']>;
  nativeToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nativeToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  nativeToken_not_starts_with?: InputMaybe<Scalars['String']>;
  nativeToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nativeToken_starts_with?: InputMaybe<Scalars['String']>;
  nativeToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  numberOfBoostedProposals?: InputMaybe<Scalars['BigInt']>;
  numberOfBoostedProposals_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfBoostedProposals_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfBoostedProposals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfBoostedProposals_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfBoostedProposals_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfBoostedProposals_not?: InputMaybe<Scalars['BigInt']>;
  numberOfBoostedProposals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfExpiredInQueueProposals?: InputMaybe<Scalars['BigInt']>;
  numberOfExpiredInQueueProposals_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfExpiredInQueueProposals_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfExpiredInQueueProposals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfExpiredInQueueProposals_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfExpiredInQueueProposals_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfExpiredInQueueProposals_not?: InputMaybe<Scalars['BigInt']>;
  numberOfExpiredInQueueProposals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfPreBoostedProposals?: InputMaybe<Scalars['BigInt']>;
  numberOfPreBoostedProposals_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfPreBoostedProposals_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfPreBoostedProposals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfPreBoostedProposals_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfPreBoostedProposals_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfPreBoostedProposals_not?: InputMaybe<Scalars['BigInt']>;
  numberOfPreBoostedProposals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfQueuedProposals?: InputMaybe<Scalars['BigInt']>;
  numberOfQueuedProposals_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfQueuedProposals_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfQueuedProposals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfQueuedProposals_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfQueuedProposals_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfQueuedProposals_not?: InputMaybe<Scalars['BigInt']>;
  numberOfQueuedProposals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposals_?: InputMaybe<Proposal_Filter>;
  register?: InputMaybe<Scalars['String']>;
  register_contains?: InputMaybe<Scalars['String']>;
  register_contains_nocase?: InputMaybe<Scalars['String']>;
  register_ends_with?: InputMaybe<Scalars['String']>;
  register_ends_with_nocase?: InputMaybe<Scalars['String']>;
  register_gt?: InputMaybe<Scalars['String']>;
  register_gte?: InputMaybe<Scalars['String']>;
  register_in?: InputMaybe<Array<Scalars['String']>>;
  register_lt?: InputMaybe<Scalars['String']>;
  register_lte?: InputMaybe<Scalars['String']>;
  register_not?: InputMaybe<Scalars['String']>;
  register_not_contains?: InputMaybe<Scalars['String']>;
  register_not_contains_nocase?: InputMaybe<Scalars['String']>;
  register_not_ends_with?: InputMaybe<Scalars['String']>;
  register_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  register_not_in?: InputMaybe<Array<Scalars['String']>>;
  register_not_starts_with?: InputMaybe<Scalars['String']>;
  register_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  register_starts_with?: InputMaybe<Scalars['String']>;
  register_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reputationHoldersCount?: InputMaybe<Scalars['BigInt']>;
  reputationHoldersCount_gt?: InputMaybe<Scalars['BigInt']>;
  reputationHoldersCount_gte?: InputMaybe<Scalars['BigInt']>;
  reputationHoldersCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reputationHoldersCount_lt?: InputMaybe<Scalars['BigInt']>;
  reputationHoldersCount_lte?: InputMaybe<Scalars['BigInt']>;
  reputationHoldersCount_not?: InputMaybe<Scalars['BigInt']>;
  reputationHoldersCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reputationHolders_?: InputMaybe<ReputationHolder_Filter>;
  rewards_?: InputMaybe<GpReward_Filter>;
  schemes_?: InputMaybe<ControllerScheme_Filter>;
};

export enum Dao_OrderBy {
  AvatarContract = 'avatarContract',
  Error = 'error',
  GpQueues = 'gpQueues',
  Id = 'id',
  Name = 'name',
  NativeReputation = 'nativeReputation',
  NativeToken = 'nativeToken',
  NumberOfBoostedProposals = 'numberOfBoostedProposals',
  NumberOfExpiredInQueueProposals = 'numberOfExpiredInQueueProposals',
  NumberOfPreBoostedProposals = 'numberOfPreBoostedProposals',
  NumberOfQueuedProposals = 'numberOfQueuedProposals',
  Proposals = 'proposals',
  Register = 'register',
  ReputationHolders = 'reputationHolders',
  ReputationHoldersCount = 'reputationHoldersCount',
  Rewards = 'rewards',
  Schemes = 'schemes'
}

export type Debug = {
  __typename?: 'Debug';
  id: Scalars['ID'];
  message: Scalars['String'];
};

export type Debug_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  message?: InputMaybe<Scalars['String']>;
  message_contains?: InputMaybe<Scalars['String']>;
  message_contains_nocase?: InputMaybe<Scalars['String']>;
  message_ends_with?: InputMaybe<Scalars['String']>;
  message_ends_with_nocase?: InputMaybe<Scalars['String']>;
  message_gt?: InputMaybe<Scalars['String']>;
  message_gte?: InputMaybe<Scalars['String']>;
  message_in?: InputMaybe<Array<Scalars['String']>>;
  message_lt?: InputMaybe<Scalars['String']>;
  message_lte?: InputMaybe<Scalars['String']>;
  message_not?: InputMaybe<Scalars['String']>;
  message_not_contains?: InputMaybe<Scalars['String']>;
  message_not_contains_nocase?: InputMaybe<Scalars['String']>;
  message_not_ends_with?: InputMaybe<Scalars['String']>;
  message_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  message_not_in?: InputMaybe<Array<Scalars['String']>>;
  message_not_starts_with?: InputMaybe<Scalars['String']>;
  message_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  message_starts_with?: InputMaybe<Scalars['String']>;
  message_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Debug_OrderBy {
  Id = 'id',
  Message = 'message'
}

export type Event = {
  __typename?: 'Event';
  dao?: Maybe<Dao>;
  data: Scalars['String'];
  id: Scalars['ID'];
  proposal?: Maybe<Proposal>;
  timestamp: Scalars['BigInt'];
  type: Scalars['String'];
  user?: Maybe<Scalars['Bytes']>;
};

export type Event_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  dao?: InputMaybe<Scalars['String']>;
  dao_?: InputMaybe<Dao_Filter>;
  dao_contains?: InputMaybe<Scalars['String']>;
  dao_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_ends_with?: InputMaybe<Scalars['String']>;
  dao_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_gt?: InputMaybe<Scalars['String']>;
  dao_gte?: InputMaybe<Scalars['String']>;
  dao_in?: InputMaybe<Array<Scalars['String']>>;
  dao_lt?: InputMaybe<Scalars['String']>;
  dao_lte?: InputMaybe<Scalars['String']>;
  dao_not?: InputMaybe<Scalars['String']>;
  dao_not_contains?: InputMaybe<Scalars['String']>;
  dao_not_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_not_ends_with?: InputMaybe<Scalars['String']>;
  dao_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_not_in?: InputMaybe<Array<Scalars['String']>>;
  dao_not_starts_with?: InputMaybe<Scalars['String']>;
  dao_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dao_starts_with?: InputMaybe<Scalars['String']>;
  dao_starts_with_nocase?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<Scalars['String']>;
  data_contains?: InputMaybe<Scalars['String']>;
  data_contains_nocase?: InputMaybe<Scalars['String']>;
  data_ends_with?: InputMaybe<Scalars['String']>;
  data_ends_with_nocase?: InputMaybe<Scalars['String']>;
  data_gt?: InputMaybe<Scalars['String']>;
  data_gte?: InputMaybe<Scalars['String']>;
  data_in?: InputMaybe<Array<Scalars['String']>>;
  data_lt?: InputMaybe<Scalars['String']>;
  data_lte?: InputMaybe<Scalars['String']>;
  data_not?: InputMaybe<Scalars['String']>;
  data_not_contains?: InputMaybe<Scalars['String']>;
  data_not_contains_nocase?: InputMaybe<Scalars['String']>;
  data_not_ends_with?: InputMaybe<Scalars['String']>;
  data_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  data_not_in?: InputMaybe<Array<Scalars['String']>>;
  data_not_starts_with?: InputMaybe<Scalars['String']>;
  data_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  data_starts_with?: InputMaybe<Scalars['String']>;
  data_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  proposal?: InputMaybe<Scalars['String']>;
  proposal_?: InputMaybe<Proposal_Filter>;
  proposal_contains?: InputMaybe<Scalars['String']>;
  proposal_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_ends_with?: InputMaybe<Scalars['String']>;
  proposal_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_gt?: InputMaybe<Scalars['String']>;
  proposal_gte?: InputMaybe<Scalars['String']>;
  proposal_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_lt?: InputMaybe<Scalars['String']>;
  proposal_lte?: InputMaybe<Scalars['String']>;
  proposal_not?: InputMaybe<Scalars['String']>;
  proposal_not_contains?: InputMaybe<Scalars['String']>;
  proposal_not_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_not_starts_with?: InputMaybe<Scalars['String']>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_starts_with?: InputMaybe<Scalars['String']>;
  proposal_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  type?: InputMaybe<Scalars['String']>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_contains_nocase?: InputMaybe<Scalars['String']>;
  type_ends_with?: InputMaybe<Scalars['String']>;
  type_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<Scalars['String']>>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_not?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']>;
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  type_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_in?: InputMaybe<Array<Scalars['String']>>;
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  type_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_starts_with?: InputMaybe<Scalars['String']>;
  type_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['Bytes']>;
  user_contains?: InputMaybe<Scalars['Bytes']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']>>;
  user_not?: InputMaybe<Scalars['Bytes']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum Event_OrderBy {
  Dao = 'dao',
  Data = 'data',
  Id = 'id',
  Proposal = 'proposal',
  Timestamp = 'timestamp',
  Type = 'type',
  User = 'user'
}

export type FirstRegisterScheme = {
  __typename?: 'FirstRegisterScheme';
  id: Scalars['ID'];
};

export type FirstRegisterSchemeFlag = {
  __typename?: 'FirstRegisterSchemeFlag';
  id: Scalars['ID'];
};

export type FirstRegisterSchemeFlag_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export enum FirstRegisterSchemeFlag_OrderBy {
  Id = 'id'
}

export type FirstRegisterScheme_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export enum FirstRegisterScheme_OrderBy {
  Id = 'id'
}

export type GpQueue = {
  __typename?: 'GPQueue';
  dao: Dao;
  id: Scalars['ID'];
  scheme?: Maybe<ControllerScheme>;
  threshold: Scalars['BigInt'];
  votingMachine: Scalars['Bytes'];
};

export type GpQueue_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  dao?: InputMaybe<Scalars['String']>;
  dao_?: InputMaybe<Dao_Filter>;
  dao_contains?: InputMaybe<Scalars['String']>;
  dao_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_ends_with?: InputMaybe<Scalars['String']>;
  dao_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_gt?: InputMaybe<Scalars['String']>;
  dao_gte?: InputMaybe<Scalars['String']>;
  dao_in?: InputMaybe<Array<Scalars['String']>>;
  dao_lt?: InputMaybe<Scalars['String']>;
  dao_lte?: InputMaybe<Scalars['String']>;
  dao_not?: InputMaybe<Scalars['String']>;
  dao_not_contains?: InputMaybe<Scalars['String']>;
  dao_not_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_not_ends_with?: InputMaybe<Scalars['String']>;
  dao_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_not_in?: InputMaybe<Array<Scalars['String']>>;
  dao_not_starts_with?: InputMaybe<Scalars['String']>;
  dao_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dao_starts_with?: InputMaybe<Scalars['String']>;
  dao_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  scheme?: InputMaybe<Scalars['String']>;
  scheme_?: InputMaybe<ControllerScheme_Filter>;
  scheme_contains?: InputMaybe<Scalars['String']>;
  scheme_contains_nocase?: InputMaybe<Scalars['String']>;
  scheme_ends_with?: InputMaybe<Scalars['String']>;
  scheme_ends_with_nocase?: InputMaybe<Scalars['String']>;
  scheme_gt?: InputMaybe<Scalars['String']>;
  scheme_gte?: InputMaybe<Scalars['String']>;
  scheme_in?: InputMaybe<Array<Scalars['String']>>;
  scheme_lt?: InputMaybe<Scalars['String']>;
  scheme_lte?: InputMaybe<Scalars['String']>;
  scheme_not?: InputMaybe<Scalars['String']>;
  scheme_not_contains?: InputMaybe<Scalars['String']>;
  scheme_not_contains_nocase?: InputMaybe<Scalars['String']>;
  scheme_not_ends_with?: InputMaybe<Scalars['String']>;
  scheme_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  scheme_not_in?: InputMaybe<Array<Scalars['String']>>;
  scheme_not_starts_with?: InputMaybe<Scalars['String']>;
  scheme_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  scheme_starts_with?: InputMaybe<Scalars['String']>;
  scheme_starts_with_nocase?: InputMaybe<Scalars['String']>;
  threshold?: InputMaybe<Scalars['BigInt']>;
  threshold_gt?: InputMaybe<Scalars['BigInt']>;
  threshold_gte?: InputMaybe<Scalars['BigInt']>;
  threshold_in?: InputMaybe<Array<Scalars['BigInt']>>;
  threshold_lt?: InputMaybe<Scalars['BigInt']>;
  threshold_lte?: InputMaybe<Scalars['BigInt']>;
  threshold_not?: InputMaybe<Scalars['BigInt']>;
  threshold_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  votingMachine?: InputMaybe<Scalars['Bytes']>;
  votingMachine_contains?: InputMaybe<Scalars['Bytes']>;
  votingMachine_in?: InputMaybe<Array<Scalars['Bytes']>>;
  votingMachine_not?: InputMaybe<Scalars['Bytes']>;
  votingMachine_not_contains?: InputMaybe<Scalars['Bytes']>;
  votingMachine_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum GpQueue_OrderBy {
  Dao = 'dao',
  Id = 'id',
  Scheme = 'scheme',
  Threshold = 'threshold',
  VotingMachine = 'votingMachine'
}

export type GpReward = {
  __typename?: 'GPReward';
  beneficiary: Scalars['Bytes'];
  createdAt: Scalars['BigInt'];
  dao: Dao;
  daoBountyForStaker?: Maybe<Scalars['BigInt']>;
  daoBountyForStakerRedeemedAt: Scalars['BigInt'];
  id: Scalars['ID'];
  proposal: Proposal;
  reputationForProposer?: Maybe<Scalars['BigInt']>;
  reputationForProposerRedeemedAt: Scalars['BigInt'];
  reputationForVoter?: Maybe<Scalars['BigInt']>;
  reputationForVoterRedeemedAt: Scalars['BigInt'];
  tokenAddress?: Maybe<Scalars['Bytes']>;
  tokensForStaker?: Maybe<Scalars['BigInt']>;
  tokensForStakerRedeemedAt: Scalars['BigInt'];
};

export type GpReward_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  beneficiary?: InputMaybe<Scalars['Bytes']>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dao?: InputMaybe<Scalars['String']>;
  daoBountyForStaker?: InputMaybe<Scalars['BigInt']>;
  daoBountyForStakerRedeemedAt?: InputMaybe<Scalars['BigInt']>;
  daoBountyForStakerRedeemedAt_gt?: InputMaybe<Scalars['BigInt']>;
  daoBountyForStakerRedeemedAt_gte?: InputMaybe<Scalars['BigInt']>;
  daoBountyForStakerRedeemedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  daoBountyForStakerRedeemedAt_lt?: InputMaybe<Scalars['BigInt']>;
  daoBountyForStakerRedeemedAt_lte?: InputMaybe<Scalars['BigInt']>;
  daoBountyForStakerRedeemedAt_not?: InputMaybe<Scalars['BigInt']>;
  daoBountyForStakerRedeemedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  daoBountyForStaker_gt?: InputMaybe<Scalars['BigInt']>;
  daoBountyForStaker_gte?: InputMaybe<Scalars['BigInt']>;
  daoBountyForStaker_in?: InputMaybe<Array<Scalars['BigInt']>>;
  daoBountyForStaker_lt?: InputMaybe<Scalars['BigInt']>;
  daoBountyForStaker_lte?: InputMaybe<Scalars['BigInt']>;
  daoBountyForStaker_not?: InputMaybe<Scalars['BigInt']>;
  daoBountyForStaker_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dao_?: InputMaybe<Dao_Filter>;
  dao_contains?: InputMaybe<Scalars['String']>;
  dao_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_ends_with?: InputMaybe<Scalars['String']>;
  dao_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_gt?: InputMaybe<Scalars['String']>;
  dao_gte?: InputMaybe<Scalars['String']>;
  dao_in?: InputMaybe<Array<Scalars['String']>>;
  dao_lt?: InputMaybe<Scalars['String']>;
  dao_lte?: InputMaybe<Scalars['String']>;
  dao_not?: InputMaybe<Scalars['String']>;
  dao_not_contains?: InputMaybe<Scalars['String']>;
  dao_not_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_not_ends_with?: InputMaybe<Scalars['String']>;
  dao_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_not_in?: InputMaybe<Array<Scalars['String']>>;
  dao_not_starts_with?: InputMaybe<Scalars['String']>;
  dao_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dao_starts_with?: InputMaybe<Scalars['String']>;
  dao_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  proposal?: InputMaybe<Scalars['String']>;
  proposal_?: InputMaybe<Proposal_Filter>;
  proposal_contains?: InputMaybe<Scalars['String']>;
  proposal_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_ends_with?: InputMaybe<Scalars['String']>;
  proposal_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_gt?: InputMaybe<Scalars['String']>;
  proposal_gte?: InputMaybe<Scalars['String']>;
  proposal_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_lt?: InputMaybe<Scalars['String']>;
  proposal_lte?: InputMaybe<Scalars['String']>;
  proposal_not?: InputMaybe<Scalars['String']>;
  proposal_not_contains?: InputMaybe<Scalars['String']>;
  proposal_not_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_not_starts_with?: InputMaybe<Scalars['String']>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_starts_with?: InputMaybe<Scalars['String']>;
  proposal_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reputationForProposer?: InputMaybe<Scalars['BigInt']>;
  reputationForProposerRedeemedAt?: InputMaybe<Scalars['BigInt']>;
  reputationForProposerRedeemedAt_gt?: InputMaybe<Scalars['BigInt']>;
  reputationForProposerRedeemedAt_gte?: InputMaybe<Scalars['BigInt']>;
  reputationForProposerRedeemedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reputationForProposerRedeemedAt_lt?: InputMaybe<Scalars['BigInt']>;
  reputationForProposerRedeemedAt_lte?: InputMaybe<Scalars['BigInt']>;
  reputationForProposerRedeemedAt_not?: InputMaybe<Scalars['BigInt']>;
  reputationForProposerRedeemedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reputationForProposer_gt?: InputMaybe<Scalars['BigInt']>;
  reputationForProposer_gte?: InputMaybe<Scalars['BigInt']>;
  reputationForProposer_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reputationForProposer_lt?: InputMaybe<Scalars['BigInt']>;
  reputationForProposer_lte?: InputMaybe<Scalars['BigInt']>;
  reputationForProposer_not?: InputMaybe<Scalars['BigInt']>;
  reputationForProposer_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reputationForVoter?: InputMaybe<Scalars['BigInt']>;
  reputationForVoterRedeemedAt?: InputMaybe<Scalars['BigInt']>;
  reputationForVoterRedeemedAt_gt?: InputMaybe<Scalars['BigInt']>;
  reputationForVoterRedeemedAt_gte?: InputMaybe<Scalars['BigInt']>;
  reputationForVoterRedeemedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reputationForVoterRedeemedAt_lt?: InputMaybe<Scalars['BigInt']>;
  reputationForVoterRedeemedAt_lte?: InputMaybe<Scalars['BigInt']>;
  reputationForVoterRedeemedAt_not?: InputMaybe<Scalars['BigInt']>;
  reputationForVoterRedeemedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reputationForVoter_gt?: InputMaybe<Scalars['BigInt']>;
  reputationForVoter_gte?: InputMaybe<Scalars['BigInt']>;
  reputationForVoter_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reputationForVoter_lt?: InputMaybe<Scalars['BigInt']>;
  reputationForVoter_lte?: InputMaybe<Scalars['BigInt']>;
  reputationForVoter_not?: InputMaybe<Scalars['BigInt']>;
  reputationForVoter_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokensForStaker?: InputMaybe<Scalars['BigInt']>;
  tokensForStakerRedeemedAt?: InputMaybe<Scalars['BigInt']>;
  tokensForStakerRedeemedAt_gt?: InputMaybe<Scalars['BigInt']>;
  tokensForStakerRedeemedAt_gte?: InputMaybe<Scalars['BigInt']>;
  tokensForStakerRedeemedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensForStakerRedeemedAt_lt?: InputMaybe<Scalars['BigInt']>;
  tokensForStakerRedeemedAt_lte?: InputMaybe<Scalars['BigInt']>;
  tokensForStakerRedeemedAt_not?: InputMaybe<Scalars['BigInt']>;
  tokensForStakerRedeemedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensForStaker_gt?: InputMaybe<Scalars['BigInt']>;
  tokensForStaker_gte?: InputMaybe<Scalars['BigInt']>;
  tokensForStaker_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensForStaker_lt?: InputMaybe<Scalars['BigInt']>;
  tokensForStaker_lte?: InputMaybe<Scalars['BigInt']>;
  tokensForStaker_not?: InputMaybe<Scalars['BigInt']>;
  tokensForStaker_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum GpReward_OrderBy {
  Beneficiary = 'beneficiary',
  CreatedAt = 'createdAt',
  Dao = 'dao',
  DaoBountyForStaker = 'daoBountyForStaker',
  DaoBountyForStakerRedeemedAt = 'daoBountyForStakerRedeemedAt',
  Id = 'id',
  Proposal = 'proposal',
  ReputationForProposer = 'reputationForProposer',
  ReputationForProposerRedeemedAt = 'reputationForProposerRedeemedAt',
  ReputationForVoter = 'reputationForVoter',
  ReputationForVoterRedeemedAt = 'reputationForVoterRedeemedAt',
  TokenAddress = 'tokenAddress',
  TokensForStaker = 'tokensForStaker',
  TokensForStakerRedeemedAt = 'tokensForStakerRedeemedAt'
}

export type GpRewardsHelper = {
  __typename?: 'GPRewardsHelper';
  gpRewards?: Maybe<Array<PreGpReward>>;
  id: Scalars['ID'];
};


export type GpRewardsHelperGpRewardsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PreGpReward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PreGpReward_Filter>;
};

export type GpRewardsHelper_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  gpRewards?: InputMaybe<Array<Scalars['String']>>;
  gpRewards_?: InputMaybe<PreGpReward_Filter>;
  gpRewards_contains?: InputMaybe<Array<Scalars['String']>>;
  gpRewards_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  gpRewards_not?: InputMaybe<Array<Scalars['String']>>;
  gpRewards_not_contains?: InputMaybe<Array<Scalars['String']>>;
  gpRewards_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export enum GpRewardsHelper_OrderBy {
  GpRewards = 'gpRewards',
  Id = 'id'
}

export type GenericSchemeMultiCallParam = {
  __typename?: 'GenericSchemeMultiCallParam';
  contractsWhiteList?: Maybe<Array<Scalars['Bytes']>>;
  id: Scalars['ID'];
  schemeConstraints: Scalars['Bytes'];
  voteParams: GenesisProtocolParam;
  votingMachine: Scalars['Bytes'];
};

export type GenericSchemeMultiCallParam_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  contractsWhiteList?: InputMaybe<Array<Scalars['Bytes']>>;
  contractsWhiteList_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  contractsWhiteList_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  contractsWhiteList_not?: InputMaybe<Array<Scalars['Bytes']>>;
  contractsWhiteList_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  contractsWhiteList_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  schemeConstraints?: InputMaybe<Scalars['Bytes']>;
  schemeConstraints_contains?: InputMaybe<Scalars['Bytes']>;
  schemeConstraints_in?: InputMaybe<Array<Scalars['Bytes']>>;
  schemeConstraints_not?: InputMaybe<Scalars['Bytes']>;
  schemeConstraints_not_contains?: InputMaybe<Scalars['Bytes']>;
  schemeConstraints_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  voteParams?: InputMaybe<Scalars['String']>;
  voteParams_?: InputMaybe<GenesisProtocolParam_Filter>;
  voteParams_contains?: InputMaybe<Scalars['String']>;
  voteParams_contains_nocase?: InputMaybe<Scalars['String']>;
  voteParams_ends_with?: InputMaybe<Scalars['String']>;
  voteParams_ends_with_nocase?: InputMaybe<Scalars['String']>;
  voteParams_gt?: InputMaybe<Scalars['String']>;
  voteParams_gte?: InputMaybe<Scalars['String']>;
  voteParams_in?: InputMaybe<Array<Scalars['String']>>;
  voteParams_lt?: InputMaybe<Scalars['String']>;
  voteParams_lte?: InputMaybe<Scalars['String']>;
  voteParams_not?: InputMaybe<Scalars['String']>;
  voteParams_not_contains?: InputMaybe<Scalars['String']>;
  voteParams_not_contains_nocase?: InputMaybe<Scalars['String']>;
  voteParams_not_ends_with?: InputMaybe<Scalars['String']>;
  voteParams_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  voteParams_not_in?: InputMaybe<Array<Scalars['String']>>;
  voteParams_not_starts_with?: InputMaybe<Scalars['String']>;
  voteParams_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  voteParams_starts_with?: InputMaybe<Scalars['String']>;
  voteParams_starts_with_nocase?: InputMaybe<Scalars['String']>;
  votingMachine?: InputMaybe<Scalars['Bytes']>;
  votingMachine_contains?: InputMaybe<Scalars['Bytes']>;
  votingMachine_in?: InputMaybe<Array<Scalars['Bytes']>>;
  votingMachine_not?: InputMaybe<Scalars['Bytes']>;
  votingMachine_not_contains?: InputMaybe<Scalars['Bytes']>;
  votingMachine_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum GenericSchemeMultiCallParam_OrderBy {
  ContractsWhiteList = 'contractsWhiteList',
  Id = 'id',
  SchemeConstraints = 'schemeConstraints',
  VoteParams = 'voteParams',
  VotingMachine = 'votingMachine'
}

export type GenericSchemeMultiCallProposal = {
  __typename?: 'GenericSchemeMultiCallProposal';
  callsData?: Maybe<Array<Scalars['Bytes']>>;
  contractsToCall?: Maybe<Array<Scalars['Bytes']>>;
  dao: Dao;
  executed: Scalars['Boolean'];
  id: Scalars['ID'];
  returnValues?: Maybe<Array<Scalars['Bytes']>>;
  values?: Maybe<Array<Scalars['BigInt']>>;
};

export type GenericSchemeMultiCallProposal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  callsData?: InputMaybe<Array<Scalars['Bytes']>>;
  callsData_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  callsData_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  callsData_not?: InputMaybe<Array<Scalars['Bytes']>>;
  callsData_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  callsData_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  contractsToCall?: InputMaybe<Array<Scalars['Bytes']>>;
  contractsToCall_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  contractsToCall_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  contractsToCall_not?: InputMaybe<Array<Scalars['Bytes']>>;
  contractsToCall_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  contractsToCall_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  dao?: InputMaybe<Scalars['String']>;
  dao_?: InputMaybe<Dao_Filter>;
  dao_contains?: InputMaybe<Scalars['String']>;
  dao_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_ends_with?: InputMaybe<Scalars['String']>;
  dao_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_gt?: InputMaybe<Scalars['String']>;
  dao_gte?: InputMaybe<Scalars['String']>;
  dao_in?: InputMaybe<Array<Scalars['String']>>;
  dao_lt?: InputMaybe<Scalars['String']>;
  dao_lte?: InputMaybe<Scalars['String']>;
  dao_not?: InputMaybe<Scalars['String']>;
  dao_not_contains?: InputMaybe<Scalars['String']>;
  dao_not_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_not_ends_with?: InputMaybe<Scalars['String']>;
  dao_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_not_in?: InputMaybe<Array<Scalars['String']>>;
  dao_not_starts_with?: InputMaybe<Scalars['String']>;
  dao_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dao_starts_with?: InputMaybe<Scalars['String']>;
  dao_starts_with_nocase?: InputMaybe<Scalars['String']>;
  executed?: InputMaybe<Scalars['Boolean']>;
  executed_in?: InputMaybe<Array<Scalars['Boolean']>>;
  executed_not?: InputMaybe<Scalars['Boolean']>;
  executed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  returnValues?: InputMaybe<Array<Scalars['Bytes']>>;
  returnValues_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  returnValues_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  returnValues_not?: InputMaybe<Array<Scalars['Bytes']>>;
  returnValues_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  returnValues_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  values?: InputMaybe<Array<Scalars['BigInt']>>;
  values_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  values_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum GenericSchemeMultiCallProposal_OrderBy {
  CallsData = 'callsData',
  ContractsToCall = 'contractsToCall',
  Dao = 'dao',
  Executed = 'executed',
  Id = 'id',
  ReturnValues = 'returnValues',
  Values = 'values'
}

export type GenericSchemeParam = {
  __typename?: 'GenericSchemeParam';
  contractToCall: Scalars['Bytes'];
  id: Scalars['ID'];
  voteParams: GenesisProtocolParam;
  votingMachine: Scalars['Bytes'];
};

export type GenericSchemeParam_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  contractToCall?: InputMaybe<Scalars['Bytes']>;
  contractToCall_contains?: InputMaybe<Scalars['Bytes']>;
  contractToCall_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contractToCall_not?: InputMaybe<Scalars['Bytes']>;
  contractToCall_not_contains?: InputMaybe<Scalars['Bytes']>;
  contractToCall_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  voteParams?: InputMaybe<Scalars['String']>;
  voteParams_?: InputMaybe<GenesisProtocolParam_Filter>;
  voteParams_contains?: InputMaybe<Scalars['String']>;
  voteParams_contains_nocase?: InputMaybe<Scalars['String']>;
  voteParams_ends_with?: InputMaybe<Scalars['String']>;
  voteParams_ends_with_nocase?: InputMaybe<Scalars['String']>;
  voteParams_gt?: InputMaybe<Scalars['String']>;
  voteParams_gte?: InputMaybe<Scalars['String']>;
  voteParams_in?: InputMaybe<Array<Scalars['String']>>;
  voteParams_lt?: InputMaybe<Scalars['String']>;
  voteParams_lte?: InputMaybe<Scalars['String']>;
  voteParams_not?: InputMaybe<Scalars['String']>;
  voteParams_not_contains?: InputMaybe<Scalars['String']>;
  voteParams_not_contains_nocase?: InputMaybe<Scalars['String']>;
  voteParams_not_ends_with?: InputMaybe<Scalars['String']>;
  voteParams_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  voteParams_not_in?: InputMaybe<Array<Scalars['String']>>;
  voteParams_not_starts_with?: InputMaybe<Scalars['String']>;
  voteParams_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  voteParams_starts_with?: InputMaybe<Scalars['String']>;
  voteParams_starts_with_nocase?: InputMaybe<Scalars['String']>;
  votingMachine?: InputMaybe<Scalars['Bytes']>;
  votingMachine_contains?: InputMaybe<Scalars['Bytes']>;
  votingMachine_in?: InputMaybe<Array<Scalars['Bytes']>>;
  votingMachine_not?: InputMaybe<Scalars['Bytes']>;
  votingMachine_not_contains?: InputMaybe<Scalars['Bytes']>;
  votingMachine_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum GenericSchemeParam_OrderBy {
  ContractToCall = 'contractToCall',
  Id = 'id',
  VoteParams = 'voteParams',
  VotingMachine = 'votingMachine'
}

export type GenericSchemeProposal = {
  __typename?: 'GenericSchemeProposal';
  callData: Scalars['Bytes'];
  contractToCall: Scalars['Bytes'];
  dao: Dao;
  executed: Scalars['Boolean'];
  id: Scalars['ID'];
  returnValue?: Maybe<Scalars['Bytes']>;
  value: Scalars['BigInt'];
};

export type GenericSchemeProposal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  callData?: InputMaybe<Scalars['Bytes']>;
  callData_contains?: InputMaybe<Scalars['Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  callData_not?: InputMaybe<Scalars['Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['Bytes']>;
  callData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contractToCall?: InputMaybe<Scalars['Bytes']>;
  contractToCall_contains?: InputMaybe<Scalars['Bytes']>;
  contractToCall_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contractToCall_not?: InputMaybe<Scalars['Bytes']>;
  contractToCall_not_contains?: InputMaybe<Scalars['Bytes']>;
  contractToCall_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  dao?: InputMaybe<Scalars['String']>;
  dao_?: InputMaybe<Dao_Filter>;
  dao_contains?: InputMaybe<Scalars['String']>;
  dao_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_ends_with?: InputMaybe<Scalars['String']>;
  dao_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_gt?: InputMaybe<Scalars['String']>;
  dao_gte?: InputMaybe<Scalars['String']>;
  dao_in?: InputMaybe<Array<Scalars['String']>>;
  dao_lt?: InputMaybe<Scalars['String']>;
  dao_lte?: InputMaybe<Scalars['String']>;
  dao_not?: InputMaybe<Scalars['String']>;
  dao_not_contains?: InputMaybe<Scalars['String']>;
  dao_not_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_not_ends_with?: InputMaybe<Scalars['String']>;
  dao_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_not_in?: InputMaybe<Array<Scalars['String']>>;
  dao_not_starts_with?: InputMaybe<Scalars['String']>;
  dao_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dao_starts_with?: InputMaybe<Scalars['String']>;
  dao_starts_with_nocase?: InputMaybe<Scalars['String']>;
  executed?: InputMaybe<Scalars['Boolean']>;
  executed_in?: InputMaybe<Array<Scalars['Boolean']>>;
  executed_not?: InputMaybe<Scalars['Boolean']>;
  executed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  returnValue?: InputMaybe<Scalars['Bytes']>;
  returnValue_contains?: InputMaybe<Scalars['Bytes']>;
  returnValue_in?: InputMaybe<Array<Scalars['Bytes']>>;
  returnValue_not?: InputMaybe<Scalars['Bytes']>;
  returnValue_not_contains?: InputMaybe<Scalars['Bytes']>;
  returnValue_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  value?: InputMaybe<Scalars['BigInt']>;
  value_gt?: InputMaybe<Scalars['BigInt']>;
  value_gte?: InputMaybe<Scalars['BigInt']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']>>;
  value_lt?: InputMaybe<Scalars['BigInt']>;
  value_lte?: InputMaybe<Scalars['BigInt']>;
  value_not?: InputMaybe<Scalars['BigInt']>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum GenericSchemeProposal_OrderBy {
  CallData = 'callData',
  ContractToCall = 'contractToCall',
  Dao = 'dao',
  Executed = 'executed',
  Id = 'id',
  ReturnValue = 'returnValue',
  Value = 'value'
}

export type GenesisProtocolExecuteProposal = {
  __typename?: 'GenesisProtocolExecuteProposal';
  contract: Scalars['Bytes'];
  decision: Scalars['BigInt'];
  id: Scalars['ID'];
  organization: Scalars['Bytes'];
  proposalId: Scalars['Bytes'];
  totalReputation: Scalars['BigInt'];
  txHash: Scalars['Bytes'];
};

export type GenesisProtocolExecuteProposal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  contract?: InputMaybe<Scalars['Bytes']>;
  contract_contains?: InputMaybe<Scalars['Bytes']>;
  contract_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract_not?: InputMaybe<Scalars['Bytes']>;
  contract_not_contains?: InputMaybe<Scalars['Bytes']>;
  contract_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  decision?: InputMaybe<Scalars['BigInt']>;
  decision_gt?: InputMaybe<Scalars['BigInt']>;
  decision_gte?: InputMaybe<Scalars['BigInt']>;
  decision_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decision_lt?: InputMaybe<Scalars['BigInt']>;
  decision_lte?: InputMaybe<Scalars['BigInt']>;
  decision_not?: InputMaybe<Scalars['BigInt']>;
  decision_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  organization?: InputMaybe<Scalars['Bytes']>;
  organization_contains?: InputMaybe<Scalars['Bytes']>;
  organization_in?: InputMaybe<Array<Scalars['Bytes']>>;
  organization_not?: InputMaybe<Scalars['Bytes']>;
  organization_not_contains?: InputMaybe<Scalars['Bytes']>;
  organization_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proposalId?: InputMaybe<Scalars['Bytes']>;
  proposalId_contains?: InputMaybe<Scalars['Bytes']>;
  proposalId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proposalId_not?: InputMaybe<Scalars['Bytes']>;
  proposalId_not_contains?: InputMaybe<Scalars['Bytes']>;
  proposalId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  totalReputation?: InputMaybe<Scalars['BigInt']>;
  totalReputation_gt?: InputMaybe<Scalars['BigInt']>;
  totalReputation_gte?: InputMaybe<Scalars['BigInt']>;
  totalReputation_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalReputation_lt?: InputMaybe<Scalars['BigInt']>;
  totalReputation_lte?: InputMaybe<Scalars['BigInt']>;
  totalReputation_not?: InputMaybe<Scalars['BigInt']>;
  totalReputation_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum GenesisProtocolExecuteProposal_OrderBy {
  Contract = 'contract',
  Decision = 'decision',
  Id = 'id',
  Organization = 'organization',
  ProposalId = 'proposalId',
  TotalReputation = 'totalReputation',
  TxHash = 'txHash'
}

export type GenesisProtocolGpExecuteProposal = {
  __typename?: 'GenesisProtocolGPExecuteProposal';
  contract: Scalars['Bytes'];
  executionState?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  proposalId: Scalars['Bytes'];
  txHash: Scalars['Bytes'];
};

export type GenesisProtocolGpExecuteProposal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  contract?: InputMaybe<Scalars['Bytes']>;
  contract_contains?: InputMaybe<Scalars['Bytes']>;
  contract_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract_not?: InputMaybe<Scalars['Bytes']>;
  contract_not_contains?: InputMaybe<Scalars['Bytes']>;
  contract_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  executionState?: InputMaybe<Scalars['Int']>;
  executionState_gt?: InputMaybe<Scalars['Int']>;
  executionState_gte?: InputMaybe<Scalars['Int']>;
  executionState_in?: InputMaybe<Array<Scalars['Int']>>;
  executionState_lt?: InputMaybe<Scalars['Int']>;
  executionState_lte?: InputMaybe<Scalars['Int']>;
  executionState_not?: InputMaybe<Scalars['Int']>;
  executionState_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  proposalId?: InputMaybe<Scalars['Bytes']>;
  proposalId_contains?: InputMaybe<Scalars['Bytes']>;
  proposalId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proposalId_not?: InputMaybe<Scalars['Bytes']>;
  proposalId_not_contains?: InputMaybe<Scalars['Bytes']>;
  proposalId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum GenesisProtocolGpExecuteProposal_OrderBy {
  Contract = 'contract',
  ExecutionState = 'executionState',
  Id = 'id',
  ProposalId = 'proposalId',
  TxHash = 'txHash'
}

export type GenesisProtocolParam = {
  __typename?: 'GenesisProtocolParam';
  activationTime: Scalars['BigInt'];
  boostedVotePeriodLimit: Scalars['BigInt'];
  daoBountyConst: Scalars['BigInt'];
  id: Scalars['ID'];
  limitExponentValue: Scalars['BigInt'];
  minimumDaoBounty: Scalars['BigInt'];
  preBoostedVotePeriodLimit: Scalars['BigInt'];
  proposingRepReward: Scalars['BigInt'];
  queuedVotePeriodLimit: Scalars['BigInt'];
  queuedVoteRequiredPercentage: Scalars['BigInt'];
  quietEndingPeriod: Scalars['BigInt'];
  thresholdConst: Scalars['BigInt'];
  voteOnBehalf: Scalars['Bytes'];
  votersReputationLossRatio: Scalars['BigInt'];
};

export type GenesisProtocolParam_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  activationTime?: InputMaybe<Scalars['BigInt']>;
  activationTime_gt?: InputMaybe<Scalars['BigInt']>;
  activationTime_gte?: InputMaybe<Scalars['BigInt']>;
  activationTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  activationTime_lt?: InputMaybe<Scalars['BigInt']>;
  activationTime_lte?: InputMaybe<Scalars['BigInt']>;
  activationTime_not?: InputMaybe<Scalars['BigInt']>;
  activationTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  boostedVotePeriodLimit?: InputMaybe<Scalars['BigInt']>;
  boostedVotePeriodLimit_gt?: InputMaybe<Scalars['BigInt']>;
  boostedVotePeriodLimit_gte?: InputMaybe<Scalars['BigInt']>;
  boostedVotePeriodLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  boostedVotePeriodLimit_lt?: InputMaybe<Scalars['BigInt']>;
  boostedVotePeriodLimit_lte?: InputMaybe<Scalars['BigInt']>;
  boostedVotePeriodLimit_not?: InputMaybe<Scalars['BigInt']>;
  boostedVotePeriodLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  daoBountyConst?: InputMaybe<Scalars['BigInt']>;
  daoBountyConst_gt?: InputMaybe<Scalars['BigInt']>;
  daoBountyConst_gte?: InputMaybe<Scalars['BigInt']>;
  daoBountyConst_in?: InputMaybe<Array<Scalars['BigInt']>>;
  daoBountyConst_lt?: InputMaybe<Scalars['BigInt']>;
  daoBountyConst_lte?: InputMaybe<Scalars['BigInt']>;
  daoBountyConst_not?: InputMaybe<Scalars['BigInt']>;
  daoBountyConst_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  limitExponentValue?: InputMaybe<Scalars['BigInt']>;
  limitExponentValue_gt?: InputMaybe<Scalars['BigInt']>;
  limitExponentValue_gte?: InputMaybe<Scalars['BigInt']>;
  limitExponentValue_in?: InputMaybe<Array<Scalars['BigInt']>>;
  limitExponentValue_lt?: InputMaybe<Scalars['BigInt']>;
  limitExponentValue_lte?: InputMaybe<Scalars['BigInt']>;
  limitExponentValue_not?: InputMaybe<Scalars['BigInt']>;
  limitExponentValue_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minimumDaoBounty?: InputMaybe<Scalars['BigInt']>;
  minimumDaoBounty_gt?: InputMaybe<Scalars['BigInt']>;
  minimumDaoBounty_gte?: InputMaybe<Scalars['BigInt']>;
  minimumDaoBounty_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minimumDaoBounty_lt?: InputMaybe<Scalars['BigInt']>;
  minimumDaoBounty_lte?: InputMaybe<Scalars['BigInt']>;
  minimumDaoBounty_not?: InputMaybe<Scalars['BigInt']>;
  minimumDaoBounty_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  preBoostedVotePeriodLimit?: InputMaybe<Scalars['BigInt']>;
  preBoostedVotePeriodLimit_gt?: InputMaybe<Scalars['BigInt']>;
  preBoostedVotePeriodLimit_gte?: InputMaybe<Scalars['BigInt']>;
  preBoostedVotePeriodLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  preBoostedVotePeriodLimit_lt?: InputMaybe<Scalars['BigInt']>;
  preBoostedVotePeriodLimit_lte?: InputMaybe<Scalars['BigInt']>;
  preBoostedVotePeriodLimit_not?: InputMaybe<Scalars['BigInt']>;
  preBoostedVotePeriodLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposingRepReward?: InputMaybe<Scalars['BigInt']>;
  proposingRepReward_gt?: InputMaybe<Scalars['BigInt']>;
  proposingRepReward_gte?: InputMaybe<Scalars['BigInt']>;
  proposingRepReward_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposingRepReward_lt?: InputMaybe<Scalars['BigInt']>;
  proposingRepReward_lte?: InputMaybe<Scalars['BigInt']>;
  proposingRepReward_not?: InputMaybe<Scalars['BigInt']>;
  proposingRepReward_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queuedVotePeriodLimit?: InputMaybe<Scalars['BigInt']>;
  queuedVotePeriodLimit_gt?: InputMaybe<Scalars['BigInt']>;
  queuedVotePeriodLimit_gte?: InputMaybe<Scalars['BigInt']>;
  queuedVotePeriodLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queuedVotePeriodLimit_lt?: InputMaybe<Scalars['BigInt']>;
  queuedVotePeriodLimit_lte?: InputMaybe<Scalars['BigInt']>;
  queuedVotePeriodLimit_not?: InputMaybe<Scalars['BigInt']>;
  queuedVotePeriodLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queuedVoteRequiredPercentage?: InputMaybe<Scalars['BigInt']>;
  queuedVoteRequiredPercentage_gt?: InputMaybe<Scalars['BigInt']>;
  queuedVoteRequiredPercentage_gte?: InputMaybe<Scalars['BigInt']>;
  queuedVoteRequiredPercentage_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queuedVoteRequiredPercentage_lt?: InputMaybe<Scalars['BigInt']>;
  queuedVoteRequiredPercentage_lte?: InputMaybe<Scalars['BigInt']>;
  queuedVoteRequiredPercentage_not?: InputMaybe<Scalars['BigInt']>;
  queuedVoteRequiredPercentage_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  quietEndingPeriod?: InputMaybe<Scalars['BigInt']>;
  quietEndingPeriod_gt?: InputMaybe<Scalars['BigInt']>;
  quietEndingPeriod_gte?: InputMaybe<Scalars['BigInt']>;
  quietEndingPeriod_in?: InputMaybe<Array<Scalars['BigInt']>>;
  quietEndingPeriod_lt?: InputMaybe<Scalars['BigInt']>;
  quietEndingPeriod_lte?: InputMaybe<Scalars['BigInt']>;
  quietEndingPeriod_not?: InputMaybe<Scalars['BigInt']>;
  quietEndingPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  thresholdConst?: InputMaybe<Scalars['BigInt']>;
  thresholdConst_gt?: InputMaybe<Scalars['BigInt']>;
  thresholdConst_gte?: InputMaybe<Scalars['BigInt']>;
  thresholdConst_in?: InputMaybe<Array<Scalars['BigInt']>>;
  thresholdConst_lt?: InputMaybe<Scalars['BigInt']>;
  thresholdConst_lte?: InputMaybe<Scalars['BigInt']>;
  thresholdConst_not?: InputMaybe<Scalars['BigInt']>;
  thresholdConst_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  voteOnBehalf?: InputMaybe<Scalars['Bytes']>;
  voteOnBehalf_contains?: InputMaybe<Scalars['Bytes']>;
  voteOnBehalf_in?: InputMaybe<Array<Scalars['Bytes']>>;
  voteOnBehalf_not?: InputMaybe<Scalars['Bytes']>;
  voteOnBehalf_not_contains?: InputMaybe<Scalars['Bytes']>;
  voteOnBehalf_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  votersReputationLossRatio?: InputMaybe<Scalars['BigInt']>;
  votersReputationLossRatio_gt?: InputMaybe<Scalars['BigInt']>;
  votersReputationLossRatio_gte?: InputMaybe<Scalars['BigInt']>;
  votersReputationLossRatio_in?: InputMaybe<Array<Scalars['BigInt']>>;
  votersReputationLossRatio_lt?: InputMaybe<Scalars['BigInt']>;
  votersReputationLossRatio_lte?: InputMaybe<Scalars['BigInt']>;
  votersReputationLossRatio_not?: InputMaybe<Scalars['BigInt']>;
  votersReputationLossRatio_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum GenesisProtocolParam_OrderBy {
  ActivationTime = 'activationTime',
  BoostedVotePeriodLimit = 'boostedVotePeriodLimit',
  DaoBountyConst = 'daoBountyConst',
  Id = 'id',
  LimitExponentValue = 'limitExponentValue',
  MinimumDaoBounty = 'minimumDaoBounty',
  PreBoostedVotePeriodLimit = 'preBoostedVotePeriodLimit',
  ProposingRepReward = 'proposingRepReward',
  QueuedVotePeriodLimit = 'queuedVotePeriodLimit',
  QueuedVoteRequiredPercentage = 'queuedVoteRequiredPercentage',
  QuietEndingPeriod = 'quietEndingPeriod',
  ThresholdConst = 'thresholdConst',
  VoteOnBehalf = 'voteOnBehalf',
  VotersReputationLossRatio = 'votersReputationLossRatio'
}

export type GenesisProtocolProposal = {
  __typename?: 'GenesisProtocolProposal';
  address: Scalars['Bytes'];
  daoAvatarAddress: Scalars['Bytes'];
  decision?: Maybe<Scalars['BigInt']>;
  executionState?: Maybe<Scalars['Int']>;
  executionTime?: Maybe<Scalars['BigInt']>;
  id: Scalars['ID'];
  numOfChoices?: Maybe<Scalars['BigInt']>;
  paramsHash: Scalars['Bytes'];
  proposalId: Scalars['Bytes'];
  proposer: Scalars['Bytes'];
  state?: Maybe<Scalars['Int']>;
  submittedTime: Scalars['BigInt'];
  totalReputation?: Maybe<Scalars['BigInt']>;
};

export type GenesisProtocolProposal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  daoAvatarAddress?: InputMaybe<Scalars['Bytes']>;
  daoAvatarAddress_contains?: InputMaybe<Scalars['Bytes']>;
  daoAvatarAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  daoAvatarAddress_not?: InputMaybe<Scalars['Bytes']>;
  daoAvatarAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  daoAvatarAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  decision?: InputMaybe<Scalars['BigInt']>;
  decision_gt?: InputMaybe<Scalars['BigInt']>;
  decision_gte?: InputMaybe<Scalars['BigInt']>;
  decision_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decision_lt?: InputMaybe<Scalars['BigInt']>;
  decision_lte?: InputMaybe<Scalars['BigInt']>;
  decision_not?: InputMaybe<Scalars['BigInt']>;
  decision_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executionState?: InputMaybe<Scalars['Int']>;
  executionState_gt?: InputMaybe<Scalars['Int']>;
  executionState_gte?: InputMaybe<Scalars['Int']>;
  executionState_in?: InputMaybe<Array<Scalars['Int']>>;
  executionState_lt?: InputMaybe<Scalars['Int']>;
  executionState_lte?: InputMaybe<Scalars['Int']>;
  executionState_not?: InputMaybe<Scalars['Int']>;
  executionState_not_in?: InputMaybe<Array<Scalars['Int']>>;
  executionTime?: InputMaybe<Scalars['BigInt']>;
  executionTime_gt?: InputMaybe<Scalars['BigInt']>;
  executionTime_gte?: InputMaybe<Scalars['BigInt']>;
  executionTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executionTime_lt?: InputMaybe<Scalars['BigInt']>;
  executionTime_lte?: InputMaybe<Scalars['BigInt']>;
  executionTime_not?: InputMaybe<Scalars['BigInt']>;
  executionTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  numOfChoices?: InputMaybe<Scalars['BigInt']>;
  numOfChoices_gt?: InputMaybe<Scalars['BigInt']>;
  numOfChoices_gte?: InputMaybe<Scalars['BigInt']>;
  numOfChoices_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numOfChoices_lt?: InputMaybe<Scalars['BigInt']>;
  numOfChoices_lte?: InputMaybe<Scalars['BigInt']>;
  numOfChoices_not?: InputMaybe<Scalars['BigInt']>;
  numOfChoices_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  paramsHash?: InputMaybe<Scalars['Bytes']>;
  paramsHash_contains?: InputMaybe<Scalars['Bytes']>;
  paramsHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  paramsHash_not?: InputMaybe<Scalars['Bytes']>;
  paramsHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  paramsHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proposalId?: InputMaybe<Scalars['Bytes']>;
  proposalId_contains?: InputMaybe<Scalars['Bytes']>;
  proposalId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proposalId_not?: InputMaybe<Scalars['Bytes']>;
  proposalId_not_contains?: InputMaybe<Scalars['Bytes']>;
  proposalId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proposer?: InputMaybe<Scalars['Bytes']>;
  proposer_contains?: InputMaybe<Scalars['Bytes']>;
  proposer_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proposer_not?: InputMaybe<Scalars['Bytes']>;
  proposer_not_contains?: InputMaybe<Scalars['Bytes']>;
  proposer_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  state?: InputMaybe<Scalars['Int']>;
  state_gt?: InputMaybe<Scalars['Int']>;
  state_gte?: InputMaybe<Scalars['Int']>;
  state_in?: InputMaybe<Array<Scalars['Int']>>;
  state_lt?: InputMaybe<Scalars['Int']>;
  state_lte?: InputMaybe<Scalars['Int']>;
  state_not?: InputMaybe<Scalars['Int']>;
  state_not_in?: InputMaybe<Array<Scalars['Int']>>;
  submittedTime?: InputMaybe<Scalars['BigInt']>;
  submittedTime_gt?: InputMaybe<Scalars['BigInt']>;
  submittedTime_gte?: InputMaybe<Scalars['BigInt']>;
  submittedTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  submittedTime_lt?: InputMaybe<Scalars['BigInt']>;
  submittedTime_lte?: InputMaybe<Scalars['BigInt']>;
  submittedTime_not?: InputMaybe<Scalars['BigInt']>;
  submittedTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalReputation?: InputMaybe<Scalars['BigInt']>;
  totalReputation_gt?: InputMaybe<Scalars['BigInt']>;
  totalReputation_gte?: InputMaybe<Scalars['BigInt']>;
  totalReputation_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalReputation_lt?: InputMaybe<Scalars['BigInt']>;
  totalReputation_lte?: InputMaybe<Scalars['BigInt']>;
  totalReputation_not?: InputMaybe<Scalars['BigInt']>;
  totalReputation_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum GenesisProtocolProposal_OrderBy {
  Address = 'address',
  DaoAvatarAddress = 'daoAvatarAddress',
  Decision = 'decision',
  ExecutionState = 'executionState',
  ExecutionTime = 'executionTime',
  Id = 'id',
  NumOfChoices = 'numOfChoices',
  ParamsHash = 'paramsHash',
  ProposalId = 'proposalId',
  Proposer = 'proposer',
  State = 'state',
  SubmittedTime = 'submittedTime',
  TotalReputation = 'totalReputation'
}

export type GenesisProtocolRedemption = {
  __typename?: 'GenesisProtocolRedemption';
  id: Scalars['ID'];
  proposalId: Scalars['ID'];
  redeemer: Scalars['Bytes'];
  rewardId: GenesisProtocolReward;
};

export type GenesisProtocolRedemption_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  proposalId?: InputMaybe<Scalars['ID']>;
  proposalId_gt?: InputMaybe<Scalars['ID']>;
  proposalId_gte?: InputMaybe<Scalars['ID']>;
  proposalId_in?: InputMaybe<Array<Scalars['ID']>>;
  proposalId_lt?: InputMaybe<Scalars['ID']>;
  proposalId_lte?: InputMaybe<Scalars['ID']>;
  proposalId_not?: InputMaybe<Scalars['ID']>;
  proposalId_not_in?: InputMaybe<Array<Scalars['ID']>>;
  redeemer?: InputMaybe<Scalars['Bytes']>;
  redeemer_contains?: InputMaybe<Scalars['Bytes']>;
  redeemer_in?: InputMaybe<Array<Scalars['Bytes']>>;
  redeemer_not?: InputMaybe<Scalars['Bytes']>;
  redeemer_not_contains?: InputMaybe<Scalars['Bytes']>;
  redeemer_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardId?: InputMaybe<Scalars['String']>;
  rewardId_?: InputMaybe<GenesisProtocolReward_Filter>;
  rewardId_contains?: InputMaybe<Scalars['String']>;
  rewardId_contains_nocase?: InputMaybe<Scalars['String']>;
  rewardId_ends_with?: InputMaybe<Scalars['String']>;
  rewardId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rewardId_gt?: InputMaybe<Scalars['String']>;
  rewardId_gte?: InputMaybe<Scalars['String']>;
  rewardId_in?: InputMaybe<Array<Scalars['String']>>;
  rewardId_lt?: InputMaybe<Scalars['String']>;
  rewardId_lte?: InputMaybe<Scalars['String']>;
  rewardId_not?: InputMaybe<Scalars['String']>;
  rewardId_not_contains?: InputMaybe<Scalars['String']>;
  rewardId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rewardId_not_ends_with?: InputMaybe<Scalars['String']>;
  rewardId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rewardId_not_in?: InputMaybe<Array<Scalars['String']>>;
  rewardId_not_starts_with?: InputMaybe<Scalars['String']>;
  rewardId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rewardId_starts_with?: InputMaybe<Scalars['String']>;
  rewardId_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum GenesisProtocolRedemption_OrderBy {
  Id = 'id',
  ProposalId = 'proposalId',
  Redeemer = 'redeemer',
  RewardId = 'rewardId'
}

export type GenesisProtocolReward = {
  __typename?: 'GenesisProtocolReward';
  amount: Scalars['BigInt'];
  id: Scalars['ID'];
  type?: Maybe<GenesisProtocolRewardType>;
};

export enum GenesisProtocolRewardType {
  BeneficiaryEth = 'beneficiaryEth',
  BeneficiaryExternalToken = 'beneficiaryExternalToken',
  BeneficiaryNativeToken = 'beneficiaryNativeToken',
  BeneficiaryReputation = 'beneficiaryReputation',
  GpBounty = 'gpBounty',
  GpGen = 'gpGen',
  GpRep = 'gpRep'
}

export type GenesisProtocolReward_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<GenesisProtocolRewardType>;
  type_in?: InputMaybe<Array<GenesisProtocolRewardType>>;
  type_not?: InputMaybe<GenesisProtocolRewardType>;
  type_not_in?: InputMaybe<Array<GenesisProtocolRewardType>>;
};

export enum GenesisProtocolReward_OrderBy {
  Amount = 'amount',
  Id = 'id',
  Type = 'type'
}

export type GenesisProtocolStake = {
  __typename?: 'GenesisProtocolStake';
  avatarAddress: Scalars['Bytes'];
  id: Scalars['ID'];
  prediction: Scalars['BigInt'];
  proposalId: GenesisProtocolProposal;
  stakeAmount: Scalars['BigInt'];
  stakerAddress: Scalars['Bytes'];
};

export type GenesisProtocolStake_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  avatarAddress?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_contains?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  avatarAddress_not?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  prediction?: InputMaybe<Scalars['BigInt']>;
  prediction_gt?: InputMaybe<Scalars['BigInt']>;
  prediction_gte?: InputMaybe<Scalars['BigInt']>;
  prediction_in?: InputMaybe<Array<Scalars['BigInt']>>;
  prediction_lt?: InputMaybe<Scalars['BigInt']>;
  prediction_lte?: InputMaybe<Scalars['BigInt']>;
  prediction_not?: InputMaybe<Scalars['BigInt']>;
  prediction_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposalId?: InputMaybe<Scalars['String']>;
  proposalId_?: InputMaybe<GenesisProtocolProposal_Filter>;
  proposalId_contains?: InputMaybe<Scalars['String']>;
  proposalId_contains_nocase?: InputMaybe<Scalars['String']>;
  proposalId_ends_with?: InputMaybe<Scalars['String']>;
  proposalId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposalId_gt?: InputMaybe<Scalars['String']>;
  proposalId_gte?: InputMaybe<Scalars['String']>;
  proposalId_in?: InputMaybe<Array<Scalars['String']>>;
  proposalId_lt?: InputMaybe<Scalars['String']>;
  proposalId_lte?: InputMaybe<Scalars['String']>;
  proposalId_not?: InputMaybe<Scalars['String']>;
  proposalId_not_contains?: InputMaybe<Scalars['String']>;
  proposalId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  proposalId_not_ends_with?: InputMaybe<Scalars['String']>;
  proposalId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposalId_not_in?: InputMaybe<Array<Scalars['String']>>;
  proposalId_not_starts_with?: InputMaybe<Scalars['String']>;
  proposalId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposalId_starts_with?: InputMaybe<Scalars['String']>;
  proposalId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stakeAmount?: InputMaybe<Scalars['BigInt']>;
  stakeAmount_gt?: InputMaybe<Scalars['BigInt']>;
  stakeAmount_gte?: InputMaybe<Scalars['BigInt']>;
  stakeAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakeAmount_lt?: InputMaybe<Scalars['BigInt']>;
  stakeAmount_lte?: InputMaybe<Scalars['BigInt']>;
  stakeAmount_not?: InputMaybe<Scalars['BigInt']>;
  stakeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakerAddress?: InputMaybe<Scalars['Bytes']>;
  stakerAddress_contains?: InputMaybe<Scalars['Bytes']>;
  stakerAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  stakerAddress_not?: InputMaybe<Scalars['Bytes']>;
  stakerAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  stakerAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum GenesisProtocolStake_OrderBy {
  AvatarAddress = 'avatarAddress',
  Id = 'id',
  Prediction = 'prediction',
  ProposalId = 'proposalId',
  StakeAmount = 'stakeAmount',
  StakerAddress = 'stakerAddress'
}

export type GenesisProtocolVote = {
  __typename?: 'GenesisProtocolVote';
  avatarAddress: Scalars['Bytes'];
  id: Scalars['ID'];
  proposalId: GenesisProtocolProposal;
  reputation: Scalars['BigInt'];
  voteOption: Scalars['BigInt'];
  voterAddress: Scalars['Bytes'];
};

export type GenesisProtocolVote_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  avatarAddress?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_contains?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  avatarAddress_not?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  proposalId?: InputMaybe<Scalars['String']>;
  proposalId_?: InputMaybe<GenesisProtocolProposal_Filter>;
  proposalId_contains?: InputMaybe<Scalars['String']>;
  proposalId_contains_nocase?: InputMaybe<Scalars['String']>;
  proposalId_ends_with?: InputMaybe<Scalars['String']>;
  proposalId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposalId_gt?: InputMaybe<Scalars['String']>;
  proposalId_gte?: InputMaybe<Scalars['String']>;
  proposalId_in?: InputMaybe<Array<Scalars['String']>>;
  proposalId_lt?: InputMaybe<Scalars['String']>;
  proposalId_lte?: InputMaybe<Scalars['String']>;
  proposalId_not?: InputMaybe<Scalars['String']>;
  proposalId_not_contains?: InputMaybe<Scalars['String']>;
  proposalId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  proposalId_not_ends_with?: InputMaybe<Scalars['String']>;
  proposalId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposalId_not_in?: InputMaybe<Array<Scalars['String']>>;
  proposalId_not_starts_with?: InputMaybe<Scalars['String']>;
  proposalId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposalId_starts_with?: InputMaybe<Scalars['String']>;
  proposalId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reputation?: InputMaybe<Scalars['BigInt']>;
  reputation_gt?: InputMaybe<Scalars['BigInt']>;
  reputation_gte?: InputMaybe<Scalars['BigInt']>;
  reputation_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reputation_lt?: InputMaybe<Scalars['BigInt']>;
  reputation_lte?: InputMaybe<Scalars['BigInt']>;
  reputation_not?: InputMaybe<Scalars['BigInt']>;
  reputation_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  voteOption?: InputMaybe<Scalars['BigInt']>;
  voteOption_gt?: InputMaybe<Scalars['BigInt']>;
  voteOption_gte?: InputMaybe<Scalars['BigInt']>;
  voteOption_in?: InputMaybe<Array<Scalars['BigInt']>>;
  voteOption_lt?: InputMaybe<Scalars['BigInt']>;
  voteOption_lte?: InputMaybe<Scalars['BigInt']>;
  voteOption_not?: InputMaybe<Scalars['BigInt']>;
  voteOption_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  voterAddress?: InputMaybe<Scalars['Bytes']>;
  voterAddress_contains?: InputMaybe<Scalars['Bytes']>;
  voterAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  voterAddress_not?: InputMaybe<Scalars['Bytes']>;
  voterAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  voterAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum GenesisProtocolVote_OrderBy {
  AvatarAddress = 'avatarAddress',
  Id = 'id',
  ProposalId = 'proposalId',
  Reputation = 'reputation',
  VoteOption = 'voteOption',
  VoterAddress = 'voterAddress'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum Outcome {
  Fail = 'Fail',
  Pass = 'Pass'
}

export type PreGpReward = {
  __typename?: 'PreGPReward';
  beneficiary: Scalars['Bytes'];
  id: Scalars['ID'];
};

export type PreGpReward_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  beneficiary?: InputMaybe<Scalars['Bytes']>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export enum PreGpReward_OrderBy {
  Beneficiary = 'beneficiary',
  Id = 'id'
}

export type Proposal = {
  __typename?: 'Proposal';
  accountsWithUnclaimedRewards?: Maybe<Array<Scalars['Bytes']>>;
  boostedAt?: Maybe<Scalars['BigInt']>;
  closingAt?: Maybe<Scalars['BigInt']>;
  competition?: Maybe<CompetitionProposal>;
  confidence: Scalars['BigDecimal'];
  confidenceThreshold: Scalars['BigInt'];
  contributionReward?: Maybe<ContributionRewardProposal>;
  createdAt: Scalars['BigInt'];
  dao: Dao;
  description?: Maybe<Scalars['String']>;
  descriptionHash: Scalars['String'];
  executedAt?: Maybe<Scalars['BigInt']>;
  executionState: Scalars['String'];
  expiresInQueueAt: Scalars['BigInt'];
  genericScheme?: Maybe<GenericSchemeProposal>;
  genericSchemeMultiCall?: Maybe<GenericSchemeMultiCallProposal>;
  genesisProtocolParams: GenesisProtocolParam;
  gpQueue: GpQueue;
  gpRewards?: Maybe<Array<GpReward>>;
  id: Scalars['ID'];
  organizationId: Scalars['Bytes'];
  paramsHash: Scalars['Bytes'];
  preBoostedAt?: Maybe<Scalars['BigInt']>;
  preBoostedClosingAt?: Maybe<Scalars['BigInt']>;
  proposer: Scalars['Bytes'];
  quietEndingPeriodBeganAt?: Maybe<Scalars['BigInt']>;
  scheme?: Maybe<ControllerScheme>;
  schemeRegistrar?: Maybe<SchemeRegistrarProposal>;
  stage: Scalars['String'];
  stakes?: Maybe<Array<ProposalStake>>;
  stakesAgainst: Scalars['BigInt'];
  stakesFor: Scalars['BigInt'];
  tags?: Maybe<Array<Tag>>;
  title?: Maybe<Scalars['String']>;
  totalRepWhenCreated?: Maybe<Scalars['BigInt']>;
  totalRepWhenExecuted?: Maybe<Scalars['BigInt']>;
  url?: Maybe<Scalars['String']>;
  votes?: Maybe<Array<ProposalVote>>;
  votesAgainst: Scalars['BigInt'];
  votesFor: Scalars['BigInt'];
  votingMachine: Scalars['Bytes'];
  winningOutcome: Outcome;
};


export type ProposalGpRewardsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GpReward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GpReward_Filter>;
};


export type ProposalStakesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalStake_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProposalStake_Filter>;
};


export type ProposalTagsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Tag_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Tag_Filter>;
};


export type ProposalVotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalVote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProposalVote_Filter>;
};

export type ProposalStake = {
  __typename?: 'ProposalStake';
  amount: Scalars['BigInt'];
  createdAt: Scalars['BigInt'];
  dao: Dao;
  id: Scalars['ID'];
  outcome: Outcome;
  proposal: Proposal;
  staker: Scalars['Bytes'];
};

export type ProposalStake_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dao?: InputMaybe<Scalars['String']>;
  dao_?: InputMaybe<Dao_Filter>;
  dao_contains?: InputMaybe<Scalars['String']>;
  dao_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_ends_with?: InputMaybe<Scalars['String']>;
  dao_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_gt?: InputMaybe<Scalars['String']>;
  dao_gte?: InputMaybe<Scalars['String']>;
  dao_in?: InputMaybe<Array<Scalars['String']>>;
  dao_lt?: InputMaybe<Scalars['String']>;
  dao_lte?: InputMaybe<Scalars['String']>;
  dao_not?: InputMaybe<Scalars['String']>;
  dao_not_contains?: InputMaybe<Scalars['String']>;
  dao_not_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_not_ends_with?: InputMaybe<Scalars['String']>;
  dao_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_not_in?: InputMaybe<Array<Scalars['String']>>;
  dao_not_starts_with?: InputMaybe<Scalars['String']>;
  dao_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dao_starts_with?: InputMaybe<Scalars['String']>;
  dao_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  outcome?: InputMaybe<Outcome>;
  outcome_in?: InputMaybe<Array<Outcome>>;
  outcome_not?: InputMaybe<Outcome>;
  outcome_not_in?: InputMaybe<Array<Outcome>>;
  proposal?: InputMaybe<Scalars['String']>;
  proposal_?: InputMaybe<Proposal_Filter>;
  proposal_contains?: InputMaybe<Scalars['String']>;
  proposal_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_ends_with?: InputMaybe<Scalars['String']>;
  proposal_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_gt?: InputMaybe<Scalars['String']>;
  proposal_gte?: InputMaybe<Scalars['String']>;
  proposal_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_lt?: InputMaybe<Scalars['String']>;
  proposal_lte?: InputMaybe<Scalars['String']>;
  proposal_not?: InputMaybe<Scalars['String']>;
  proposal_not_contains?: InputMaybe<Scalars['String']>;
  proposal_not_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_not_starts_with?: InputMaybe<Scalars['String']>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_starts_with?: InputMaybe<Scalars['String']>;
  proposal_starts_with_nocase?: InputMaybe<Scalars['String']>;
  staker?: InputMaybe<Scalars['Bytes']>;
  staker_contains?: InputMaybe<Scalars['Bytes']>;
  staker_in?: InputMaybe<Array<Scalars['Bytes']>>;
  staker_not?: InputMaybe<Scalars['Bytes']>;
  staker_not_contains?: InputMaybe<Scalars['Bytes']>;
  staker_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum ProposalStake_OrderBy {
  Amount = 'amount',
  CreatedAt = 'createdAt',
  Dao = 'dao',
  Id = 'id',
  Outcome = 'outcome',
  Proposal = 'proposal',
  Staker = 'staker'
}

export type ProposalVote = {
  __typename?: 'ProposalVote';
  createdAt: Scalars['BigInt'];
  dao: Dao;
  id: Scalars['ID'];
  outcome: Outcome;
  proposal: Proposal;
  reputation: Scalars['BigInt'];
  voter: Scalars['Bytes'];
};

export type ProposalVote_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dao?: InputMaybe<Scalars['String']>;
  dao_?: InputMaybe<Dao_Filter>;
  dao_contains?: InputMaybe<Scalars['String']>;
  dao_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_ends_with?: InputMaybe<Scalars['String']>;
  dao_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_gt?: InputMaybe<Scalars['String']>;
  dao_gte?: InputMaybe<Scalars['String']>;
  dao_in?: InputMaybe<Array<Scalars['String']>>;
  dao_lt?: InputMaybe<Scalars['String']>;
  dao_lte?: InputMaybe<Scalars['String']>;
  dao_not?: InputMaybe<Scalars['String']>;
  dao_not_contains?: InputMaybe<Scalars['String']>;
  dao_not_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_not_ends_with?: InputMaybe<Scalars['String']>;
  dao_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_not_in?: InputMaybe<Array<Scalars['String']>>;
  dao_not_starts_with?: InputMaybe<Scalars['String']>;
  dao_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dao_starts_with?: InputMaybe<Scalars['String']>;
  dao_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  outcome?: InputMaybe<Outcome>;
  outcome_in?: InputMaybe<Array<Outcome>>;
  outcome_not?: InputMaybe<Outcome>;
  outcome_not_in?: InputMaybe<Array<Outcome>>;
  proposal?: InputMaybe<Scalars['String']>;
  proposal_?: InputMaybe<Proposal_Filter>;
  proposal_contains?: InputMaybe<Scalars['String']>;
  proposal_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_ends_with?: InputMaybe<Scalars['String']>;
  proposal_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_gt?: InputMaybe<Scalars['String']>;
  proposal_gte?: InputMaybe<Scalars['String']>;
  proposal_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_lt?: InputMaybe<Scalars['String']>;
  proposal_lte?: InputMaybe<Scalars['String']>;
  proposal_not?: InputMaybe<Scalars['String']>;
  proposal_not_contains?: InputMaybe<Scalars['String']>;
  proposal_not_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_not_starts_with?: InputMaybe<Scalars['String']>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_starts_with?: InputMaybe<Scalars['String']>;
  proposal_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reputation?: InputMaybe<Scalars['BigInt']>;
  reputation_gt?: InputMaybe<Scalars['BigInt']>;
  reputation_gte?: InputMaybe<Scalars['BigInt']>;
  reputation_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reputation_lt?: InputMaybe<Scalars['BigInt']>;
  reputation_lte?: InputMaybe<Scalars['BigInt']>;
  reputation_not?: InputMaybe<Scalars['BigInt']>;
  reputation_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  voter?: InputMaybe<Scalars['Bytes']>;
  voter_contains?: InputMaybe<Scalars['Bytes']>;
  voter_in?: InputMaybe<Array<Scalars['Bytes']>>;
  voter_not?: InputMaybe<Scalars['Bytes']>;
  voter_not_contains?: InputMaybe<Scalars['Bytes']>;
  voter_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum ProposalVote_OrderBy {
  CreatedAt = 'createdAt',
  Dao = 'dao',
  Id = 'id',
  Outcome = 'outcome',
  Proposal = 'proposal',
  Reputation = 'reputation',
  Voter = 'voter'
}

export type Proposal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accountsWithUnclaimedRewards?: InputMaybe<Array<Scalars['Bytes']>>;
  accountsWithUnclaimedRewards_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  accountsWithUnclaimedRewards_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  accountsWithUnclaimedRewards_not?: InputMaybe<Array<Scalars['Bytes']>>;
  accountsWithUnclaimedRewards_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  accountsWithUnclaimedRewards_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  boostedAt?: InputMaybe<Scalars['BigInt']>;
  boostedAt_gt?: InputMaybe<Scalars['BigInt']>;
  boostedAt_gte?: InputMaybe<Scalars['BigInt']>;
  boostedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  boostedAt_lt?: InputMaybe<Scalars['BigInt']>;
  boostedAt_lte?: InputMaybe<Scalars['BigInt']>;
  boostedAt_not?: InputMaybe<Scalars['BigInt']>;
  boostedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  closingAt?: InputMaybe<Scalars['BigInt']>;
  closingAt_gt?: InputMaybe<Scalars['BigInt']>;
  closingAt_gte?: InputMaybe<Scalars['BigInt']>;
  closingAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  closingAt_lt?: InputMaybe<Scalars['BigInt']>;
  closingAt_lte?: InputMaybe<Scalars['BigInt']>;
  closingAt_not?: InputMaybe<Scalars['BigInt']>;
  closingAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  competition?: InputMaybe<Scalars['String']>;
  competition_?: InputMaybe<CompetitionProposal_Filter>;
  competition_contains?: InputMaybe<Scalars['String']>;
  competition_contains_nocase?: InputMaybe<Scalars['String']>;
  competition_ends_with?: InputMaybe<Scalars['String']>;
  competition_ends_with_nocase?: InputMaybe<Scalars['String']>;
  competition_gt?: InputMaybe<Scalars['String']>;
  competition_gte?: InputMaybe<Scalars['String']>;
  competition_in?: InputMaybe<Array<Scalars['String']>>;
  competition_lt?: InputMaybe<Scalars['String']>;
  competition_lte?: InputMaybe<Scalars['String']>;
  competition_not?: InputMaybe<Scalars['String']>;
  competition_not_contains?: InputMaybe<Scalars['String']>;
  competition_not_contains_nocase?: InputMaybe<Scalars['String']>;
  competition_not_ends_with?: InputMaybe<Scalars['String']>;
  competition_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  competition_not_in?: InputMaybe<Array<Scalars['String']>>;
  competition_not_starts_with?: InputMaybe<Scalars['String']>;
  competition_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  competition_starts_with?: InputMaybe<Scalars['String']>;
  competition_starts_with_nocase?: InputMaybe<Scalars['String']>;
  confidence?: InputMaybe<Scalars['BigDecimal']>;
  confidenceThreshold?: InputMaybe<Scalars['BigInt']>;
  confidenceThreshold_gt?: InputMaybe<Scalars['BigInt']>;
  confidenceThreshold_gte?: InputMaybe<Scalars['BigInt']>;
  confidenceThreshold_in?: InputMaybe<Array<Scalars['BigInt']>>;
  confidenceThreshold_lt?: InputMaybe<Scalars['BigInt']>;
  confidenceThreshold_lte?: InputMaybe<Scalars['BigInt']>;
  confidenceThreshold_not?: InputMaybe<Scalars['BigInt']>;
  confidenceThreshold_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  confidence_gt?: InputMaybe<Scalars['BigDecimal']>;
  confidence_gte?: InputMaybe<Scalars['BigDecimal']>;
  confidence_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  confidence_lt?: InputMaybe<Scalars['BigDecimal']>;
  confidence_lte?: InputMaybe<Scalars['BigDecimal']>;
  confidence_not?: InputMaybe<Scalars['BigDecimal']>;
  confidence_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  contributionReward?: InputMaybe<Scalars['String']>;
  contributionReward_?: InputMaybe<ContributionRewardProposal_Filter>;
  contributionReward_contains?: InputMaybe<Scalars['String']>;
  contributionReward_contains_nocase?: InputMaybe<Scalars['String']>;
  contributionReward_ends_with?: InputMaybe<Scalars['String']>;
  contributionReward_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contributionReward_gt?: InputMaybe<Scalars['String']>;
  contributionReward_gte?: InputMaybe<Scalars['String']>;
  contributionReward_in?: InputMaybe<Array<Scalars['String']>>;
  contributionReward_lt?: InputMaybe<Scalars['String']>;
  contributionReward_lte?: InputMaybe<Scalars['String']>;
  contributionReward_not?: InputMaybe<Scalars['String']>;
  contributionReward_not_contains?: InputMaybe<Scalars['String']>;
  contributionReward_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contributionReward_not_ends_with?: InputMaybe<Scalars['String']>;
  contributionReward_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contributionReward_not_in?: InputMaybe<Array<Scalars['String']>>;
  contributionReward_not_starts_with?: InputMaybe<Scalars['String']>;
  contributionReward_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contributionReward_starts_with?: InputMaybe<Scalars['String']>;
  contributionReward_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dao?: InputMaybe<Scalars['String']>;
  dao_?: InputMaybe<Dao_Filter>;
  dao_contains?: InputMaybe<Scalars['String']>;
  dao_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_ends_with?: InputMaybe<Scalars['String']>;
  dao_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_gt?: InputMaybe<Scalars['String']>;
  dao_gte?: InputMaybe<Scalars['String']>;
  dao_in?: InputMaybe<Array<Scalars['String']>>;
  dao_lt?: InputMaybe<Scalars['String']>;
  dao_lte?: InputMaybe<Scalars['String']>;
  dao_not?: InputMaybe<Scalars['String']>;
  dao_not_contains?: InputMaybe<Scalars['String']>;
  dao_not_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_not_ends_with?: InputMaybe<Scalars['String']>;
  dao_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_not_in?: InputMaybe<Array<Scalars['String']>>;
  dao_not_starts_with?: InputMaybe<Scalars['String']>;
  dao_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dao_starts_with?: InputMaybe<Scalars['String']>;
  dao_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  descriptionHash?: InputMaybe<Scalars['String']>;
  descriptionHash_contains?: InputMaybe<Scalars['String']>;
  descriptionHash_contains_nocase?: InputMaybe<Scalars['String']>;
  descriptionHash_ends_with?: InputMaybe<Scalars['String']>;
  descriptionHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  descriptionHash_gt?: InputMaybe<Scalars['String']>;
  descriptionHash_gte?: InputMaybe<Scalars['String']>;
  descriptionHash_in?: InputMaybe<Array<Scalars['String']>>;
  descriptionHash_lt?: InputMaybe<Scalars['String']>;
  descriptionHash_lte?: InputMaybe<Scalars['String']>;
  descriptionHash_not?: InputMaybe<Scalars['String']>;
  descriptionHash_not_contains?: InputMaybe<Scalars['String']>;
  descriptionHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  descriptionHash_not_ends_with?: InputMaybe<Scalars['String']>;
  descriptionHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  descriptionHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  descriptionHash_not_starts_with?: InputMaybe<Scalars['String']>;
  descriptionHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  descriptionHash_starts_with?: InputMaybe<Scalars['String']>;
  descriptionHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  executedAt?: InputMaybe<Scalars['BigInt']>;
  executedAt_gt?: InputMaybe<Scalars['BigInt']>;
  executedAt_gte?: InputMaybe<Scalars['BigInt']>;
  executedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedAt_lt?: InputMaybe<Scalars['BigInt']>;
  executedAt_lte?: InputMaybe<Scalars['BigInt']>;
  executedAt_not?: InputMaybe<Scalars['BigInt']>;
  executedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executionState?: InputMaybe<Scalars['String']>;
  executionState_contains?: InputMaybe<Scalars['String']>;
  executionState_contains_nocase?: InputMaybe<Scalars['String']>;
  executionState_ends_with?: InputMaybe<Scalars['String']>;
  executionState_ends_with_nocase?: InputMaybe<Scalars['String']>;
  executionState_gt?: InputMaybe<Scalars['String']>;
  executionState_gte?: InputMaybe<Scalars['String']>;
  executionState_in?: InputMaybe<Array<Scalars['String']>>;
  executionState_lt?: InputMaybe<Scalars['String']>;
  executionState_lte?: InputMaybe<Scalars['String']>;
  executionState_not?: InputMaybe<Scalars['String']>;
  executionState_not_contains?: InputMaybe<Scalars['String']>;
  executionState_not_contains_nocase?: InputMaybe<Scalars['String']>;
  executionState_not_ends_with?: InputMaybe<Scalars['String']>;
  executionState_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  executionState_not_in?: InputMaybe<Array<Scalars['String']>>;
  executionState_not_starts_with?: InputMaybe<Scalars['String']>;
  executionState_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  executionState_starts_with?: InputMaybe<Scalars['String']>;
  executionState_starts_with_nocase?: InputMaybe<Scalars['String']>;
  expiresInQueueAt?: InputMaybe<Scalars['BigInt']>;
  expiresInQueueAt_gt?: InputMaybe<Scalars['BigInt']>;
  expiresInQueueAt_gte?: InputMaybe<Scalars['BigInt']>;
  expiresInQueueAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiresInQueueAt_lt?: InputMaybe<Scalars['BigInt']>;
  expiresInQueueAt_lte?: InputMaybe<Scalars['BigInt']>;
  expiresInQueueAt_not?: InputMaybe<Scalars['BigInt']>;
  expiresInQueueAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  genericScheme?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCall?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCall_?: InputMaybe<GenericSchemeMultiCallProposal_Filter>;
  genericSchemeMultiCall_contains?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCall_contains_nocase?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCall_ends_with?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCall_ends_with_nocase?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCall_gt?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCall_gte?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCall_in?: InputMaybe<Array<Scalars['String']>>;
  genericSchemeMultiCall_lt?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCall_lte?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCall_not?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCall_not_contains?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCall_not_contains_nocase?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCall_not_ends_with?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCall_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCall_not_in?: InputMaybe<Array<Scalars['String']>>;
  genericSchemeMultiCall_not_starts_with?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCall_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCall_starts_with?: InputMaybe<Scalars['String']>;
  genericSchemeMultiCall_starts_with_nocase?: InputMaybe<Scalars['String']>;
  genericScheme_?: InputMaybe<GenericSchemeProposal_Filter>;
  genericScheme_contains?: InputMaybe<Scalars['String']>;
  genericScheme_contains_nocase?: InputMaybe<Scalars['String']>;
  genericScheme_ends_with?: InputMaybe<Scalars['String']>;
  genericScheme_ends_with_nocase?: InputMaybe<Scalars['String']>;
  genericScheme_gt?: InputMaybe<Scalars['String']>;
  genericScheme_gte?: InputMaybe<Scalars['String']>;
  genericScheme_in?: InputMaybe<Array<Scalars['String']>>;
  genericScheme_lt?: InputMaybe<Scalars['String']>;
  genericScheme_lte?: InputMaybe<Scalars['String']>;
  genericScheme_not?: InputMaybe<Scalars['String']>;
  genericScheme_not_contains?: InputMaybe<Scalars['String']>;
  genericScheme_not_contains_nocase?: InputMaybe<Scalars['String']>;
  genericScheme_not_ends_with?: InputMaybe<Scalars['String']>;
  genericScheme_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  genericScheme_not_in?: InputMaybe<Array<Scalars['String']>>;
  genericScheme_not_starts_with?: InputMaybe<Scalars['String']>;
  genericScheme_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  genericScheme_starts_with?: InputMaybe<Scalars['String']>;
  genericScheme_starts_with_nocase?: InputMaybe<Scalars['String']>;
  genesisProtocolParams?: InputMaybe<Scalars['String']>;
  genesisProtocolParams_?: InputMaybe<GenesisProtocolParam_Filter>;
  genesisProtocolParams_contains?: InputMaybe<Scalars['String']>;
  genesisProtocolParams_contains_nocase?: InputMaybe<Scalars['String']>;
  genesisProtocolParams_ends_with?: InputMaybe<Scalars['String']>;
  genesisProtocolParams_ends_with_nocase?: InputMaybe<Scalars['String']>;
  genesisProtocolParams_gt?: InputMaybe<Scalars['String']>;
  genesisProtocolParams_gte?: InputMaybe<Scalars['String']>;
  genesisProtocolParams_in?: InputMaybe<Array<Scalars['String']>>;
  genesisProtocolParams_lt?: InputMaybe<Scalars['String']>;
  genesisProtocolParams_lte?: InputMaybe<Scalars['String']>;
  genesisProtocolParams_not?: InputMaybe<Scalars['String']>;
  genesisProtocolParams_not_contains?: InputMaybe<Scalars['String']>;
  genesisProtocolParams_not_contains_nocase?: InputMaybe<Scalars['String']>;
  genesisProtocolParams_not_ends_with?: InputMaybe<Scalars['String']>;
  genesisProtocolParams_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  genesisProtocolParams_not_in?: InputMaybe<Array<Scalars['String']>>;
  genesisProtocolParams_not_starts_with?: InputMaybe<Scalars['String']>;
  genesisProtocolParams_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  genesisProtocolParams_starts_with?: InputMaybe<Scalars['String']>;
  genesisProtocolParams_starts_with_nocase?: InputMaybe<Scalars['String']>;
  gpQueue?: InputMaybe<Scalars['String']>;
  gpQueue_?: InputMaybe<GpQueue_Filter>;
  gpQueue_contains?: InputMaybe<Scalars['String']>;
  gpQueue_contains_nocase?: InputMaybe<Scalars['String']>;
  gpQueue_ends_with?: InputMaybe<Scalars['String']>;
  gpQueue_ends_with_nocase?: InputMaybe<Scalars['String']>;
  gpQueue_gt?: InputMaybe<Scalars['String']>;
  gpQueue_gte?: InputMaybe<Scalars['String']>;
  gpQueue_in?: InputMaybe<Array<Scalars['String']>>;
  gpQueue_lt?: InputMaybe<Scalars['String']>;
  gpQueue_lte?: InputMaybe<Scalars['String']>;
  gpQueue_not?: InputMaybe<Scalars['String']>;
  gpQueue_not_contains?: InputMaybe<Scalars['String']>;
  gpQueue_not_contains_nocase?: InputMaybe<Scalars['String']>;
  gpQueue_not_ends_with?: InputMaybe<Scalars['String']>;
  gpQueue_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  gpQueue_not_in?: InputMaybe<Array<Scalars['String']>>;
  gpQueue_not_starts_with?: InputMaybe<Scalars['String']>;
  gpQueue_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  gpQueue_starts_with?: InputMaybe<Scalars['String']>;
  gpQueue_starts_with_nocase?: InputMaybe<Scalars['String']>;
  gpRewards_?: InputMaybe<GpReward_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  organizationId?: InputMaybe<Scalars['Bytes']>;
  organizationId_contains?: InputMaybe<Scalars['Bytes']>;
  organizationId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  organizationId_not?: InputMaybe<Scalars['Bytes']>;
  organizationId_not_contains?: InputMaybe<Scalars['Bytes']>;
  organizationId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  paramsHash?: InputMaybe<Scalars['Bytes']>;
  paramsHash_contains?: InputMaybe<Scalars['Bytes']>;
  paramsHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  paramsHash_not?: InputMaybe<Scalars['Bytes']>;
  paramsHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  paramsHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  preBoostedAt?: InputMaybe<Scalars['BigInt']>;
  preBoostedAt_gt?: InputMaybe<Scalars['BigInt']>;
  preBoostedAt_gte?: InputMaybe<Scalars['BigInt']>;
  preBoostedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  preBoostedAt_lt?: InputMaybe<Scalars['BigInt']>;
  preBoostedAt_lte?: InputMaybe<Scalars['BigInt']>;
  preBoostedAt_not?: InputMaybe<Scalars['BigInt']>;
  preBoostedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  preBoostedClosingAt?: InputMaybe<Scalars['BigInt']>;
  preBoostedClosingAt_gt?: InputMaybe<Scalars['BigInt']>;
  preBoostedClosingAt_gte?: InputMaybe<Scalars['BigInt']>;
  preBoostedClosingAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  preBoostedClosingAt_lt?: InputMaybe<Scalars['BigInt']>;
  preBoostedClosingAt_lte?: InputMaybe<Scalars['BigInt']>;
  preBoostedClosingAt_not?: InputMaybe<Scalars['BigInt']>;
  preBoostedClosingAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposer?: InputMaybe<Scalars['Bytes']>;
  proposer_contains?: InputMaybe<Scalars['Bytes']>;
  proposer_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proposer_not?: InputMaybe<Scalars['Bytes']>;
  proposer_not_contains?: InputMaybe<Scalars['Bytes']>;
  proposer_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  quietEndingPeriodBeganAt?: InputMaybe<Scalars['BigInt']>;
  quietEndingPeriodBeganAt_gt?: InputMaybe<Scalars['BigInt']>;
  quietEndingPeriodBeganAt_gte?: InputMaybe<Scalars['BigInt']>;
  quietEndingPeriodBeganAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  quietEndingPeriodBeganAt_lt?: InputMaybe<Scalars['BigInt']>;
  quietEndingPeriodBeganAt_lte?: InputMaybe<Scalars['BigInt']>;
  quietEndingPeriodBeganAt_not?: InputMaybe<Scalars['BigInt']>;
  quietEndingPeriodBeganAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  scheme?: InputMaybe<Scalars['String']>;
  schemeRegistrar?: InputMaybe<Scalars['String']>;
  schemeRegistrar_?: InputMaybe<SchemeRegistrarProposal_Filter>;
  schemeRegistrar_contains?: InputMaybe<Scalars['String']>;
  schemeRegistrar_contains_nocase?: InputMaybe<Scalars['String']>;
  schemeRegistrar_ends_with?: InputMaybe<Scalars['String']>;
  schemeRegistrar_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schemeRegistrar_gt?: InputMaybe<Scalars['String']>;
  schemeRegistrar_gte?: InputMaybe<Scalars['String']>;
  schemeRegistrar_in?: InputMaybe<Array<Scalars['String']>>;
  schemeRegistrar_lt?: InputMaybe<Scalars['String']>;
  schemeRegistrar_lte?: InputMaybe<Scalars['String']>;
  schemeRegistrar_not?: InputMaybe<Scalars['String']>;
  schemeRegistrar_not_contains?: InputMaybe<Scalars['String']>;
  schemeRegistrar_not_contains_nocase?: InputMaybe<Scalars['String']>;
  schemeRegistrar_not_ends_with?: InputMaybe<Scalars['String']>;
  schemeRegistrar_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schemeRegistrar_not_in?: InputMaybe<Array<Scalars['String']>>;
  schemeRegistrar_not_starts_with?: InputMaybe<Scalars['String']>;
  schemeRegistrar_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schemeRegistrar_starts_with?: InputMaybe<Scalars['String']>;
  schemeRegistrar_starts_with_nocase?: InputMaybe<Scalars['String']>;
  scheme_?: InputMaybe<ControllerScheme_Filter>;
  scheme_contains?: InputMaybe<Scalars['String']>;
  scheme_contains_nocase?: InputMaybe<Scalars['String']>;
  scheme_ends_with?: InputMaybe<Scalars['String']>;
  scheme_ends_with_nocase?: InputMaybe<Scalars['String']>;
  scheme_gt?: InputMaybe<Scalars['String']>;
  scheme_gte?: InputMaybe<Scalars['String']>;
  scheme_in?: InputMaybe<Array<Scalars['String']>>;
  scheme_lt?: InputMaybe<Scalars['String']>;
  scheme_lte?: InputMaybe<Scalars['String']>;
  scheme_not?: InputMaybe<Scalars['String']>;
  scheme_not_contains?: InputMaybe<Scalars['String']>;
  scheme_not_contains_nocase?: InputMaybe<Scalars['String']>;
  scheme_not_ends_with?: InputMaybe<Scalars['String']>;
  scheme_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  scheme_not_in?: InputMaybe<Array<Scalars['String']>>;
  scheme_not_starts_with?: InputMaybe<Scalars['String']>;
  scheme_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  scheme_starts_with?: InputMaybe<Scalars['String']>;
  scheme_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stage?: InputMaybe<Scalars['String']>;
  stage_contains?: InputMaybe<Scalars['String']>;
  stage_contains_nocase?: InputMaybe<Scalars['String']>;
  stage_ends_with?: InputMaybe<Scalars['String']>;
  stage_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stage_gt?: InputMaybe<Scalars['String']>;
  stage_gte?: InputMaybe<Scalars['String']>;
  stage_in?: InputMaybe<Array<Scalars['String']>>;
  stage_lt?: InputMaybe<Scalars['String']>;
  stage_lte?: InputMaybe<Scalars['String']>;
  stage_not?: InputMaybe<Scalars['String']>;
  stage_not_contains?: InputMaybe<Scalars['String']>;
  stage_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stage_not_ends_with?: InputMaybe<Scalars['String']>;
  stage_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stage_not_in?: InputMaybe<Array<Scalars['String']>>;
  stage_not_starts_with?: InputMaybe<Scalars['String']>;
  stage_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stage_starts_with?: InputMaybe<Scalars['String']>;
  stage_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stakesAgainst?: InputMaybe<Scalars['BigInt']>;
  stakesAgainst_gt?: InputMaybe<Scalars['BigInt']>;
  stakesAgainst_gte?: InputMaybe<Scalars['BigInt']>;
  stakesAgainst_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakesAgainst_lt?: InputMaybe<Scalars['BigInt']>;
  stakesAgainst_lte?: InputMaybe<Scalars['BigInt']>;
  stakesAgainst_not?: InputMaybe<Scalars['BigInt']>;
  stakesAgainst_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakesFor?: InputMaybe<Scalars['BigInt']>;
  stakesFor_gt?: InputMaybe<Scalars['BigInt']>;
  stakesFor_gte?: InputMaybe<Scalars['BigInt']>;
  stakesFor_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakesFor_lt?: InputMaybe<Scalars['BigInt']>;
  stakesFor_lte?: InputMaybe<Scalars['BigInt']>;
  stakesFor_not?: InputMaybe<Scalars['BigInt']>;
  stakesFor_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakes_?: InputMaybe<ProposalStake_Filter>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tags_?: InputMaybe<Tag_Filter>;
  tags_contains?: InputMaybe<Array<Scalars['String']>>;
  tags_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  tags_not?: InputMaybe<Array<Scalars['String']>>;
  tags_not_contains?: InputMaybe<Array<Scalars['String']>>;
  tags_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_contains_nocase?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']>;
  totalRepWhenCreated?: InputMaybe<Scalars['BigInt']>;
  totalRepWhenCreated_gt?: InputMaybe<Scalars['BigInt']>;
  totalRepWhenCreated_gte?: InputMaybe<Scalars['BigInt']>;
  totalRepWhenCreated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalRepWhenCreated_lt?: InputMaybe<Scalars['BigInt']>;
  totalRepWhenCreated_lte?: InputMaybe<Scalars['BigInt']>;
  totalRepWhenCreated_not?: InputMaybe<Scalars['BigInt']>;
  totalRepWhenCreated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalRepWhenExecuted?: InputMaybe<Scalars['BigInt']>;
  totalRepWhenExecuted_gt?: InputMaybe<Scalars['BigInt']>;
  totalRepWhenExecuted_gte?: InputMaybe<Scalars['BigInt']>;
  totalRepWhenExecuted_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalRepWhenExecuted_lt?: InputMaybe<Scalars['BigInt']>;
  totalRepWhenExecuted_lte?: InputMaybe<Scalars['BigInt']>;
  totalRepWhenExecuted_not?: InputMaybe<Scalars['BigInt']>;
  totalRepWhenExecuted_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_contains_nocase?: InputMaybe<Scalars['String']>;
  url_ends_with?: InputMaybe<Scalars['String']>;
  url_ends_with_nocase?: InputMaybe<Scalars['String']>;
  url_gt?: InputMaybe<Scalars['String']>;
  url_gte?: InputMaybe<Scalars['String']>;
  url_in?: InputMaybe<Array<Scalars['String']>>;
  url_lt?: InputMaybe<Scalars['String']>;
  url_lte?: InputMaybe<Scalars['String']>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_contains_nocase?: InputMaybe<Scalars['String']>;
  url_not_ends_with?: InputMaybe<Scalars['String']>;
  url_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<Scalars['String']>>;
  url_not_starts_with?: InputMaybe<Scalars['String']>;
  url_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  url_starts_with?: InputMaybe<Scalars['String']>;
  url_starts_with_nocase?: InputMaybe<Scalars['String']>;
  votesAgainst?: InputMaybe<Scalars['BigInt']>;
  votesAgainst_gt?: InputMaybe<Scalars['BigInt']>;
  votesAgainst_gte?: InputMaybe<Scalars['BigInt']>;
  votesAgainst_in?: InputMaybe<Array<Scalars['BigInt']>>;
  votesAgainst_lt?: InputMaybe<Scalars['BigInt']>;
  votesAgainst_lte?: InputMaybe<Scalars['BigInt']>;
  votesAgainst_not?: InputMaybe<Scalars['BigInt']>;
  votesAgainst_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  votesFor?: InputMaybe<Scalars['BigInt']>;
  votesFor_gt?: InputMaybe<Scalars['BigInt']>;
  votesFor_gte?: InputMaybe<Scalars['BigInt']>;
  votesFor_in?: InputMaybe<Array<Scalars['BigInt']>>;
  votesFor_lt?: InputMaybe<Scalars['BigInt']>;
  votesFor_lte?: InputMaybe<Scalars['BigInt']>;
  votesFor_not?: InputMaybe<Scalars['BigInt']>;
  votesFor_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  votes_?: InputMaybe<ProposalVote_Filter>;
  votingMachine?: InputMaybe<Scalars['Bytes']>;
  votingMachine_contains?: InputMaybe<Scalars['Bytes']>;
  votingMachine_in?: InputMaybe<Array<Scalars['Bytes']>>;
  votingMachine_not?: InputMaybe<Scalars['Bytes']>;
  votingMachine_not_contains?: InputMaybe<Scalars['Bytes']>;
  votingMachine_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  winningOutcome?: InputMaybe<Outcome>;
  winningOutcome_in?: InputMaybe<Array<Outcome>>;
  winningOutcome_not?: InputMaybe<Outcome>;
  winningOutcome_not_in?: InputMaybe<Array<Outcome>>;
};

export enum Proposal_OrderBy {
  AccountsWithUnclaimedRewards = 'accountsWithUnclaimedRewards',
  BoostedAt = 'boostedAt',
  ClosingAt = 'closingAt',
  Competition = 'competition',
  Confidence = 'confidence',
  ConfidenceThreshold = 'confidenceThreshold',
  ContributionReward = 'contributionReward',
  CreatedAt = 'createdAt',
  Dao = 'dao',
  Description = 'description',
  DescriptionHash = 'descriptionHash',
  ExecutedAt = 'executedAt',
  ExecutionState = 'executionState',
  ExpiresInQueueAt = 'expiresInQueueAt',
  GenericScheme = 'genericScheme',
  GenericSchemeMultiCall = 'genericSchemeMultiCall',
  GenesisProtocolParams = 'genesisProtocolParams',
  GpQueue = 'gpQueue',
  GpRewards = 'gpRewards',
  Id = 'id',
  OrganizationId = 'organizationId',
  ParamsHash = 'paramsHash',
  PreBoostedAt = 'preBoostedAt',
  PreBoostedClosingAt = 'preBoostedClosingAt',
  Proposer = 'proposer',
  QuietEndingPeriodBeganAt = 'quietEndingPeriodBeganAt',
  Scheme = 'scheme',
  SchemeRegistrar = 'schemeRegistrar',
  Stage = 'stage',
  Stakes = 'stakes',
  StakesAgainst = 'stakesAgainst',
  StakesFor = 'stakesFor',
  Tags = 'tags',
  Title = 'title',
  TotalRepWhenCreated = 'totalRepWhenCreated',
  TotalRepWhenExecuted = 'totalRepWhenExecuted',
  Url = 'url',
  Votes = 'votes',
  VotesAgainst = 'votesAgainst',
  VotesFor = 'votesFor',
  VotingMachine = 'votingMachine',
  WinningOutcome = 'winningOutcome'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  allowance?: Maybe<Allowance>;
  allowances: Array<Allowance>;
  avatarContract?: Maybe<AvatarContract>;
  avatarContracts: Array<AvatarContract>;
  blacklistedDAO?: Maybe<BlacklistedDao>;
  blacklistedDAOs: Array<BlacklistedDao>;
  cl4Rlock?: Maybe<Cl4RLock>;
  cl4Rlocks: Array<Cl4RLock>;
  cl4Rredeem?: Maybe<Cl4RRedeem>;
  cl4Rredeems: Array<Cl4RRedeem>;
  competitionProposal?: Maybe<CompetitionProposal>;
  competitionProposals: Array<CompetitionProposal>;
  competitionSuggestion?: Maybe<CompetitionSuggestion>;
  competitionSuggestions: Array<CompetitionSuggestion>;
  competitionVote?: Maybe<CompetitionVote>;
  competitionVotes: Array<CompetitionVote>;
  continuousLocking4ReputationParams: Array<ContinuousLocking4ReputationParams>;
  contractInfo?: Maybe<ContractInfo>;
  contractInfos: Array<ContractInfo>;
  contributionRewardExtParam?: Maybe<ContributionRewardExtParam>;
  contributionRewardExtParams: Array<ContributionRewardExtParam>;
  contributionRewardNewContributionProposal?: Maybe<ContributionRewardNewContributionProposal>;
  contributionRewardNewContributionProposals: Array<ContributionRewardNewContributionProposal>;
  contributionRewardParam?: Maybe<ContributionRewardParam>;
  contributionRewardParams: Array<ContributionRewardParam>;
  contributionRewardProposal?: Maybe<ContributionRewardProposal>;
  contributionRewardProposalResolved?: Maybe<ContributionRewardProposalResolved>;
  contributionRewardProposalResolveds: Array<ContributionRewardProposalResolved>;
  contributionRewardProposals: Array<ContributionRewardProposal>;
  contributionRewardRedeemEther?: Maybe<ContributionRewardRedeemEther>;
  contributionRewardRedeemEthers: Array<ContributionRewardRedeemEther>;
  contributionRewardRedeemExternalToken?: Maybe<ContributionRewardRedeemExternalToken>;
  contributionRewardRedeemExternalTokens: Array<ContributionRewardRedeemExternalToken>;
  contributionRewardRedeemNativeToken?: Maybe<ContributionRewardRedeemNativeToken>;
  contributionRewardRedeemNativeTokens: Array<ContributionRewardRedeemNativeToken>;
  contributionRewardRedeemReputation?: Maybe<ContributionRewardRedeemReputation>;
  contributionRewardRedeemReputations: Array<ContributionRewardRedeemReputation>;
  controllerAddGlobalConstraint?: Maybe<ControllerAddGlobalConstraint>;
  controllerAddGlobalConstraints: Array<ControllerAddGlobalConstraint>;
  controllerGlobalConstraint?: Maybe<ControllerGlobalConstraint>;
  controllerGlobalConstraints: Array<ControllerGlobalConstraint>;
  controllerOrganization?: Maybe<ControllerOrganization>;
  controllerOrganizations: Array<ControllerOrganization>;
  controllerRegisterScheme?: Maybe<ControllerRegisterScheme>;
  controllerRegisterSchemes: Array<ControllerRegisterScheme>;
  controllerRemoveGlobalConstraint?: Maybe<ControllerRemoveGlobalConstraint>;
  controllerRemoveGlobalConstraints: Array<ControllerRemoveGlobalConstraint>;
  controllerScheme?: Maybe<ControllerScheme>;
  controllerSchemes: Array<ControllerScheme>;
  controllerUnregisterScheme?: Maybe<ControllerUnregisterScheme>;
  controllerUnregisterSchemes: Array<ControllerUnregisterScheme>;
  controllerUpgradeController?: Maybe<ControllerUpgradeController>;
  controllerUpgradeControllers: Array<ControllerUpgradeController>;
  dao?: Maybe<Dao>;
  daoregistryContract?: Maybe<DaoRegistryContract>;
  daoregistryContracts: Array<DaoRegistryContract>;
  daos: Array<Dao>;
  daotrackerContract?: Maybe<DaoTrackerContract>;
  daotrackerContracts: Array<DaoTrackerContract>;
  debug?: Maybe<Debug>;
  debugs: Array<Debug>;
  event?: Maybe<Event>;
  events: Array<Event>;
  firstRegisterScheme?: Maybe<FirstRegisterScheme>;
  firstRegisterSchemeFlag?: Maybe<FirstRegisterSchemeFlag>;
  firstRegisterSchemeFlags: Array<FirstRegisterSchemeFlag>;
  firstRegisterSchemes: Array<FirstRegisterScheme>;
  genericSchemeMultiCallParam?: Maybe<GenericSchemeMultiCallParam>;
  genericSchemeMultiCallParams: Array<GenericSchemeMultiCallParam>;
  genericSchemeMultiCallProposal?: Maybe<GenericSchemeMultiCallProposal>;
  genericSchemeMultiCallProposals: Array<GenericSchemeMultiCallProposal>;
  genericSchemeParam?: Maybe<GenericSchemeParam>;
  genericSchemeParams: Array<GenericSchemeParam>;
  genericSchemeProposal?: Maybe<GenericSchemeProposal>;
  genericSchemeProposals: Array<GenericSchemeProposal>;
  genesisProtocolExecuteProposal?: Maybe<GenesisProtocolExecuteProposal>;
  genesisProtocolExecuteProposals: Array<GenesisProtocolExecuteProposal>;
  genesisProtocolGPExecuteProposal?: Maybe<GenesisProtocolGpExecuteProposal>;
  genesisProtocolGPExecuteProposals: Array<GenesisProtocolGpExecuteProposal>;
  genesisProtocolParam?: Maybe<GenesisProtocolParam>;
  genesisProtocolParams: Array<GenesisProtocolParam>;
  genesisProtocolProposal?: Maybe<GenesisProtocolProposal>;
  genesisProtocolProposals: Array<GenesisProtocolProposal>;
  genesisProtocolRedemption?: Maybe<GenesisProtocolRedemption>;
  genesisProtocolRedemptions: Array<GenesisProtocolRedemption>;
  genesisProtocolReward?: Maybe<GenesisProtocolReward>;
  genesisProtocolRewards: Array<GenesisProtocolReward>;
  genesisProtocolStake?: Maybe<GenesisProtocolStake>;
  genesisProtocolStakes: Array<GenesisProtocolStake>;
  genesisProtocolVote?: Maybe<GenesisProtocolVote>;
  genesisProtocolVotes: Array<GenesisProtocolVote>;
  gpqueue?: Maybe<GpQueue>;
  gpqueues: Array<GpQueue>;
  gpreward?: Maybe<GpReward>;
  gprewards: Array<GpReward>;
  gprewardsHelper?: Maybe<GpRewardsHelper>;
  gprewardsHelpers: Array<GpRewardsHelper>;
  preGPReward?: Maybe<PreGpReward>;
  preGPRewards: Array<PreGpReward>;
  proposal?: Maybe<Proposal>;
  proposalStake?: Maybe<ProposalStake>;
  proposalStakes: Array<ProposalStake>;
  proposalVote?: Maybe<ProposalVote>;
  proposalVotes: Array<ProposalVote>;
  proposals: Array<Proposal>;
  rep?: Maybe<Rep>;
  reps: Array<Rep>;
  reputationBurn?: Maybe<ReputationBurn>;
  reputationBurns: Array<ReputationBurn>;
  reputationContract?: Maybe<ReputationContract>;
  reputationContracts: Array<ReputationContract>;
  reputationHolder?: Maybe<ReputationHolder>;
  reputationHolders: Array<ReputationHolder>;
  reputationMint?: Maybe<ReputationMint>;
  reputationMints: Array<ReputationMint>;
  schemeRegistrarNewSchemeProposal?: Maybe<SchemeRegistrarNewSchemeProposal>;
  schemeRegistrarNewSchemeProposals: Array<SchemeRegistrarNewSchemeProposal>;
  schemeRegistrarParam?: Maybe<SchemeRegistrarParam>;
  schemeRegistrarParams: Array<SchemeRegistrarParam>;
  schemeRegistrarProposal?: Maybe<SchemeRegistrarProposal>;
  schemeRegistrarProposalExecuted?: Maybe<SchemeRegistrarProposalExecuted>;
  schemeRegistrarProposalExecuteds: Array<SchemeRegistrarProposalExecuted>;
  schemeRegistrarProposals: Array<SchemeRegistrarProposal>;
  schemeRegistrarRemoveSchemeProposal?: Maybe<SchemeRegistrarRemoveSchemeProposal>;
  schemeRegistrarRemoveSchemeProposals: Array<SchemeRegistrarRemoveSchemeProposal>;
  tag?: Maybe<Tag>;
  tags: Array<Tag>;
  templateInfo?: Maybe<TemplateInfo>;
  templateInfos: Array<TemplateInfo>;
  token?: Maybe<Token>;
  tokenApproval?: Maybe<TokenApproval>;
  tokenApprovals: Array<TokenApproval>;
  tokenContract?: Maybe<TokenContract>;
  tokenContracts: Array<TokenContract>;
  tokenHolder?: Maybe<TokenHolder>;
  tokenHolders: Array<TokenHolder>;
  tokenTransfer?: Maybe<TokenTransfer>;
  tokenTransfers: Array<TokenTransfer>;
  tokens: Array<Token>;
  ucontrollerAddGlobalConstraint?: Maybe<UControllerAddGlobalConstraint>;
  ucontrollerAddGlobalConstraints: Array<UControllerAddGlobalConstraint>;
  ucontrollerGlobalConstraint?: Maybe<UControllerGlobalConstraint>;
  ucontrollerGlobalConstraints: Array<UControllerGlobalConstraint>;
  ucontrollerOrganization?: Maybe<UControllerOrganization>;
  ucontrollerOrganizations: Array<UControllerOrganization>;
  ucontrollerRegisterScheme?: Maybe<UControllerRegisterScheme>;
  ucontrollerRegisterSchemes: Array<UControllerRegisterScheme>;
  ucontrollerRemoveGlobalConstraint?: Maybe<UControllerRemoveGlobalConstraint>;
  ucontrollerRemoveGlobalConstraints: Array<UControllerRemoveGlobalConstraint>;
  ucontrollerUnregisterScheme?: Maybe<UControllerUnregisterScheme>;
  ucontrollerUnregisterSchemes: Array<UControllerUnregisterScheme>;
  ucontrollerUpgradeController?: Maybe<UControllerUpgradeController>;
  ucontrollerUpgradeControllers: Array<UControllerUpgradeController>;
  ugenericSchemeParam?: Maybe<UGenericSchemeParam>;
  ugenericSchemeParams: Array<UGenericSchemeParam>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAllowanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAllowancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Allowance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Allowance_Filter>;
};


export type QueryAvatarContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAvatarContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AvatarContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AvatarContract_Filter>;
};


export type QueryBlacklistedDaoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBlacklistedDaOsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BlacklistedDao_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BlacklistedDao_Filter>;
};


export type QueryCl4RlockArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCl4RlocksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Cl4RLock_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Cl4RLock_Filter>;
};


export type QueryCl4RredeemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCl4RredeemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Cl4RRedeem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Cl4RRedeem_Filter>;
};


export type QueryCompetitionProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCompetitionProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CompetitionProposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CompetitionProposal_Filter>;
};


export type QueryCompetitionSuggestionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCompetitionSuggestionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CompetitionSuggestion_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CompetitionSuggestion_Filter>;
};


export type QueryCompetitionVoteArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCompetitionVotesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CompetitionVote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CompetitionVote_Filter>;
};


export type QueryContinuousLocking4ReputationParamsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContinuousLocking4ReputationParams_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContinuousLocking4ReputationParams_Filter>;
};


export type QueryContractInfoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryContractInfosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContractInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContractInfo_Filter>;
};


export type QueryContributionRewardExtParamArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryContributionRewardExtParamsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContributionRewardExtParam_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContributionRewardExtParam_Filter>;
};


export type QueryContributionRewardNewContributionProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryContributionRewardNewContributionProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContributionRewardNewContributionProposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContributionRewardNewContributionProposal_Filter>;
};


export type QueryContributionRewardParamArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryContributionRewardParamsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContributionRewardParam_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContributionRewardParam_Filter>;
};


export type QueryContributionRewardProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryContributionRewardProposalResolvedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryContributionRewardProposalResolvedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContributionRewardProposalResolved_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContributionRewardProposalResolved_Filter>;
};


export type QueryContributionRewardProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContributionRewardProposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContributionRewardProposal_Filter>;
};


export type QueryContributionRewardRedeemEtherArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryContributionRewardRedeemEthersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContributionRewardRedeemEther_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContributionRewardRedeemEther_Filter>;
};


export type QueryContributionRewardRedeemExternalTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryContributionRewardRedeemExternalTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContributionRewardRedeemExternalToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContributionRewardRedeemExternalToken_Filter>;
};


export type QueryContributionRewardRedeemNativeTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryContributionRewardRedeemNativeTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContributionRewardRedeemNativeToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContributionRewardRedeemNativeToken_Filter>;
};


export type QueryContributionRewardRedeemReputationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryContributionRewardRedeemReputationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContributionRewardRedeemReputation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContributionRewardRedeemReputation_Filter>;
};


export type QueryControllerAddGlobalConstraintArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryControllerAddGlobalConstraintsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ControllerAddGlobalConstraint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ControllerAddGlobalConstraint_Filter>;
};


export type QueryControllerGlobalConstraintArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryControllerGlobalConstraintsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ControllerGlobalConstraint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ControllerGlobalConstraint_Filter>;
};


export type QueryControllerOrganizationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryControllerOrganizationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ControllerOrganization_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ControllerOrganization_Filter>;
};


export type QueryControllerRegisterSchemeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryControllerRegisterSchemesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ControllerRegisterScheme_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ControllerRegisterScheme_Filter>;
};


export type QueryControllerRemoveGlobalConstraintArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryControllerRemoveGlobalConstraintsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ControllerRemoveGlobalConstraint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ControllerRemoveGlobalConstraint_Filter>;
};


export type QueryControllerSchemeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryControllerSchemesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ControllerScheme_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ControllerScheme_Filter>;
};


export type QueryControllerUnregisterSchemeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryControllerUnregisterSchemesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ControllerUnregisterScheme_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ControllerUnregisterScheme_Filter>;
};


export type QueryControllerUpgradeControllerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryControllerUpgradeControllersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ControllerUpgradeController_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ControllerUpgradeController_Filter>;
};


export type QueryDaoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDaoregistryContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDaoregistryContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DaoRegistryContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DaoRegistryContract_Filter>;
};


export type QueryDaosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Dao_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Dao_Filter>;
};


export type QueryDaotrackerContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDaotrackerContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DaoTrackerContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DaoTrackerContract_Filter>;
};


export type QueryDebugArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDebugsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Debug_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Debug_Filter>;
};


export type QueryEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Event_Filter>;
};


export type QueryFirstRegisterSchemeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFirstRegisterSchemeFlagArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFirstRegisterSchemeFlagsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FirstRegisterSchemeFlag_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FirstRegisterSchemeFlag_Filter>;
};


export type QueryFirstRegisterSchemesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FirstRegisterScheme_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FirstRegisterScheme_Filter>;
};


export type QueryGenericSchemeMultiCallParamArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGenericSchemeMultiCallParamsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GenericSchemeMultiCallParam_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GenericSchemeMultiCallParam_Filter>;
};


export type QueryGenericSchemeMultiCallProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGenericSchemeMultiCallProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GenericSchemeMultiCallProposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GenericSchemeMultiCallProposal_Filter>;
};


export type QueryGenericSchemeParamArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGenericSchemeParamsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GenericSchemeParam_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GenericSchemeParam_Filter>;
};


export type QueryGenericSchemeProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGenericSchemeProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GenericSchemeProposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GenericSchemeProposal_Filter>;
};


export type QueryGenesisProtocolExecuteProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGenesisProtocolExecuteProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GenesisProtocolExecuteProposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GenesisProtocolExecuteProposal_Filter>;
};


export type QueryGenesisProtocolGpExecuteProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGenesisProtocolGpExecuteProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GenesisProtocolGpExecuteProposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GenesisProtocolGpExecuteProposal_Filter>;
};


export type QueryGenesisProtocolParamArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGenesisProtocolParamsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GenesisProtocolParam_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GenesisProtocolParam_Filter>;
};


export type QueryGenesisProtocolProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGenesisProtocolProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GenesisProtocolProposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GenesisProtocolProposal_Filter>;
};


export type QueryGenesisProtocolRedemptionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGenesisProtocolRedemptionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GenesisProtocolRedemption_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GenesisProtocolRedemption_Filter>;
};


export type QueryGenesisProtocolRewardArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGenesisProtocolRewardsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GenesisProtocolReward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GenesisProtocolReward_Filter>;
};


export type QueryGenesisProtocolStakeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGenesisProtocolStakesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GenesisProtocolStake_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GenesisProtocolStake_Filter>;
};


export type QueryGenesisProtocolVoteArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGenesisProtocolVotesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GenesisProtocolVote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GenesisProtocolVote_Filter>;
};


export type QueryGpqueueArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGpqueuesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GpQueue_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GpQueue_Filter>;
};


export type QueryGprewardArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGprewardsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GpReward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GpReward_Filter>;
};


export type QueryGprewardsHelperArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGprewardsHelpersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GpRewardsHelper_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GpRewardsHelper_Filter>;
};


export type QueryPreGpRewardArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPreGpRewardsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PreGpReward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PreGpReward_Filter>;
};


export type QueryProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProposalStakeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProposalStakesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalStake_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalStake_Filter>;
};


export type QueryProposalVoteArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProposalVotesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalVote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalVote_Filter>;
};


export type QueryProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Proposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Proposal_Filter>;
};


export type QueryRepArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRepsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Rep_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Rep_Filter>;
};


export type QueryReputationBurnArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryReputationBurnsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReputationBurn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReputationBurn_Filter>;
};


export type QueryReputationContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryReputationContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReputationContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReputationContract_Filter>;
};


export type QueryReputationHolderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryReputationHoldersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReputationHolder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReputationHolder_Filter>;
};


export type QueryReputationMintArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryReputationMintsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReputationMint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReputationMint_Filter>;
};


export type QuerySchemeRegistrarNewSchemeProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySchemeRegistrarNewSchemeProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SchemeRegistrarNewSchemeProposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SchemeRegistrarNewSchemeProposal_Filter>;
};


export type QuerySchemeRegistrarParamArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySchemeRegistrarParamsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SchemeRegistrarParam_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SchemeRegistrarParam_Filter>;
};


export type QuerySchemeRegistrarProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySchemeRegistrarProposalExecutedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySchemeRegistrarProposalExecutedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SchemeRegistrarProposalExecuted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SchemeRegistrarProposalExecuted_Filter>;
};


export type QuerySchemeRegistrarProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SchemeRegistrarProposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SchemeRegistrarProposal_Filter>;
};


export type QuerySchemeRegistrarRemoveSchemeProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySchemeRegistrarRemoveSchemeProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SchemeRegistrarRemoveSchemeProposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SchemeRegistrarRemoveSchemeProposal_Filter>;
};


export type QueryTagArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTagsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Tag_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Tag_Filter>;
};


export type QueryTemplateInfoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTemplateInfosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TemplateInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TemplateInfo_Filter>;
};


export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenApproval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenApproval_Filter>;
};


export type QueryTokenContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenContract_Filter>;
};


export type QueryTokenHolderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenHoldersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenHolder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenHolder_Filter>;
};


export type QueryTokenTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenTransfer_Filter>;
};


export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};


export type QueryUcontrollerAddGlobalConstraintArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUcontrollerAddGlobalConstraintsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UControllerAddGlobalConstraint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UControllerAddGlobalConstraint_Filter>;
};


export type QueryUcontrollerGlobalConstraintArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUcontrollerGlobalConstraintsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UControllerGlobalConstraint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UControllerGlobalConstraint_Filter>;
};


export type QueryUcontrollerOrganizationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUcontrollerOrganizationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UControllerOrganization_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UControllerOrganization_Filter>;
};


export type QueryUcontrollerRegisterSchemeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUcontrollerRegisterSchemesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UControllerRegisterScheme_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UControllerRegisterScheme_Filter>;
};


export type QueryUcontrollerRemoveGlobalConstraintArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUcontrollerRemoveGlobalConstraintsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UControllerRemoveGlobalConstraint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UControllerRemoveGlobalConstraint_Filter>;
};


export type QueryUcontrollerUnregisterSchemeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUcontrollerUnregisterSchemesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UControllerUnregisterScheme_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UControllerUnregisterScheme_Filter>;
};


export type QueryUcontrollerUpgradeControllerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUcontrollerUpgradeControllersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UControllerUpgradeController_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UControllerUpgradeController_Filter>;
};


export type QueryUgenericSchemeParamArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUgenericSchemeParamsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UGenericSchemeParam_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UGenericSchemeParam_Filter>;
};

export type Rep = {
  __typename?: 'Rep';
  dao?: Maybe<Dao>;
  id: Scalars['ID'];
  totalSupply: Scalars['BigInt'];
};

export type Rep_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  dao?: InputMaybe<Scalars['String']>;
  dao_?: InputMaybe<Dao_Filter>;
  dao_contains?: InputMaybe<Scalars['String']>;
  dao_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_ends_with?: InputMaybe<Scalars['String']>;
  dao_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_gt?: InputMaybe<Scalars['String']>;
  dao_gte?: InputMaybe<Scalars['String']>;
  dao_in?: InputMaybe<Array<Scalars['String']>>;
  dao_lt?: InputMaybe<Scalars['String']>;
  dao_lte?: InputMaybe<Scalars['String']>;
  dao_not?: InputMaybe<Scalars['String']>;
  dao_not_contains?: InputMaybe<Scalars['String']>;
  dao_not_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_not_ends_with?: InputMaybe<Scalars['String']>;
  dao_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_not_in?: InputMaybe<Array<Scalars['String']>>;
  dao_not_starts_with?: InputMaybe<Scalars['String']>;
  dao_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dao_starts_with?: InputMaybe<Scalars['String']>;
  dao_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Rep_OrderBy {
  Dao = 'dao',
  Id = 'id',
  TotalSupply = 'totalSupply'
}

export type ReputationBurn = {
  __typename?: 'ReputationBurn';
  address: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  contract: Scalars['Bytes'];
  id: Scalars['ID'];
  txHash: Scalars['Bytes'];
};

export type ReputationBurn_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contract?: InputMaybe<Scalars['Bytes']>;
  contract_contains?: InputMaybe<Scalars['Bytes']>;
  contract_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract_not?: InputMaybe<Scalars['Bytes']>;
  contract_not_contains?: InputMaybe<Scalars['Bytes']>;
  contract_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum ReputationBurn_OrderBy {
  Address = 'address',
  Amount = 'amount',
  Contract = 'contract',
  Id = 'id',
  TxHash = 'txHash'
}

export type ReputationContract = {
  __typename?: 'ReputationContract';
  address: Scalars['Bytes'];
  id: Scalars['ID'];
  reputationHolders?: Maybe<Array<Scalars['String']>>;
  totalSupply: Scalars['BigInt'];
};

export type ReputationContract_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  reputationHolders?: InputMaybe<Array<Scalars['String']>>;
  reputationHolders_contains?: InputMaybe<Array<Scalars['String']>>;
  reputationHolders_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  reputationHolders_not?: InputMaybe<Array<Scalars['String']>>;
  reputationHolders_not_contains?: InputMaybe<Array<Scalars['String']>>;
  reputationHolders_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum ReputationContract_OrderBy {
  Address = 'address',
  Id = 'id',
  ReputationHolders = 'reputationHolders',
  TotalSupply = 'totalSupply'
}

export type ReputationHolder = {
  __typename?: 'ReputationHolder';
  address: Scalars['Bytes'];
  balance: Scalars['BigInt'];
  contract: Scalars['Bytes'];
  createdAt: Scalars['BigInt'];
  dao?: Maybe<Dao>;
  id: Scalars['ID'];
};

export type ReputationHolder_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contract?: InputMaybe<Scalars['Bytes']>;
  contract_contains?: InputMaybe<Scalars['Bytes']>;
  contract_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract_not?: InputMaybe<Scalars['Bytes']>;
  contract_not_contains?: InputMaybe<Scalars['Bytes']>;
  contract_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dao?: InputMaybe<Scalars['String']>;
  dao_?: InputMaybe<Dao_Filter>;
  dao_contains?: InputMaybe<Scalars['String']>;
  dao_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_ends_with?: InputMaybe<Scalars['String']>;
  dao_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_gt?: InputMaybe<Scalars['String']>;
  dao_gte?: InputMaybe<Scalars['String']>;
  dao_in?: InputMaybe<Array<Scalars['String']>>;
  dao_lt?: InputMaybe<Scalars['String']>;
  dao_lte?: InputMaybe<Scalars['String']>;
  dao_not?: InputMaybe<Scalars['String']>;
  dao_not_contains?: InputMaybe<Scalars['String']>;
  dao_not_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_not_ends_with?: InputMaybe<Scalars['String']>;
  dao_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_not_in?: InputMaybe<Array<Scalars['String']>>;
  dao_not_starts_with?: InputMaybe<Scalars['String']>;
  dao_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dao_starts_with?: InputMaybe<Scalars['String']>;
  dao_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export enum ReputationHolder_OrderBy {
  Address = 'address',
  Balance = 'balance',
  Contract = 'contract',
  CreatedAt = 'createdAt',
  Dao = 'dao',
  Id = 'id'
}

export type ReputationMint = {
  __typename?: 'ReputationMint';
  address: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  contract: Scalars['Bytes'];
  id: Scalars['ID'];
  txHash: Scalars['Bytes'];
};

export type ReputationMint_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contract?: InputMaybe<Scalars['Bytes']>;
  contract_contains?: InputMaybe<Scalars['Bytes']>;
  contract_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract_not?: InputMaybe<Scalars['Bytes']>;
  contract_not_contains?: InputMaybe<Scalars['Bytes']>;
  contract_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum ReputationMint_OrderBy {
  Address = 'address',
  Amount = 'amount',
  Contract = 'contract',
  Id = 'id',
  TxHash = 'txHash'
}

export enum RewardReason {
  Bounty = 'Bounty',
  Contribution = 'Contribution',
  Proposer = 'Proposer',
  Staker = 'Staker',
  Voter = 'Voter'
}

export enum RewardType {
  Eth = 'ETH',
  External = 'External',
  Reputation = 'Reputation',
  Token = 'Token'
}

export type SchemeRegistrarNewSchemeProposal = {
  __typename?: 'SchemeRegistrarNewSchemeProposal';
  avatar: Scalars['Bytes'];
  contract: Scalars['Bytes'];
  descriptionHash: Scalars['String'];
  id: Scalars['ID'];
  paramsHash: Scalars['Bytes'];
  permission: Scalars['Bytes'];
  proposalId: Scalars['Bytes'];
  scheme: Scalars['Bytes'];
  txHash: Scalars['Bytes'];
  votingMachine: Scalars['Bytes'];
};

export type SchemeRegistrarNewSchemeProposal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  avatar?: InputMaybe<Scalars['Bytes']>;
  avatar_contains?: InputMaybe<Scalars['Bytes']>;
  avatar_in?: InputMaybe<Array<Scalars['Bytes']>>;
  avatar_not?: InputMaybe<Scalars['Bytes']>;
  avatar_not_contains?: InputMaybe<Scalars['Bytes']>;
  avatar_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract?: InputMaybe<Scalars['Bytes']>;
  contract_contains?: InputMaybe<Scalars['Bytes']>;
  contract_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract_not?: InputMaybe<Scalars['Bytes']>;
  contract_not_contains?: InputMaybe<Scalars['Bytes']>;
  contract_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  descriptionHash?: InputMaybe<Scalars['String']>;
  descriptionHash_contains?: InputMaybe<Scalars['String']>;
  descriptionHash_contains_nocase?: InputMaybe<Scalars['String']>;
  descriptionHash_ends_with?: InputMaybe<Scalars['String']>;
  descriptionHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  descriptionHash_gt?: InputMaybe<Scalars['String']>;
  descriptionHash_gte?: InputMaybe<Scalars['String']>;
  descriptionHash_in?: InputMaybe<Array<Scalars['String']>>;
  descriptionHash_lt?: InputMaybe<Scalars['String']>;
  descriptionHash_lte?: InputMaybe<Scalars['String']>;
  descriptionHash_not?: InputMaybe<Scalars['String']>;
  descriptionHash_not_contains?: InputMaybe<Scalars['String']>;
  descriptionHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  descriptionHash_not_ends_with?: InputMaybe<Scalars['String']>;
  descriptionHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  descriptionHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  descriptionHash_not_starts_with?: InputMaybe<Scalars['String']>;
  descriptionHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  descriptionHash_starts_with?: InputMaybe<Scalars['String']>;
  descriptionHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  paramsHash?: InputMaybe<Scalars['Bytes']>;
  paramsHash_contains?: InputMaybe<Scalars['Bytes']>;
  paramsHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  paramsHash_not?: InputMaybe<Scalars['Bytes']>;
  paramsHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  paramsHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  permission?: InputMaybe<Scalars['Bytes']>;
  permission_contains?: InputMaybe<Scalars['Bytes']>;
  permission_in?: InputMaybe<Array<Scalars['Bytes']>>;
  permission_not?: InputMaybe<Scalars['Bytes']>;
  permission_not_contains?: InputMaybe<Scalars['Bytes']>;
  permission_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proposalId?: InputMaybe<Scalars['Bytes']>;
  proposalId_contains?: InputMaybe<Scalars['Bytes']>;
  proposalId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proposalId_not?: InputMaybe<Scalars['Bytes']>;
  proposalId_not_contains?: InputMaybe<Scalars['Bytes']>;
  proposalId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  scheme?: InputMaybe<Scalars['Bytes']>;
  scheme_contains?: InputMaybe<Scalars['Bytes']>;
  scheme_in?: InputMaybe<Array<Scalars['Bytes']>>;
  scheme_not?: InputMaybe<Scalars['Bytes']>;
  scheme_not_contains?: InputMaybe<Scalars['Bytes']>;
  scheme_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  votingMachine?: InputMaybe<Scalars['Bytes']>;
  votingMachine_contains?: InputMaybe<Scalars['Bytes']>;
  votingMachine_in?: InputMaybe<Array<Scalars['Bytes']>>;
  votingMachine_not?: InputMaybe<Scalars['Bytes']>;
  votingMachine_not_contains?: InputMaybe<Scalars['Bytes']>;
  votingMachine_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum SchemeRegistrarNewSchemeProposal_OrderBy {
  Avatar = 'avatar',
  Contract = 'contract',
  DescriptionHash = 'descriptionHash',
  Id = 'id',
  ParamsHash = 'paramsHash',
  Permission = 'permission',
  ProposalId = 'proposalId',
  Scheme = 'scheme',
  TxHash = 'txHash',
  VotingMachine = 'votingMachine'
}

export type SchemeRegistrarParam = {
  __typename?: 'SchemeRegistrarParam';
  id: Scalars['ID'];
  voteRegisterParams: GenesisProtocolParam;
  voteRemoveParams: GenesisProtocolParam;
  votingMachine: Scalars['Bytes'];
};

export type SchemeRegistrarParam_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  voteRegisterParams?: InputMaybe<Scalars['String']>;
  voteRegisterParams_?: InputMaybe<GenesisProtocolParam_Filter>;
  voteRegisterParams_contains?: InputMaybe<Scalars['String']>;
  voteRegisterParams_contains_nocase?: InputMaybe<Scalars['String']>;
  voteRegisterParams_ends_with?: InputMaybe<Scalars['String']>;
  voteRegisterParams_ends_with_nocase?: InputMaybe<Scalars['String']>;
  voteRegisterParams_gt?: InputMaybe<Scalars['String']>;
  voteRegisterParams_gte?: InputMaybe<Scalars['String']>;
  voteRegisterParams_in?: InputMaybe<Array<Scalars['String']>>;
  voteRegisterParams_lt?: InputMaybe<Scalars['String']>;
  voteRegisterParams_lte?: InputMaybe<Scalars['String']>;
  voteRegisterParams_not?: InputMaybe<Scalars['String']>;
  voteRegisterParams_not_contains?: InputMaybe<Scalars['String']>;
  voteRegisterParams_not_contains_nocase?: InputMaybe<Scalars['String']>;
  voteRegisterParams_not_ends_with?: InputMaybe<Scalars['String']>;
  voteRegisterParams_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  voteRegisterParams_not_in?: InputMaybe<Array<Scalars['String']>>;
  voteRegisterParams_not_starts_with?: InputMaybe<Scalars['String']>;
  voteRegisterParams_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  voteRegisterParams_starts_with?: InputMaybe<Scalars['String']>;
  voteRegisterParams_starts_with_nocase?: InputMaybe<Scalars['String']>;
  voteRemoveParams?: InputMaybe<Scalars['String']>;
  voteRemoveParams_?: InputMaybe<GenesisProtocolParam_Filter>;
  voteRemoveParams_contains?: InputMaybe<Scalars['String']>;
  voteRemoveParams_contains_nocase?: InputMaybe<Scalars['String']>;
  voteRemoveParams_ends_with?: InputMaybe<Scalars['String']>;
  voteRemoveParams_ends_with_nocase?: InputMaybe<Scalars['String']>;
  voteRemoveParams_gt?: InputMaybe<Scalars['String']>;
  voteRemoveParams_gte?: InputMaybe<Scalars['String']>;
  voteRemoveParams_in?: InputMaybe<Array<Scalars['String']>>;
  voteRemoveParams_lt?: InputMaybe<Scalars['String']>;
  voteRemoveParams_lte?: InputMaybe<Scalars['String']>;
  voteRemoveParams_not?: InputMaybe<Scalars['String']>;
  voteRemoveParams_not_contains?: InputMaybe<Scalars['String']>;
  voteRemoveParams_not_contains_nocase?: InputMaybe<Scalars['String']>;
  voteRemoveParams_not_ends_with?: InputMaybe<Scalars['String']>;
  voteRemoveParams_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  voteRemoveParams_not_in?: InputMaybe<Array<Scalars['String']>>;
  voteRemoveParams_not_starts_with?: InputMaybe<Scalars['String']>;
  voteRemoveParams_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  voteRemoveParams_starts_with?: InputMaybe<Scalars['String']>;
  voteRemoveParams_starts_with_nocase?: InputMaybe<Scalars['String']>;
  votingMachine?: InputMaybe<Scalars['Bytes']>;
  votingMachine_contains?: InputMaybe<Scalars['Bytes']>;
  votingMachine_in?: InputMaybe<Array<Scalars['Bytes']>>;
  votingMachine_not?: InputMaybe<Scalars['Bytes']>;
  votingMachine_not_contains?: InputMaybe<Scalars['Bytes']>;
  votingMachine_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum SchemeRegistrarParam_OrderBy {
  Id = 'id',
  VoteRegisterParams = 'voteRegisterParams',
  VoteRemoveParams = 'voteRemoveParams',
  VotingMachine = 'votingMachine'
}

export type SchemeRegistrarProposal = {
  __typename?: 'SchemeRegistrarProposal';
  dao: Dao;
  decision?: Maybe<Scalars['BigInt']>;
  id: Scalars['ID'];
  schemeRegistered?: Maybe<Scalars['Boolean']>;
  schemeRemoved?: Maybe<Scalars['Boolean']>;
  schemeToRegister?: Maybe<Scalars['Bytes']>;
  schemeToRegisterParamsHash?: Maybe<Scalars['Bytes']>;
  schemeToRegisterPermission?: Maybe<Scalars['Bytes']>;
  schemeToRemove?: Maybe<Scalars['Bytes']>;
};

export type SchemeRegistrarProposalExecuted = {
  __typename?: 'SchemeRegistrarProposalExecuted';
  avatar: Scalars['Bytes'];
  contract: Scalars['Bytes'];
  decision: Scalars['BigInt'];
  id: Scalars['ID'];
  proposalId: Scalars['Bytes'];
  txHash: Scalars['Bytes'];
};

export type SchemeRegistrarProposalExecuted_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  avatar?: InputMaybe<Scalars['Bytes']>;
  avatar_contains?: InputMaybe<Scalars['Bytes']>;
  avatar_in?: InputMaybe<Array<Scalars['Bytes']>>;
  avatar_not?: InputMaybe<Scalars['Bytes']>;
  avatar_not_contains?: InputMaybe<Scalars['Bytes']>;
  avatar_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract?: InputMaybe<Scalars['Bytes']>;
  contract_contains?: InputMaybe<Scalars['Bytes']>;
  contract_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract_not?: InputMaybe<Scalars['Bytes']>;
  contract_not_contains?: InputMaybe<Scalars['Bytes']>;
  contract_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  decision?: InputMaybe<Scalars['BigInt']>;
  decision_gt?: InputMaybe<Scalars['BigInt']>;
  decision_gte?: InputMaybe<Scalars['BigInt']>;
  decision_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decision_lt?: InputMaybe<Scalars['BigInt']>;
  decision_lte?: InputMaybe<Scalars['BigInt']>;
  decision_not?: InputMaybe<Scalars['BigInt']>;
  decision_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  proposalId?: InputMaybe<Scalars['Bytes']>;
  proposalId_contains?: InputMaybe<Scalars['Bytes']>;
  proposalId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proposalId_not?: InputMaybe<Scalars['Bytes']>;
  proposalId_not_contains?: InputMaybe<Scalars['Bytes']>;
  proposalId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum SchemeRegistrarProposalExecuted_OrderBy {
  Avatar = 'avatar',
  Contract = 'contract',
  Decision = 'decision',
  Id = 'id',
  ProposalId = 'proposalId',
  TxHash = 'txHash'
}

export type SchemeRegistrarProposal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  dao?: InputMaybe<Scalars['String']>;
  dao_?: InputMaybe<Dao_Filter>;
  dao_contains?: InputMaybe<Scalars['String']>;
  dao_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_ends_with?: InputMaybe<Scalars['String']>;
  dao_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_gt?: InputMaybe<Scalars['String']>;
  dao_gte?: InputMaybe<Scalars['String']>;
  dao_in?: InputMaybe<Array<Scalars['String']>>;
  dao_lt?: InputMaybe<Scalars['String']>;
  dao_lte?: InputMaybe<Scalars['String']>;
  dao_not?: InputMaybe<Scalars['String']>;
  dao_not_contains?: InputMaybe<Scalars['String']>;
  dao_not_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_not_ends_with?: InputMaybe<Scalars['String']>;
  dao_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_not_in?: InputMaybe<Array<Scalars['String']>>;
  dao_not_starts_with?: InputMaybe<Scalars['String']>;
  dao_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dao_starts_with?: InputMaybe<Scalars['String']>;
  dao_starts_with_nocase?: InputMaybe<Scalars['String']>;
  decision?: InputMaybe<Scalars['BigInt']>;
  decision_gt?: InputMaybe<Scalars['BigInt']>;
  decision_gte?: InputMaybe<Scalars['BigInt']>;
  decision_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decision_lt?: InputMaybe<Scalars['BigInt']>;
  decision_lte?: InputMaybe<Scalars['BigInt']>;
  decision_not?: InputMaybe<Scalars['BigInt']>;
  decision_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  schemeRegistered?: InputMaybe<Scalars['Boolean']>;
  schemeRegistered_in?: InputMaybe<Array<Scalars['Boolean']>>;
  schemeRegistered_not?: InputMaybe<Scalars['Boolean']>;
  schemeRegistered_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  schemeRemoved?: InputMaybe<Scalars['Boolean']>;
  schemeRemoved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  schemeRemoved_not?: InputMaybe<Scalars['Boolean']>;
  schemeRemoved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  schemeToRegister?: InputMaybe<Scalars['Bytes']>;
  schemeToRegisterParamsHash?: InputMaybe<Scalars['Bytes']>;
  schemeToRegisterParamsHash_contains?: InputMaybe<Scalars['Bytes']>;
  schemeToRegisterParamsHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  schemeToRegisterParamsHash_not?: InputMaybe<Scalars['Bytes']>;
  schemeToRegisterParamsHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  schemeToRegisterParamsHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  schemeToRegisterPermission?: InputMaybe<Scalars['Bytes']>;
  schemeToRegisterPermission_contains?: InputMaybe<Scalars['Bytes']>;
  schemeToRegisterPermission_in?: InputMaybe<Array<Scalars['Bytes']>>;
  schemeToRegisterPermission_not?: InputMaybe<Scalars['Bytes']>;
  schemeToRegisterPermission_not_contains?: InputMaybe<Scalars['Bytes']>;
  schemeToRegisterPermission_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  schemeToRegister_contains?: InputMaybe<Scalars['Bytes']>;
  schemeToRegister_in?: InputMaybe<Array<Scalars['Bytes']>>;
  schemeToRegister_not?: InputMaybe<Scalars['Bytes']>;
  schemeToRegister_not_contains?: InputMaybe<Scalars['Bytes']>;
  schemeToRegister_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  schemeToRemove?: InputMaybe<Scalars['Bytes']>;
  schemeToRemove_contains?: InputMaybe<Scalars['Bytes']>;
  schemeToRemove_in?: InputMaybe<Array<Scalars['Bytes']>>;
  schemeToRemove_not?: InputMaybe<Scalars['Bytes']>;
  schemeToRemove_not_contains?: InputMaybe<Scalars['Bytes']>;
  schemeToRemove_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum SchemeRegistrarProposal_OrderBy {
  Dao = 'dao',
  Decision = 'decision',
  Id = 'id',
  SchemeRegistered = 'schemeRegistered',
  SchemeRemoved = 'schemeRemoved',
  SchemeToRegister = 'schemeToRegister',
  SchemeToRegisterParamsHash = 'schemeToRegisterParamsHash',
  SchemeToRegisterPermission = 'schemeToRegisterPermission',
  SchemeToRemove = 'schemeToRemove'
}

export type SchemeRegistrarRemoveSchemeProposal = {
  __typename?: 'SchemeRegistrarRemoveSchemeProposal';
  avatar: Scalars['Bytes'];
  contract: Scalars['Bytes'];
  descriptionHash: Scalars['String'];
  id: Scalars['ID'];
  proposalId: Scalars['Bytes'];
  scheme: Scalars['Bytes'];
  txHash: Scalars['Bytes'];
  votingMachine: Scalars['Bytes'];
};

export type SchemeRegistrarRemoveSchemeProposal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  avatar?: InputMaybe<Scalars['Bytes']>;
  avatar_contains?: InputMaybe<Scalars['Bytes']>;
  avatar_in?: InputMaybe<Array<Scalars['Bytes']>>;
  avatar_not?: InputMaybe<Scalars['Bytes']>;
  avatar_not_contains?: InputMaybe<Scalars['Bytes']>;
  avatar_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract?: InputMaybe<Scalars['Bytes']>;
  contract_contains?: InputMaybe<Scalars['Bytes']>;
  contract_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract_not?: InputMaybe<Scalars['Bytes']>;
  contract_not_contains?: InputMaybe<Scalars['Bytes']>;
  contract_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  descriptionHash?: InputMaybe<Scalars['String']>;
  descriptionHash_contains?: InputMaybe<Scalars['String']>;
  descriptionHash_contains_nocase?: InputMaybe<Scalars['String']>;
  descriptionHash_ends_with?: InputMaybe<Scalars['String']>;
  descriptionHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  descriptionHash_gt?: InputMaybe<Scalars['String']>;
  descriptionHash_gte?: InputMaybe<Scalars['String']>;
  descriptionHash_in?: InputMaybe<Array<Scalars['String']>>;
  descriptionHash_lt?: InputMaybe<Scalars['String']>;
  descriptionHash_lte?: InputMaybe<Scalars['String']>;
  descriptionHash_not?: InputMaybe<Scalars['String']>;
  descriptionHash_not_contains?: InputMaybe<Scalars['String']>;
  descriptionHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  descriptionHash_not_ends_with?: InputMaybe<Scalars['String']>;
  descriptionHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  descriptionHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  descriptionHash_not_starts_with?: InputMaybe<Scalars['String']>;
  descriptionHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  descriptionHash_starts_with?: InputMaybe<Scalars['String']>;
  descriptionHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  proposalId?: InputMaybe<Scalars['Bytes']>;
  proposalId_contains?: InputMaybe<Scalars['Bytes']>;
  proposalId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proposalId_not?: InputMaybe<Scalars['Bytes']>;
  proposalId_not_contains?: InputMaybe<Scalars['Bytes']>;
  proposalId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  scheme?: InputMaybe<Scalars['Bytes']>;
  scheme_contains?: InputMaybe<Scalars['Bytes']>;
  scheme_in?: InputMaybe<Array<Scalars['Bytes']>>;
  scheme_not?: InputMaybe<Scalars['Bytes']>;
  scheme_not_contains?: InputMaybe<Scalars['Bytes']>;
  scheme_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  votingMachine?: InputMaybe<Scalars['Bytes']>;
  votingMachine_contains?: InputMaybe<Scalars['Bytes']>;
  votingMachine_in?: InputMaybe<Array<Scalars['Bytes']>>;
  votingMachine_not?: InputMaybe<Scalars['Bytes']>;
  votingMachine_not_contains?: InputMaybe<Scalars['Bytes']>;
  votingMachine_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum SchemeRegistrarRemoveSchemeProposal_OrderBy {
  Avatar = 'avatar',
  Contract = 'contract',
  DescriptionHash = 'descriptionHash',
  Id = 'id',
  ProposalId = 'proposalId',
  Scheme = 'scheme',
  TxHash = 'txHash',
  VotingMachine = 'votingMachine'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  allowance?: Maybe<Allowance>;
  allowances: Array<Allowance>;
  avatarContract?: Maybe<AvatarContract>;
  avatarContracts: Array<AvatarContract>;
  blacklistedDAO?: Maybe<BlacklistedDao>;
  blacklistedDAOs: Array<BlacklistedDao>;
  cl4Rlock?: Maybe<Cl4RLock>;
  cl4Rlocks: Array<Cl4RLock>;
  cl4Rredeem?: Maybe<Cl4RRedeem>;
  cl4Rredeems: Array<Cl4RRedeem>;
  competitionProposal?: Maybe<CompetitionProposal>;
  competitionProposals: Array<CompetitionProposal>;
  competitionSuggestion?: Maybe<CompetitionSuggestion>;
  competitionSuggestions: Array<CompetitionSuggestion>;
  competitionVote?: Maybe<CompetitionVote>;
  competitionVotes: Array<CompetitionVote>;
  continuousLocking4ReputationParams: Array<ContinuousLocking4ReputationParams>;
  contractInfo?: Maybe<ContractInfo>;
  contractInfos: Array<ContractInfo>;
  contributionRewardExtParam?: Maybe<ContributionRewardExtParam>;
  contributionRewardExtParams: Array<ContributionRewardExtParam>;
  contributionRewardNewContributionProposal?: Maybe<ContributionRewardNewContributionProposal>;
  contributionRewardNewContributionProposals: Array<ContributionRewardNewContributionProposal>;
  contributionRewardParam?: Maybe<ContributionRewardParam>;
  contributionRewardParams: Array<ContributionRewardParam>;
  contributionRewardProposal?: Maybe<ContributionRewardProposal>;
  contributionRewardProposalResolved?: Maybe<ContributionRewardProposalResolved>;
  contributionRewardProposalResolveds: Array<ContributionRewardProposalResolved>;
  contributionRewardProposals: Array<ContributionRewardProposal>;
  contributionRewardRedeemEther?: Maybe<ContributionRewardRedeemEther>;
  contributionRewardRedeemEthers: Array<ContributionRewardRedeemEther>;
  contributionRewardRedeemExternalToken?: Maybe<ContributionRewardRedeemExternalToken>;
  contributionRewardRedeemExternalTokens: Array<ContributionRewardRedeemExternalToken>;
  contributionRewardRedeemNativeToken?: Maybe<ContributionRewardRedeemNativeToken>;
  contributionRewardRedeemNativeTokens: Array<ContributionRewardRedeemNativeToken>;
  contributionRewardRedeemReputation?: Maybe<ContributionRewardRedeemReputation>;
  contributionRewardRedeemReputations: Array<ContributionRewardRedeemReputation>;
  controllerAddGlobalConstraint?: Maybe<ControllerAddGlobalConstraint>;
  controllerAddGlobalConstraints: Array<ControllerAddGlobalConstraint>;
  controllerGlobalConstraint?: Maybe<ControllerGlobalConstraint>;
  controllerGlobalConstraints: Array<ControllerGlobalConstraint>;
  controllerOrganization?: Maybe<ControllerOrganization>;
  controllerOrganizations: Array<ControllerOrganization>;
  controllerRegisterScheme?: Maybe<ControllerRegisterScheme>;
  controllerRegisterSchemes: Array<ControllerRegisterScheme>;
  controllerRemoveGlobalConstraint?: Maybe<ControllerRemoveGlobalConstraint>;
  controllerRemoveGlobalConstraints: Array<ControllerRemoveGlobalConstraint>;
  controllerScheme?: Maybe<ControllerScheme>;
  controllerSchemes: Array<ControllerScheme>;
  controllerUnregisterScheme?: Maybe<ControllerUnregisterScheme>;
  controllerUnregisterSchemes: Array<ControllerUnregisterScheme>;
  controllerUpgradeController?: Maybe<ControllerUpgradeController>;
  controllerUpgradeControllers: Array<ControllerUpgradeController>;
  dao?: Maybe<Dao>;
  daoregistryContract?: Maybe<DaoRegistryContract>;
  daoregistryContracts: Array<DaoRegistryContract>;
  daos: Array<Dao>;
  daotrackerContract?: Maybe<DaoTrackerContract>;
  daotrackerContracts: Array<DaoTrackerContract>;
  debug?: Maybe<Debug>;
  debugs: Array<Debug>;
  event?: Maybe<Event>;
  events: Array<Event>;
  firstRegisterScheme?: Maybe<FirstRegisterScheme>;
  firstRegisterSchemeFlag?: Maybe<FirstRegisterSchemeFlag>;
  firstRegisterSchemeFlags: Array<FirstRegisterSchemeFlag>;
  firstRegisterSchemes: Array<FirstRegisterScheme>;
  genericSchemeMultiCallParam?: Maybe<GenericSchemeMultiCallParam>;
  genericSchemeMultiCallParams: Array<GenericSchemeMultiCallParam>;
  genericSchemeMultiCallProposal?: Maybe<GenericSchemeMultiCallProposal>;
  genericSchemeMultiCallProposals: Array<GenericSchemeMultiCallProposal>;
  genericSchemeParam?: Maybe<GenericSchemeParam>;
  genericSchemeParams: Array<GenericSchemeParam>;
  genericSchemeProposal?: Maybe<GenericSchemeProposal>;
  genericSchemeProposals: Array<GenericSchemeProposal>;
  genesisProtocolExecuteProposal?: Maybe<GenesisProtocolExecuteProposal>;
  genesisProtocolExecuteProposals: Array<GenesisProtocolExecuteProposal>;
  genesisProtocolGPExecuteProposal?: Maybe<GenesisProtocolGpExecuteProposal>;
  genesisProtocolGPExecuteProposals: Array<GenesisProtocolGpExecuteProposal>;
  genesisProtocolParam?: Maybe<GenesisProtocolParam>;
  genesisProtocolParams: Array<GenesisProtocolParam>;
  genesisProtocolProposal?: Maybe<GenesisProtocolProposal>;
  genesisProtocolProposals: Array<GenesisProtocolProposal>;
  genesisProtocolRedemption?: Maybe<GenesisProtocolRedemption>;
  genesisProtocolRedemptions: Array<GenesisProtocolRedemption>;
  genesisProtocolReward?: Maybe<GenesisProtocolReward>;
  genesisProtocolRewards: Array<GenesisProtocolReward>;
  genesisProtocolStake?: Maybe<GenesisProtocolStake>;
  genesisProtocolStakes: Array<GenesisProtocolStake>;
  genesisProtocolVote?: Maybe<GenesisProtocolVote>;
  genesisProtocolVotes: Array<GenesisProtocolVote>;
  gpqueue?: Maybe<GpQueue>;
  gpqueues: Array<GpQueue>;
  gpreward?: Maybe<GpReward>;
  gprewards: Array<GpReward>;
  gprewardsHelper?: Maybe<GpRewardsHelper>;
  gprewardsHelpers: Array<GpRewardsHelper>;
  preGPReward?: Maybe<PreGpReward>;
  preGPRewards: Array<PreGpReward>;
  proposal?: Maybe<Proposal>;
  proposalStake?: Maybe<ProposalStake>;
  proposalStakes: Array<ProposalStake>;
  proposalVote?: Maybe<ProposalVote>;
  proposalVotes: Array<ProposalVote>;
  proposals: Array<Proposal>;
  rep?: Maybe<Rep>;
  reps: Array<Rep>;
  reputationBurn?: Maybe<ReputationBurn>;
  reputationBurns: Array<ReputationBurn>;
  reputationContract?: Maybe<ReputationContract>;
  reputationContracts: Array<ReputationContract>;
  reputationHolder?: Maybe<ReputationHolder>;
  reputationHolders: Array<ReputationHolder>;
  reputationMint?: Maybe<ReputationMint>;
  reputationMints: Array<ReputationMint>;
  schemeRegistrarNewSchemeProposal?: Maybe<SchemeRegistrarNewSchemeProposal>;
  schemeRegistrarNewSchemeProposals: Array<SchemeRegistrarNewSchemeProposal>;
  schemeRegistrarParam?: Maybe<SchemeRegistrarParam>;
  schemeRegistrarParams: Array<SchemeRegistrarParam>;
  schemeRegistrarProposal?: Maybe<SchemeRegistrarProposal>;
  schemeRegistrarProposalExecuted?: Maybe<SchemeRegistrarProposalExecuted>;
  schemeRegistrarProposalExecuteds: Array<SchemeRegistrarProposalExecuted>;
  schemeRegistrarProposals: Array<SchemeRegistrarProposal>;
  schemeRegistrarRemoveSchemeProposal?: Maybe<SchemeRegistrarRemoveSchemeProposal>;
  schemeRegistrarRemoveSchemeProposals: Array<SchemeRegistrarRemoveSchemeProposal>;
  tag?: Maybe<Tag>;
  tags: Array<Tag>;
  templateInfo?: Maybe<TemplateInfo>;
  templateInfos: Array<TemplateInfo>;
  token?: Maybe<Token>;
  tokenApproval?: Maybe<TokenApproval>;
  tokenApprovals: Array<TokenApproval>;
  tokenContract?: Maybe<TokenContract>;
  tokenContracts: Array<TokenContract>;
  tokenHolder?: Maybe<TokenHolder>;
  tokenHolders: Array<TokenHolder>;
  tokenTransfer?: Maybe<TokenTransfer>;
  tokenTransfers: Array<TokenTransfer>;
  tokens: Array<Token>;
  ucontrollerAddGlobalConstraint?: Maybe<UControllerAddGlobalConstraint>;
  ucontrollerAddGlobalConstraints: Array<UControllerAddGlobalConstraint>;
  ucontrollerGlobalConstraint?: Maybe<UControllerGlobalConstraint>;
  ucontrollerGlobalConstraints: Array<UControllerGlobalConstraint>;
  ucontrollerOrganization?: Maybe<UControllerOrganization>;
  ucontrollerOrganizations: Array<UControllerOrganization>;
  ucontrollerRegisterScheme?: Maybe<UControllerRegisterScheme>;
  ucontrollerRegisterSchemes: Array<UControllerRegisterScheme>;
  ucontrollerRemoveGlobalConstraint?: Maybe<UControllerRemoveGlobalConstraint>;
  ucontrollerRemoveGlobalConstraints: Array<UControllerRemoveGlobalConstraint>;
  ucontrollerUnregisterScheme?: Maybe<UControllerUnregisterScheme>;
  ucontrollerUnregisterSchemes: Array<UControllerUnregisterScheme>;
  ucontrollerUpgradeController?: Maybe<UControllerUpgradeController>;
  ucontrollerUpgradeControllers: Array<UControllerUpgradeController>;
  ugenericSchemeParam?: Maybe<UGenericSchemeParam>;
  ugenericSchemeParams: Array<UGenericSchemeParam>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAllowanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAllowancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Allowance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Allowance_Filter>;
};


export type SubscriptionAvatarContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAvatarContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AvatarContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AvatarContract_Filter>;
};


export type SubscriptionBlacklistedDaoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBlacklistedDaOsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BlacklistedDao_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BlacklistedDao_Filter>;
};


export type SubscriptionCl4RlockArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCl4RlocksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Cl4RLock_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Cl4RLock_Filter>;
};


export type SubscriptionCl4RredeemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCl4RredeemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Cl4RRedeem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Cl4RRedeem_Filter>;
};


export type SubscriptionCompetitionProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCompetitionProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CompetitionProposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CompetitionProposal_Filter>;
};


export type SubscriptionCompetitionSuggestionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCompetitionSuggestionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CompetitionSuggestion_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CompetitionSuggestion_Filter>;
};


export type SubscriptionCompetitionVoteArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCompetitionVotesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CompetitionVote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CompetitionVote_Filter>;
};


export type SubscriptionContinuousLocking4ReputationParamsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContinuousLocking4ReputationParams_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContinuousLocking4ReputationParams_Filter>;
};


export type SubscriptionContractInfoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionContractInfosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContractInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContractInfo_Filter>;
};


export type SubscriptionContributionRewardExtParamArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionContributionRewardExtParamsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContributionRewardExtParam_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContributionRewardExtParam_Filter>;
};


export type SubscriptionContributionRewardNewContributionProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionContributionRewardNewContributionProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContributionRewardNewContributionProposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContributionRewardNewContributionProposal_Filter>;
};


export type SubscriptionContributionRewardParamArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionContributionRewardParamsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContributionRewardParam_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContributionRewardParam_Filter>;
};


export type SubscriptionContributionRewardProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionContributionRewardProposalResolvedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionContributionRewardProposalResolvedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContributionRewardProposalResolved_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContributionRewardProposalResolved_Filter>;
};


export type SubscriptionContributionRewardProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContributionRewardProposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContributionRewardProposal_Filter>;
};


export type SubscriptionContributionRewardRedeemEtherArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionContributionRewardRedeemEthersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContributionRewardRedeemEther_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContributionRewardRedeemEther_Filter>;
};


export type SubscriptionContributionRewardRedeemExternalTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionContributionRewardRedeemExternalTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContributionRewardRedeemExternalToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContributionRewardRedeemExternalToken_Filter>;
};


export type SubscriptionContributionRewardRedeemNativeTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionContributionRewardRedeemNativeTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContributionRewardRedeemNativeToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContributionRewardRedeemNativeToken_Filter>;
};


export type SubscriptionContributionRewardRedeemReputationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionContributionRewardRedeemReputationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContributionRewardRedeemReputation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContributionRewardRedeemReputation_Filter>;
};


export type SubscriptionControllerAddGlobalConstraintArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionControllerAddGlobalConstraintsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ControllerAddGlobalConstraint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ControllerAddGlobalConstraint_Filter>;
};


export type SubscriptionControllerGlobalConstraintArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionControllerGlobalConstraintsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ControllerGlobalConstraint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ControllerGlobalConstraint_Filter>;
};


export type SubscriptionControllerOrganizationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionControllerOrganizationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ControllerOrganization_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ControllerOrganization_Filter>;
};


export type SubscriptionControllerRegisterSchemeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionControllerRegisterSchemesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ControllerRegisterScheme_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ControllerRegisterScheme_Filter>;
};


export type SubscriptionControllerRemoveGlobalConstraintArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionControllerRemoveGlobalConstraintsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ControllerRemoveGlobalConstraint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ControllerRemoveGlobalConstraint_Filter>;
};


export type SubscriptionControllerSchemeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionControllerSchemesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ControllerScheme_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ControllerScheme_Filter>;
};


export type SubscriptionControllerUnregisterSchemeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionControllerUnregisterSchemesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ControllerUnregisterScheme_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ControllerUnregisterScheme_Filter>;
};


export type SubscriptionControllerUpgradeControllerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionControllerUpgradeControllersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ControllerUpgradeController_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ControllerUpgradeController_Filter>;
};


export type SubscriptionDaoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDaoregistryContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDaoregistryContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DaoRegistryContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DaoRegistryContract_Filter>;
};


export type SubscriptionDaosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Dao_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Dao_Filter>;
};


export type SubscriptionDaotrackerContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDaotrackerContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DaoTrackerContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DaoTrackerContract_Filter>;
};


export type SubscriptionDebugArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDebugsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Debug_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Debug_Filter>;
};


export type SubscriptionEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Event_Filter>;
};


export type SubscriptionFirstRegisterSchemeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFirstRegisterSchemeFlagArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFirstRegisterSchemeFlagsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FirstRegisterSchemeFlag_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FirstRegisterSchemeFlag_Filter>;
};


export type SubscriptionFirstRegisterSchemesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FirstRegisterScheme_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FirstRegisterScheme_Filter>;
};


export type SubscriptionGenericSchemeMultiCallParamArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGenericSchemeMultiCallParamsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GenericSchemeMultiCallParam_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GenericSchemeMultiCallParam_Filter>;
};


export type SubscriptionGenericSchemeMultiCallProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGenericSchemeMultiCallProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GenericSchemeMultiCallProposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GenericSchemeMultiCallProposal_Filter>;
};


export type SubscriptionGenericSchemeParamArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGenericSchemeParamsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GenericSchemeParam_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GenericSchemeParam_Filter>;
};


export type SubscriptionGenericSchemeProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGenericSchemeProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GenericSchemeProposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GenericSchemeProposal_Filter>;
};


export type SubscriptionGenesisProtocolExecuteProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGenesisProtocolExecuteProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GenesisProtocolExecuteProposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GenesisProtocolExecuteProposal_Filter>;
};


export type SubscriptionGenesisProtocolGpExecuteProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGenesisProtocolGpExecuteProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GenesisProtocolGpExecuteProposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GenesisProtocolGpExecuteProposal_Filter>;
};


export type SubscriptionGenesisProtocolParamArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGenesisProtocolParamsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GenesisProtocolParam_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GenesisProtocolParam_Filter>;
};


export type SubscriptionGenesisProtocolProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGenesisProtocolProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GenesisProtocolProposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GenesisProtocolProposal_Filter>;
};


export type SubscriptionGenesisProtocolRedemptionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGenesisProtocolRedemptionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GenesisProtocolRedemption_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GenesisProtocolRedemption_Filter>;
};


export type SubscriptionGenesisProtocolRewardArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGenesisProtocolRewardsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GenesisProtocolReward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GenesisProtocolReward_Filter>;
};


export type SubscriptionGenesisProtocolStakeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGenesisProtocolStakesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GenesisProtocolStake_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GenesisProtocolStake_Filter>;
};


export type SubscriptionGenesisProtocolVoteArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGenesisProtocolVotesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GenesisProtocolVote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GenesisProtocolVote_Filter>;
};


export type SubscriptionGpqueueArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGpqueuesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GpQueue_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GpQueue_Filter>;
};


export type SubscriptionGprewardArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGprewardsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GpReward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GpReward_Filter>;
};


export type SubscriptionGprewardsHelperArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGprewardsHelpersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GpRewardsHelper_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GpRewardsHelper_Filter>;
};


export type SubscriptionPreGpRewardArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPreGpRewardsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PreGpReward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PreGpReward_Filter>;
};


export type SubscriptionProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProposalStakeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProposalStakesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalStake_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalStake_Filter>;
};


export type SubscriptionProposalVoteArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProposalVotesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalVote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalVote_Filter>;
};


export type SubscriptionProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Proposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Proposal_Filter>;
};


export type SubscriptionRepArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRepsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Rep_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Rep_Filter>;
};


export type SubscriptionReputationBurnArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionReputationBurnsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReputationBurn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReputationBurn_Filter>;
};


export type SubscriptionReputationContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionReputationContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReputationContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReputationContract_Filter>;
};


export type SubscriptionReputationHolderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionReputationHoldersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReputationHolder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReputationHolder_Filter>;
};


export type SubscriptionReputationMintArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionReputationMintsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReputationMint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReputationMint_Filter>;
};


export type SubscriptionSchemeRegistrarNewSchemeProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSchemeRegistrarNewSchemeProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SchemeRegistrarNewSchemeProposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SchemeRegistrarNewSchemeProposal_Filter>;
};


export type SubscriptionSchemeRegistrarParamArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSchemeRegistrarParamsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SchemeRegistrarParam_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SchemeRegistrarParam_Filter>;
};


export type SubscriptionSchemeRegistrarProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSchemeRegistrarProposalExecutedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSchemeRegistrarProposalExecutedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SchemeRegistrarProposalExecuted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SchemeRegistrarProposalExecuted_Filter>;
};


export type SubscriptionSchemeRegistrarProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SchemeRegistrarProposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SchemeRegistrarProposal_Filter>;
};


export type SubscriptionSchemeRegistrarRemoveSchemeProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSchemeRegistrarRemoveSchemeProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SchemeRegistrarRemoveSchemeProposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SchemeRegistrarRemoveSchemeProposal_Filter>;
};


export type SubscriptionTagArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTagsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Tag_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Tag_Filter>;
};


export type SubscriptionTemplateInfoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTemplateInfosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TemplateInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TemplateInfo_Filter>;
};


export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenApproval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenApproval_Filter>;
};


export type SubscriptionTokenContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenContract_Filter>;
};


export type SubscriptionTokenHolderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenHoldersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenHolder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenHolder_Filter>;
};


export type SubscriptionTokenTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenTransfer_Filter>;
};


export type SubscriptionTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};


export type SubscriptionUcontrollerAddGlobalConstraintArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUcontrollerAddGlobalConstraintsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UControllerAddGlobalConstraint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UControllerAddGlobalConstraint_Filter>;
};


export type SubscriptionUcontrollerGlobalConstraintArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUcontrollerGlobalConstraintsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UControllerGlobalConstraint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UControllerGlobalConstraint_Filter>;
};


export type SubscriptionUcontrollerOrganizationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUcontrollerOrganizationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UControllerOrganization_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UControllerOrganization_Filter>;
};


export type SubscriptionUcontrollerRegisterSchemeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUcontrollerRegisterSchemesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UControllerRegisterScheme_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UControllerRegisterScheme_Filter>;
};


export type SubscriptionUcontrollerRemoveGlobalConstraintArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUcontrollerRemoveGlobalConstraintsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UControllerRemoveGlobalConstraint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UControllerRemoveGlobalConstraint_Filter>;
};


export type SubscriptionUcontrollerUnregisterSchemeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUcontrollerUnregisterSchemesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UControllerUnregisterScheme_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UControllerUnregisterScheme_Filter>;
};


export type SubscriptionUcontrollerUpgradeControllerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUcontrollerUpgradeControllersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UControllerUpgradeController_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UControllerUpgradeController_Filter>;
};


export type SubscriptionUgenericSchemeParamArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUgenericSchemeParamsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UGenericSchemeParam_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UGenericSchemeParam_Filter>;
};

export type Tag = {
  __typename?: 'Tag';
  competitionSuggestions?: Maybe<Array<CompetitionSuggestion>>;
  id: Scalars['ID'];
  numberOfProposals: Scalars['BigInt'];
  numberOfSuggestions: Scalars['BigInt'];
  proposals?: Maybe<Array<Proposal>>;
};


export type TagCompetitionSuggestionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CompetitionSuggestion_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CompetitionSuggestion_Filter>;
};


export type TagProposalsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Proposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Proposal_Filter>;
};

export type Tag_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  competitionSuggestions?: InputMaybe<Array<Scalars['String']>>;
  competitionSuggestions_?: InputMaybe<CompetitionSuggestion_Filter>;
  competitionSuggestions_contains?: InputMaybe<Array<Scalars['String']>>;
  competitionSuggestions_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  competitionSuggestions_not?: InputMaybe<Array<Scalars['String']>>;
  competitionSuggestions_not_contains?: InputMaybe<Array<Scalars['String']>>;
  competitionSuggestions_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  numberOfProposals?: InputMaybe<Scalars['BigInt']>;
  numberOfProposals_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfProposals_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfProposals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfProposals_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfProposals_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfProposals_not?: InputMaybe<Scalars['BigInt']>;
  numberOfProposals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfSuggestions?: InputMaybe<Scalars['BigInt']>;
  numberOfSuggestions_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfSuggestions_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfSuggestions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfSuggestions_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfSuggestions_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfSuggestions_not?: InputMaybe<Scalars['BigInt']>;
  numberOfSuggestions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposals?: InputMaybe<Array<Scalars['String']>>;
  proposals_?: InputMaybe<Proposal_Filter>;
  proposals_contains?: InputMaybe<Array<Scalars['String']>>;
  proposals_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  proposals_not?: InputMaybe<Array<Scalars['String']>>;
  proposals_not_contains?: InputMaybe<Array<Scalars['String']>>;
  proposals_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
};

export enum Tag_OrderBy {
  CompetitionSuggestions = 'competitionSuggestions',
  Id = 'id',
  NumberOfProposals = 'numberOfProposals',
  NumberOfSuggestions = 'numberOfSuggestions',
  Proposals = 'proposals'
}

export type TemplateInfo = {
  __typename?: 'TemplateInfo';
  id: Scalars['ID'];
  templateName: Scalars['String'];
};

export type TemplateInfo_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  templateName?: InputMaybe<Scalars['String']>;
  templateName_contains?: InputMaybe<Scalars['String']>;
  templateName_contains_nocase?: InputMaybe<Scalars['String']>;
  templateName_ends_with?: InputMaybe<Scalars['String']>;
  templateName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  templateName_gt?: InputMaybe<Scalars['String']>;
  templateName_gte?: InputMaybe<Scalars['String']>;
  templateName_in?: InputMaybe<Array<Scalars['String']>>;
  templateName_lt?: InputMaybe<Scalars['String']>;
  templateName_lte?: InputMaybe<Scalars['String']>;
  templateName_not?: InputMaybe<Scalars['String']>;
  templateName_not_contains?: InputMaybe<Scalars['String']>;
  templateName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  templateName_not_ends_with?: InputMaybe<Scalars['String']>;
  templateName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  templateName_not_in?: InputMaybe<Array<Scalars['String']>>;
  templateName_not_starts_with?: InputMaybe<Scalars['String']>;
  templateName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  templateName_starts_with?: InputMaybe<Scalars['String']>;
  templateName_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum TemplateInfo_OrderBy {
  Id = 'id',
  TemplateName = 'templateName'
}

export type Token = {
  __typename?: 'Token';
  dao?: Maybe<Dao>;
  id: Scalars['ID'];
  name: Scalars['String'];
  symbol: Scalars['String'];
  totalSupply: Scalars['BigInt'];
};

export type TokenApproval = {
  __typename?: 'TokenApproval';
  contract: Scalars['Bytes'];
  id: Scalars['ID'];
  owner: Scalars['Bytes'];
  spender: Scalars['Bytes'];
  txHash: Scalars['Bytes'];
  value: Scalars['BigInt'];
};

export type TokenApproval_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  contract?: InputMaybe<Scalars['Bytes']>;
  contract_contains?: InputMaybe<Scalars['Bytes']>;
  contract_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract_not?: InputMaybe<Scalars['Bytes']>;
  contract_not_contains?: InputMaybe<Scalars['Bytes']>;
  contract_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  spender?: InputMaybe<Scalars['Bytes']>;
  spender_contains?: InputMaybe<Scalars['Bytes']>;
  spender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  spender_not?: InputMaybe<Scalars['Bytes']>;
  spender_not_contains?: InputMaybe<Scalars['Bytes']>;
  spender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  value?: InputMaybe<Scalars['BigInt']>;
  value_gt?: InputMaybe<Scalars['BigInt']>;
  value_gte?: InputMaybe<Scalars['BigInt']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']>>;
  value_lt?: InputMaybe<Scalars['BigInt']>;
  value_lte?: InputMaybe<Scalars['BigInt']>;
  value_not?: InputMaybe<Scalars['BigInt']>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum TokenApproval_OrderBy {
  Contract = 'contract',
  Id = 'id',
  Owner = 'owner',
  Spender = 'spender',
  TxHash = 'txHash',
  Value = 'value'
}

export type TokenContract = {
  __typename?: 'TokenContract';
  address: Scalars['Bytes'];
  id: Scalars['ID'];
  owner: Scalars['Bytes'];
  tokenHolders?: Maybe<Array<Scalars['String']>>;
  totalSupply: Scalars['BigInt'];
};

export type TokenContract_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenHolders?: InputMaybe<Array<Scalars['String']>>;
  tokenHolders_contains?: InputMaybe<Array<Scalars['String']>>;
  tokenHolders_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  tokenHolders_not?: InputMaybe<Array<Scalars['String']>>;
  tokenHolders_not_contains?: InputMaybe<Array<Scalars['String']>>;
  tokenHolders_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum TokenContract_OrderBy {
  Address = 'address',
  Id = 'id',
  Owner = 'owner',
  TokenHolders = 'tokenHolders',
  TotalSupply = 'totalSupply'
}

export type TokenHolder = {
  __typename?: 'TokenHolder';
  address: Scalars['Bytes'];
  balance: Scalars['BigInt'];
  contract: Scalars['Bytes'];
  id: Scalars['ID'];
};

export type TokenHolder_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contract?: InputMaybe<Scalars['Bytes']>;
  contract_contains?: InputMaybe<Scalars['Bytes']>;
  contract_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract_not?: InputMaybe<Scalars['Bytes']>;
  contract_not_contains?: InputMaybe<Scalars['Bytes']>;
  contract_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export enum TokenHolder_OrderBy {
  Address = 'address',
  Balance = 'balance',
  Contract = 'contract',
  Id = 'id'
}

export type TokenTransfer = {
  __typename?: 'TokenTransfer';
  contract: Scalars['Bytes'];
  from: Scalars['Bytes'];
  id: Scalars['ID'];
  to: Scalars['Bytes'];
  txHash: Scalars['Bytes'];
  value: Scalars['BigInt'];
};

export type TokenTransfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  contract?: InputMaybe<Scalars['Bytes']>;
  contract_contains?: InputMaybe<Scalars['Bytes']>;
  contract_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract_not?: InputMaybe<Scalars['Bytes']>;
  contract_not_contains?: InputMaybe<Scalars['Bytes']>;
  contract_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  value?: InputMaybe<Scalars['BigInt']>;
  value_gt?: InputMaybe<Scalars['BigInt']>;
  value_gte?: InputMaybe<Scalars['BigInt']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']>>;
  value_lt?: InputMaybe<Scalars['BigInt']>;
  value_lte?: InputMaybe<Scalars['BigInt']>;
  value_not?: InputMaybe<Scalars['BigInt']>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum TokenTransfer_OrderBy {
  Contract = 'contract',
  From = 'from',
  Id = 'id',
  To = 'to',
  TxHash = 'txHash',
  Value = 'value'
}

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  dao?: InputMaybe<Scalars['String']>;
  dao_?: InputMaybe<Dao_Filter>;
  dao_contains?: InputMaybe<Scalars['String']>;
  dao_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_ends_with?: InputMaybe<Scalars['String']>;
  dao_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_gt?: InputMaybe<Scalars['String']>;
  dao_gte?: InputMaybe<Scalars['String']>;
  dao_in?: InputMaybe<Array<Scalars['String']>>;
  dao_lt?: InputMaybe<Scalars['String']>;
  dao_lte?: InputMaybe<Scalars['String']>;
  dao_not?: InputMaybe<Scalars['String']>;
  dao_not_contains?: InputMaybe<Scalars['String']>;
  dao_not_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_not_ends_with?: InputMaybe<Scalars['String']>;
  dao_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_not_in?: InputMaybe<Array<Scalars['String']>>;
  dao_not_starts_with?: InputMaybe<Scalars['String']>;
  dao_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dao_starts_with?: InputMaybe<Scalars['String']>;
  dao_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Token_OrderBy {
  Dao = 'dao',
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  TotalSupply = 'totalSupply'
}

export type UControllerAddGlobalConstraint = {
  __typename?: 'UControllerAddGlobalConstraint';
  avatarAddress: Scalars['Bytes'];
  controller: Scalars['Bytes'];
  globalConstraint: Scalars['Bytes'];
  id: Scalars['ID'];
  paramsHash: Scalars['Bytes'];
  txHash: Scalars['Bytes'];
  type: Scalars['String'];
};

export type UControllerAddGlobalConstraint_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  avatarAddress?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_contains?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  avatarAddress_not?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  controller?: InputMaybe<Scalars['Bytes']>;
  controller_contains?: InputMaybe<Scalars['Bytes']>;
  controller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  controller_not?: InputMaybe<Scalars['Bytes']>;
  controller_not_contains?: InputMaybe<Scalars['Bytes']>;
  controller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  globalConstraint?: InputMaybe<Scalars['Bytes']>;
  globalConstraint_contains?: InputMaybe<Scalars['Bytes']>;
  globalConstraint_in?: InputMaybe<Array<Scalars['Bytes']>>;
  globalConstraint_not?: InputMaybe<Scalars['Bytes']>;
  globalConstraint_not_contains?: InputMaybe<Scalars['Bytes']>;
  globalConstraint_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  paramsHash?: InputMaybe<Scalars['Bytes']>;
  paramsHash_contains?: InputMaybe<Scalars['Bytes']>;
  paramsHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  paramsHash_not?: InputMaybe<Scalars['Bytes']>;
  paramsHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  paramsHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  type?: InputMaybe<Scalars['String']>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_contains_nocase?: InputMaybe<Scalars['String']>;
  type_ends_with?: InputMaybe<Scalars['String']>;
  type_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<Scalars['String']>>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_not?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']>;
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  type_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_in?: InputMaybe<Array<Scalars['String']>>;
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  type_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_starts_with?: InputMaybe<Scalars['String']>;
  type_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum UControllerAddGlobalConstraint_OrderBy {
  AvatarAddress = 'avatarAddress',
  Controller = 'controller',
  GlobalConstraint = 'globalConstraint',
  Id = 'id',
  ParamsHash = 'paramsHash',
  TxHash = 'txHash',
  Type = 'type'
}

export type UControllerGlobalConstraint = {
  __typename?: 'UControllerGlobalConstraint';
  address: Scalars['Bytes'];
  avatarAddress: Scalars['Bytes'];
  id: Scalars['ID'];
  paramsHash: Scalars['Bytes'];
  type: Scalars['String'];
};

export type UControllerGlobalConstraint_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  avatarAddress?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_contains?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  avatarAddress_not?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  paramsHash?: InputMaybe<Scalars['Bytes']>;
  paramsHash_contains?: InputMaybe<Scalars['Bytes']>;
  paramsHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  paramsHash_not?: InputMaybe<Scalars['Bytes']>;
  paramsHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  paramsHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  type?: InputMaybe<Scalars['String']>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_contains_nocase?: InputMaybe<Scalars['String']>;
  type_ends_with?: InputMaybe<Scalars['String']>;
  type_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<Scalars['String']>>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_not?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']>;
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  type_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_in?: InputMaybe<Array<Scalars['String']>>;
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  type_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_starts_with?: InputMaybe<Scalars['String']>;
  type_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum UControllerGlobalConstraint_OrderBy {
  Address = 'address',
  AvatarAddress = 'avatarAddress',
  Id = 'id',
  ParamsHash = 'paramsHash',
  Type = 'type'
}

export type UControllerOrganization = {
  __typename?: 'UControllerOrganization';
  avatarAddress: Scalars['Bytes'];
  controller: Scalars['Bytes'];
  id: Scalars['ID'];
  nativeReputation: ReputationContract;
  nativeToken: TokenContract;
};

export type UControllerOrganization_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  avatarAddress?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_contains?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  avatarAddress_not?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  controller?: InputMaybe<Scalars['Bytes']>;
  controller_contains?: InputMaybe<Scalars['Bytes']>;
  controller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  controller_not?: InputMaybe<Scalars['Bytes']>;
  controller_not_contains?: InputMaybe<Scalars['Bytes']>;
  controller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  nativeReputation?: InputMaybe<Scalars['String']>;
  nativeReputation_?: InputMaybe<ReputationContract_Filter>;
  nativeReputation_contains?: InputMaybe<Scalars['String']>;
  nativeReputation_contains_nocase?: InputMaybe<Scalars['String']>;
  nativeReputation_ends_with?: InputMaybe<Scalars['String']>;
  nativeReputation_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nativeReputation_gt?: InputMaybe<Scalars['String']>;
  nativeReputation_gte?: InputMaybe<Scalars['String']>;
  nativeReputation_in?: InputMaybe<Array<Scalars['String']>>;
  nativeReputation_lt?: InputMaybe<Scalars['String']>;
  nativeReputation_lte?: InputMaybe<Scalars['String']>;
  nativeReputation_not?: InputMaybe<Scalars['String']>;
  nativeReputation_not_contains?: InputMaybe<Scalars['String']>;
  nativeReputation_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nativeReputation_not_ends_with?: InputMaybe<Scalars['String']>;
  nativeReputation_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nativeReputation_not_in?: InputMaybe<Array<Scalars['String']>>;
  nativeReputation_not_starts_with?: InputMaybe<Scalars['String']>;
  nativeReputation_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nativeReputation_starts_with?: InputMaybe<Scalars['String']>;
  nativeReputation_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nativeToken?: InputMaybe<Scalars['String']>;
  nativeToken_?: InputMaybe<TokenContract_Filter>;
  nativeToken_contains?: InputMaybe<Scalars['String']>;
  nativeToken_contains_nocase?: InputMaybe<Scalars['String']>;
  nativeToken_ends_with?: InputMaybe<Scalars['String']>;
  nativeToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nativeToken_gt?: InputMaybe<Scalars['String']>;
  nativeToken_gte?: InputMaybe<Scalars['String']>;
  nativeToken_in?: InputMaybe<Array<Scalars['String']>>;
  nativeToken_lt?: InputMaybe<Scalars['String']>;
  nativeToken_lte?: InputMaybe<Scalars['String']>;
  nativeToken_not?: InputMaybe<Scalars['String']>;
  nativeToken_not_contains?: InputMaybe<Scalars['String']>;
  nativeToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nativeToken_not_ends_with?: InputMaybe<Scalars['String']>;
  nativeToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nativeToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  nativeToken_not_starts_with?: InputMaybe<Scalars['String']>;
  nativeToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nativeToken_starts_with?: InputMaybe<Scalars['String']>;
  nativeToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum UControllerOrganization_OrderBy {
  AvatarAddress = 'avatarAddress',
  Controller = 'controller',
  Id = 'id',
  NativeReputation = 'nativeReputation',
  NativeToken = 'nativeToken'
}

export type UControllerRegisterScheme = {
  __typename?: 'UControllerRegisterScheme';
  avatarAddress: Scalars['Bytes'];
  contract: Scalars['Bytes'];
  controller: Scalars['Bytes'];
  id: Scalars['ID'];
  scheme: Scalars['Bytes'];
  txHash: Scalars['Bytes'];
};

export type UControllerRegisterScheme_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  avatarAddress?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_contains?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  avatarAddress_not?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract?: InputMaybe<Scalars['Bytes']>;
  contract_contains?: InputMaybe<Scalars['Bytes']>;
  contract_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract_not?: InputMaybe<Scalars['Bytes']>;
  contract_not_contains?: InputMaybe<Scalars['Bytes']>;
  contract_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  controller?: InputMaybe<Scalars['Bytes']>;
  controller_contains?: InputMaybe<Scalars['Bytes']>;
  controller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  controller_not?: InputMaybe<Scalars['Bytes']>;
  controller_not_contains?: InputMaybe<Scalars['Bytes']>;
  controller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  scheme?: InputMaybe<Scalars['Bytes']>;
  scheme_contains?: InputMaybe<Scalars['Bytes']>;
  scheme_in?: InputMaybe<Array<Scalars['Bytes']>>;
  scheme_not?: InputMaybe<Scalars['Bytes']>;
  scheme_not_contains?: InputMaybe<Scalars['Bytes']>;
  scheme_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum UControllerRegisterScheme_OrderBy {
  AvatarAddress = 'avatarAddress',
  Contract = 'contract',
  Controller = 'controller',
  Id = 'id',
  Scheme = 'scheme',
  TxHash = 'txHash'
}

export type UControllerRemoveGlobalConstraint = {
  __typename?: 'UControllerRemoveGlobalConstraint';
  avatarAddress: Scalars['Bytes'];
  controller: Scalars['Bytes'];
  globalConstraint: Scalars['Bytes'];
  id: Scalars['ID'];
  isPre?: Maybe<Scalars['Boolean']>;
  txHash: Scalars['Bytes'];
};

export type UControllerRemoveGlobalConstraint_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  avatarAddress?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_contains?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  avatarAddress_not?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  controller?: InputMaybe<Scalars['Bytes']>;
  controller_contains?: InputMaybe<Scalars['Bytes']>;
  controller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  controller_not?: InputMaybe<Scalars['Bytes']>;
  controller_not_contains?: InputMaybe<Scalars['Bytes']>;
  controller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  globalConstraint?: InputMaybe<Scalars['Bytes']>;
  globalConstraint_contains?: InputMaybe<Scalars['Bytes']>;
  globalConstraint_in?: InputMaybe<Array<Scalars['Bytes']>>;
  globalConstraint_not?: InputMaybe<Scalars['Bytes']>;
  globalConstraint_not_contains?: InputMaybe<Scalars['Bytes']>;
  globalConstraint_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isPre?: InputMaybe<Scalars['Boolean']>;
  isPre_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isPre_not?: InputMaybe<Scalars['Boolean']>;
  isPre_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum UControllerRemoveGlobalConstraint_OrderBy {
  AvatarAddress = 'avatarAddress',
  Controller = 'controller',
  GlobalConstraint = 'globalConstraint',
  Id = 'id',
  IsPre = 'isPre',
  TxHash = 'txHash'
}

export type UControllerUnregisterScheme = {
  __typename?: 'UControllerUnregisterScheme';
  avatarAddress: Scalars['Bytes'];
  contract: Scalars['Bytes'];
  controller: Scalars['Bytes'];
  id: Scalars['ID'];
  scheme: Scalars['Bytes'];
  txHash: Scalars['Bytes'];
};

export type UControllerUnregisterScheme_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  avatarAddress?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_contains?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  avatarAddress_not?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract?: InputMaybe<Scalars['Bytes']>;
  contract_contains?: InputMaybe<Scalars['Bytes']>;
  contract_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract_not?: InputMaybe<Scalars['Bytes']>;
  contract_not_contains?: InputMaybe<Scalars['Bytes']>;
  contract_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  controller?: InputMaybe<Scalars['Bytes']>;
  controller_contains?: InputMaybe<Scalars['Bytes']>;
  controller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  controller_not?: InputMaybe<Scalars['Bytes']>;
  controller_not_contains?: InputMaybe<Scalars['Bytes']>;
  controller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  scheme?: InputMaybe<Scalars['Bytes']>;
  scheme_contains?: InputMaybe<Scalars['Bytes']>;
  scheme_in?: InputMaybe<Array<Scalars['Bytes']>>;
  scheme_not?: InputMaybe<Scalars['Bytes']>;
  scheme_not_contains?: InputMaybe<Scalars['Bytes']>;
  scheme_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum UControllerUnregisterScheme_OrderBy {
  AvatarAddress = 'avatarAddress',
  Contract = 'contract',
  Controller = 'controller',
  Id = 'id',
  Scheme = 'scheme',
  TxHash = 'txHash'
}

export type UControllerUpgradeController = {
  __typename?: 'UControllerUpgradeController';
  avatarAddress: Scalars['Bytes'];
  controller: Scalars['Bytes'];
  id: Scalars['ID'];
  newController: Scalars['Bytes'];
  txHash: Scalars['Bytes'];
};

export type UControllerUpgradeController_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  avatarAddress?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_contains?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  avatarAddress_not?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  avatarAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  controller?: InputMaybe<Scalars['Bytes']>;
  controller_contains?: InputMaybe<Scalars['Bytes']>;
  controller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  controller_not?: InputMaybe<Scalars['Bytes']>;
  controller_not_contains?: InputMaybe<Scalars['Bytes']>;
  controller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  newController?: InputMaybe<Scalars['Bytes']>;
  newController_contains?: InputMaybe<Scalars['Bytes']>;
  newController_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newController_not?: InputMaybe<Scalars['Bytes']>;
  newController_not_contains?: InputMaybe<Scalars['Bytes']>;
  newController_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum UControllerUpgradeController_OrderBy {
  AvatarAddress = 'avatarAddress',
  Controller = 'controller',
  Id = 'id',
  NewController = 'newController',
  TxHash = 'txHash'
}

export type UGenericSchemeParam = {
  __typename?: 'UGenericSchemeParam';
  contractToCall: Scalars['Bytes'];
  id: Scalars['ID'];
  voteParams: GenesisProtocolParam;
  votingMachine: Scalars['Bytes'];
};

export type UGenericSchemeParam_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  contractToCall?: InputMaybe<Scalars['Bytes']>;
  contractToCall_contains?: InputMaybe<Scalars['Bytes']>;
  contractToCall_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contractToCall_not?: InputMaybe<Scalars['Bytes']>;
  contractToCall_not_contains?: InputMaybe<Scalars['Bytes']>;
  contractToCall_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  voteParams?: InputMaybe<Scalars['String']>;
  voteParams_?: InputMaybe<GenesisProtocolParam_Filter>;
  voteParams_contains?: InputMaybe<Scalars['String']>;
  voteParams_contains_nocase?: InputMaybe<Scalars['String']>;
  voteParams_ends_with?: InputMaybe<Scalars['String']>;
  voteParams_ends_with_nocase?: InputMaybe<Scalars['String']>;
  voteParams_gt?: InputMaybe<Scalars['String']>;
  voteParams_gte?: InputMaybe<Scalars['String']>;
  voteParams_in?: InputMaybe<Array<Scalars['String']>>;
  voteParams_lt?: InputMaybe<Scalars['String']>;
  voteParams_lte?: InputMaybe<Scalars['String']>;
  voteParams_not?: InputMaybe<Scalars['String']>;
  voteParams_not_contains?: InputMaybe<Scalars['String']>;
  voteParams_not_contains_nocase?: InputMaybe<Scalars['String']>;
  voteParams_not_ends_with?: InputMaybe<Scalars['String']>;
  voteParams_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  voteParams_not_in?: InputMaybe<Array<Scalars['String']>>;
  voteParams_not_starts_with?: InputMaybe<Scalars['String']>;
  voteParams_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  voteParams_starts_with?: InputMaybe<Scalars['String']>;
  voteParams_starts_with_nocase?: InputMaybe<Scalars['String']>;
  votingMachine?: InputMaybe<Scalars['Bytes']>;
  votingMachine_contains?: InputMaybe<Scalars['Bytes']>;
  votingMachine_in?: InputMaybe<Array<Scalars['Bytes']>>;
  votingMachine_not?: InputMaybe<Scalars['Bytes']>;
  votingMachine_not_contains?: InputMaybe<Scalars['Bytes']>;
  votingMachine_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum UGenericSchemeParam_OrderBy {
  ContractToCall = 'contractToCall',
  Id = 'id',
  VoteParams = 'voteParams',
  VotingMachine = 'votingMachine'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Timestamp of the block if available, format depends on the chain */
  timestamp?: Maybe<Scalars['String']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type GetProposalVotesSearchFromProposalQueryVariables = Exact<{
  proposalId: Scalars['ID'];
}>;


export type GetProposalVotesSearchFromProposalQuery = { __typename?: 'Query', proposal?: { __typename: 'Proposal', id: string, title?: string | null, votes?: Array<{ __typename: 'ProposalVote', id: string, createdAt: any, voter: any, outcome: Outcome, reputation: any }> | null } | null };

export type VoteFieldsFragment = { __typename: 'ProposalVote', id: string, createdAt: any, voter: any, outcome: Outcome, reputation: any };

export const VoteFieldsFragmentDoc = gql`
    fragment VoteFields on ProposalVote {
  id
  createdAt
  voter
  outcome
  reputation
  __typename
}
    `;
export const GetProposalVotesSearchFromProposalDocument = gql`
    query getProposalVotesSearchFromProposal($proposalId: ID!) {
  proposal(id: $proposalId) {
    id
    title
    votes(orderBy: createdAt, orderDirection: asc) {
      ...VoteFields
    }
    __typename
  }
}
    ${VoteFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getProposalVotesSearchFromProposal(variables: GetProposalVotesSearchFromProposalQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProposalVotesSearchFromProposalQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProposalVotesSearchFromProposalQuery>(GetProposalVotesSearchFromProposalDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProposalVotesSearchFromProposal', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;