<template>
  <div>
    <el-table :data="list" border style="width: 100%">
      <el-table-column
        v-for="(item,index) in column"
        :key="index"
        v-loading="loading"
        :label="item.title"
        :width="item.width"
      >
        <template slot-scope="scope">
          <div v-if="item.render" v-html="item.render(scope.row)"></div>
          <div v-if="!item.render&&item.prop">{{scope.row[item.prop]}}</div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="total,prev, pager, next"
      :page-size="page_size"
      :total="total"
      :current-page="page_index"
      style="padding:36px 0px;float:right"
      :hide-on-single-page="true"
      v-on:current-change="(index)=>{page_index=index}"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "vTable",
  data() {
    return {
      total: 20,
      page_index: this.page,
      page_size: this.size,
      list: undefined,
      loading: true
    };
  },
  props: {
    column: {
      type: Array,
      required: true
    },
    url: {
      type: String
    },
    page: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 10
    },
    search: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  created: function() {
    this.load();
  },
  methods: {
    load() {
      if (this.url) {
        this.loading = true;

        this.search.page = this.page_index;
        this.search.size = this.page_size;

        this.$http
          .get(this.url, { params: this.search })
          .then(res => {
            if (res.status == 200) {
              if (res.data.Status == 1) {
                let data = res.data.Data;
                this.total = data.count;
                this.list = data.data;
              }
            }
            this.loading = false;
          })
          .catch(res => {
            this.loading = false;
            this.$message.error("加载失败");
          });
      }
    }
  },
  watch: {
    "search": {
      handler(val) {
          this.page_index=1;
          this.load();
      },
      deep: true
    },
    "page_index":function(val){
        this.load();
    }
  }
};
</script>

<style>
</style>