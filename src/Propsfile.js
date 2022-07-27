import React from "react";
function changename(props) {
  const { fisrtname: name, age, email } = props;
  return (
    <h1>
      Hello I am {name} and my age is {age} you can contact by Email :{email}
    </h1>
  );
}
export default changename;
