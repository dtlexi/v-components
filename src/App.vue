<template>
  <div id="app" @click="cilckme" style="width:100%;height:100px" @contextmenu="is_show=true">
    <v-upload
      params="ProjectProfitCalcAffix"
      :on-success="success"
      :on-remove="handleRemove"
      :limit="2"
    ></v-upload>

    <v-upload
      params="ProjectProfitCalcAffix"
      :on-success="success"
      :on-remove="handleRemove"
      :limit="1"
      :init-files="fileList"
    ></v-upload>

    <div>{{is_show}}</div>

    <v-menu :items="menuItems"></v-menu>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ],
      type: 1,
      is_show:true,
      menuItems: [
        [
          {
            title: "查看日志",
            icon:"<i class='el-icon-share'></i>",
            show: () => {
              return this.type == 1;
            },
            click: function(item) {
              console.log(item);
              alert(123);
            }
          },
          {
            title: "取消订单",
            show: () => {
              return this.type == 2;
            }
          },
          {
            title: "拼团",
            show: () => {
              return this.type == 3;
            }
          },
          {
            title: "基础信息",
            show: () => {
              return this.type == 4;
            }
          }
        ],
        [
          { title: "查看日志", show: false },
          { title: "取消订单" },
          { title: "拼团" },
          { title: "基础信息" }
        ],
        [
          { title: "查看日志" },
          { title: "取消订单" },
          { title: "拼团" },
          { title: "基础信息" }
        ]
      ]
    };
  },
  methods: {
    success(file, fileList) {
      console.log("success");
      console.log(file);
      console.log(fileList);
    },
    handleRemove(file, fileList) {
      console.log("remove");
      console.log(file);
      console.log(fileList);
    },
    cilckme() {
      this.type++;
    }
  }
};


</script>

<style>
</style>
