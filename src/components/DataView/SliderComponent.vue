<template>
    <div class="slider_container">
        <!-- Using the slider component -->
        <slider ref="slider" :options="options">
            <!-- slideritem wrapped package with the components you need -->
            <slideritem
                class="right_top"
                v-for="(item, index) of 5"
                :key="index"
            >
                <div class="rigth_top_item_1">
                    <div class="item_decorate">
                        <img
                            class="right_top_img"
                            src="@/static/images/small_decorate.png"
                            alt=""
                        />
                        <div class="title1">生态宜居</div>
                        <div class="title2">
                            查看详情<span
                                ><img
                                    class="view_details"
                                    src="@/static/images/view_details.png"
                                    alt=""
                            /></span>
                        </div>
                    </div>
                    <div class="right_top_datas">
                        <div class="left_item">
                            <img
                                class="left_item_img"
                                src="@/static/images/sub_title_bg.jpg"
                                alt=""
                            />
                        </div>
                        <div class="right_item">
                            <div class="right_item_1">
                                <img
                                    class="arrow_group_img"
                                    src="@/static/images/arrow_group.png"
                                    alt=""
                                />
                                <div class="title">美丽乡村</div>
                            </div>
                            <div class="right_item_2">
                                <div class="title">空间布局:</div>
                                <div class="value">1轴、2核心、3节点</div>
                            </div>
                            <div class="right_item_3">
                                <div class="title">平移上楼:</div>
                                <div class="value">上楼486户、平移20户</div>
                            </div>
                            <div class="right_item_4">
                                <div class="title">星级达标村:</div>
                                <div class="value">
                                    五星1个、四星3个、三星5个
                                </div>
                            </div>
                            <div class="right_item_5">
                                <div class="title">生态商务区:</div>
                                <div class="value"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rigth_top_item_2">
                    <div class="item_decorate">
                        <img
                            class="right_top_img"
                            src="@/static/images/small_decorate.png"
                            alt=""
                        />
                        <div class="title1">乡风文明</div>
                        <div class="title2">
                            查看详情<span
                                ><img
                                    class="view_details"
                                    src="@/static/images/view_details.png"
                                    alt=""
                            /></span>
                        </div>
                    </div>
                    <div class="right_top_datas">
                        <div class="left_item">
                            <img
                                class="left_item_img"
                                src="@/static/images/sub_title_bg.jpg"
                                alt=""
                            />
                        </div>
                        <div class="right_item">
                            <div class="right_item_1">
                                <img
                                    class="arrow_group_img"
                                    src="@/static/images/arrow_group.png"
                                    alt=""
                                />
                                <div class="title">村规民约</div>
                            </div>
                            <div class="right_item_2">
                                <div class="title">空间布局:</div>
                                <div class="value">1轴、2核心、3节点</div>
                            </div>
                            <div class="right_item_3">
                                <div class="title">平移上楼:</div>
                                <div class="value">上楼486户、平移20户</div>
                            </div>
                            <div class="right_item_4">
                                <div class="title">星级达标村:</div>
                                <div class="value">
                                    五星1个、四星3个、三星5个
                                </div>
                            </div>
                            <div class="right_item_5">
                                <div class="title">生态商务区:</div>
                                <div class="value"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </slideritem>
            <!-- Customizable loading -->
            <!-- <div slot="loading">loading...</div> -->
        </slider>
    </div>
</template>

<script>
import anime from "animejs/lib/anime.js";
import { slider, slideritem } from "vue-concise-slider";

