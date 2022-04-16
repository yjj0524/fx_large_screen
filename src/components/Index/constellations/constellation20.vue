<template>
    <div class="constellation_container_20">
        <svg
            id="svg_item"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <filter id="f20" x="-50%" y="-50%" width="200%" height="200%">
                    <feOffset
                        result="offOut"
                        in="SourceGraphic"
                        dx="0"
                        dy="0"
                    />
                    <feGaussianBlur
                        result="blurOut"
                        in="offOut"
                        stdDeviation="3"
                    />
                    <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                </filter>
            </defs>
            <g filter="url(#f20)">
                <circle
                    id="svg_circle1"
                    :cx="datas.svg.cx1"
                    :cy="datas.svg.cy1"
                    r="4"
                    stroke="white"
                    stroke-width="1"
                    fill="white"
                />
                <path
                    id="svg_path1"
                    :d="datas.svg.x1"
                    stroke-width="2"
                    style="fill: transparent; stroke: white"
                />
                <circle
                    id="svg_circle2"
                    :cx="datas.svg.cx2"
                    :cy="datas.svg.cy2"
                    r="4"
                    stroke="white"
                    stroke-width="1"
                    fill="white"
                />
                <path
                    id="svg_path2"
                    :d="datas.svg.x2"
                    stroke-width="2"
                    style="fill: transparent; stroke: white"
                />
                <circle
                    id="svg_circle3"
                    :cx="datas.svg.cx3"
                    :cy="datas.svg.cy3"
                    r="6"
                    stroke="white"
                    stroke-width="1"
                    fill="white"
                />
            </g>
        </svg>
    </div>
</template>

<script>
// import anime from "animejs/lib/anime.js";

export default {
    name: "LineComponent",
    components: {},
    data() {
        return {
            datas: {
                svg: {
                    x1: "M20 100 L35 85",
                    x2: "M35 85 L65 60",

                    cx1: 20,
                    cy1: 100,

                    cx2: 35,
                    cy2: 85,

                    cx3: 65,
                    cy3: 60,
                },
            },
        };
    },
    mounted() {
        let duration = 20000;
    },
    methods: {},
};
</script>

<style lang="less" scoped>
.constellation_container_20 {
    width: 100px;
    height: 120px;
    position: absolute;
    top: 154px;
    left: -386px;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    // border: 1px solid red;
}
</style>
