/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTodo = /* GraphQL */ `subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onCreateTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTodoSubscriptionVariables,
  APITypes.OnCreateTodoSubscription
>;
export const onUpdateTodo = /* GraphQL */ `subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onUpdateTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTodoSubscriptionVariables,
  APITypes.OnUpdateTodoSubscription
>;
export const onDeleteTodo = /* GraphQL */ `subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
  onDeleteTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTodoSubscriptionVariables,
  APITypes.OnDeleteTodoSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateTask = /* GraphQL */ `subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
  onCreateTask(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTaskSubscriptionVariables,
  APITypes.OnCreateTaskSubscription
>;
export const onUpdateTask = /* GraphQL */ `subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
  onUpdateTask(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTaskSubscriptionVariables,
  APITypes.OnUpdateTaskSubscription
>;
export const onDeleteTask = /* GraphQL */ `subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
  onDeleteTask(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTaskSubscriptionVariables,
  APITypes.OnDeleteTaskSubscription
>;
export const onCreateInfraction = /* GraphQL */ `subscription OnCreateInfraction(
  $filter: ModelSubscriptionInfractionFilterInput
) {
  onCreateInfraction(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateInfractionSubscriptionVariables,
  APITypes.OnCreateInfractionSubscription
>;
export const onUpdateInfraction = /* GraphQL */ `subscription OnUpdateInfraction(
  $filter: ModelSubscriptionInfractionFilterInput
) {
  onUpdateInfraction(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateInfractionSubscriptionVariables,
  APITypes.OnUpdateInfractionSubscription
>;
export const onDeleteInfraction = /* GraphQL */ `subscription OnDeleteInfraction(
  $filter: ModelSubscriptionInfractionFilterInput
) {
  onDeleteInfraction(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteInfractionSubscriptionVariables,
  APITypes.OnDeleteInfractionSubscription
>;
export const onCreateReward = /* GraphQL */ `subscription OnCreateReward($filter: ModelSubscriptionRewardFilterInput) {
  onCreateReward(filter: $filter) {
    id
    title
    cost
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateRewardSubscriptionVariables,
  APITypes.OnCreateRewardSubscription
>;
export const onUpdateReward = /* GraphQL */ `subscription OnUpdateReward($filter: ModelSubscriptionRewardFilterInput) {
  onUpdateReward(filter: $filter) {
    id
    title
    cost
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateRewardSubscriptionVariables,
  APITypes.OnUpdateRewardSubscription
>;
export const onDeleteReward = /* GraphQL */ `subscription OnDeleteReward($filter: ModelSubscriptionRewardFilterInput) {
  onDeleteReward(filter: $filter) {
    id
    title
    cost
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteRewardSubscriptionVariables,
  APITypes.OnDeleteRewardSubscription
>;
export const onCreateLog = /* GraphQL */ `subscription OnCreateLog($filter: ModelSubscriptionLogFilterInput) {
  onCreateLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLogSubscriptionVariables,
  APITypes.OnCreateLogSubscription
>;
export const onUpdateLog = /* GraphQL */ `subscription OnUpdateLog($filter: ModelSubscriptionLogFilterInput) {
  onUpdateLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLogSubscriptionVariables,
  APITypes.OnUpdateLogSubscription
>;
export const onDeleteLog = /* GraphQL */ `subscription OnDeleteLog($filter: ModelSubscriptionLogFilterInput) {
  onDeleteLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLogSubscriptionVariables,
  APITypes.OnDeleteLogSubscription
>;
export const onCreateSchedule = /* GraphQL */ `subscription OnCreateSchedule($filter: ModelSubscriptionScheduleFilterInput) {
  onCreateSchedule(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateScheduleSubscriptionVariables,
  APITypes.OnCreateScheduleSubscription
>;
export const onUpdateSchedule = /* GraphQL */ `subscription OnUpdateSchedule($filter: ModelSubscriptionScheduleFilterInput) {
  onUpdateSchedule(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateScheduleSubscriptionVariables,
  APITypes.OnUpdateScheduleSubscription
>;
export const onDeleteSchedule = /* GraphQL */ `subscription OnDeleteSchedule($filter: ModelSubscriptionScheduleFilterInput) {
  onDeleteSchedule(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteScheduleSubscriptionVariables,
  APITypes.OnDeleteScheduleSubscription
>;
