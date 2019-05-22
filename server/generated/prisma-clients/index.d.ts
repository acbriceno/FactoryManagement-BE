// Code generated by Prisma (prisma@1.29.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  message: (where?: MessageWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  message: (where: MessageWhereUniqueInput) => MessagePromise;
  messages: (
    args?: {
      where?: MessageWhereInput;
      orderBy?: MessageOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Message>;
  messagesConnection: (
    args?: {
      where?: MessageWhereInput;
      orderBy?: MessageOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => MessageConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createMessage: (data: MessageCreateInput) => MessagePromise;
  updateMessage: (
    args: { data: MessageUpdateInput; where: MessageWhereUniqueInput }
  ) => MessagePromise;
  updateManyMessages: (
    args: { data: MessageUpdateManyMutationInput; where?: MessageWhereInput }
  ) => BatchPayloadPromise;
  upsertMessage: (
    args: {
      where: MessageWhereUniqueInput;
      create: MessageCreateInput;
      update: MessageUpdateInput;
    }
  ) => MessagePromise;
  deleteMessage: (where: MessageWhereUniqueInput) => MessagePromise;
  deleteManyMessages: (where?: MessageWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  message: (
    where?: MessageSubscriptionWhereInput
  ) => MessageSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type Role = "USER" | "ADMIN" | "ADMINVIEW";

export type MessageOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "subject_ASC"
  | "subject_DESC"
  | "body_ASC"
  | "body_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "username_ASC"
  | "username_DESC"
  | "name_ASC"
  | "name_DESC"
  | "password_ASC"
  | "password_DESC"
  | "role_ASC"
  | "role_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserUpdateWithoutOutboxDataInput {
  username?: String;
  name?: String;
  password?: String;
  inbox?: MessageUpdateManyWithoutRecipientsInput;
  role?: Role;
}

export type MessageWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface MessageUpdateWithoutRecipientsDataInput {
  subject?: String;
  body?: String;
  sender?: UserUpdateOneRequiredWithoutOutboxInput;
}

export interface MessageWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  subject?: String;
  subject_not?: String;
  subject_in?: String[] | String;
  subject_not_in?: String[] | String;
  subject_lt?: String;
  subject_lte?: String;
  subject_gt?: String;
  subject_gte?: String;
  subject_contains?: String;
  subject_not_contains?: String;
  subject_starts_with?: String;
  subject_not_starts_with?: String;
  subject_ends_with?: String;
  subject_not_ends_with?: String;
  body?: String;
  body_not?: String;
  body_in?: String[] | String;
  body_not_in?: String[] | String;
  body_lt?: String;
  body_lte?: String;
  body_gt?: String;
  body_gte?: String;
  body_contains?: String;
  body_not_contains?: String;
  body_starts_with?: String;
  body_not_starts_with?: String;
  body_ends_with?: String;
  body_not_ends_with?: String;
  sender?: UserWhereInput;
  recipients_some?: UserWhereInput;
  AND?: MessageWhereInput[] | MessageWhereInput;
}

export interface UserCreateWithoutInboxInput {
  username: String;
  name: String;
  password: String;
  outbox?: MessageCreateManyWithoutSenderInput;
  role?: Role;
}

export interface MessageUpdateWithWhereUniqueWithoutSenderInput {
  where: MessageWhereUniqueInput;
  data: MessageUpdateWithoutSenderDataInput;
}

export interface MessageCreateManyWithoutSenderInput {
  create?: MessageCreateWithoutSenderInput[] | MessageCreateWithoutSenderInput;
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput;
}

export interface MessageUpsertWithWhereUniqueWithoutRecipientsInput {
  where: MessageWhereUniqueInput;
  update: MessageUpdateWithoutRecipientsDataInput;
  create: MessageCreateWithoutRecipientsInput;
}

export interface MessageCreateWithoutSenderInput {
  subject: String;
  body: String;
  recipients?: UserCreateManyWithoutInboxInput;
}

export interface MessageSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: MessageWhereInput;
  AND?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput;
}

export interface MessageUpdateInput {
  subject?: String;
  body?: String;
  sender?: UserUpdateOneRequiredWithoutOutboxInput;
  recipients?: UserUpdateManyWithoutInboxInput;
}

export interface UserUpdateInput {
  username?: String;
  name?: String;
  password?: String;
  inbox?: MessageUpdateManyWithoutRecipientsInput;
  outbox?: MessageUpdateManyWithoutSenderInput;
  role?: Role;
}

export interface UserUpdateOneRequiredWithoutOutboxInput {
  create?: UserCreateWithoutOutboxInput;
  update?: UserUpdateWithoutOutboxDataInput;
  upsert?: UserUpsertWithoutOutboxInput;
  connect?: UserWhereUniqueInput;
}

export interface MessageUpdateManyMutationInput {
  subject?: String;
  body?: String;
}

export interface MessageUpsertWithWhereUniqueWithoutSenderInput {
  where: MessageWhereUniqueInput;
  update: MessageUpdateWithoutSenderDataInput;
  create: MessageCreateWithoutSenderInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  username?: String;
}>;

export interface MessageUpdateManyWithoutRecipientsInput {
  create?:
    | MessageCreateWithoutRecipientsInput[]
    | MessageCreateWithoutRecipientsInput;
  delete?: MessageWhereUniqueInput[] | MessageWhereUniqueInput;
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput;
  set?: MessageWhereUniqueInput[] | MessageWhereUniqueInput;
  disconnect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput;
  update?:
    | MessageUpdateWithWhereUniqueWithoutRecipientsInput[]
    | MessageUpdateWithWhereUniqueWithoutRecipientsInput;
  upsert?:
    | MessageUpsertWithWhereUniqueWithoutRecipientsInput[]
    | MessageUpsertWithWhereUniqueWithoutRecipientsInput;
  deleteMany?: MessageScalarWhereInput[] | MessageScalarWhereInput;
  updateMany?:
    | MessageUpdateManyWithWhereNestedInput[]
    | MessageUpdateManyWithWhereNestedInput;
}

export interface UserScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  username?: String;
  username_not?: String;
  username_in?: String[] | String;
  username_not_in?: String[] | String;
  username_lt?: String;
  username_lte?: String;
  username_gt?: String;
  username_gte?: String;
  username_contains?: String;
  username_not_contains?: String;
  username_starts_with?: String;
  username_not_starts_with?: String;
  username_ends_with?: String;
  username_not_ends_with?: String;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  role?: Role;
  role_not?: Role;
  role_in?: Role[] | Role;
  role_not_in?: Role[] | Role;
  AND?: UserScalarWhereInput[] | UserScalarWhereInput;
  OR?: UserScalarWhereInput[] | UserScalarWhereInput;
  NOT?: UserScalarWhereInput[] | UserScalarWhereInput;
}

export interface MessageUpdateWithWhereUniqueWithoutRecipientsInput {
  where: MessageWhereUniqueInput;
  data: MessageUpdateWithoutRecipientsDataInput;
}

export interface UserCreateOneWithoutOutboxInput {
  create?: UserCreateWithoutOutboxInput;
  connect?: UserWhereUniqueInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  username?: String;
  username_not?: String;
  username_in?: String[] | String;
  username_not_in?: String[] | String;
  username_lt?: String;
  username_lte?: String;
  username_gt?: String;
  username_gte?: String;
  username_contains?: String;
  username_not_contains?: String;
  username_starts_with?: String;
  username_not_starts_with?: String;
  username_ends_with?: String;
  username_not_ends_with?: String;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  inbox_some?: MessageWhereInput;
  outbox_some?: MessageWhereInput;
  role?: Role;
  role_not?: Role;
  role_in?: Role[] | Role;
  role_not_in?: Role[] | Role;
  AND?: UserWhereInput[] | UserWhereInput;
}

export interface MessageCreateManyWithoutRecipientsInput {
  create?:
    | MessageCreateWithoutRecipientsInput[]
    | MessageCreateWithoutRecipientsInput;
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput;
}

export interface MessageUpdateWithoutSenderDataInput {
  subject?: String;
  body?: String;
  recipients?: UserUpdateManyWithoutInboxInput;
}

export interface UserCreateManyWithoutInboxInput {
  create?: UserCreateWithoutInboxInput[] | UserCreateWithoutInboxInput;
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
}

export interface MessageScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  subject?: String;
  subject_not?: String;
  subject_in?: String[] | String;
  subject_not_in?: String[] | String;
  subject_lt?: String;
  subject_lte?: String;
  subject_gt?: String;
  subject_gte?: String;
  subject_contains?: String;
  subject_not_contains?: String;
  subject_starts_with?: String;
  subject_not_starts_with?: String;
  subject_ends_with?: String;
  subject_not_ends_with?: String;
  body?: String;
  body_not?: String;
  body_in?: String[] | String;
  body_not_in?: String[] | String;
  body_lt?: String;
  body_lte?: String;
  body_gt?: String;
  body_gte?: String;
  body_contains?: String;
  body_not_contains?: String;
  body_starts_with?: String;
  body_not_starts_with?: String;
  body_ends_with?: String;
  body_not_ends_with?: String;
  AND?: MessageScalarWhereInput[] | MessageScalarWhereInput;
  OR?: MessageScalarWhereInput[] | MessageScalarWhereInput;
  NOT?: MessageScalarWhereInput[] | MessageScalarWhereInput;
}

