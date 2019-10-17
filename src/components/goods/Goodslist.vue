<template>
  <div>
    <div class="goods-list">
      <!-- <router-link class="good-item" v-for="item in goodlist" :key="item.id" :to="'/home/goodsinfo/' + item.id" tag='div'>
        <img :src="item.img_url" alt />
        <h1 class="title">{{item.title}}</h1>
        <div class="info">
          <p class="price">
            <span class="now">¥{{item.sell_price}}</span>
            <span class="old">¥{{item.market_price}}</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩{{item.stock_quantity}}件</span>
          </p>
        </div>
      </router-link>-->

      <!-- 不使用router跳转，只用window.location--编程式跳转 -->
      <div class="good-item" v-for="item in goodlist" :key="item.id" @click="goDetail(item.id)">
        <img :src="item.img_url" alt />
        <h1 class="title">{{item.title}}</h1>
        <div class="info">
          <p class="price">
            <span class="now">¥{{item.sell_price}}</span>
            <span class="old">¥{{item.market_price}}</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩{{item.stock_quantity}}件</span>
          </p>
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" @click="loadMore">加载更多</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return { goodlist: [], pageindex: 1 };
  },
  created() {
    this.acquireGoodlists();
  },
  methods: {
    acquireGoodlists() {
      this.$http
        .get("api/getgoods?pageindex=" + this.pageindex)
        .then(result => {
          if (result.body.status === 0) {
            this.goodlist = this.goodlist.concat(result.body.message);
          }
        });
    },
    loadMore() {
      this.pageindex = this.pageindex + 1;
      this.acquireGoodlists();
    },
    goDetail(id) {
      // router为导航对象，route为参数对象
      this.$router.push({ name: "goodsinfo", params: { id } });
    }
  }
};
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