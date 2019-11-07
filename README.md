# v-components

## upload

### basic ues
```
<v-upload
    params="ProjectProfitCalcAffix"
    :on-success="success"
    :on-remove="handleRemove"
    :limit="2"
></v-upload>
```

## right menu

### basic ues
```
<v-menu :items="menuItems"></v-menu>

export default {
  name: "app",
  data() {
    return {
      menuItems: [
        [
          {
            title: "查看日志",
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
  }
};
```