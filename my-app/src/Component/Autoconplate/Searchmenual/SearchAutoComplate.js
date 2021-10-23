//https://codesandbox.io/s/react-input-autocomplete-knwn3?file=/src/styles.css
import React from "react";



import InputeAuto from "../Searchmenual/InputeAuto";




const data = ["java", "javascript", "php", "c#", "go", "dart"];

function SearchAutoComplate() {
  const getSelectedVal = value => {
    console.log(value);
  };

  const getChanges = value => {
    console.log(value);
  };
  return (
    <>
      <InputeAuto
        label="languages"
        pholder="Keyword..."
        data={data}
        onSelected={getSelectedVal}
        onChange={getChanges}
      />
      <p>hello world</p>
    </>
  );
}
export default SearchAutoComplate;
