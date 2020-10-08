import React from 'react';
import Table from '../components/Table';
import {withKnobs, object} from '@storybook/addon-knobs'

export default {
    title: 'Table component',
    component: Table,
    decorators: [withKnobs]
}

export function TableWithData() {
    const data = [
        {
            name: "aslam",
            course: "islamiyat"
        },
        {
            name: "malsa",
            course: "gender studies"
        },
        {
            name: "slama",
            course: "mathematix"
        }
    ]
    return (
        <Table data={object('data', data)} />
    )
}


export function TableWithoutData() {
    return (
        <Table />
    )
}