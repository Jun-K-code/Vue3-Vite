<template>
    <div id="app">
        <section class="todoapp">
            <header class="header">
                <h1>todos</h1>
                <input
                    class="new-todo"
                    autofocus=""
                    autocomplete="off"
                    placeholder="What needs to be done?"
                    v-model="newTodoRef"
                    @keyup.enter="addTodo"
                />
            </header>
            <section class="main" v-show="todosRef.length > 0">
                <input
                    id="toggle-all"
                    class="toggle-all"
                    type="checkbox"
                    :checked="allDoneRef"
                    @input="($event) => setAllChecked($event.target.checked)"
                />
                <label for="toggle-all">Mark all as complete</label>
                <ul class="todo-list">
                    <li
                        class="todo"
                        :class="{ completed: todo.completed, editing: todo === editingTodoRef }"
                        v-for="(todo, index) in filteredTodosRef"
                        :key="todo.id"
                    >
                        <div class="view">
                            <input class="toggle" type="checkbox" v-model="todo.completed" />
                            <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
                            <button class="destroy" @click="remove(todo)"></button>
                        </div>
                        <input
                            class="edit"
                            type="text"
                            v-model="todo.title"
                            @blur="doneEdit(todo)"
                            @keyup.enter="doneEdit"
                            @keyup.escape="cancelEdit(todo)"
                        />
                    </li>
                </ul>
            </section>
            <footer class="footer" v-show="todosRef.length > 0">
                <span class="todo-count">
                    <strong>{{ remainingRef }}</strong>
                    <span>item{{ remainingRef === 1 ? '' : 's' }} left</span>
                </span>
                <ul class="filters">
                    <li><a href="#/all" :class="{ selected: visibilityRef === 'all' }">All</a></li>
                    <li>
                        <a href="#/active" :class="{ selected: visibilityRef === 'active' }"
                            >Active</a
                        >
                    </li>
                    <li>
                        <a href="#/completed" :class="{ selected: visibilityRef === 'completed' }"
                            >Completed</a
                        >
                    </li>
                </ul>
                <button class="clear-completed" v-show="completedRef > 0" @click="removeCompleted">
                    Clear completed
                </button>
            </footer>
        </section>
    </div>
</template>

<script setup>
import { useTodoList } from '../src/composition/useTodoList';
import { useNewTodo } from '../src/composition/useNewTodo';
import { useFilter } from '../src/composition/useFilter';
import { useEditTodo } from '../src/composition/useEditTodo';
import { useRemoveTodo } from '../src/composition/useRemoveTodo';

const { todosRef } = useTodoList();
const { newTodoRef, addTodo } = useNewTodo(todosRef);
const { visibilityRef, filteredTodosRef, remainingRef, completedRef } = useFilter(todosRef);
const { editingTodoRef, editTodo, doneEdit, cancelEdit, allDoneRef, setAllChecked } =
    useEditTodo(todosRef);
const { remove, removeCompleted } = useRemoveTodo(todosRef);
</script>
