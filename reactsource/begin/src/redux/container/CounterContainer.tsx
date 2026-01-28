import { connect } from 'react-redux';
import Counter from '../component/Counter';
import { decrease, increase } from '../modules/counter';
import type { RootState } from '../modules';
import type { Props } from '../types/type';

const CounterContainer = ({ number, increase, decrease }: Props) => {
  return <Counter number={number} increase={increase} decrease={decrease} />;
};

export default connect(
  (state: RootState) => ({
    number: state.counter.number,
  }),
  { increase, decrease },
)(CounterContainer);
