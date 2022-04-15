<template>
    <div class="svg_container">
        <constellation1 />
        <!-- <constellation2 />
        <constellation1 />
        <constellation1 />
        <constellation1 />
        <constellation1 />
        <constellation1 />
        <constellation1 />
        <constellation1 /> -->
    </div>
</template>

<script>
import constellation1 from "@/components/Index/constellations/constellation1.vue";
import constellation2 from "@/components/Index/constellations/constellation2.vue";

export default {
    name: "LineComponent",
    components: {
        constellation1,
        constellation2,
    },
    data() {
        return {
        };
    },
    mounted() {},
    methods: {},
};
</script>

<style lang="less" scoped>
.svg_container {
    width: 743px;
    height: 741px;
    position: absolute;
    top: 168px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    border-radius: 50%;
    border: 1px solid red;
}
</style>
