<template>
  <div>
    <el-popover placement="right" width="360" trigger="click">
      <el-upload
        drag
        :action="url"
        multiple
        :on-success="handleSuccess"
        :on-exceed="handleExceed"
        :limit="limit"
        :file-list="initFiles"
        :on-remove="handleRemove"
        :on-preview="handlePreview"
        ref="upload"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
      </el-upload>

      <el-button slot="reference" @click.stop="1" type="text">{{text}}</el-button>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "vUpload",
  data: function() {
    return {
        text:"上传"
    };
  },
  props: {
    //上传文件个数限制
    limit: {
      type: Number,
      default: 1
    },
    //上传成功方法
    onSuccess: {
      type: Function
    },
    //移除方法
    onRemove: {
      type: Function
    },
    //初始化文件
    initFiles: {
      type: Array
    },
    //上传地址，基本上不修改
    uploadUrl: {
      type: String,
      default:
        window.location.host == "admin.vpea.ca"
          ? "http://service.vpea.ca/UploadFile.ashx"
          : "http://tservice.vpea.ca/UploadFile.ashx"
    },
    //上传参数，必填
    params: {
      type: String,
      required: true
    },
    onError: {
      type: Function
    }
  },
  methods: {
    handlePreview(file) {
      window.open(file.url);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制只能上传 ` + this.limit + ` 个文件`);
    },
    handleSuccess(response, file, fileList) {
      if (response.Status == 1) {
        var resFile = response.FileList[0];
        file.name = resFile.FileSavePath;
        file.url = resFile.FileSavePath;

        if (this.onSuccess) {
          this.onSuccess(file, fileList);
        }
        this.text="查看";
      } else {
        this.$message.error("上传失败：" + response.ReturnMsg);
        this.$refs.upload.clearFiles();
      }
    },
    handleRemove(file, fileList) {
      if (this.onRemove) {
        this.onRemove(file, fileList);
      }
      if(fileList&&fileList.length==0)
      {
          this.text="上传";
      }
    }
  },
  computed: {
    url: function() {
      return this.uploadUrl + "?p=" + this.params;
    }
  },
  created:function(){
      if(this.initFiles&&this.initFiles.length>0)
      {
          this.text="查看";
      }
  }
};
</script>

<style scoped>
div{
    display: inline-block;
}
</style>