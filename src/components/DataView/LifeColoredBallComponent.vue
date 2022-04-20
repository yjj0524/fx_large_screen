<template>
    <div id="life_colored_ball_container">
        <svg
            id="life_colored_svg"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g>
                <circle
                    v-for="(item, index) in colored_ball_datas"
                    :key="index"
                    class="svg_circle"
                    :cx="item.cx"
                    :cy="item.cy"
                    r="2"
                    stroke-width="0"
                    :fill="item.fill"
                />
            </g>
        </svg>
    </div>
</template>
 
<script>
import anime from "animejs/lib/anime.js";

export default {
    name: "ColoredBall",
    props: ["run_colored_ball_animation"],
    data() {
        return {
            colored_ball_datas: [],
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            let that = this;
            let colored_ball_datas = [];
            let colors = [
                "#943d10",
                "#fce668",
                "#fcd475",
                "#ffebd4",
                "#fac04d",
                "#a44f11",
                "#dc8d6c",
                "#793913",
                "#cd9269",
                "#b88c2f",
            ];

            for (let i = 0; i < 500; i++) {
                let item = {
                    cx: that.GetRandomNumber(10, 345),
                    cy: that.GetRandomNumber(200, 300),
                    // stroke: colors[that.GetRandomNumber(0, that.colors.length)],
                    fill: colors[that.GetRandomNumber(0, colors.length)],
                    // fill: "#ebc535",
                };
                colored_ball_datas.push(item);
            }
            that.colored_ball_datas = colored_ball_datas;
        },
        RunAnime() {
            let that = this;
            that.$nextTick(() => {
                let circle_els = document.querySelectorAll(
                    "#life_colored_svg circle"
                );

                for (let i = 0; i < circle_els.length; i++) {
                    anime
                        .timeline({
                            targets: circle_els[i],
                            easing: "linear",
                            loop: true,
                        })
                        .add({
                            translateY: -250,
                            delay: i * 20,
                            duration: 5000,
                        })
                        .add({
                            opacity: "0",
                            duration: 500,
                        })
                        .add({
                            translateY: 0,
                            duration: 1,
                        })
                        .add({
                            opacity: "1",
                            duration: 500,
                        });
                }
            });
        },
        GetRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
    },
    watch: {
        run_colored_ball_animation(value) {
            if (value) {
                this.RunAnime();
            }
        },
    },
};
</script>
 
<style scoped lang="less">
#life_colored_ball_container {
    width: 100%;
    height: 100%;
    // border: 1px solid red;
}
</style>