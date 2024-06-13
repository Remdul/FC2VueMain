<template>
  <div>
    <h2>Tasks</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <p>{{ task.title }}</p>
        <p>{{ task.description }}</p>
        <p>Due: {{ task.dueDate }}</p>
        <p>Status: {{ task.completed ? "Completed" : "Pending" }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { API, graphqlOperation } from 'aws-amplify';
import { listTasks } from '../graphql/queries';

export default defineComponent({
  data() {
    return {
      tasks: []
    }
  },
  async created() {
    const result = await API.graphql(graphqlOperation(listTasks));
    this.tasks = result.data.listTasks.items;
  }
});
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
