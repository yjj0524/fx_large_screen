<template>
    <div class="data_view_container">
        <div class="content_box">
            <!-- 背景图-地图 -->
            <img class="map_bg_img" src="@/static/images/map_bg.png" alt="" />
            <div class="middle_content">
                <img
                    class="top_img"
                    src="@/static/images/top_decorate.png"
                    alt=""
                />
                <div class="top_conatiner">
                    <h1 class="top_title">奉贤区新桥村智慧村庄信息服务平台</h1>
                </div>
                <div class="current_temperature">
                    20°C<span class="current_weather">晴</span>
                </div>
                <div class="current_date">
                    {{ specific_date
                    }}<span class="current_time">{{ specific_time }}</span>
                </div>
            </div>
            <div class="data_container" v-if="show_data_container">
                <div class="data_item_left">
                    <div class="left_top">
                        <div class="left_top_decorate">
                            <img
                                class="left_top_img"
                                src="@/static/images/small_decorate.png"
                                alt=""
                            />
                            <div class="title">新桥总览</div>
                        </div>
                        <div class="left_top_datas">
                            <div
                                class="data_item"
                                v-for="(item, index) in datas"
                                :key="index"
                            >
                                <div class="data_img">
                                    <img
                                        class="item_img"
                                        :src="item.img"
                                        alt=""
                                    />
                                </div>
                                <div class="data_name">{{ item.name }}</div>
                                <div class="data_value">{{ item.value }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="left_bottom">
                        <div class="left_bottom_decorate">
                            <img
                                class="left_bottom_img"
                                src="@/static/images/small_decorate.png"
                                alt=""
                            />
                            <div class="title">产业兴旺</div>
                        </div>
                        <div class="left_bottom_datas">
                            <IndustryChartComponent
                                :run_industry_chart="run_industry_chart"
                            />
                        </div>
                    </div>
                </div>
                <div class="data_middle" @click.once="OpenArcGisMapContainer">
                    <div class="data_item_middle">
                        <div class="middle_container">
                            <ArcGisComponent />
                        </div>
                    </div>
                </div>

                <div class="data_item_right">
                    <SliderComponent />
                    <div class="right_bottom">
                        <div class="right_bottom_decorate">
                            <img
                                class="right_bottom_img"
                                src="@/static/images/small_decorate.png"
                                alt=""
                            />
                            <div class="title1">生活富裕</div>
                            <div class="title2">
                                查看详情<span
                                    ><img
                                        class="view_details"
                                        src="@/static/images/view_details.png"
                                        alt=""
                                /></span>
                            </div>
                        </div>
                        <div class="right_bottom_datas">
                            <div class="right_bottom_bg">
                                <img
                                    class="life_affluent_img_4"
                                    src="@/static/images/life_affluent_4.png"
                                    alt=""
                                />
                                <img
                                    class="life_affluent_img_3"
                                    src="@/static/images/life_affluent_3.png"
                                    alt=""
                                />
                                <img
                                    class="life_affluent_img_2"
                                    src="@/static/images/life_affluent_2.png"
                                    alt=""
                                />
                                <img
                                    class="life_affluent_img_1"
                                    src="@/static/images/life_affluent_1.png"
                                    alt=""
                                />
                                <LifeColoredBallComponent
                                    :run_colored_ball_animation="
                                        run_colored_ball_animation
                                    "
                                />
                            </div>
                            <div class="life_affluent_container">
                                <LifeAffluentChartComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 画卷 -->
        <div class="scroll_container">
            <div class="scroll_1">
                <div class="scroll_1_1"></div>
                <div class="scroll_1_2">
                    <div class="scroll_img_1"></div>
                </div>
            </div>
            <div class="scroll_2">
                <div class="scroll_2_1"></div>
                <div class="scroll_2_2">
                    <div class="scroll_img_2"></div>
                </div>
            </div>
        </div>
        <!-- 左边按钮组 -->
        <div class="btn_group_left" v-show="scroll_anime_complete">
            <div
                class="btn_item"
                v-for="(item, index) of 4"
                :key="index"
                @click="Overview(index)"
            >
                <img
                    class="btn_img img_10"
                    :src="[
                        index == btn_item_selected_index
                            ? require('../static/images/blue_btn/blue_btn_10.png')
                            : require('../static/images/golden_btn/golden_btn_10.png'),
                    ]"
                    alt=""
                />
                <img
                    class="btn_img img_9"
                    :src="[
                        index == btn_item_selected_index
                            ? require('../static/images/blue_btn/blue_btn_9.png')
                            : require('../static/images/golden_btn/golden_btn_9.png'),
                    ]"
                    alt=""
                />
                <img
                    class="btn_img img_8"
                    :src="[
                        index == btn_item_selected_index
                            ? require('../static/images/blue_btn/blue_btn_8.png')
                            : require('../static/images/golden_btn/golden_btn_8.png'),
                    ]"
                    alt=""
                />
                <img
                    class="btn_img img_7"
                    :src="[
                        index == btn_item_selected_index
                            ? require('../static/images/blue_btn/blue_btn_7.png')
                            : require('../static/images/golden_btn/golden_btn_7.png'),
                    ]"
                    alt=""
                />
                <div class="colored_ball_container">
                    <ColoredBallComponent
                        :component_index="index + 1"
                        :run_colored_ball_animation="run_colored_ball_animation"
                    />
                </div>
                <div class="bird_container">
                    <img
                        class="btn_img img_6"
                        :src="[
                            index == btn_item_selected_index
                                ? require('../static/images/blue_btn/blue_btn_6.png')
                                : require('../static/images/golden_btn/golden_btn_6.png'),
                        ]"
                        alt=""
                    />
                    <img
                        class="btn_img img_5"
                        :src="[
                            index == btn_item_selected_index
                                ? require('../static/images/blue_btn/blue_btn_5.png')
                                : require('../static/images/golden_btn/golden_btn_5.png'),
                        ]"
                        alt=""
                    />
                </div>
                <img
                    class="btn_img img_4"
                    :src="[
                        index == btn_item_selected_index
                            ? require('../static/images/blue_btn/blue_btn_4.png')
                            : require('../static/images/golden_btn/golden_btn_4.png'),
                    ]"
                    alt=""
                />
                <img
                    class="btn_img img_3"
                    :src="[
                        index == btn_item_selected_index
                            ? require('../static/images/blue_btn/blue_btn_3.png')
                            : require('../static/images/golden_btn/golden_btn_3.png'),
                    ]"
                    alt=""
                />
                <img
                    class="btn_img img_2"
                    :src="[
                        index == btn_item_selected_index
                            ? require('../static/images/blue_btn/blue_btn_2.png')
                            : require('../static/images/golden_btn/golden_btn_2.png'),
                    ]"
                    alt=""
                />
                <img
                    class="btn_img img_1"
                    :src="[
                        index == btn_item_selected_index
                            ? require('../static/images/blue_btn/blue_btn_1.png')
                            : require('../static/images/golden_btn/golden_btn_1.png'),
                    ]"
                    alt=""
                />
                <div class="describe">
                    <img src="@/static/images/btn_middle_img.png" alt="" />
                    <div class="title">总览</div>
                </div>
            </div>
        </div>
        <!-- 右边按钮组 -->
        <div class="btn_group_right" v-show="scroll_anime_complete">
            <div
                class="btn_item"
                v-for="(item, index) of 4"
                :key="index"
                @click="Overview(index + 4)"
            >
                <img
                    class="btn_img img_10"
                    :src="[
                        index + 4 == btn_item_selected_index
                            ? require('../static/images/blue_btn/blue_btn_10.png')
                            : require('../static/images/golden_btn/golden_btn_10.png'),
                    ]"
                    alt=""
                />
                <img
                    class="btn_img img_9"
                    :src="[
                        index + 4 == btn_item_selected_index
                            ? require('../static/images/blue_btn/blue_btn_9.png')
                            : require('../static/images/golden_btn/golden_btn_9.png'),
                    ]"
                    alt=""
                />
                <img
                    class="btn_img img_8"
                    :src="[
                        index + 4 == btn_item_selected_index
                            ? require('../static/images/blue_btn/blue_btn_8.png')
                            : require('../static/images/golden_btn/golden_btn_8.png'),
                    ]"
                    alt=""
                />
                <img
                    class="btn_img img_7"
                    :src="[
                        index + 4 == btn_item_selected_index
                            ? require('../static/images/blue_btn/blue_btn_7.png')
                            : require('../static/images/golden_btn/golden_btn_7.png'),
                    ]"
                    alt=""
                />
                <div class="colored_ball_container">
                    <ColoredBallComponent
                        :component_index="index + 5"
                        :run_colored_ball_animation="run_colored_ball_animation"
                    />
                </div>
                <div class="bird_container">
                    <img
                        class="btn_img img_6"
                        :src="[
                            index + 4 == btn_item_selected_index
                                ? require('../static/images/blue_btn/blue_btn_6.png')
                                : require('../static/images/golden_btn/golden_btn_6.png'),
                        ]"
                        alt=""
                    />
                    <img
                        class="btn_img img_5"
                        :src="[
                            index + 4 == btn_item_selected_index
                                ? require('../static/images/blue_btn/blue_btn_5.png')
                                : require('../static/images/golden_btn/golden_btn_5.png'),
                        ]"
                        alt=""
                    />
                </div>
                <img
                    class="btn_img img_4"
                    :src="[
                        index + 4 == btn_item_selected_index
                            ? require('../static/images/blue_btn/blue_btn_4.png')
                            : require('../static/images/golden_btn/golden_btn_4.png'),
                    ]"
                    alt=""
                />
                <img
                    class="btn_img img_3"
                    :src="[
                        index + 4 == btn_item_selected_index
                            ? require('../static/images/blue_btn/blue_btn_3.png')
                            : require('../static/images/golden_btn/golden_btn_3.png'),
                    ]"
                    alt=""
                />
                <img
                    class="btn_img img_2"
                    :src="[
                        index + 4 == btn_item_selected_index
                            ? require('../static/images/blue_btn/blue_btn_2.png')
                            : require('../static/images/golden_btn/golden_btn_2.png'),
                    ]"
                    alt=""
                />
                <img
                    class="btn_img img_1"
                    :src="[
                        index + 4 == btn_item_selected_index
                            ? require('../static/images/blue_btn/blue_btn_1.png')
                            : require('../static/images/golden_btn/golden_btn_1.png'),
                    ]"
                    alt=""
                />
                <div class="describe">
                    <img src="@/static/images/btn_middle_img.png" alt="" />
                    <div class="title">总览</div>
                </div>
            </div>
        </div>
        <!-- 右边返回按钮 -->
        <div class="back_btn" @click="BackPrePage"></div>
        <!-- 左边遮布 -->
        <div class="cover_cloth_left"></div>
        <!-- 右边遮布 -->
        <div class="cover_cloth_right"></div>
    </div>
