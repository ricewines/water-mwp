import { defineComponent } from "vue";
import { JSX } from "vue/jsx-runtime";
import If from "./If.tsx";

// named exports w/ variable declaration: ok
export const Foo = defineComponent({});

// named exports referencing variable declaration: ok
const Bar = defineComponent({
  render() {
    return (
      <>
        <div>Test1</div>
        <div>Test2</div>
        <If></If>
      </>
    );
  }
});
export { Bar };
// default export referencing variable declaration: ok
const Baz = defineComponent({
  render() {
    const element: () => JSX.Element = () => (
      <>
        <div>Test2</div>
      </>
    );
    return element;
  }
});
export default Baz;