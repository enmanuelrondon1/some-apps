import { useState } from "react";
import { FormAddMoney } from "./FormAddMoney";
import { MainControl } from "./MainControl";

export const Header = () => {
  const [count, setCount] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const component = isValid ? (
    <MainControl count={count} />
  ) : (
    <FormAddMoney setCount={setCount} setIsValid={setIsValid} />
  );

  return (
    <>
      <div className="App">
        <div className="header">
          <h1>SUBSCRIPTIONS TRACKER</h1>
        </div>
        {component}
      </div>
    </>
  );
};
