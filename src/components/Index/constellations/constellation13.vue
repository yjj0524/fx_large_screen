<template>
    <div class="constellation_container_13">
        <svg
            id="svg_item"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <filter id="f13" x="-50%" y="-50%" width="200%" height="200%">
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
            <g filter="url(#f13)">
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
                    r="4"
                    stroke="white"
                    stroke-width="1"
                    fill="white"
                />
                <path
                    id="svg_path3"
                    :d="datas.svg.x3"
                    stroke-width="2"
                    style="fill: transparent; stroke: white"
                />
                <circle
                    id="svg_circle4"
                    :cx="datas.svg.cx4"
                    :cy="datas.svg.cy4"
                    r="4"
                    stroke="white"
                    stroke-width="1"
                    fill="white"
                />
                <path
                    id="svg_path4"
                    :d="datas.svg.x4"
                    stroke-width="2"
                    style="fill: transparent; stroke: white"
                />
                <circle
                    id="svg_circle5"
                    :cx="datas.svg.cx5"
                    :cy="datas.svg.cy5"
                    r="4"
                    stroke="white"
                    stroke-width="1"
                    fill="white"
                />
                <path
                    id="svg_path5"
                    :d="datas.svg.x5"
                    stroke-width="2"
                    style="fill: transparent; stroke: white"
                />
                <circle
                    id="svg_circle6"
                    :cx="datas.svg.cx6"
                    :cy="datas.svg.cy6"
                    r="4"
                    stroke="white"
                    stroke-width="1"
                    fill="white"
                />
                <path
                    id="svg_path6"
                    :d="datas.svg.x6"
                    stroke-width="2"
                    style="fill: transparent; stroke: white"
                />
                <circle
                    id="svg_circle7"
                    :cx="datas.svg.cx7"
                    :cy="datas.svg.cy7"
                    r="4"
                    stroke="white"
                    stroke-width="1"
                    fill="white"
                />
                <path
                    id="svg_path7"
                    :d="datas.svg.x7"
                    stroke-width="2"
                    style="fill: transparent; stroke: white"
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
                    x1: "M30 60 L50 90",
                    x2: "M50 90 L90 90",
                    x3: "M90 90 L105 60",
                    x4: "M105 60 L75 50",
                    x5: "M75 50 L60 35",
                    x6: "M60 35 L45 30",

                    x7: "M50 90 L105 60", // 接1、3
                    cx1: 30,
                    cy1: 60,

                    cx2: 50,
                    cy2: 90,

                    cx3: 90,
                    cy3: 90,

                    cx4: 105,
                    cy4: 60,

                    cx5: 75,
                    cy5: 50,

                    cx6: 60,
                    cy6: 35,

                    cx7: 45,
                    cy7: 30,
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
.constellation_container_13 {
    width: 150px;
    height: 150px;
    position: absolute;
    top: 489px;
    left: 292px;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    // border: 1px solid red;
}
</style>
