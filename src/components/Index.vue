<template >
    <div class="contant">
<el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple">
  <!-- <img src="../assets/tx.jpg"> -->
  </div></el-col>
  <el-col :span="6"><div class="grid-content1 bg-purple"></div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="6"><div class="grid-content2 bg-purple"></div></el-col>
</el-row>
<div>
	  <el-table
	    :data="tableData"
	    border
	    style="width: 100%">
	    <el-table-column
	      fixed
	      prop="date"
	      label="日期"
	      width="150">
	    </el-table-column>
	    <el-table-column
	      prop="name"
	      label="姓名"
	      width="120">
	    </el-table-column>
	    <el-table-column
	      prop="province"
	      label="省份"
	      width="120">
	    </el-table-column>
	    <el-table-column
	      prop="city"
	      label="市区"
	      width="120">
	    </el-table-column>
	    <el-table-column
	      prop="address"
	      label="地址"
	      width="300">
	    </el-table-column>
	    <el-table-column
	      prop="zip"
	      label="邮编"
	      width="120">
	    </el-table-column>
		<el-table-column
		  prop="ph"
		  label="电话"
		  width="300">
		</el-table-column>
	    <el-table-column
	      fixed="right"
	      label="操作"
	      width="100">
	      <template slot-scope="scope">
	        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
	        <el-button type="text" size="small">编辑</el-button>
	      </template>
	    </el-table-column>
	  </el-table>
	  </div>
    </div>
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
		  ph:18857894587
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333,
		  ph:18857894587
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333,
		  ph:18857894587
        }]
      }
    }
  }
</script>
<style scoped>
.contant {
    background: #d3dce6;
}
.el-row {
    margin-bottom: 20px;
  }
  .el-col {
	  margin-top: 5px;
	  margin-left: 5px;
    border-radius: 4px;
  }
  .grid-content img{
	  margin-left: 20px;
	  margin-top: 5px;
	  width: 100px;
	  height: 100px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: white;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {

    min-height: 100px;
  }
   .grid-content1 {

	min-width: 300%;
    min-height: 100px;
  }
   .grid-content2 {

  	min-width: 410%;
    min-height: 200px;
	margin-bottom: 10px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>