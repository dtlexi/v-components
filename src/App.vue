<template>
  <div id="app" style="width:100%;height:100px" @contextmenu="is_show=true">
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

    <div class="filter-container">
      <el-input v-model="search.name" placeholder="项目名称" style="width: 200px;" class="filter-item" />
      <!-- <el-select v-model="listQuery.importance" placeholder="Imp" clearable style="width: 90px" class="filter-item">
        <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item" />
      </el-select>
      <el-select v-model="listQuery.type" placeholder="Type" clearable class="filter-item" style="width: 130px">
        <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key" />
      </el-select>
      <el-select v-model="listQuery.sort" style="width: 140px" class="filter-item" @change="handleFilter">
        <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key" />
      </el-select>-->
    </div>

    <v-table ref="table" :url="url" :column="colunm" :search="search"></v-table>

    <input type="button" value="点我" @click="cilckme" />
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
      type: 10,
      is_show: true,
      menuItems: [
        [
          {
            title: "查看日志",
            icon: "<i class='el-icon-share'></i>",
            show: () => {
              return this.type == 1;
            },
            click: function(item) {
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
          {
            title: "取消订单",
            show: function() {
              return false;
            }
          },
          {
            title: "拼团",
            show: function() {
              return false;
            }
          },
          {
            title: "基础信息",
            show: function() {
              return false;
            }
          }
        ],
        [
          {
            title: "查看日志",
            show: function() {
              return false;
            }
          },
          {
            title: "取消订单",
            show: function() {
              return false;
            }
          },
          {
            title: "拼团",
            show: function() {
              return false;
            }
          },
          {
            title: "基础信息",
            show: function() {
              return false;
            }
          }
        ]
      ],
      colunm: [
        {
          title: "项目名称",
          width: 180,
          prop: "Name"
        },
        {
          title: "目的地",
          prop: "Destination1"
        }
      ],
      url: "/StudyCampOrder/FindCampOrderByPage",
      search: {
        index: 1,
        name: "",
        status: 0
      }
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
      this.$refs.table.load();
    }
  }
};
</script>

<style>
</style>
