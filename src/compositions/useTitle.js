import { toRefs, reactive } from "vue";

const delay = () =>
  new Promise(resolve => {
    setTimeout(() => resolve(), 2000);
  });

const state = reactive({
  title: ""
});

export default () => {
  const fetchTitle = async () => {
    await delay();
    state.title = "Toth Janos";
  };

  return { ...toRefs(state), fetchTitle };
};
