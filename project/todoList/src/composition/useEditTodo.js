import { ref, computed } from 'vue';

export const useEditTodo = (todosRef) => {
    const editingTodoRef = ref(null); // 当前正在修改的是哪一个todo
    let originTitle = null; // 缓存之前的title值

    // 正在修改
    const editTodo = (todo) => {
        originTitle = todo.title;
        editingTodoRef.value = todo;
    };

    // 完成修改
    const doneEdit = () => {
        editingTodoRef.value = null;
    };

    // 取消编辑
    const cancelEdit = (todo) => {
        editingTodoRef.value = null;
        todo.title = originTitle;
    };

    // 全选
    const allDoneRef = computed(() => {
        return todosRef.value.filter((i) => !i.completed).length === 0;
    });

    // Vue3的computed只能使用get()，这个函数作为set()的补充
    const setAllChecked = (checked) => {
        todosRef.value.forEach((todo) => {
            todo.completed = checked;
        });
    };

    return { editingTodoRef, editTodo, doneEdit, cancelEdit, allDoneRef, setAllChecked };
};
