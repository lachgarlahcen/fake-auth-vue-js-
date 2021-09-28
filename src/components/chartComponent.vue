<template>
<zingchart :data="config"></zingchart>
</template>
<script>
export default {
    props:{
        config:{
            type: Object
        }
    }
}
</script>