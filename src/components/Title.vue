<template>
  <div>
    {{ title }}
  </div>
</template>

<script>
import useTitle from "../compositions/useTitle";

export default {
  name: "List",
  async setup() {
    const { title, fetchTitle } = useTitle();
    await fetchTitle();
    return { title };
  }
};
</script>