export default {
    name: "DataViewSlider",
    components: {
        slider,
        slideritem,
    },
    data() {
        return {
            options: {
                currentPage: 0, //当前页码
                // thresholdDistance: 100, //滑动判定距离
                // thresholdTime: 100, //滑动判定时间
                autoplay: 5000, //自动滚动[ms]
                loop: true, //循环滚动
                // direction: "horizontal", //方向设置，垂直滚动
                // loopedSlides: 1, //无限滚动前后遍历数
                // slidesToScroll: 1, //每次滑动项数
            },
        };
    },
    mounted() {
        let that = this;

        // 查看详情箭头动画
        // anime.timeline({
        //     targets: ".view_details",
        //     loop: true,
        //     easing: "linear",
        //     duration: 1000,
        // }).add({
        //     translateX: 8,
        // });
    },
};
</script>
<style lang="less" scoped>
.slider_container {
    width: 100%;
    height: 60%;
    ::v-deep .slider-touch {
        height: 98%;
    }
    ::v-deep .slider-pagination.slider-pagination-bullets {
        bottom: 6px;
    }
    ::v-deep .slider-pagination-bullet {
        background: #009dff;
    }
    ::v-deep .slider-pagination-bullet-active {
        width: 20px;
        border-radius: 4px;
        background: #00acff;
    }
    .right_top {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
        .rigth_top_item_1 {
            width: 100%;
            height: 50%;
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
                    .view_details {
                        margin-left: 5px;
                        width: 10px;
                        height: 10px;
                    }
                }
            }
            .right_top_datas {
                width: 95%;
                height: 77%;
                position: absolute;
                top: 50px;
                left: 29px;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                background-image: url("@/static/images/right_top_frame.png");
                background-size: 100% 100%;
                .left_item {
                    width: 40%;
                    height: 85%;
                    background-image: url("@/static/images/right_top_small_frame.png");
                    background-size: 100% 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .left_item_img {
                        width: 96%;
                        height: 93%;
                    }
                }
                .right_item {
                    width: 54%;
                    height: 85%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    font-size: 1.3rem;
                    color: white;
                    letter-spacing: 2px;
                    .right_item_1 {
                        margin-top: 5px;
                        font-size: 1.5rem;
                        color: #ffd3a0;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        .arrow_group_img {
                            width: 49px;
                            height: 33px;
                        }
                    }
                    .right_item_2 {
                        margin-top: 10px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        .title {
                            color: #98ddfe;
                        }
                        .value {
                            margin-left: 10px;
                        }
                    }
                    .right_item_3 {
                        margin-top: 10px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        .title {
                            color: #98ddfe;
                        }
                        .value {
                            margin-left: 10px;
                        }
                    }
                    .right_item_4 {
                        margin-top: 10px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        .title {
                            color: #98ddfe;
                        }
                        .value {
                            margin-left: 10px;
                        }
                    }
                    .right_item_5 {
                        margin-top: 10px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        .title {
                            color: #98ddfe;
                        }
                        .value {
                            margin-left: 10px;
                        }
                    }
                }
            }
        }
        .rigth_top_item_2 {
            width: 100%;
            height: 50%;
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
                    .view_details {
                        margin-left: 5px;
                        width: 10px;
                        height: 10px;
                    }
                }
            }
            .right_top_datas {
                width: 95%;
                height: 77%;
                position: absolute;
                top: 50px;
                left: 29px;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                background-image: url("@/static/images/right_top_frame.png");
                background-size: 100% 100%;
                .left_item {
                    width: 40%;
                    height: 85%;
                    background-image: url("@/static/images/right_top_small_frame.png");
                    background-size: 100% 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .left_item_img {
                        width: 96%;
                        height: 93%;
                    }
                }
                .right_item {
                    width: 54%;
                    height: 85%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    font-size: 1.3rem;
                    color: white;
                    letter-spacing: 2px;
                    .right_item_1 {
                        margin-top: 5px;
                        font-size: 1.5rem;
                        color: #ffd3a0;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        .arrow_group_img {
                            width: 49px;
                            height: 33px;
                        }
                    }
                    .right_item_2 {
                        margin-top: 10px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        .title {
                            color: #98ddfe;
                        }
                        .value {
                            margin-left: 10px;
                        }
                    }
                    .right_item_3 {
                        margin-top: 10px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        .title {
                            color: #98ddfe;
                        }
                        .value {
                            margin-left: 10px;
                        }
                    }
                    .right_item_4 {
                        margin-top: 10px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        .title {
                            color: #98ddfe;
                        }
                        .value {
                            margin-left: 10px;
                        }
                    }
                    .right_item_5 {
                        margin-top: 10px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        .title {
                            color: #98ddfe;
                        }
                        .value {
                            margin-left: 10px;
                        }
                    }
                }
            }
        }
    }
}
</style>
