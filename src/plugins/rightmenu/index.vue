<template>
  <div
    class="right-menu"
    :style="{'display': 'block','left': location.x+'px','top':  location.y+'px','position': 'fixed'}"
    v-show="is_show"
    v-on:mouseleave.stop="hide"
    v-if="showCount > 0"
  >
    <div
      class="group"
      v-for="(group,gropuIndex) in items"
      :key="gropuIndex"
      v-if="group.find(item => {return (item.show !== false &&(typeof item.show == 'function' ? item.show() !== false : true));})"
    >
      <a
        href="javascript:"
        v-for="(item,index) in group"
        v-show="item.show!==false&&(typeof(item.show)=='function'?item.show()!==false:true)"
        :key="index"
        @click.stop="click(item)"
      >{{item.title}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "vMenu",
  data() {
    return {
      location: {
        x: 100,
        y: 100
      },
      vue: this,

      _isShow: false,

      get is_show() {
        if (this.vue.value != undefined) {
          return this.vue.value;
        } else {
          return this._isShow;
        }
      },
      set is_show(val) {
        if (this.vue.value != undefined) {
          this.vue.$emit("input", val);
        } else {
          this._isShow = val;
        }
      }
    };
  },
  methods: {
    hide() {
      this.is_show = false;
    },
    click(item) {
      if (item.click && typeof item.click == "function") {
        item.click(item);
      }
      this.is_show = false;
    },
    show(e) {
      console.log(this.showCount);
      this.is_show = true;
    },
    move(e) {
      this.location.x = e.clientX - 2;
      this.location.y = e.clientY - 2;
    }
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    el: {
      type: String
    },
    value: {
      type: Boolean,
      default: undefined
    }
  },
  created: function() {
    let vue = this;
    document.oncontextmenu = function(e) {
      vue.move(e);
      if (vue.value == undefined) {
        vue.show(e);
      }
      if (vue.is_show) {
        e.preventDefault();
      }
    };
  },
  computed: {
    showCount() {
      let count = 0;
      this.items.forEach(el => {
        el.forEach(item => {
          if (typeof item.show === "function" && item.show()) {
            count++;
          } else if (item.show === true) {
            count++;
          }else if(item.show===undefined){
            count++;
          }
        });
      });
      return count;
    }
  }
};
</script>

<style>
.right-menu {
  border: 1px solid #eee;
  box-shadow: 0 0.5em 1em 0 rgba(0, 0, 0, 0.1);
  border-radius: 1px;
}

.right-menu {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  z-index: 3000;
  width: 200px;
  text-align: left;
  padding: 2px;
}

.right-menu .group:not(:first-child) {
  border-top: 1px solid #dcdfe6;
  margin: 5px 0px 0px 0px;
  padding: 5px 0px 0px 0px;
}

.right-menu .el-divider {
  margin: 5px 0;
}

.right-menu a {
  padding: 2px 10px;
}

.right-menu a {
  min-width: 75px;
  padding: 0px 5px;
  height: 28px;
  line-height: 28px;
  text-align: left;
  display: block;
  color: #1a1a1a;
  text-decoration: none;
  font-size: 12px;
}

.right-menu a:hover {
  background-color: #41b883;
  text-decoration: none;
}
</style>