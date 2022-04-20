<template>
    <div id="life_affluent"></div>
</template>
 
<script>
import * as echarts from "echarts";
import "echarts-gl"; // 3d图表库

let life_affluent_chart;

export default {
    name: "LifeAffluent",
    data() {
        return {};
    },
    mounted() {
        this.Init();
    },
    methods: {
        Init() {
            // 销毁
            if (
                life_affluent_chart != null &&
                life_affluent_chart != "" &&
                life_affluent_chart != undefined
            ) {
                life_affluent_chart.dispose();
            }
            let chart = document.getElementById("life_affluent");
            life_affluent_chart = echarts.init(chart);
            let option = this.getPie3D([
                {
                    name: "数据一",
                    value: 60,
                    itemStyle: {
                        opacity: 1,
                        color: "#afc8ef",
                    },
                },
                {
                    name: "数据二",
                    value: 25,
                    itemStyle: {
                        opacity: 1,
                        color: "#d16649",
                    },
                },
                {
                    name: "数据三",
                    value: 15,
                    itemStyle: {
                        opacity: 1,
                        color: "#c7b08e",
                    },
                },
            ]);
            life_affluent_chart.setOption(option);

            window.addEventListener("resize", function () {
                life_affluent_chart.resize();
            });
        },
        // 生成扇形的曲面参数方程，用于 series-surface.parametricEquation
        getParametricEquation(
            startRatio,
            endRatio,
            isSelected,
            isHovered,
            k,
            height
        ) {
            // 计算
            let midRatio = (startRatio + endRatio) / 2;

            let startRadian = startRatio * Math.PI * 2;
            let endRadian = endRatio * Math.PI * 2;
            let midRadian = midRatio * Math.PI * 2;

            // 如果只有一个扇形，则不实现选中效果。
            if (startRatio === 0 && endRatio === 1) {
                isSelected = false;
            }

            // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
            k = typeof k !== "undefined" ? 1 : 1 / 3;

            // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
            let offsetX = isSelected ? Math.cos(midRadian) * 0.1 : 0;
            let offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0;

            // 计算高亮效果的放大比例（未高亮，则比例为 1）
            let hoverRate = isHovered ? 1.05 : 1;

            // 返回曲面参数方程
            return {
                u: {
                    min: -Math.PI,
                    max: Math.PI * 3,
                    step: Math.PI / 32,
                },

                v: {
                    min: 0,
                    max: Math.PI * 2,
                    step: Math.PI / 20,
                },

                x: function (u, v) {
                    if (u < startRadian) {
                        return (
                            offsetX +
                            Math.cos(startRadian) *
                                (1 + Math.cos(v) * k) *
                                hoverRate
                        );
                    }
                    if (u > endRadian) {
                        return (
                            offsetX +
                            Math.cos(endRadian) *
                                (1 + Math.cos(v) * k) *
                                hoverRate
                        );
                    }
                    return (
                        offsetX +
                        Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate
                    );
                },

                y: function (u, v) {
                    if (u < startRadian) {
                        return (
                            offsetY +
                            Math.sin(startRadian) *
                                (1 + Math.cos(v) * k) *
                                hoverRate
                        );
                    }
                    if (u > endRadian) {
                        return (
                            offsetY +
                            Math.sin(endRadian) *
                                (1 + Math.cos(v) * k) *
                                hoverRate
                        );
                    }
                    return (
                        offsetY +
                        Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate
                    );
                },

                z: function (u, v) {
                    if (u < -Math.PI * 0.5) {
                        return Math.sin(u);
                    }
                    if (u > Math.PI * 2.5) {
                        return Math.sin(u);
                    }
                    return Math.sin(v) > 0 ? 1 * height : -1;
                },
            };
            // console.log('getparams');
        },
        getPie3D(pieData, internalDiameterRatio = 2) {
            let series = [];
            let sumValue = 0;
            let startValue = 0;
            let endValue = 0;
            let legendData = [];
            let k =
                typeof internalDiameterRatio !== "undefined"
                    ? (1 - internalDiameterRatio) / (1 + internalDiameterRatio)
                    : 1 / 3;

            // 为每一个饼图数据，生成一个 series-surface 配置
            for (let i = 0; i < pieData.length; i++) {
                sumValue += pieData[i].value;

                let seriesItem = {
                    name:
                        typeof pieData[i].name === "undefined"
                            ? `series${i}`
                            : pieData[i].name,
                    type: "surface",
                    parametric: true,
                    wireframe: {
                        show: false,
                    },
                    pieData: pieData[i],
                    pieStatus: {
                        selected: false,
                        hovered: false,
                        k: k,
                    },
                };

                if (typeof pieData[i].itemStyle != "undefined") {
                    let itemStyle = {};

                    typeof pieData[i].itemStyle.color != "undefined"
                        ? (itemStyle.color = pieData[i].itemStyle.color)
                        : null;
                    typeof pieData[i].itemStyle.opacity != "undefined"
                        ? (itemStyle.opacity = pieData[i].itemStyle.opacity)
                        : null;

                    seriesItem.itemStyle = itemStyle;
                }
                series.push(seriesItem);
                // console.log('get3d');
            }

            // 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
            // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
            for (let i = 0; i < series.length; i++) {
                endValue = startValue + series[i].pieData.value;
                // console.log(series[i]);
                series[i].pieData.startRatio = startValue / sumValue;
                series[i].pieData.endRatio = endValue / sumValue;
                series[i].parametricEquation = this.getParametricEquation(
                    series[i].pieData.startRatio,
                    series[i].pieData.endRatio,
                    false,
                    false,
                    k,
                    series[i].pieData.value
                );

                startValue = endValue;

                legendData.push({
                    name: series[i].name,
                    icon: "rect",
                });
            }

            // 准备待返回的配置项，把准备好的 legendData、series 传入。
            let option = {
                // // 鼠标移入事件
                // tooltip: {
                //     formatter: (params) => {
                //         if (params.seriesName !== "mouseoutSeries") {
                //             return `${
                //                 params.seriesName
                //             }<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${
                //                 params.color
                //             };"></span>${
                //                 option.series[params.seriesIndex].pieData.value
                //             }`;
                //         }
                //     },
                // },
                legend: {
                    selectedMode: false, // 禁止点击
                    data: legendData,
                    top: "center",
                    right: "20%",
                    width: 100,
                    textStyle: {
                        color: "#93d5f6",
                        fontSize: 15,
                        padding: [0, 0, 0, 35],
                    },
                    itemGap: 35,
                    itemWidth: 15,
                },
                xAxis3D: {
                    min: -1,
                    max: 1,
                },
                yAxis3D: {
                    min: -1,
                    max: 1,
                },
                zAxis3D: {
                    min: -1,
                    max: 1,
                },
                grid3D: {
                    show: false,
                    boxHeight: 1.5,
                    //top: '30%',
                    left: "-20%",
                    // bottom: "100%",
                    backgroundColor: "transparent",
                    // environment: "white", // 图层背景
                    viewControl: {
                        distance: 300,
                        alpha: 25,
                        beta: 50,
                    },
                },
                series: series,
            };
            // console.log(option);
            return option;
        },
    },
};
</script>
 
<style scoped lang="less">
#life_affluent {
    width: 100%;
    height: 100%;
}
</style>