</template>

<script>
import anime from "animejs/lib/anime.js";
import SliderComponent from "@/components/DataView/SliderComponent.vue";
import IndustryChartComponent from "@/components/DataView/IndustryChartComponent.vue";
import ColoredBallComponent from "@/components/DataView/ColoredBallComponent.vue";
import LifeAffluentChartComponent from "@/components/DataView/LifeAffluentChartComponent.vue";
import LifeColoredBallComponent from "@/components/DataView/LifeColoredBallComponent.vue";
import ArcGisComponent from "@/components/DataView/ArcGisComponent.vue";

export default {
    name: "DataView",
    components: {
        SliderComponent,
        IndustryChartComponent,
        ColoredBallComponent,
        LifeAffluentChartComponent,
        LifeColoredBallComponent,
        ArcGisComponent,
    },
    data() {
        return {
            // 日期
            specific_date: "",
            // 时间
            specific_time: "",
            // 日期时间定时器
            date_timer: null,
            datas: [
                {
                    name: "土地",
                    value: "2.74",
                    img: require("../static/images/data_img_1.png"),
                },
                {
                    name: "房屋",
                    value: "1042",
                    img: require("../static/images/data_img_2.png"),
                },
                {
                    name: "人员",
                    value: "2869",
                    img: require("../static/images/data_img_3.png"),
                },
                {
                    name: "道路",
                    value: "20",
                    img: require("../static/images/data_img_4.png"),
                },
                {
                    name: "河道",
                    value: "30",
                    img: require("../static/images/data_img_5.png"),
                },
                {
                    name: "桥梁",
                    value: "40",
                    img: require("../static/images/data_img_6.png"),
                },
                {
                    name: "企业",
                    value: "100",
                    img: require("../static/images/data_img_7.png"),
                },
                {
                    name: "服务点",
                    value: "7",
                    img: require("../static/images/data_img_8.png"),
                },
                {
                    name: "微网格",
                    value: "19",
                    img: require("../static/images/data_img_9.png"),
                },
            ],
            // 左右按钮组的选中项
            btn_item_selected_index: null,
            // 卷轴动画完成
            scroll_anime_complete: false,
            // 运行彩球动画
            run_colored_ball_animation: false,
            // 运行柱状图动画
            run_industry_chart: false,
            show_data_container: false,
        };
    },
    mounted() {
        this.GetCurrentTime();
        this.date_timer = setInterval(() => {
            this.GetCurrentTime();
        }, 1000);
        this.MoveScroll();
    },
    methods: {
        GetCurrentTime() {
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            if (month < 10) {
                month = `0${month}`;
            }
            let day = date.getDate();
            if (day < 10) {
                day = `0${day}`;
            }
            let hour = date.getHours();
            if (hour < 10) {
                hour = `0${hour}`;
            }
            let minute = date.getMinutes();
            if (minute < 10) {
                minute = `0${minute}`;
            }
            let second = date.getSeconds();
            if (second < 10) {
                second = `0${second}`;
            }

            this.specific_date = `${year}.${month}.${day}`;
            this.specific_time = `${hour}:${minute}:${second}`;

            // console.log(`${year}年${month}月${day}日${hour}时${minute}分${second}秒`);
        },
        // 移动画卷
        MoveScroll() {
            let that = this;
            let duration = 1500;

            // 展示卷轴
            anime({
                targets: ".scroll_container",
                opacity: 1,
                loop: 1,
                easing: "linear",
                duration: 500,
                complete: function () {
                    // 左卷轴向左移动
                    anime({
                        targets: ".scroll_container .scroll_1",
                        translateX: -1709,
                        loop: 1,
                        easing: "linear",
                        duration: duration,
                    });

                    // 左卷轴里的图片向左移动
                    anime({
                        targets: ".scroll_1 .scroll_img_1",
                        translateX: -1050,
                        loop: 1,
                        easing: "linear",
                        duration: duration,
                        complete: function () {
                            // 卷轴动画完成
                            that.scroll_anime_complete = true;
                            // 显示数据容器
                            that.show_data_container = true;

                            that.$nextTick(() => {
                                // 运行彩球动画
                                // that.run_colored_ball_animation = true;
                                // // 运行柱状图动画
                                that.run_industry_chart = true;
                                // that.RunAllAnimation();

                                anime({
                                    targets: ".content_box .data_container",
                                    opacity: 1,
                                    loop: 1,
                                    easing: "linear",
                                    duration: 200,
                                });
                            });

                            anime({
                                targets: ".data_view_container .content_box",
                                zIndex: 2,
                                loop: 1,
                                easing: "linear",
                                duration: 0,
                            });
                        },
                    });

                    // 右卷轴向右移动
                    anime({
                        targets: ".scroll_container .scroll_2",
                        translateX: 1732,
                        loop: 1,
                        easing: "linear",
                        duration: duration,
                    });

                    // 右卷轴里的图片向右移动
                    anime({
                        targets: ".scroll_2 .scroll_img_2",
                        loop: 1,
                        easing: "linear",
                        translateX: 1200,
                        duration: duration,
                    });

                    // 移动左边遮布
                    anime({
                        targets: ".data_view_container .cover_cloth_left",
                        translateX: -1709,
                        loop: 1,
                        easing: "linear",
                        duration: duration,
                    });

                    // 移动右边遮布
                    anime({
                        targets: ".data_view_container .cover_cloth_right",
                        translateX: 1732,
                        loop: 1,
                        easing: "linear",
                        duration: duration,
                    });
                },
            });
        },
        // 运行所有动画
        RunAllAnimation() {
            let that = this;

            // 左右按钮组动画
            anime({
                targets: ".left_top_datas .data_img",
                rotate: -360,

                loop: true,
                easing: "linear",
                duration: 10000,
            });

            anime({
                targets: ".left_top_datas .item_img",
                rotate: 360,
                loop: true,
                easing: "linear",
                duration: 10000,
            });

            anime({
                targets: [".btn_group_left .img_8", ".btn_group_right .img_8"],
                rotate: -360,
                loop: true,
                easing: "linear",
                duration: 10000,
            });

            anime({
                targets: [".btn_group_left .img_9", ".btn_group_right .img_9"],
                rotate: 360,
                loop: true,
                easing: "linear",
                duration: 10000,
            });

            anime({
                targets: [
                    ".btn_group_left .bird_container",
                    ".btn_group_right .bird_container",
                ],
                rotate: -360,
                loop: true,
                easing: "linear",
                duration: 10000,
            });

            // 3D饼图动画
            anime({
                targets: [".life_affluent_img_1", ".life_affluent_img_2"],
                rotate: -360,
                loop: true,
                easing: "linear",
                duration: 15000,
            });

            anime
                .timeline({
                    targets: ".life_affluent_img_3",
                    loop: true,
                    easing: "linear",
                    duration: 2000,
                })
                .add({
                    translateY: 30,
                })
                .add({
                    translateY: 0,
                });
        },
        // 总览
        Overview(index) {
            this.btn_item_selected_index = index;
        },
        // 打开地图
        OpenArcGisMapContainer() {
            anime({
                targets: ".data_middle .data_item_middle",
                opacity: 1,
                loop: 1,
                easing: "linear",
                duration: 1000,
            });
        },
        // 返回上一页
        BackPrePage() {
            if (window.history.length <= 1) {
                this.$router.push({ path: "/" });
                return false;
            } else {
                this.$router.go(-1);
            }
        },
    },
    beforeDestroy() {
        // 清除日期时间定时器
        clearInterval(this.date_timer);
        this.date_timer = null;
    },
};
</script>
<style lang="less" scoped>
.data_view_container {
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eeeeee;
    overflow: hidden;
    .content_box {
        width: 3442px;
        height: 1080px;
        position: relative;
        top: 0;
        left: 0;
        background-image: url("@/static/images/scroll_4.png");
        background-size: 120% 120%;
        background-position: center center;
        overflow: hidden;
        .map_bg_img {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: -287px;
        }
        .middle_content {
            width: 100%;
            height: 10%;
            position: absolute;
            top: 0;
            left: 0;
            // border: 1px solid red;
            .top_img {
                width: 101%;
                height: 120%;
                position: absolute;
                top: 22px;
                left: -13px;
                right: 0;
                bottom: 0;
                margin: auto;
            }
            .top_title {
                margin: 0;
                font-size: 3.3rem;
                color: #ffe7cb;
                letter-spacing: 12px;
                text-shadow: 3px 3px 15px #6b3661, -3px -3px 15px #6b3661;
                position: absolute;
                top: 3px;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
            }
            .current_temperature {
                position: absolute;
                top: 50px;
                left: 20px;
                color: white;
                font-size: 1.5rem;
                .current_weather {
                    margin-left: 30px;
                }
            }
            .current_date {
                position: absolute;
                top: 50px;
                right: 20px;
                color: white;
                font-size: 1.5rem;
                .current_time {
                    margin-left: 25px;
                    font-weight: bold;
                    font-size: 1.7rem;
                }
            }
        }
        .data_container {
            position: relative;
            top: 10%;
            width: 100%;
            height: 90%;
            display: flex;
            opacity: 0;
            // border: 1px solid red;
            .data_item_left {
                width: 23.8%;
                height: 100%;
                display: flex;
                flex-direction: column;
                .left_top {
                    width: 100%;
                    height: 55%;
                    position: relative;
                    .left_top_decorate {
                        height: 10%;
                        position: relative;
                        .left_top_img {
                            position: absolute;
                            top: 0;
                            left: 14px;
                            width: 97%;
                        }
                        .title {
                            font-size: 2rem;
                            color: white;
                            position: absolute;
                            top: 5px;
                            left: 90px;
                            font-weight: bold;
                        }
                    }
                    .left_top_datas {
                        width: 95%;
                        height: 88%;
                        position: absolute;
                        top: 50px;
                        left: 30px;
                        display: flex;
                        background-image: url("@/static/images/left_top_frame.png");
                        background-size: 100% 100%;
                        flex-wrap: wrap;
                        align-content: space-around;
                        .data_item {
                            width: 100px;
                            height: 180px;
                            margin-left: 47px;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            .data_img {
                                width: 100px;
                                height: 100px;
                                background-image: url("@/static/images/data_bg.png");
                                background-size: 100% 100%;
                                .item_img {
                                    width: 75px;
                                    height: 75px;
                                    margin: 11px 3px 0 0;
                                }
                            }
                            .data_name {
                                font-size: 1.2rem;
                                color: #98ddfe;
                            }
                            .data_value {
                                font-size: 2rem;
                                color: #ffc47f;
                            }
                        }
                    }
                }
                .left_bottom {
                    width: 100%;
                    height: 45%;
                    position: relative;
                    .left_bottom_decorate {
                        height: 10%;
                        position: relative;
                        .left_bottom_img {
                            position: absolute;
                            top: 0;
                            left: 14px;
                            width: 97%;
                        }
                        .title {
                            font-size: 2rem;
                            color: white;
                            position: absolute;
                            top: 5px;
                            left: 90px;
                            font-weight: bold;
                        }
                    }
                    .left_bottom_datas {
                        width: 95%;
                        height: 85%;
                        position: absolute;
                        top: 50px;
                        left: 30px;
                        background-image: url("@/static/images/left_bottom_frame.png");
                        background-size: 100% 100%;
                    }
                }
            }
            .data_middle {
                width: 52.5%;
                height: 98.7%;
                .data_item_middle {
                    width: 100%;
                    height: 100%;
                    // background: #9cb0c0;
                    opacity: 0;
                    background-image: url("@/static/images/middle_map_bg_1.png");
                    background-size: 100% 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .middle_container {
                        width: 98%;
                        height: 96%;
                        background-image: url("@/static/images/middle_map_bg_2.png");
                        background-size: 100% 100%;
                    }
                }
            }
            .data_item_right {
                width: 23.5%;
                height: 100%;
                display: flex;
                flex-direction: column;

                .right_bottom {
                    width: 100%;
                    height: 40%;
                    position: relative;
                    .right_bottom_decorate {
                        height: 10%;
                        position: relative;
                        .right_bottom_img {
                            position: absolute;
                            top: 0;
                            left: 14px;
                            width: 97%;
                        }
                        .title1 {
                            font-size: 2rem;
                            color: white;
                            position: absolute;
                            top: 5px;
                            left: 90px;
                            font-weight: bold;
                        }
                        .title2 {
                            font-size: 1.2rem;
                            color: #ffd3a0;
                            position: absolute;
                            top: 20px;
                            right: 30px;
                            font-weight: bold;
                            .view_details {
                                margin-left: 5px;
                                width: 10px;
                                height: 10px;
                            }
                        }
                    }
                    .right_bottom_datas {
                        width: 95%;
                        height: 84%;
                        position: absolute;
                        top: 50px;
                        left: 33px;
                        background-image: url("@/static/images/right_bottom_frame.png");
                        background-size: 100% 100%;
                        .right_bottom_bg {
                            width: 350px;
                            height: 350px;
                            // border: 1px solid red;
                            position: relative;
                            top: 20px;
                            left: 92px;
                            transform: rotateX(70deg);
                            .life_affluent_img_4 {
                                width: 100%;
                                height: 100%;
                                position: absolute;
                                top: 39px;
                                left: 0;
                            }
                            .life_affluent_img_3 {
                                width: 107%;
                                height: 100%;
                                position: absolute;
                                top: 10px;
                                left: -12px;
                            }
                            .life_affluent_img_2 {
                                width: 65%;
                                height: 60%;
                                position: absolute;
                                top: 72px;
                                left: 52px;
                            }
                            .life_affluent_img_1 {
                                width: 95%;
                                height: 95%;
                                position: absolute;
                                top: 0;
                                left: 10px;
                            }
                        }
                        .life_affluent_container {
                            width: 100%;
                            height: 100%;
                            position: relative;
                            top: -352px;
                            left: 0;
                        }
                    }
                }
            }
        }
    }
    .scroll_container {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        z-index: 1;
        .scroll_1 {
            width: 200px;
            height: 1260px;
            position: absolute;
            top: -93px;
            left: 1708px;
            .scroll_1_1 {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background-image: url("@/static/images/scroll_1.png");
                background-size: 100% 100%;
            }
            .scroll_1_2 {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background-image: url("@/static/images/scroll_2.png");
                background-size: 100% 100%;
                overflow: hidden;
                .scroll_img_1 {
                    width: 1500px;
                    height: 86.5%;
                    position: absolute;
                    top: 70px;
                    left: -217px;
                    background-image: url("@/static/images/scroll_3.png");
                    background-size: 500px 520px;
                }
            }
        }
        .scroll_2 {
            width: 200px;
            height: 1260px;
            position: absolute;
            top: -93px;
            left: 1908px;
            .scroll_2_1 {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background-image: url("@/static/images/scroll_1.png");
                background-size: 100% 100%;
                overflow: hidden;
            }
            .scroll_2_2 {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                overflow: hidden;
                background-image: url("@/static/images/scroll_2.png");
                background-size: 100% 100%;
                overflow: hidden;
                .scroll_img_2 {
                    width: 1500px;
                    height: 86.5%;
                    position: absolute;
                    top: 70px;
                    left: -1286px;
                    transform: rotateY(180deg);
                    background-image: url("@/static/images/scroll_3.png");
                    background-size: 500px 520px;
                }
            }
        }
    }
    .btn_group_left {
        width: 200px;
        height: 90%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        z-index: 2;
        .btn_item {
            width: 135px;
            height: 135px;
            // border: 1px solid red;
            position: relative;
            .bird_container {
                width: 148px;
                height: 148px;
                position: absolute;
                top: 0;
                left: -7px;
                right: 0;
                bottom: 0;
                margin: auto;
                border-radius: 50%;
                // border: 1px solid red;
                .img_5 {
                    top: 111px;
                    left: -93px;
                }
                .img_6 {
                    left: 90px;
                    top: -114px;
                }
            }
            .describe {
                width: 80px;
                height: 80px;
                // border: 1px solid red;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                img {
                    width: 35px;
                }
                .title {
                    color: #7e684e;
                    font-size: 1.2rem;
                    font-weight: bold;
                }
            }
            .btn_img {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
            }
            .img_3 {
                top: 22px;
                left: -7px;
            }
            .img_4 {
                left: -1px;
            }
            .img_7 {
                left: -56.5px;
                top: -31px;
            }
            .img_9 {
                left: -18px;
            }
            .img_10 {
                left: -15px;
            }
        }
    }
    .btn_group_right {
        width: 200px;
        height: 90%;
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        z-index: 2;
        .btn_item {
            width: 135px;
            height: 135px;
            // border: 1px solid red;
            position: relative;
            .bird_container {
                width: 148px;
                height: 148px;
                position: absolute;
                top: 0;
                left: -7px;
                right: 0;
                bottom: 0;
                margin: auto;
                border-radius: 50%;
                // border: 1px solid red;
                .img_5 {
                    top: 111px;
                    left: -93px;
                }
                .img_6 {
                    left: 90px;
                    top: -114px;
                }
            }
            .describe {
                width: 80px;
                height: 80px;
                // border: 1px solid red;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                img {
                    width: 35px;
                }
                .title {
                    color: #7e684e;
                    font-size: 1.2rem;
                    font-weight: bold;
                }
            }
            .btn_img {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
            }
            .img_3 {
                top: 22px;
                left: -7px;
            }
            .img_4 {
                left: -1px;
            }
            .img_7 {
                left: -56.5px;
                top: -31px;
            }
            .img_9 {
                left: -18px;
            }
            .img_10 {
                left: -15px;
            }
        }
    }
    .back_btn {
        width: 62px;
        height: 55px;
        position: absolute;
        bottom: 45px;
        right: 72px;
        background-image: url("@/static/images/back_img.png");
        background-size: 100% 100%;
        // border: 1px solid red;
        z-index: 2;
    }
    .colored_ball_container {
        width: 180px;
        height: 200px;
        position: absolute;
        top: -51px;
        left: -24px;
        right: 0;
        bottom: 0;
        margin: auto;
        // border: 1px solid red;
    }
    .cover_cloth_left {
        position: absolute;
        background: #eeeeee;
        width: 1708px;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
    }
    .cover_cloth_right {
        position: absolute;
        background: #eeeeee;
        width: 1731px;
        height: 100%;
        top: 0;
        right: 0;
        z-index: 1;
    }
}
</style>
