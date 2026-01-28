import { connect } from 'react-redux';
import Counter from '../component/Counter';
import { decrease, increase } from '../modules/counter';
import type { RootState } from '../modules';
import type { TodoProps } from '../types/type';
import { changeInput, insert, remove, toggle } from '../modules/todos';
import Todos from '../component/Todos';

const TodosContainer = ({
  input,
  todos,
  insert,
  remove,
  toggle,
  changeInput,
}: TodoProps) => {
  return (
    <Todos
      input={input}
      todos={todos}
      insert={insert}
      remove={remove}
      toggle={toggle}
      changeInput={changeInput}
    />
  );
};

export default connect(
  ({ todos }: RootState) => ({ input: todos.input, todos: todos.todos }),
  { insert, remove, toggle, changeInput },
)(TodosContainer);
