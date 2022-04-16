<template>
    <div class="constellation_container_14">
        <svg
            id="svg_item"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <filter id="f14" x="-50%" y="-50%" width="200%" height="200%">
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
            <g filter="url(#f14)">
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
                <circle
                    id="svg_circle8"
                    :cx="datas.svg.cx8"
                    :cy="datas.svg.cy8"
                    r="4"
                    stroke="white"
                    stroke-width="1"
                    fill="white"
                />
                <path
                    id="svg_path8"
                    :d="datas.svg.x8"
                    stroke-width="2"
                    style="fill: transparent; stroke: white"
                />
                <circle
                    id="svg_circle9"
                    :cx="datas.svg.cx9"
                    :cy="datas.svg.cy9"
                    r="4"
                    stroke="white"
                    stroke-width="1"
                    fill="white"
                />
                <path
                    id="svg_path9"
                    :d="datas.svg.x9"
                    stroke-width="2"
                    style="fill: transparent; stroke: white"
                />
                <circle
                    id="svg_circle10"
                    :cx="datas.svg.cx10"
                    :cy="datas.svg.cy10"
                    r="4"
                    stroke="white"
                    stroke-width="1"
                    fill="white"
                />
                <path
                    id="svg_path10"
                    :d="datas.svg.x10"
                    stroke-width="2"
                    style="fill: transparent; stroke: white"
                />
                <circle
                    id="svg_circle11"
                    :cx="datas.svg.cx11"
                    :cy="datas.svg.cy11"
                    r="4"
                    stroke="white"
                    stroke-width="1"
                    fill="white"
                />
                <path
                    id="svg_path11"
                    :d="datas.svg.x11"
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
                    x1: "M50 90 L55 70",
                    x2: "M55 70 L85 90",
                    x3: "M85 90 L105 80",
                    x4: "M105 80 L135 70",
                    x5: "M135 70 L155 75",
                    x6: "M155 75 L185 70",

                    x7: "M135 70 L125 40", // 接4
                    x8: "M125 40 L85 45",
                    x9: "M85 45 L65 25",
                    x10: "M65 25 L25 15",

                    x11: "M85 90 L85 45", // 接2、8
                    cx1: 50,
                    cy1: 90,

                    cx2: 55,
                    cy2: 70,

                    cx3: 85,
                    cy3: 90,

                    cx4: 105,
                    cy4: 80,

                    cx5: 135,
                    cy5: 70,

                    cx6: 155,
                    cy6: 75,

                    cx7: 185,
                    cy7: 70,

                    cx8: 125,
                    cy8: 40,

                    cx9: 85,
                    cy9: 45,

                    cx10: 65,
                    cy10: 25,

                    cx11: 25,
                    cy11: 15,
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
.constellation_container_14 {
    width: 200px;
    height: 150px;
    position: absolute;
    top: 550px;
    left: 92px;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    // border: 1px solid red;
}
</style>