export interface UserUpdateManyMutationInput {
  username?: String;
  name?: String;
  password?: String;
  role?: Role;
}

export interface MessageUpdateManyWithWhereNestedInput {
  where: MessageScalarWhereInput;
  data: MessageUpdateManyDataInput;
}

export interface UserUpdateManyDataInput {
  username?: String;
  name?: String;
  password?: String;
  role?: Role;
}

export interface MessageUpdateManyDataInput {
  subject?: String;
  body?: String;
}

export interface UserUpsertWithWhereUniqueWithoutInboxInput {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutInboxDataInput;
  create: UserCreateWithoutInboxInput;
}

export interface UserUpsertWithoutOutboxInput {
  update: UserUpdateWithoutOutboxDataInput;
  create: UserCreateWithoutOutboxInput;
}

export interface UserCreateWithoutOutboxInput {
  username: String;
  name: String;
  password: String;
  inbox?: MessageCreateManyWithoutRecipientsInput;
  role?: Role;
}

export interface MessageUpdateManyWithoutSenderInput {
  create?: MessageCreateWithoutSenderInput[] | MessageCreateWithoutSenderInput;
  delete?: MessageWhereUniqueInput[] | MessageWhereUniqueInput;
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput;
  set?: MessageWhereUniqueInput[] | MessageWhereUniqueInput;
  disconnect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput;
  update?:
    | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    | MessageUpdateWithWhereUniqueWithoutSenderInput;
  upsert?:
    | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    | MessageUpsertWithWhereUniqueWithoutSenderInput;
  deleteMany?: MessageScalarWhereInput[] | MessageScalarWhereInput;
  updateMany?:
    | MessageUpdateManyWithWhereNestedInput[]
    | MessageUpdateManyWithWhereNestedInput;
}

