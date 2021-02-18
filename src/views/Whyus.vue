<template>
  <div class="container-fluid">
    <div class="main-img">
      <img src="../assets/bulb.jpeg" alt="" />
    </div>
    <div class="headline">
      <h3>
        <span>WHY US?</span>
        <br />
        BECAUSE WE ARE LEADERS IN SCRAP TRADING.
      </h3>
      <hr />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container-fluid {
  height: 580px;
  margin: 0;
  padding: 0;
  margin-top: 200px;
  background-color: #f2f6f8;
  display: flex;
  .main-img {
    width: 50%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .headline {
    margin-left: 5rem;
    width: 300px;
    h3 {
      margin-bottom: 0;
      font-weight: 900;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-top: 80px;

      span {
        color: #ed1c24;
        font-weight: 300;
      }
    }
    hr {
      width: 25%;
      margin-left: 0;
      border: 1px solid gray;
    }
  }
}
</style>
