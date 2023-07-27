<template>
    <div>
        

    </div>
    
</template>

<script>
import informations from '@/services/informations';

export default {
    mounted(){
        informations.listTechnology().then(res => {
            console.log("res", res)
        })

    }
}
</script>

<style scoped>

</style>