export interface UserUpdateWithoutInboxDataInput {
  username?: String;
  name?: String;
  password?: String;
  outbox?: MessageUpdateManyWithoutSenderInput;
  role?: Role;
}

export interface UserUpdateWithWhereUniqueWithoutInboxInput {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutInboxDataInput;
}

export interface UserUpdateManyWithoutInboxInput {
  create?: UserCreateWithoutInboxInput[] | UserCreateWithoutInboxInput;
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput;
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
  set?: UserWhereUniqueInput[] | UserWhereUniqueInput;
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
  update?:
    | UserUpdateWithWhereUniqueWithoutInboxInput[]
    | UserUpdateWithWhereUniqueWithoutInboxInput;
  upsert?:
    | UserUpsertWithWhereUniqueWithoutInboxInput[]
    | UserUpsertWithWhereUniqueWithoutInboxInput;
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput;
  updateMany?:
    | UserUpdateManyWithWhereNestedInput[]
    | UserUpdateManyWithWhereNestedInput;
}

export interface MessageCreateWithoutRecipientsInput {
  subject: String;
  body: String;
  sender: UserCreateOneWithoutOutboxInput;
}

export interface MessageCreateInput {
  subject: String;
  body: String;
  sender: UserCreateOneWithoutOutboxInput;
  recipients?: UserCreateManyWithoutInboxInput;
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput;
  data: UserUpdateManyDataInput;
}

