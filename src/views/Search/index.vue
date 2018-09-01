<template>
    <div class="search-wrapper">
        <Head></Head>
        <Body></Body>
    </div>
</template>
<script>
import { Head } from './head';
import { Body } from './body';
export default {
    components: {
        Head,
        Body
    }
}
</script>
<style lang="less" scoped>
.search-wrapper{
    width: 100%;
    height: 100%;
    background-color: #fff;
}
</style>

