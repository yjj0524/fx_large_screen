<template>
    <div class="constellation_container_4">
        <svg
            id="svg_item"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <filter id="f4" x="-50%" y="-50%" width="200%" height="200%">
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
            <g filter="url(#f4)">
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
                    r="3"
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
                    x1: "M25 80 L35 95",
                    x2: "M35 95 L45 105",
                    x3: "M45 105 L65 125",
                    x4: "M65 125 L75 115",
                    x5: "M75 115 L130 90",
                    x6: "M130 90 L145 85",
                    x7: "M145 85 L75 85",
                    x8: "M75 85 L60 80",
                    x9: "M60 80 L45 75",
                    x10: "M45 75 L25 80",
                    cx1: 25,
                    cy1: 80,

                    cx2: 35,
                    cy2: 95,

                    cx3: 45,
                    cy3: 105,

                    cx4: 65,
                    cy4: 125,

                    cx5: 75,
                    cy5: 115,

                    cx6: 130,
                    cy6: 90,

                    cx7: 145,
                    cy7: 85,

                    cx8: 75,
                    cy8: 85,

                    cx9: 60,
                    cy9: 80,

                    cx10: 45,
                    cy10: 75,
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
.constellation_container_4 {
    width: 180px;
    height: 150px;
    position: absolute;
    top: 128px;
    left: 391px;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    // border: 1px solid red;
}
</style>
