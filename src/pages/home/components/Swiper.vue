<template>
	<!-- 外层div防抖动 -->
	<div class="wrapper">
		<swiper :options="swiperOptions">
			<swiper-slide v-for="item of swiperList" :key="item.keyword">
				<img class="swiper-img" :src="item.img.url" />
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
export default {
	name: "HomeSwiper",
	data() {
		return {
			swiperOptions: {
				pagination: {
					el: ".swiper-pagination",
				},
				loop: true,
				// Some Swiper option/callback...
			},
			swiperList: [
				{
					keyword: 15,
					type: 1,
					img: {
						url: "http://jenky.xyz/images/banner_1.png",
					},
				},
				{
					keyword: 16,
					type: 1,
					img: {
						url: "http://jenky.xyz/images/banner_2.png",
					},
				},
			],
		};
	},
};
</script>

<style lang="stylus" scoped>
/* html的font-size设置为50px, 即1rem=50px, 适合于二倍图 二倍图的86px,实际尺寸为43px,43÷50=.86rem*/
@import '~styles/variables.styl'
    /* 因为scoped无法直接对本组件外的插件,如swiper进行样式编写. 所以需要样式穿透>>> */
    .wrapper>>>.swiper-pagination-bullet-active
        background #fff !important
    .wrapper
        width 100%
        height 0
        overflow hidden
        padding-bottom 53.33%
        background #eee
        // width 100%
        // height 53.33vw
        .swiper-img
            width 100%
</style>