export interface UserCreateInput {
  username: String;
  name: String;
  password: String;
  inbox?: MessageCreateManyWithoutRecipientsInput;
  outbox?: MessageCreateManyWithoutSenderInput;
  role?: Role;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: ID_Output;
  username: String;
  name: String;
  password: String;
  role: Role;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  username: () => Promise<String>;
  name: () => Promise<String>;
  password: () => Promise<String>;
  role: () => Promise<Role>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  username: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  role: () => Promise<AsyncIterator<Role>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface Message {
  id: ID_Output;
  createdAt: DateTimeOutput;
  subject: String;
  body: String;
}

export interface MessagePromise extends Promise<Message>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  subject: () => Promise<String>;
  body: () => Promise<String>;
  sender: <T = UserPromise>() => T;
  recipients: <T = FragmentableArray<User>>(
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface MessageSubscription
  extends Promise<AsyncIterator<Message>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  subject: () => Promise<AsyncIterator<String>>;
  body: () => Promise<AsyncIterator<String>>;
  sender: <T = UserSubscription>() => T;
  recipients: <T = Promise<AsyncIterator<UserSubscription>>>(
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface User {
  id: ID_Output;
  username: String;
  name: String;
  password: String;
  role: Role;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  username: () => Promise<String>;
  name: () => Promise<String>;
  password: () => Promise<String>;
  inbox: <T = FragmentableArray<Message>>(
    args?: {
      where?: MessageWhereInput;
      orderBy?: MessageOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  outbox: <T = FragmentableArray<Message>>(
    args?: {
      where?: MessageWhereInput;
      orderBy?: MessageOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  role: () => Promise<Role>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  username: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  inbox: <T = Promise<AsyncIterator<MessageSubscription>>>(
    args?: {
      where?: MessageWhereInput;
      orderBy?: MessageOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  outbox: <T = Promise<AsyncIterator<MessageSubscription>>>(
    args?: {
      where?: MessageWhereInput;
      orderBy?: MessageOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  role: () => Promise<AsyncIterator<Role>>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface MessageSubscriptionPayload {
  mutation: MutationType;
  node: Message;
  updatedFields: String[];
  previousValues: MessagePreviousValues;
}

export interface MessageSubscriptionPayloadPromise
  extends Promise<MessageSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = MessagePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = MessagePreviousValuesPromise>() => T;
}

export interface MessageSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<MessageSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = MessageSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = MessagePreviousValuesSubscription>() => T;
}

export interface MessageConnection {
  pageInfo: PageInfo;
  edges: MessageEdge[];
}

export interface MessageConnectionPromise
  extends Promise<MessageConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<MessageEdge>>() => T;
  aggregate: <T = AggregateMessagePromise>() => T;
}

export interface MessageConnectionSubscription
  extends Promise<AsyncIterator<MessageConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<MessageEdgeSubscription>>>() => T;
  aggregate: <T = AggregateMessageSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface MessagePreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  subject: String;
  body: String;
}

export interface MessagePreviousValuesPromise
  extends Promise<MessagePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  subject: () => Promise<String>;
  body: () => Promise<String>;
}

export interface MessagePreviousValuesSubscription
  extends Promise<AsyncIterator<MessagePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  subject: () => Promise<AsyncIterator<String>>;
  body: () => Promise<AsyncIterator<String>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface MessageEdge {
  node: Message;
  cursor: String;
}

export interface MessageEdgePromise extends Promise<MessageEdge>, Fragmentable {
  node: <T = MessagePromise>() => T;
  cursor: () => Promise<String>;
}

export interface MessageEdgeSubscription
  extends Promise<AsyncIterator<MessageEdge>>,
    Fragmentable {
  node: <T = MessageSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateMessage {
  count: Int;
}

export interface AggregateMessagePromise
  extends Promise<AggregateMessage>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateMessageSubscription
  extends Promise<AsyncIterator<AggregateMessage>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Message",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;