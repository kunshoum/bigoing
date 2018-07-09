<template>
    <div class="clause">
        <!--头部-->
        <header>
            <div><img src="../../static/images/jiantouleft.png" ></div>
            <div>服务及隐私条款</div>
        </header>
        <!--内容-->
        <aside>
            <span>网易通行证服务条款</span>
            <h3>最后更新时间 :  2009年5月20日</h3>
            <div>
                <p>[注意]请用户仔细阅读以下全部内容（特别是粗体下划</p>
                <p>线标注的内容）。如用户不同意本服务条款任意内容，</p>
                <p>请不要注册或使用网易服务。如果用户通过金融注册程</p>
                <p>序并勾选“我同意网易通行证服务条款”，即表示用户</p>
                <p>与网易公司已达成协议，自愿接受本服务条款的所有内</p>
                <p>容。此后，用户不得已未阅</p>
                <p>附:</p>
                <p>中华人民共和国电信条例</p>
                <p>互联网信息服务管理办法</p>
                <p>互联网电子公司公告服务管理规定</p>
                <p>中华人民共和国计算机信息网络国际联网管理暂行规定</p>
                <p>中华人民共和国计算机信息网络国际联网管理暂行规定实施办法</p>
                <p>中华人民共和国计算机信息系统安全保护条例</p>
                <p>计算机信息网络国际联网安全保护管理办法</p>
                <p>我已阅读并同意服务条款。</p>
            </div>
            <img src="../../static/images/551385564141552702@2x.png" >
        </aside>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.clause{
    // 头部
    header{
        width: 100%;
        height:88px;
        background: url("../../static/images/nav.png") no-repeat left top;
        display: flex;
        justify-content: center;
        align-items:center;
        position: relative;
        div:nth-child(1){
            position: absolute;
            left: 30px;
            img{
                width: 18px;
                height: 33px;
            }
        }
        div:nth-child(2){
            color: #fff;
            font-size: 32px;
            text-align: center;
        }
    }

    // 内容
    aside{
        // border:1px solid red;
        padding:0 76px;
        text-align: center;
        margin-top: 62px;
        span{
            color: #333;
            font-weight: 900;
            font-size: 30px;
        }
        h3{
            margin-top: 85px;
            color: #333;
            font-weight: 800;
            font-size: 25px;
        }
        div{
            margin-top: 47px;
            font-size: 25px;
            p{
                line-height: 35px;
                color: #333;
            }
        }
        img{
            margin-top: 140px;
            width: 166px;
            height: 132px;
        }
    }
}
</style>
