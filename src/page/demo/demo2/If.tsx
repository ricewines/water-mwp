import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const isActive = ref(true);

    return () => (
      <div>
        {isActive.value ? <h1>标题1</h1> : <h2>标题2</h2>}
        <button onClick={() => isActive.value = !isActive.value}>Toggle</button>
      </div>
    );
  }
});