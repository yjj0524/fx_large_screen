<template>
    <div class="container">
        <BGComponent />
    </div>
</template>

<script>
import BGComponent from '@/components/IndexPath/BGComponent.vue'

import HelloWorld from '@/components/HelloWorld.vue'
import HelloWorlds from '@/components/HelloWorld2.vue'

export default {
    name: "IndexView",
    components: {
        BGComponent
    },
};
</script>

<style lang="less" scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-image: url('@/assets/images/bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
</style>
