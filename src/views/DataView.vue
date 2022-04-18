<template>
    <div class="data_view_container">
        <div class="content_box">
            <!-- 背景图-地图 -->
            <img class="map_bg_img" src="@/static/images/map_bg.png" alt="" />
            <div class="middle_content">
                <div class="top_conatiner">
                    <h1 class="top_title">奉贤区新桥村智慧村庄信息服务平台</h1>
                </div>
                <div class="current_weather">20°C 晴</div>
                <div class="current_time">2022.04.18 12:00:00</div>
            </div>
            <div class="data_container">
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
                        <div class="left_top_datas"></div>
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
                        <div class="left_bottom_datas"></div>
                    </div>
                </div>
                <div class="data_item_middle"></div>
                <div class="data_item_right">
                    <div class="right_top">
                        <div class="rigth_top_item_1">
                            <div class="item_decorate">
                                <img
                                    class="right_top_img"
                                    src="@/static/images/small_decorate.png"
                                    alt=""
                                />
                                <div class="title1">生态宜居</div>
                                <div class="title2">查看详情 >></div>
                            </div>
                            <div class="right_top_datas"></div>
                        </div>
                        <div class="rigth_top_item_2">
                            <div class="item_decorate">
                                <img
                                    class="right_top_img"
                                    src="@/static/images/small_decorate.png"
                                    alt=""
                                />
                                <div class="title1">乡风文明</div>
                                <div class="title2">查看详情 >></div>
                            </div>
                            <div class="right_top_datas"></div>
                        </div>
                        <div class="rigth_top_item_3"></div>
                    </div>

                    <div class="right_bottom">
                        <div class="right_bottom_decorate">
                            <img
                                class="right_bottom_img"
                                src="@/static/images/small_decorate.png"
                                alt=""
                            />
                            <div class="title1">生活富裕</div>
                            <div class="title2">查看详情 >></div>
                        </div>
                        <div class="right_bottom_datas"></div>
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
        <div class="btn_group_left">
            <div class="btn_item" v-for="(item, index) of 4" :key="index">
                <img
                    class="btn_img img_10"
                    src="@/static/images/golden_btn/golden_btn_10.png"
                    alt=""
                />
                <img
                    class="btn_img img_9"
                    src="@/static/images/golden_btn/golden_btn_9.png"
                    alt=""
                />
                <img
                    class="btn_img img_8"
                    src="@/static/images/golden_btn/golden_btn_8.png"
                    alt=""
                />
                <img
                    class="btn_img img_7"
                    src="@/static/images/golden_btn/golden_btn_7.png"
                    alt=""
                />
                <div class="bird_container">
                    <img
                        class="btn_img img_6"
                        src="@/static/images/golden_btn/golden_btn_6.png"
                        alt=""
                    />
                    <img class="btn_img img_5" :src="btn_img" alt="" />
                </div>
                <img
                    class="btn_img img_4"
                    src="@/static/images/golden_btn/golden_btn_4.png"
                    alt=""
                />
                <img
                    class="btn_img img_3"
                    src="@/static/images/golden_btn/golden_btn_3.png"
                    alt=""
                />
                <img
                    class="btn_img img_2"
                    src="@/static/images/golden_btn/golden_btn_2.png"
                    alt=""
                />
                <img
                    class="btn_img img_1"
                    src="@/static/images/golden_btn/golden_btn_1.png"
                    alt=""
                />
                <div class="describe">
                    <img src="@/static/images/btn_middle_img.png" alt="" />
                    <div class="title">总览</div>
                </div>
            </div>
        </div>
        <!-- 右边按钮组 -->
        <div class="btn_group_right">
            <div class="btn_item">
                <img
                    class="btn_img img_10"
                    src="@/static/images/blue_btn/blue_btn_10.png"
                    alt=""
                />
                <img
                    class="btn_img img_9"
                    src="@/static/images/blue_btn/blue_btn_9.png"
                    alt=""
                />
                <img
                    class="btn_img img_8"
                    src="@/static/images/blue_btn/blue_btn_8.png"
                    alt=""
                />
                <img
                    class="btn_img img_7"
                    src="@/static/images/blue_btn/blue_btn_7.png"
                    alt=""
                />
                <div class="bird_container">
                    <img
                        class="btn_img img_6"
                        src="@/static/images/blue_btn/blue_btn_6.png"
                        alt=""
                    />
                    <img class="btn_img img_5" :src="btn_img" alt="" />
                </div>
                <img
                    class="btn_img img_4"
                    src="@/static/images/blue_btn/blue_btn_4.png"
                    alt=""
                />
                <img
                    class="btn_img img_3"
                    src="@/static/images/blue_btn/blue_btn_3.png"
                    alt=""
                />
                <img
                    class="btn_img img_2"
                    src="@/static/images/blue_btn/blue_btn_2.png"
                    alt=""
                />
                <img
                    class="btn_img img_1"
                    src="@/static/images/blue_btn/blue_btn_1.png"
                    alt=""
                />
                <div class="describe">
                    <img src="@/static/images/btn_middle_img.png" alt="" />
                    <div class="title">总览</div>
                </div>
            </div>
            <div class="btn_item" v-for="(item, index) of 3" :key="index">
                <img
                    class="btn_img img_10"
                    src="@/static/images/golden_btn/golden_btn_10.png"
                    alt=""
                />
                <img
                    class="btn_img img_9"
                    src="@/static/images/golden_btn/golden_btn_9.png"
                    alt=""
                />
                <img
                    class="btn_img img_8"
                    src="@/static/images/golden_btn/golden_btn_8.png"
                    alt=""
                />
                <img
                    class="btn_img img_7"
                    src="@/static/images/golden_btn/golden_btn_7.png"
                    alt=""
                />
                <div class="bird_container">
                    <img
                        class="btn_img img_6"
                        src="@/static/images/golden_btn/golden_btn_6.png"
                        alt=""
                    />
                    <img class="btn_img img_5" :src="btn_img" alt="" />
                </div>
                <img
                    class="btn_img img_4"
                    src="@/static/images/golden_btn/golden_btn_4.png"
                    alt=""
                />
                <img
                    class="btn_img img_3"
                    src="@/static/images/golden_btn/golden_btn_3.png"
                    alt=""
                />
                <img
                    class="btn_img img_2"
                    src="@/static/images/golden_btn/golden_btn_2.png"
                    alt=""
                />
                <img
                    class="btn_img img_1"
                    src="@/static/images/golden_btn/golden_btn_1.png"
                    alt=""
                />
                <div class="describe">
                    <img src="@/static/images/btn_middle_img.png" alt="" />
                    <div class="title">总览</div>
                </div>
            </div>
        </div>
        <!-- 左边遮布 -->
        <div class="cover_cloth_left"></div>
        <!-- 右边遮布 -->
        <div class="cover_cloth_right"></div>
    </div>
