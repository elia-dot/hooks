## Hooks

- useArray
- useHover
- useTitle
- useToggle
- useWidth

### Usage

#### useArray

> Hook to simplify array manipulation

```
import {useArray} from 'elia-dot-hooks';

const Example = () => {
    const { array, push, filter, update, remove, removeById, modifyById, clear } =
    useArray([
      { name: 'john doe', age: 28, id: 0 },
      { name: 'jane doe', age: 29, id: 1 }
    ]);

    return (
       {array.map((person) => (
        <div key={person.id}>
          name: {person.name}, age: {person.age}
        </div>

        //button to add element into array
        <button onClick={() => push({name: 'sara', age: 20, id: 2})}>Push</button>

        //button to filter the array
        <button onClick={() => filter(person => person.age < 29>)}>Filter</button>

        //button to update specific index in the array
        <button onClick={() => update(1, {name: 'sara', age: 30, id: 1})}>Update</button>

        //button to remove item at specific index in the array
        <button onClick={() => remove(1)}>Remove</button>

        //button to remove item by its id
        <button onClick={() => removeById(1)}>RemoveById</button>

        //button to update item by its id
        <button onClick={() => modifyById(0, {name: 'sara', age: 30, id: 0})}>ModifyById</button>

        //button to clear thr array
        <button onClick={() => clear()}>Clear</button>
      ))}
    );
};
```

#### useHover

> Hook for tracking hover state.

##### Usage

```
import {useHover} from 'elia-dot-hooks';

const Example = () => {
    const [hoverRef, hovered] = useHover();
    return (
        <div ref={hoverRef}>{hovered ? '😁' : '☹️'}</div>
    );
};
```

#### useTitle

> Hook that sets title of the page.

#### Usage

```
import {useTitle} from 'elia-dot-hooks';

const Example = () => {
    useTitle('Custom Title');

    return null;
};
```

#### useToggle

> This hook takes a parameter with value of true pr false, and toggle that value to opposite, or change it to a value if passed as a parameter.

#### Usage

```
import {useToggle} from 'elia-dot-hooks';

const Example = () => {
    const [value, toggleValue] = useToggle(false);

    return (
        //button for toggle between true and false
        <button onClick={() => toggleValue()}>value : {value.toString()}</button>

        //button for to change value to true
        <button onClick={() => toggleValue(true)}>value : {value.toString()}</button>

        //button for to change value to false
        <button onClick={() => toggleValue(false)}>value : {value.toString()}</button>
    );
};
```

#### useWidth

> Hook to track current size of the browser window.

#### Usage

```
import {useWidth} from 'elia-dot-hooks';

const Example = () => {
    const { width } = useWidth();

    return (
         <div> width : {width}</div>
    );
};
```
