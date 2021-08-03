

export interface MyPropsType {
    id: 'A' | 'B' | "C";
    label: string;
}
export interface ConfigElement extends MyPropsType {
component:
    React.ComponentType<MyPropsType>;
}
// React.ComponentType  http://fkn.ktu10.com/?q=node/12738
export interface SomeMainComponentProps {
    elements: ConfigElement[];
}

// отрендерит массив классовых или функциональных компонентов
// render array of functional or class components
export function SomeMainComponent({ elements }: SomeMainComponentProps) {

return (
    <>
    {elements.map(({ id, label, component: ComponentElement}) => {
        return (
        <ComponentElement
            id={id}
            key={Array.isArray(id) ? (id[0] as string) : (id as string)}
            label={label}
        />
        );
    })}
    </>
);
}