</template>

<script>
import anime from "animejs/lib/anime.js";

export default {
    name: "DataView",
    data() {
        return {
            img_index: 5,
            btn_img: require("@/static/images/golden_btn/golden_btn_5.png"),
        };
    },
    mounted() {
        this.MoveScroll();
        let that = this;

        // anime.timeline({
        //     targets: ".btn_group_left .img_7",
        //     loop: true,
        //     easing: "linear",
        //     duration: 3000,
        // }).add({
        //     rotateY: 40,
        // }).add({
        //     rotateY: 0,
        // }).add({
        //     rotateY: -40,
        // }).add({
        //     rotateY: 0,
        // });

        // anime({
        //     targets: ".btn_group_left .img_8",
        //     rotate: -360,
        //     loop: true,
        //     easing: "linear",
        //     duration: 5000,
        // });

        // anime({
        //     targets: ".btn_group_left .img_9",
        //     rotate: 360,
        //     loop: true,
        //     easing: "linear",
        //     duration: 5000,
        // });

        // anime({
        //     targets: ".btn_group_left .bird_container",
        //     rotate: -360,
        //     loop: true,
        //     easing: "linear",
        //     duration: 5000,
        // });

        // setInterval(() => {
        //     let index = that.img_index == 5 ? 6 : 5;
        //     that.img_index = index;
        //     that.btn_img = require(`@/static/images/golden_btn/golden_btn_${index}.png`)
        // }, 300);
    },
    methods: {
        // 移动画卷
        MoveScroll() {
            // 左卷轴向左移动
            anime({
                targets: ".scroll_container .scroll_1",
                translateX: -1709,
                loop: 1,
                easing: "linear",
                duration: 0,
            });

            // 左卷轴里的图片向左移动
            anime({
                targets: ".scroll_1 .scroll_img_1",
                translateX: -1050,
                loop: 1,
                easing: "linear",
                duration: 0,
                complete: function () {
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
                duration: 0,
            });

            // 右卷轴里的图片向右移动
            anime({
                targets: ".scroll_2 .scroll_img_2",
                loop: 1,
                easing: "linear",
                translateX: 1200,
                duration: 0,
            });

            // 移动左边遮布
            anime({
                targets: ".data_view_container .cover_cloth_left",
                translateX: -1709,
                loop: 1,
                easing: "linear",
                duration: 0,
            });

            // 移动右边遮布
            anime({
                targets: ".data_view_container .cover_cloth_right",
                translateX: 1732,
                loop: 1,
                easing: "linear",
                duration: 0,
            });
        },
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
        background-image: url("@/static/images/scenery_container_bg_img.png");
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
            .top_conatiner {
                width: 100%;
                height: 120%;
                background-image: url("@/static/images/top_decorate.png");
                background-size: 100% 100%;
                .top_title {
                    margin: 0;
                    font-size: 3.3rem;
                    color: #ffe7cb;
                    letter-spacing: 12px;
                    text-shadow: 3px 3px 15px #6b3661, -3px -3px 15px #6b3661;
                }
            }
            .current_weather {
                position: absolute;
                top: 50px;
                left: 20px;
                color: white;
            }
            .current_time {
                position: absolute;
                top: 50px;
                right: 20px;
                color: white;
            }
        }
        .data_container {
            position: relative;
            top: 10%;
            width: 100%;
            height: 90%;
            display: flex;
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
                        background-image: url("@/static/images/left_top_frame.png");
                        background-size: 100% 100%;
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
            .data_item_middle {
                width: 52.5%;
                height: 98.7%;
                // background: #9cb0c0;
                // opacity: 0.3;
            }
            .data_item_right {
                width: 23.5%;
                height: 100%;
                display: flex;
                flex-direction: column;
                .right_top {
                    width: 100%;
                    height: 60%;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    .rigth_top_item_1 {
                        width: 100%;
                        height: 47%;
                        position: relative;
                        .item_decorate {
                            height: 10%;
                            position: relative;
                            .right_top_img {
                                position: absolute;
                                top: 0;
                                left: 13px;
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
                            }
                        }
                        .right_top_datas {
                            width: 95%;
                            height: 76%;
                            position: absolute;
                            top: 50px;
                            left: 30px;
                            background-image: url("@/static/images/right_top_frame.png");
                            background-size: 100% 100%;
                        }
                    }
                    .rigth_top_item_2 {
                        width: 100%;
                        height: 47%;
                        position: relative;
                        .item_decorate {
                            height: 10%;
                            position: relative;
                            .right_top_img {
                                position: absolute;
                                top: 0;
                                left: 13px;
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
                            }
                        }
                        .right_top_datas {
                            width: 95%;
                            height: 76%;
                            position: absolute;
                            top: 50px;
                            left: 30px;
                            background-image: url("@/static/images/right_top_frame.png");
                            background-size: 100% 100%;
                        }
                    }
                    .rigth_top_item_3 {
                        width: 100%;
                        height: 6%;
                    }
                }
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
                        }
                    }
                    .right_bottom_datas {
                        width: 95%;
                        height: 84%;
                        position: absolute;
                        top: 50px;
                        left: 32px;
                        background-image: url("@/static/images/right_bottom_frame.png");
                        background-size: 100% 100%;
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
    .cover_cloth_left {
        position: absolute;
        background: #eeeeee;
        width: 1708px;
        height: 100%;
        top: 0;
        left: 0;
    }
    .cover_cloth_right {
        position: absolute;
        background: #eeeeee;
        width: 1731px;
        height: 100%;
        top: 0;
        right: 0;
    }
}
</style>
