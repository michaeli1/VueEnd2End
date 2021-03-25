<template>
  <li class="d-flex align-items-center list-group-item">
    <span :class="{ completed }" @click="$emit('on-toggle')" v-if="!isEditing">{{ description }}</span>
    <form v-else class="flex-grow-1" @submit.prevent="finishEditing()">
      <input
        type="text"
        class="form-control"
        v-model="newTodoDescription"
        @blur="finishEditing()"
        ref="newTodo"
      />
    </form>
    
    <button
      @click="startEditing()"
      class="btn btn-outline-primary border-0 ml-2"
    >
      <span>Edit</span>
    </button>
    <button @click="$emit('on-delete')" id="deleteTodo" class="btn">
      <span>Delete</span>
    </button>
  </li>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false,
      newTodoDescription: ""
    };
  },
  props: {
    description: String,
    completed: Boolean
  },
  methods: {
    startEditing() {
      if (this.isEditing) {
        this.finishEditing();
      } else {
        this.newTodoDescription = this.description;
        this.isEditing = true;
        this.$nextTick(() => this.$refs.newTodo.focus());
      }
    },
    finishEditing() {
      this.isEditing = false;
      this.$emit("on-edit", this.newTodoDescription);
    }
  }
};
</script>

<style lang="css" scoped>
.completed {
  text-decoration: line-through;
}
</style>