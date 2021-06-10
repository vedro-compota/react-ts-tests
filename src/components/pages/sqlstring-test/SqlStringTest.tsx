
import React from "react";
import * as SqlString from 'sqlstring';

export type SqlStringTestPropsType = any;


export const sqlFormat = (sql: string, args?: object | any[], stringifyObjects?: boolean, timeZone?: string) => {
    return SqlString.format(sql, args, stringifyObjects, timeZone).replace(/`/g, '"').replace(/"."/g, '.');
  };

export default function SqlStringTest(props: SqlStringTestPropsType) {

    const searchName = 'someColumn';
    const searchValue = 'ABCDEF';
    const  TableName = 'MyCoolTable';

    const params = [
        {
            name: 'name1',
            value: 'value1',
        },
        {
            name: 'name2',
            value: 'value2',
        },
    ];

    const template = 'SELECT DISTINCT ?? FROM ?? WHERE ?? LIKE ? AND ?? = ? ORDER BY ?? ASC LIMIT 10';
    const query = SqlString.format(template, [
        searchName,
        TableName,
        searchName,
        `${searchValue}%`,
        [params.map((item) => item.name)],
        [params.map((item) => item.value)],
        searchName,
      ]);

    return (
        <>
        <div>TEMPLATE:</div>
        <div><pre>{template}</pre></div>
        <div>QUERY:</div>
        <div><pre>{query}</pre></div>
            
        </> 
    );
}