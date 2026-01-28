import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import Book from './component/Book.tsx';
import MyApp from './component/MyApp.tsx';
// import Parent from './component/props/Parent.tsx';
import Parent from './component/memo/Parent.tsx';
import Wrapper from './component/props/Wrapper.tsx';
import CardApp from './component/props/CardApp.tsx';
import Products from './component/props/Products.tsx';
import ParentCardLayout from './component/children/ParentCardLayout.tsx';
import Counter from './component/state/Counter.tsx';
import InputSample from './component/state/InputSample.tsx';
import InputMultiSample from './component/state/InputMultiSample.tsx';
import InputMultiSample2 from './component/state/InputMultiSample2.tsx';
import Poster from './component/state/Poster.tsx';
import Say from './component/state/Say.tsx';
import MyBtn from './component/state/MyBtn.tsx';
import CounterRef from './component/ref/CounterRef.tsx';
import InputRef from './component/ref/InputRef.tsx';
import Button from './component/event/Button.tsx';
import Button2 from './component/event/Button2.tsx';
import Toolbar from './component/event/Button3.tsx';
import Signup from './component/event/Signup.tsx';
import Signup2 from './component/event/Signup2.tsx';
import UserForm from './component/event/UserForm.tsx';
import LifeCycle from './component/effect/LifeCycle.tsx';
import LifeCycle2 from './component/effect/LifeCycle2.tsx';
import BookApp from './component/effect/BookApp.tsx';
// import TaskApp from './component/state/TaskApp.tsx';
import TaskApp from './component/reducer/TaskApp.tsx';
import UserApp from './component/reducer/UserApp.tsx';
import UserApp2 from './component/reducer/UserApp2.tsx';
import Memo from './component/memo/Memo.tsx';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './router/declarative/Navbar.tsx';
import router from './router/data/router.ts';
import Consumer from './context/Consumer.tsx';
import { AuthProvider } from './router/data/AuthContext.tsx';
import { Provider } from 'react-redux';
import MyTodo from './redux/component/MyTodo.tsx';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/modules/index.ts';

// store : 애플리케이션 당 하나의 스토어
// 데이터 공유
const store = configureStore({
  reducer: rootReducer,
});
createRoot(document.getElementById('root')!).render(
  <>
    {/* <App /> */}
    {/* <Book /> */}
    {/* <MyApp /> */}
    {/* <Parent /> */}
    {/* <Wrapper /> */}
    {/* <CardApp /> */}
    {/* <Products /> */}
    {/* <ParentCardLayout /> */}
    {/* <Counter /> */}
    {/* <InputSample /> */}
    {/* <InputMultiSample /> */}
    {/* <InputMultiSample2 /> */}
    {/* <Say /> */}
    {/* <Poster /> */}
    {/* <MyBtn /> */}
    {/* <CounterRef /> */}
    {/* <InputRef /> */}
    {/* <Button /> */}
    {/* <Button2 /> */}
    {/* <Toolbar /> */}
    {/* <Signup /> */}
    {/* <Signup2 /> */}
    {/* <UserForm /> */}
    {/* <LifeCycle /> */}
    {/* <LifeCycle2 /> */}
    {/* <BookApp /> */}
    {/* state폴더 */}
    {/* <TaskApp /> */}
    {/* <UserApp /> */}
    {/* <UserApp2 /> */}
    {/* reducer폴더 */}
    {/* <TaskApp /> */}
    {/* <Memo /> */}
    {/* <Parent /> */}
    {/* declarative방식 */}
    {/* <LifeCycle2 /> */}
    {/* <BrowserRouter>
      <Navbar />
    </BrowserRouter> */}
    {/* data방식 */}
    {/* <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider> */}
    {/* <Consumer /> */}

    <Provider store={store}>
      <MyTodo />
    </Provider>
  </>,
);
