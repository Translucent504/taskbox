import React from 'react'
import TaskList from "../components/TaskList";
import * as TaskStories from './Task.stories';


export default {
    title: 'TaskList',
    component: TaskList,
    decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>]
}

const Template = args => <TaskList {...args} />

export const Default = Template.bind({})
Default.args = {
    tasks: [
        { ...TaskStories.Default.args, id: '1', title: 'Task 1' },
        { ...TaskStories.Default.args, id: '2', title: 'Task 2' },
        { ...TaskStories.Default.args, id: '3', title: 'Task 3' },
        { ...TaskStories.Default.args, id: '4', title: 'Task 4' },
        { ...TaskStories.Default.args, id: '5', title: 'Task 5' },
        { ...TaskStories.Default.args, id: '6', title: 'Task 6' }
    ]
}

export const WithPinnedTasks = Template.bind({})
WithPinnedTasks.args = {
    tasks: [
        ...Default.args.slice(0, 5),
        { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' }
    ]
}

export const Loading = Template.bind({})
Loading.args = {
    tasks: [],
    loading: true
}


export const Empty = Template.bind({})
Empty.args = {
    ...Loading.args,
    loading: false
}