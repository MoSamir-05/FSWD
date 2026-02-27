import { useState, createContext, useContext } from 'react';
import { createRoot } from 'react-dom/client';

const UserContext = createContext();

function Component11() {
  const [user, setUser] = useState("Linus");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component12 />
    </UserContext.Provider>
  );
}

function Component12() {
  return (
    <>
      <h1>Component 2</h1>
      <Component13 />
    </>
  );
}

function Component13() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 3</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
export default Component11