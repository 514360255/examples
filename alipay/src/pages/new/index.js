import * as React from 'react';
import { View, Input, navigateBack } from 'remax/alipay';
import AddButton from '@/components/AddButton';
import TodoContainer from '@/containers/Todo';
import './index.css';

export default () => {
  const todo = React.useContext(TodoContainer.Context);
  const [text, setText] = React.useState('');

  const handleAdd = () => {
    const items = todo.items.concat([
      {
        id: Date.now(),
        text,
        compeleted: false,
      },
    ]);

    todo.setItems(items);

    navigateBack();
  };

  return (
    <View className="page-add-todo">
      <View className="add-todo">
        <Input
          className="add-todo-input"
          placeholder="What needs to be done?"
          onInput={e => setText(e.detail.value)}
          value={text}
        />
      </View>

      <View className="todo-footer">
        <AddButton text="Add Todo" onClick={handleAdd} />
      </View>
    </View>
  );
};
