<template>
  <div class="container-fluid">
    <p>WHAT WE BUY OR SELL?</p>
    <p class="second">WE BUY AND SELL</p>
    <h1>ANY TYPE OF SCRAP</h1>
    <hr />
  </div>
  <Cards />
  <Cards />
  <Cards />
</template>

<script>
import Cards from "./Cards";
export default {
  components: {
    Cards
  }
};
</script>

<style lang="scss" scoped>
.container-fluid {
  text-align: center;
  margin-top: 200px;
  .second {
    font-size: 30px;
    color: #ed1c24;
    font-weight: 300;
  }
  h1 {
    margin-bottom: 0;
    font-weight: 900;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  hr {
    width: 10%;
    border: 0.1px solid gray;
  }
}
</style>
