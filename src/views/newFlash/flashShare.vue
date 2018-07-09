<template>
  <div class="flashShare" >
        <div class="main">
			<div class="headImg"></div>
			<div class="fix">
				<div class="fix_main">
					<h2>公告 : Bibox将于6月22全球首发Distributed Credit Chain ( DCC )</h2>
					<ul class="timeLi">
						<li>2018-06-23</li>
						<li>12:36</li>
						<li>星期六</li>
					</ul>
					<p>由于Befund项目生态调整应项目方要求LBank的打新比例将从1ETH=10000BFDT调整为1ETH=30000BFDT,LBank将按调整后的比例
					为之前认购BFDT代币成功的用户补发相应的BFDT。具体补发时间请以后续公告为准</p>
					<h3>来源:金色财经</h3>
				</div>
			</div>
            <div class="worldImg"></div>
		</div>
		<div class="foot">
			<ul>
				<li>
					<router-link :to="{path:'/flash'}">
						<span></span>
					</router-link>
				</li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.main{
	width: 100%;
    background-color: #eee;
    position: relative;
}
.main .headImg{
	width: 100%;
	height: 522px;
    background: url(../../../static/images/banner@2x.png) no-repeat;
    background-size: cover;
    margin-bottom: 530px;
}
.main .fix{
	width: 670px;
    background: url(../../../static/images/bgcontent2x.png) no-repeat;
    background-size: cover;
	position: absolute;
	top: 350px;
	left:50%;
	transform: translateX(-50%);
}
.main .fix .fix_main{
	width: 610px;
	margin: 0 auto;
	height: 693px;
}
.main .fix .fix_main h2{
	margin: 0;
	font-size: 34px;
    line-height: 40px;
	color: rgb(34,34,34);
	font-family: "microsoft yahei";
	padding-top: 30px;
	font-weight: 600;
}
.main .fix .fix_main ul.timeLi{
	margin-top: 40px;
	border-bottom: 1px solid rgb(241,78,36);
	padding-bottom: 12px;
	display: flex;
}
.main .fix .fix_main ul.timeLi li{
	flex: 1;
	font-size: 26px;
	color: rgb(241,78,36);
}
.main .fix .fix_main ul.timeLi li:nth-child(3){
	text-align: right;
}
.main .fix .fix_main p{
	font-size: 30px;
	color: rgb(34,34,34);
	margin-top: 46px;
	letter-spacing: 2px;
	line-height: 40px;
}
.main .fix .fix_main h3{
	text-align: right;
	font-size: 28px;
	color: rgb(241,78,36);
	margin-top: 148px;
}
.main .worldImg{
    height: 181px;
    width: 684px;
    background: url(../../../static/images/bot@2x.png) no-repeat;
    background-size: contain;
    margin: 0 auto;
	padding-bottom: 30px;
}
.main .bot{
	width: 684px;
	height: 181px;
	margin: 0px auto;
}
.main .bot img{
	width: 100%;
	height: 100%;
}
.foot{
	width: 100%;
}
.foot ul{
	display: flex;
	padding-top: 16px;
	box-sizing: border-box;
}
.foot ul li{
	flex: 1;
}
.foot ul li:nth-child(1){
	position: relative;
}
.foot ul li:nth-child(1) span{
	position: absolute;
	background: url(../../../static/images/jian.png) no-repeat;
	background-size: contain;
	left: 50px;
	top: 6px;
	height: 38px;
	width: 18px;
}
.foot ul li:nth-child(2){
	height: 57px;
	width: 68px;
	background: url(../../../static/images/wei@2x.png) no-repeat;
	background-size: contain;
}
.foot ul li:nth-child(3){
	background: url(../../../static/images/friend@2x.png) no-repeat;
	background-size: contain;
}
.foot ul li:nth-child(4){
	background: url(../../../static/images/QQ@2x.png) no-repeat;
	background-size: contain;
}
.foot ul li:nth-child(5){
	background: url(../../../static/images/bc@2x.png) no-repeat;
	background-size: contain;
}
</style>
