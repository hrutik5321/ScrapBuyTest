<template>
  <div id="app">
    <Base />
    <Cursore />
    <Buying />
    <Whyus />
  </div>
</template>

<script>
import Base from "./views/Base";
import Buying from "./views/Buying.vue";
import Cursore from "./views/Cursore.vue";
import Whyus from "./views/Whyus";
export default {
  components: {
    Base,
    Cursore,
    Buying,
    Whyus
  }
};
</script>

<style lang="scss" scoped>
#app {
  padding-bottom: 3rem;
}
</style>
