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

## table
### Attributes
#### 1. url
* String
* 请求的Url地址
#### 2. column
* Objece 
* 列

* 参数
  1. title 标题
  2. width 列宽
  3. prop 关联显示的属性名
  4. render 渲染方法
```
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
      ]
```
#### 3. search
* 请求查询的参数
#### 4. size
* 分页每页参数

### example

```
<v-table :url="url" :column="colunm" :search="search"></v-table>

export default {
  name: "app",
  data() {
    return {
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
        name:'',
        status:0
      }
    };
  }
};
```