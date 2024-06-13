/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  username: string,
  role: string,
  merits: number,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  role?: ModelStringInput | null,
  merits?: ModelIntInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  role: string,
  merits: number,
  tasks?: ModelTaskConnection | null,
  infractions?: ModelInfractionConnection | null,
  logs?: ModelLogConnection | null,
  schedules?: ModelScheduleConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelTaskConnection = {
  __typename: "ModelTaskConnection",
  items:  Array<Task | null >,
  nextToken?: string | null,
};

export type Task = {
  __typename: "Task",
  id: string,
  title: string,
  description?: string | null,
  userId: string,
  user?: User | null,
  dueDate?: string | null,
  completed?: boolean | null,
  infractionTier?: number | null,
  resetPeriod?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelInfractionConnection = {
  __typename: "ModelInfractionConnection",
  items:  Array<Infraction | null >,
  nextToken?: string | null,
};

export type Infraction = {
  __typename: "Infraction",
  id: string,
  userId: string,
  user?: User | null,
  date?: string | null,
  tier?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelLogConnection = {
  __typename: "ModelLogConnection",
  items:  Array<Log | null >,
  nextToken?: string | null,
};

export type Log = {
  __typename: "Log",
  id: string,
  userId: string,
  user?: User | null,
  taskId: string,
  action: string,
  timestamp: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelScheduleConnection = {
  __typename: "ModelScheduleConnection",
  items:  Array<Schedule | null >,
  nextToken?: string | null,
};

export type Schedule = {
  __typename: "Schedule",
  id: string,
  userId: string,
  user?: User | null,
  type: string,
  startDate: string,
  endDate: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  role?: string | null,
  merits?: number | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateTaskInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  userId: string,
  dueDate?: string | null,
  completed?: boolean | null,
  infractionTier?: number | null,
  resetPeriod?: string | null,
};

export type ModelTaskConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  dueDate?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  infractionTier?: ModelIntInput | null,
  resetPeriod?: ModelStringInput | null,
  and?: Array< ModelTaskConditionInput | null > | null,
  or?: Array< ModelTaskConditionInput | null > | null,
  not?: ModelTaskConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateTaskInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  userId?: string | null,
  dueDate?: string | null,
  completed?: boolean | null,
  infractionTier?: number | null,
  resetPeriod?: string | null,
};

export type DeleteTaskInput = {
  id: string,
};

export type CreateInfractionInput = {
  id?: string | null,
  userId: string,
  date?: string | null,
  tier?: number | null,
};

export type ModelInfractionConditionInput = {
  userId?: ModelIDInput | null,
  date?: ModelStringInput | null,
  tier?: ModelIntInput | null,
  and?: Array< ModelInfractionConditionInput | null > | null,
  or?: Array< ModelInfractionConditionInput | null > | null,
  not?: ModelInfractionConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateInfractionInput = {
  id: string,
  userId?: string | null,
  date?: string | null,
  tier?: number | null,
};

export type DeleteInfractionInput = {
  id: string,
};

export type CreateRewardInput = {
  id?: string | null,
  title: string,
  cost: number,
};

export type ModelRewardConditionInput = {
  title?: ModelStringInput | null,
  cost?: ModelIntInput | null,
  and?: Array< ModelRewardConditionInput | null > | null,
  or?: Array< ModelRewardConditionInput | null > | null,
  not?: ModelRewardConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Reward = {
  __typename: "Reward",
  id: string,
  title: string,
  cost: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateRewardInput = {
  id: string,
  title?: string | null,
  cost?: number | null,
};

export type DeleteRewardInput = {
  id: string,
};

export type CreateLogInput = {
  id?: string | null,
  userId: string,
  taskId: string,
  action: string,
  timestamp: string,
};

export type ModelLogConditionInput = {
  userId?: ModelIDInput | null,
  taskId?: ModelIDInput | null,
  action?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelLogConditionInput | null > | null,
  or?: Array< ModelLogConditionInput | null > | null,
  not?: ModelLogConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateLogInput = {
  id: string,
  userId?: string | null,
  taskId?: string | null,
  action?: string | null,
  timestamp?: string | null,
};

export type DeleteLogInput = {
  id: string,
};

export type CreateScheduleInput = {
  id?: string | null,
  userId: string,
  type: string,
  startDate: string,
  endDate: string,
};

export type ModelScheduleConditionInput = {
  userId?: ModelIDInput | null,
  type?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  and?: Array< ModelScheduleConditionInput | null > | null,
  or?: Array< ModelScheduleConditionInput | null > | null,
  not?: ModelScheduleConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateScheduleInput = {
  id: string,
  userId?: string | null,
  type?: string | null,
  startDate?: string | null,
  endDate?: string | null,
};

export type DeleteScheduleInput = {
  id: string,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  role?: ModelStringInput | null,
  merits?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelTaskFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  dueDate?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  infractionTier?: ModelIntInput | null,
  resetPeriod?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTaskFilterInput | null > | null,
  or?: Array< ModelTaskFilterInput | null > | null,
  not?: ModelTaskFilterInput | null,
};

export type ModelInfractionFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  date?: ModelStringInput | null,
  tier?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelInfractionFilterInput | null > | null,
  or?: Array< ModelInfractionFilterInput | null > | null,
  not?: ModelInfractionFilterInput | null,
};

export type ModelRewardFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  cost?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRewardFilterInput | null > | null,
  or?: Array< ModelRewardFilterInput | null > | null,
  not?: ModelRewardFilterInput | null,
};

export type ModelRewardConnection = {
  __typename: "ModelRewardConnection",
  items:  Array<Reward | null >,
  nextToken?: string | null,
};

export type ModelLogFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  taskId?: ModelIDInput | null,
  action?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelLogFilterInput | null > | null,
  or?: Array< ModelLogFilterInput | null > | null,
  not?: ModelLogFilterInput | null,
};

export type ModelScheduleFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  type?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelScheduleFilterInput | null > | null,
  or?: Array< ModelScheduleFilterInput | null > | null,
  not?: ModelScheduleFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  merits?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionTaskFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
  dueDate?: ModelSubscriptionStringInput | null,
  completed?: ModelSubscriptionBooleanInput | null,
  infractionTier?: ModelSubscriptionIntInput | null,
  resetPeriod?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTaskFilterInput | null > | null,
  or?: Array< ModelSubscriptionTaskFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionInfractionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  tier?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionInfractionFilterInput | null > | null,
  or?: Array< ModelSubscriptionInfractionFilterInput | null > | null,
};

export type ModelSubscriptionRewardFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  cost?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRewardFilterInput | null > | null,
  or?: Array< ModelSubscriptionRewardFilterInput | null > | null,
};

export type ModelSubscriptionLogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  taskId?: ModelSubscriptionIDInput | null,
  action?: ModelSubscriptionStringInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLogFilterInput | null > | null,
  or?: Array< ModelSubscriptionLogFilterInput | null > | null,
};

export type ModelSubscriptionScheduleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  endDate?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionScheduleFilterInput | null > | null,
  or?: Array< ModelSubscriptionScheduleFilterInput | null > | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    role: string,
    merits: number,
    tasks?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
    } | null,
    infractions?:  {
      __typename: "ModelInfractionConnection",
      nextToken?: string | null,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    schedules?:  {
      __typename: "ModelScheduleConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    role: string,
    merits: number,
    tasks?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
    } | null,
    infractions?:  {
      __typename: "ModelInfractionConnection",
      nextToken?: string | null,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    schedules?:  {
      __typename: "ModelScheduleConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    role: string,
    merits: number,
    tasks?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
    } | null,
    infractions?:  {
      __typename: "ModelInfractionConnection",
      nextToken?: string | null,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    schedules?:  {
      __typename: "ModelScheduleConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTaskMutationVariables = {
  input: CreateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type CreateTaskMutation = {
  createTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      role: string,
      merits: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    dueDate?: string | null,
    completed?: boolean | null,
    infractionTier?: number | null,
    resetPeriod?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTaskMutationVariables = {
  input: UpdateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type UpdateTaskMutation = {
  updateTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      role: string,
      merits: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    dueDate?: string | null,
    completed?: boolean | null,
    infractionTier?: number | null,
    resetPeriod?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTaskMutationVariables = {
  input: DeleteTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type DeleteTaskMutation = {
  deleteTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      role: string,
      merits: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    dueDate?: string | null,
    completed?: boolean | null,
    infractionTier?: number | null,
    resetPeriod?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateInfractionMutationVariables = {
  input: CreateInfractionInput,
  condition?: ModelInfractionConditionInput | null,
};

export type CreateInfractionMutation = {
  createInfraction?:  {
    __typename: "Infraction",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      role: string,
      merits: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    date?: string | null,
    tier?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateInfractionMutationVariables = {
  input: UpdateInfractionInput,
  condition?: ModelInfractionConditionInput | null,
};

export type UpdateInfractionMutation = {
  updateInfraction?:  {
    __typename: "Infraction",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      role: string,
      merits: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    date?: string | null,
    tier?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteInfractionMutationVariables = {
  input: DeleteInfractionInput,
  condition?: ModelInfractionConditionInput | null,
};

export type DeleteInfractionMutation = {
  deleteInfraction?:  {
    __typename: "Infraction",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      role: string,
      merits: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    date?: string | null,
    tier?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRewardMutationVariables = {
  input: CreateRewardInput,
  condition?: ModelRewardConditionInput | null,
};

export type CreateRewardMutation = {
  createReward?:  {
    __typename: "Reward",
    id: string,
    title: string,
    cost: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRewardMutationVariables = {
  input: UpdateRewardInput,
  condition?: ModelRewardConditionInput | null,
};

export type UpdateRewardMutation = {
  updateReward?:  {
    __typename: "Reward",
    id: string,
    title: string,
    cost: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRewardMutationVariables = {
  input: DeleteRewardInput,
  condition?: ModelRewardConditionInput | null,
};

export type DeleteRewardMutation = {
  deleteReward?:  {
    __typename: "Reward",
    id: string,
    title: string,
    cost: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLogMutationVariables = {
  input: CreateLogInput,
  condition?: ModelLogConditionInput | null,
};

export type CreateLogMutation = {
  createLog?:  {
    __typename: "Log",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      role: string,
      merits: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    taskId: string,
    action: string,
    timestamp: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLogMutationVariables = {
  input: UpdateLogInput,
  condition?: ModelLogConditionInput | null,
};

export type UpdateLogMutation = {
  updateLog?:  {
    __typename: "Log",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      role: string,
      merits: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    taskId: string,
    action: string,
    timestamp: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLogMutationVariables = {
  input: DeleteLogInput,
  condition?: ModelLogConditionInput | null,
};

export type DeleteLogMutation = {
  deleteLog?:  {
    __typename: "Log",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      role: string,
      merits: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    taskId: string,
    action: string,
    timestamp: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateScheduleMutationVariables = {
  input: CreateScheduleInput,
  condition?: ModelScheduleConditionInput | null,
};

export type CreateScheduleMutation = {
  createSchedule?:  {
    __typename: "Schedule",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      role: string,
      merits: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    type: string,
    startDate: string,
    endDate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateScheduleMutationVariables = {
  input: UpdateScheduleInput,
  condition?: ModelScheduleConditionInput | null,
};

export type UpdateScheduleMutation = {
  updateSchedule?:  {
    __typename: "Schedule",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      role: string,
      merits: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    type: string,
    startDate: string,
    endDate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteScheduleMutationVariables = {
  input: DeleteScheduleInput,
  condition?: ModelScheduleConditionInput | null,
};

export type DeleteScheduleMutation = {
  deleteSchedule?:  {
    __typename: "Schedule",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      role: string,
      merits: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    type: string,
    startDate: string,
    endDate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    role: string,
    merits: number,
    tasks?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
    } | null,
    infractions?:  {
      __typename: "ModelInfractionConnection",
      nextToken?: string | null,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    schedules?:  {
      __typename: "ModelScheduleConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      role: string,
      merits: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTaskQueryVariables = {
  id: string,
};

export type GetTaskQuery = {
  getTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      role: string,
      merits: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    dueDate?: string | null,
    completed?: boolean | null,
    infractionTier?: number | null,
    resetPeriod?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTasksQuery = {
  listTasks?:  {
    __typename: "ModelTaskConnection",
    items:  Array< {
      __typename: "Task",
      id: string,
      title: string,
      description?: string | null,
      userId: string,
      dueDate?: string | null,
      completed?: boolean | null,
      infractionTier?: number | null,
      resetPeriod?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetInfractionQueryVariables = {
  id: string,
};

export type GetInfractionQuery = {
  getInfraction?:  {
    __typename: "Infraction",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      role: string,
      merits: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    date?: string | null,
    tier?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListInfractionsQueryVariables = {
  filter?: ModelInfractionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInfractionsQuery = {
  listInfractions?:  {
    __typename: "ModelInfractionConnection",
    items:  Array< {
      __typename: "Infraction",
      id: string,
      userId: string,
      date?: string | null,
      tier?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRewardQueryVariables = {
  id: string,
};

export type GetRewardQuery = {
  getReward?:  {
    __typename: "Reward",
    id: string,
    title: string,
    cost: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRewardsQueryVariables = {
  filter?: ModelRewardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRewardsQuery = {
  listRewards?:  {
    __typename: "ModelRewardConnection",
    items:  Array< {
      __typename: "Reward",
      id: string,
      title: string,
      cost: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLogQueryVariables = {
  id: string,
};

export type GetLogQuery = {
  getLog?:  {
    __typename: "Log",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      role: string,
      merits: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    taskId: string,
    action: string,
    timestamp: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLogsQueryVariables = {
  filter?: ModelLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLogsQuery = {
  listLogs?:  {
    __typename: "ModelLogConnection",
    items:  Array< {
      __typename: "Log",
      id: string,
      userId: string,
      taskId: string,
      action: string,
      timestamp: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetScheduleQueryVariables = {
  id: string,
};

export type GetScheduleQuery = {
  getSchedule?:  {
    __typename: "Schedule",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      role: string,
      merits: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    type: string,
    startDate: string,
    endDate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSchedulesQueryVariables = {
  filter?: ModelScheduleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSchedulesQuery = {
  listSchedules?:  {
    __typename: "ModelScheduleConnection",
    items:  Array< {
      __typename: "Schedule",
      id: string,
      userId: string,
      type: string,
      startDate: string,
      endDate: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TasksByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TasksByUserIdQuery = {
  tasksByUserId?:  {
    __typename: "ModelTaskConnection",
    items:  Array< {
      __typename: "Task",
      id: string,
      title: string,
      description?: string | null,
      userId: string,
      dueDate?: string | null,
      completed?: boolean | null,
      infractionTier?: number | null,
      resetPeriod?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type InfractionsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelInfractionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type InfractionsByUserIdQuery = {
  infractionsByUserId?:  {
    __typename: "ModelInfractionConnection",
    items:  Array< {
      __typename: "Infraction",
      id: string,
      userId: string,
      date?: string | null,
      tier?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type LogsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LogsByUserIdQuery = {
  logsByUserId?:  {
    __typename: "ModelLogConnection",
    items:  Array< {
      __typename: "Log",
      id: string,
      userId: string,
      taskId: string,
      action: string,
      timestamp: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type LogsByTaskIdQueryVariables = {
  taskId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LogsByTaskIdQuery = {
  logsByTaskId?:  {
    __typename: "ModelLogConnection",
    items:  Array< {
      __typename: "Log",
      id: string,
      userId: string,
      taskId: string,
      action: string,
      timestamp: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SchedulesByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelScheduleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SchedulesByUserIdQuery = {
  schedulesByUserId?:  {
    __typename: "ModelScheduleConnection",
    items:  Array< {
      __typename: "Schedule",
      id: string,
      userId: string,
      type: string,
      startDate: string,
      endDate: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    role: string,
    merits: number,
    tasks?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
    } | null,
    infractions?:  {
      __typename: "ModelInfractionConnection",
      nextToken?: string | null,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    schedules?:  {
      __typename: "ModelScheduleConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    role: string,
    merits: number,
    tasks?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
    } | null,
    infractions?:  {
      __typename: "ModelInfractionConnection",
      nextToken?: string | null,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    schedules?:  {
      __typename: "ModelScheduleConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    role: string,
    merits: number,
    tasks?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
    } | null,
    infractions?:  {
      __typename: "ModelInfractionConnection",
      nextToken?: string | null,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    schedules?:  {
      __typename: "ModelScheduleConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnCreateTaskSubscription = {
  onCreateTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      role: string,
      merits: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    dueDate?: string | null,
    completed?: boolean | null,
    infractionTier?: number | null,
    resetPeriod?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnUpdateTaskSubscription = {
  onUpdateTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      role: string,
      merits: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    dueDate?: string | null,
    completed?: boolean | null,
    infractionTier?: number | null,
    resetPeriod?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnDeleteTaskSubscription = {
  onDeleteTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      role: string,
      merits: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    dueDate?: string | null,
    completed?: boolean | null,
    infractionTier?: number | null,
    resetPeriod?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateInfractionSubscriptionVariables = {
  filter?: ModelSubscriptionInfractionFilterInput | null,
};

export type OnCreateInfractionSubscription = {
  onCreateInfraction?:  {
    __typename: "Infraction",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      role: string,
      merits: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    date?: string | null,
    tier?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateInfractionSubscriptionVariables = {
  filter?: ModelSubscriptionInfractionFilterInput | null,
};

export type OnUpdateInfractionSubscription = {
  onUpdateInfraction?:  {
    __typename: "Infraction",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      role: string,
      merits: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    date?: string | null,
    tier?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteInfractionSubscriptionVariables = {
  filter?: ModelSubscriptionInfractionFilterInput | null,
};

export type OnDeleteInfractionSubscription = {
  onDeleteInfraction?:  {
    __typename: "Infraction",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      role: string,
      merits: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    date?: string | null,
    tier?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRewardSubscriptionVariables = {
  filter?: ModelSubscriptionRewardFilterInput | null,
};

export type OnCreateRewardSubscription = {
  onCreateReward?:  {
    __typename: "Reward",
    id: string,
    title: string,
    cost: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRewardSubscriptionVariables = {
  filter?: ModelSubscriptionRewardFilterInput | null,
};

export type OnUpdateRewardSubscription = {
  onUpdateReward?:  {
    __typename: "Reward",
    id: string,
    title: string,
    cost: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRewardSubscriptionVariables = {
  filter?: ModelSubscriptionRewardFilterInput | null,
};

export type OnDeleteRewardSubscription = {
  onDeleteReward?:  {
    __typename: "Reward",
    id: string,
    title: string,
    cost: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLogSubscriptionVariables = {
  filter?: ModelSubscriptionLogFilterInput | null,
};

export type OnCreateLogSubscription = {
  onCreateLog?:  {
    __typename: "Log",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      role: string,
      merits: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    taskId: string,
    action: string,
    timestamp: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLogSubscriptionVariables = {
  filter?: ModelSubscriptionLogFilterInput | null,
};

export type OnUpdateLogSubscription = {
  onUpdateLog?:  {
    __typename: "Log",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      role: string,
      merits: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    taskId: string,
    action: string,
    timestamp: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLogSubscriptionVariables = {
  filter?: ModelSubscriptionLogFilterInput | null,
};

export type OnDeleteLogSubscription = {
  onDeleteLog?:  {
    __typename: "Log",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      role: string,
      merits: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    taskId: string,
    action: string,
    timestamp: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateScheduleSubscriptionVariables = {
  filter?: ModelSubscriptionScheduleFilterInput | null,
};

export type OnCreateScheduleSubscription = {
  onCreateSchedule?:  {
    __typename: "Schedule",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      role: string,
      merits: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    type: string,
    startDate: string,
    endDate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateScheduleSubscriptionVariables = {
  filter?: ModelSubscriptionScheduleFilterInput | null,
};

export type OnUpdateScheduleSubscription = {
  onUpdateSchedule?:  {
    __typename: "Schedule",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      role: string,
      merits: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    type: string,
    startDate: string,
    endDate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteScheduleSubscriptionVariables = {
  filter?: ModelSubscriptionScheduleFilterInput | null,
};

export type OnDeleteScheduleSubscription = {
  onDeleteSchedule?:  {
    __typename: "Schedule",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      role: string,
      merits: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    type: string,
    startDate: string,
    endDate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
