/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTodo = /* GraphQL */ `mutation CreateTodo(
  $input: CreateTodoInput!
  $condition: ModelTodoConditionInput
) {
  createTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodoMutationVariables,
  APITypes.CreateTodoMutation
>;
export const updateTodo = /* GraphQL */ `mutation UpdateTodo(
  $input: UpdateTodoInput!
  $condition: ModelTodoConditionInput
) {
  updateTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodoMutationVariables,
  APITypes.UpdateTodoMutation
>;
export const deleteTodo = /* GraphQL */ `mutation DeleteTodo(
  $input: DeleteTodoInput!
  $condition: ModelTodoConditionInput
) {
  deleteTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodoMutationVariables,
  APITypes.DeleteTodoMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    username
    role
    merits
    tasks {
      nextToken
      __typename
    }
    infractions {
      nextToken
      __typename
    }
    logs {
      nextToken
      __typename
    }
    schedules {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    username
    role
    merits
    tasks {
      nextToken
      __typename
    }
    infractions {
      nextToken
      __typename
    }
    logs {
      nextToken
      __typename
    }
    schedules {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    username
    role
    merits
    tasks {
      nextToken
      __typename
    }
    infractions {
      nextToken
      __typename
    }
    logs {
      nextToken
      __typename
    }
    schedules {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createTask = /* GraphQL */ `mutation CreateTask(
  $input: CreateTaskInput!
  $condition: ModelTaskConditionInput
) {
  createTask(input: $input, condition: $condition) {
    id
    title
    description
    userId
    user {
      id
      username
      role
      merits
      createdAt
      updatedAt
      __typename
    }
    dueDate
    completed
    infractionTier
    resetPeriod
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTaskMutationVariables,
  APITypes.CreateTaskMutation
>;
export const updateTask = /* GraphQL */ `mutation UpdateTask(
  $input: UpdateTaskInput!
  $condition: ModelTaskConditionInput
) {
  updateTask(input: $input, condition: $condition) {
    id
    title
    description
    userId
    user {
      id
      username
      role
      merits
      createdAt
      updatedAt
      __typename
    }
    dueDate
    completed
    infractionTier
    resetPeriod
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTaskMutationVariables,
  APITypes.UpdateTaskMutation
>;
export const deleteTask = /* GraphQL */ `mutation DeleteTask(
  $input: DeleteTaskInput!
  $condition: ModelTaskConditionInput
) {
  deleteTask(input: $input, condition: $condition) {
    id
    title
    description
    userId
    user {
      id
      username
      role
      merits
      createdAt
      updatedAt
      __typename
    }
    dueDate
    completed
    infractionTier
    resetPeriod
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTaskMutationVariables,
  APITypes.DeleteTaskMutation
>;
export const createInfraction = /* GraphQL */ `mutation CreateInfraction(
  $input: CreateInfractionInput!
  $condition: ModelInfractionConditionInput
) {
  createInfraction(input: $input, condition: $condition) {
    id
    userId
    user {
      id
      username
      role
      merits
      createdAt
      updatedAt
      __typename
    }
    date
    tier
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateInfractionMutationVariables,
  APITypes.CreateInfractionMutation
>;
export const updateInfraction = /* GraphQL */ `mutation UpdateInfraction(
  $input: UpdateInfractionInput!
  $condition: ModelInfractionConditionInput
) {
  updateInfraction(input: $input, condition: $condition) {
    id
    userId
    user {
      id
      username
      role
      merits
      createdAt
      updatedAt
      __typename
    }
    date
    tier
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateInfractionMutationVariables,
  APITypes.UpdateInfractionMutation
>;
export const deleteInfraction = /* GraphQL */ `mutation DeleteInfraction(
  $input: DeleteInfractionInput!
  $condition: ModelInfractionConditionInput
) {
  deleteInfraction(input: $input, condition: $condition) {
    id
    userId
    user {
      id
      username
      role
      merits
      createdAt
      updatedAt
      __typename
    }
    date
    tier
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteInfractionMutationVariables,
  APITypes.DeleteInfractionMutation
>;
export const createReward = /* GraphQL */ `mutation CreateReward(
  $input: CreateRewardInput!
  $condition: ModelRewardConditionInput
) {
  createReward(input: $input, condition: $condition) {
    id
    title
    cost
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRewardMutationVariables,
  APITypes.CreateRewardMutation
>;
export const updateReward = /* GraphQL */ `mutation UpdateReward(
  $input: UpdateRewardInput!
  $condition: ModelRewardConditionInput
) {
  updateReward(input: $input, condition: $condition) {
    id
    title
    cost
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRewardMutationVariables,
  APITypes.UpdateRewardMutation
>;
export const deleteReward = /* GraphQL */ `mutation DeleteReward(
  $input: DeleteRewardInput!
  $condition: ModelRewardConditionInput
) {
  deleteReward(input: $input, condition: $condition) {
    id
    title
    cost
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRewardMutationVariables,
  APITypes.DeleteRewardMutation
>;
export const createLog = /* GraphQL */ `mutation CreateLog(
  $input: CreateLogInput!
  $condition: ModelLogConditionInput
) {
  createLog(input: $input, condition: $condition) {
    id
    userId
    user {
      id
      username
      role
      merits
      createdAt
      updatedAt
      __typename
    }
    taskId
    action
    timestamp
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLogMutationVariables,
  APITypes.CreateLogMutation
>;
export const updateLog = /* GraphQL */ `mutation UpdateLog(
  $input: UpdateLogInput!
  $condition: ModelLogConditionInput
) {
  updateLog(input: $input, condition: $condition) {
    id
    userId
    user {
      id
      username
      role
      merits
      createdAt
      updatedAt
      __typename
    }
    taskId
    action
    timestamp
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLogMutationVariables,
  APITypes.UpdateLogMutation
>;
export const deleteLog = /* GraphQL */ `mutation DeleteLog(
  $input: DeleteLogInput!
  $condition: ModelLogConditionInput
) {
  deleteLog(input: $input, condition: $condition) {
    id
    userId
    user {
      id
      username
      role
      merits
      createdAt
      updatedAt
      __typename
    }
    taskId
    action
    timestamp
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLogMutationVariables,
  APITypes.DeleteLogMutation
>;
export const createSchedule = /* GraphQL */ `mutation CreateSchedule(
  $input: CreateScheduleInput!
  $condition: ModelScheduleConditionInput
) {
  createSchedule(input: $input, condition: $condition) {
    id
    userId
    user {
      id
      username
      role
      merits
      createdAt
      updatedAt
      __typename
    }
    type
    startDate
    endDate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateScheduleMutationVariables,
  APITypes.CreateScheduleMutation
>;
export const updateSchedule = /* GraphQL */ `mutation UpdateSchedule(
  $input: UpdateScheduleInput!
  $condition: ModelScheduleConditionInput
) {
  updateSchedule(input: $input, condition: $condition) {
    id
    userId
    user {
      id
      username
      role
      merits
      createdAt
      updatedAt
      __typename
    }
    type
    startDate
    endDate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateScheduleMutationVariables,
  APITypes.UpdateScheduleMutation
>;
export const deleteSchedule = /* GraphQL */ `mutation DeleteSchedule(
  $input: DeleteScheduleInput!
  $condition: ModelScheduleConditionInput
) {
  deleteSchedule(input: $input, condition: $condition) {
    id
    userId
    user {
      id
      username
      role
      merits
      createdAt
      updatedAt
      __typename
    }
    type
    startDate
    endDate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteScheduleMutationVariables,
  APITypes.DeleteScheduleMutation
>;
