<template>
  <div class="goods-list">
    <div class="good-item">
      <img src="../../images/menu1.png" alt />
      <h1 class="title">美人</h1>
      <div class="info">
        <p class="price">
          <span class="now">¥99</span>
          <span class="old">¥199</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩90件</span>
        </p>
      </div>
    </div>
    <!--  -->
    <div class="good-item">
      <img src="../../images/menu1.png" alt />
      <h1
        class="title"
      >美ssssssssssssssssssssssssssssssssss人美ssssssssssssssssssssssssssssssssss人美ssssssssssssssssssssssssssssssssss人</h1>
      <div class="info">
        <p class="price">
          <span class="now">¥99</span>
          <span class="old">¥199</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩90件</span>
        </p>
      </div>
    </div>
    <!--  -->
    <div class="good-item">
      <img src="../../images/menu1.png" alt />
      <h1 class="title">美人</h1>
      <div class="info">
        <p class="price">
          <span class="now">¥99</span>
          <span class="old">¥199</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩90件</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
  .good-item {
    margin: 3px 0;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    width: 49%;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }
    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-size: 16px;
          font-weight: bold;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>