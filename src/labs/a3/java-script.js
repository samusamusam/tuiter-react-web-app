import VariablesAndConstants from "./variables-and-constants";
import IfElse from "./if-else";
import WorkingWithFunctions from "./working-with-functions";
import MapFunctions from "./map-function";
import VariableTypes from "./variable-types";
import BooleanVariables from "./boolean-variables";
import TernaryOperator from "./ternary-operator";
import WorkingWithArrays from "./working-with-arrays";
import TemplateLiterals from "./template-literals";
import House from "./house";
import Spread from "./spread";
import Destructing from "./destructing";
import FunctionDestructing from "./function-destructing";

function JavaScript() {
  console.log("Hello World!");
  return (
    <div>
      <h1>JavaScript</h1>
      <WorkingWithFunctions />
      <MapFunctions />
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <TernaryOperator />
      <WorkingWithArrays />
      <TemplateLiterals />
      <House />
      <Spread />
      <Destructing />
      <FunctionDestructing />
    </div>
  );
}

export default JavaScript;
