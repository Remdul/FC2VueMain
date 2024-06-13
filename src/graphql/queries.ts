/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTodo = /* GraphQL */ `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTodoQueryVariables, APITypes.GetTodoQuery>;
export const listTodos = /* GraphQL */ `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      role
      merits
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getTask = /* GraphQL */ `query GetTask($id: ID!) {
  getTask(id: $id) {
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
` as GeneratedQuery<APITypes.GetTaskQueryVariables, APITypes.GetTaskQuery>;
export const listTasks = /* GraphQL */ `query ListTasks(
  $filter: ModelTaskFilterInput
  $limit: Int
  $nextToken: String
) {
  listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      userId
      dueDate
      completed
      infractionTier
      resetPeriod
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTasksQueryVariables, APITypes.ListTasksQuery>;
export const getInfraction = /* GraphQL */ `query GetInfraction($id: ID!) {
  getInfraction(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetInfractionQueryVariables,
  APITypes.GetInfractionQuery
>;
export const listInfractions = /* GraphQL */ `query ListInfractions(
  $filter: ModelInfractionFilterInput
  $limit: Int
  $nextToken: String
) {
  listInfractions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      date
      tier
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInfractionsQueryVariables,
  APITypes.ListInfractionsQuery
>;
export const getReward = /* GraphQL */ `query GetReward($id: ID!) {
  getReward(id: $id) {
    id
    title
    cost
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetRewardQueryVariables, APITypes.GetRewardQuery>;
export const listRewards = /* GraphQL */ `query ListRewards(
  $filter: ModelRewardFilterInput
  $limit: Int
  $nextToken: String
) {
  listRewards(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      cost
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRewardsQueryVariables,
  APITypes.ListRewardsQuery
>;
export const getLog = /* GraphQL */ `query GetLog($id: ID!) {
  getLog(id: $id) {
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
` as GeneratedQuery<APITypes.GetLogQueryVariables, APITypes.GetLogQuery>;
export const listLogs = /* GraphQL */ `query ListLogs($filter: ModelLogFilterInput, $limit: Int, $nextToken: String) {
  listLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      taskId
      action
      timestamp
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListLogsQueryVariables, APITypes.ListLogsQuery>;
export const getSchedule = /* GraphQL */ `query GetSchedule($id: ID!) {
  getSchedule(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetScheduleQueryVariables,
  APITypes.GetScheduleQuery
>;
export const listSchedules = /* GraphQL */ `query ListSchedules(
  $filter: ModelScheduleFilterInput
  $limit: Int
  $nextToken: String
) {
  listSchedules(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      type
      startDate
      endDate
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSchedulesQueryVariables,
  APITypes.ListSchedulesQuery
>;
export const tasksByUserId = /* GraphQL */ `query TasksByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelTaskFilterInput
  $limit: Int
  $nextToken: String
) {
  tasksByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      description
      userId
      dueDate
      completed
      infractionTier
      resetPeriod
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TasksByUserIdQueryVariables,
  APITypes.TasksByUserIdQuery
>;
export const infractionsByUserId = /* GraphQL */ `query InfractionsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelInfractionFilterInput
  $limit: Int
  $nextToken: String
) {
  infractionsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      date
      tier
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.InfractionsByUserIdQueryVariables,
  APITypes.InfractionsByUserIdQuery
>;
export const logsByUserId = /* GraphQL */ `query LogsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLogFilterInput
  $limit: Int
  $nextToken: String
) {
  logsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      taskId
      action
      timestamp
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LogsByUserIdQueryVariables,
  APITypes.LogsByUserIdQuery
>;
export const logsByTaskId = /* GraphQL */ `query LogsByTaskId(
  $taskId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLogFilterInput
  $limit: Int
  $nextToken: String
) {
  logsByTaskId(
    taskId: $taskId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      taskId
      action
      timestamp
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LogsByTaskIdQueryVariables,
  APITypes.LogsByTaskIdQuery
>;
export const schedulesByUserId = /* GraphQL */ `query SchedulesByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelScheduleFilterInput
  $limit: Int
  $nextToken: String
) {
  schedulesByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      type
      startDate
      endDate
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SchedulesByUserIdQueryVariables,
  APITypes.SchedulesByUserIdQuery
>;
