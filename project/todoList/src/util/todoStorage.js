const LOCAL_KEY = 'todomvc';

/**
 * 生成一个任务的唯一编号，时间戳 + 4位随机数
 */
export const generateId = () => {
    return Date.now() + Math.random().toString(16).substring(2, 4);
};

/**
 * 获取目前所有的任务
 */
export const fetch = () => {
    const result = localStorage.getItem(LOCAL_KEY);
    if (result) return JSON.parse(result);
    return [];
};

/**
 * 保存所有任务
 * @param {*} todos 任务列表
 */
export const save = (todos) => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
};

/**
 * 筛选列表
 */
export const filter = (todos, visibility) => {
    if (visibility === 'all') {
        return todos;
    } else if (visibility === 'active') {
        return todos.filter((i) => !i.completed);
    } else if (visibility === 'completed') {
        return todos.filter((i) => i.completed);
    }
    throw new Error('invalid visibility value');
};
