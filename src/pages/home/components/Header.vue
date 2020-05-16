<template>
	<div class="header">
		<div class="header-left">返回</div>
		<div class="header-input">输入零食</div>
		<div class="header-right">城市</div>
	</div>
</template>

<script>
export default {
	name: "HomeHeader",
};
</script>

<style lang="stylus" scoped>
/* html的font-size设置为50px, 即1rem=50px, 适合于二倍图 二倍图的86px,实际尺寸为43px,43÷50=.86rem*/
@import '~styles/variables.styl'
.header
    display flex
    // flex-direction row
    // justify-content space-between
    background $bgColor
    line-height .86rem
    color #fff
    .header-left
        float left
        width .64rem
    .header-input
        flex-grow 1
        height .64rem
        line-height .64rem
        margin-top .12rem
        margin-left 0.2rem
        background-color #fff
        border-radius .1rem
        color #ccc
    .header-right
        float right
        width 1.24rem
        text-align center
</style>
