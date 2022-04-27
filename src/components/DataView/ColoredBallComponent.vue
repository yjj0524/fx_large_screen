<template>
    <div id="colored_ball_container">
        <svg
            :id="component_id"
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
                    :r="item.r"
                    :stroke="item.stroke"
                    stroke-width="1"
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
    props: ["component_index", "run_colored_ball_animation"],
    data() {
        return {
            component_id: "",
            colored_ball_datas: [],
        };
    },
    mounted() {},
    methods: {
        init() {
            let that = this;
            let colored_ball_datas = [];
            let colors = [
                "#f7f7d3",
                "#985044",
                "#ffffea",
                "#c97449",
                "#c6652c",
                "#817358",
                "#6d6352",
                "#462b23",
                "#3e2c15",
                "#b58a60",
                "#f7f7d3",
                "#985044",
                "#ffffea",
                "#c97449",
                "#c6652c",
                "#817358",
                "#6d6352",
                "#462b23",
                "#3e2c15",
                "#b58a60",
                "#f7f7d3",
                "#985044",
                "#ffffea",
                "#c97449",
                "#c6652c",
                "#817358",
                "#6d6352",
                "#462b23",
                "#3e2c15",
                "#b58a60",
            ];

            that.component_id = `svg_item${that.component_index}`;

            for (let i = 0; i < 30; i++) {
                let item = {
                    cx: that.GetRandomNumber(10, 170),
                    cy: that.GetRandomNumber(150, 190),
                    r: that.GetRandomNumber(2, 5),
                    stroke: colors[i],
                    fill: colors[i],
                };
                colored_ball_datas.push(item);
            }
            that.colored_ball_datas = colored_ball_datas;
        },
        RunAnime() {
            let that = this;
            that.$nextTick(() => {
                let circle_els = document.querySelectorAll(
                    `#${that.component_id} circle`
                );

                for (let i = 0; i < circle_els.length; i++) {
                    anime
                        .timeline({
                            targets: circle_els[i],
                            easing: "linear",
                            loop: true,
                        })
                        .add({
                            translateY: -150,
                            delay: i * 200,
                            duration: 8000,
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
                this.init();
                this.RunAnime();
            }
        },
    },
    beforeDestroy() {
        // 清除动画
        anime.remove([
            `#${this.component_id} circle`,
        ]);
    }
};
</script>
 
<style scoped lang="less">
#colored_ball_container {
    width: 100%;
    height: 100%;
    color: red;
}
</style>