<template>
    <div>
        <div class="homePage"> 
            <p>HomePage</p> 
        </div>
        <div class="componentsInformation">
            <informations-business class="information"/>
            <informations-politics class="information"/>
            <informations-technology class="information"/>    
        </div>
    </div>
</template>

<script>
import InformationsTechnology from './InformationsTechnology.vue';
import InformationsBusiness from './InformationsBusiness.vue';
import InformationsPolitics from './InformationsPolitics.vue';

export default {
    components: { InformationsBusiness, InformationsPolitics, InformationsTechnology },
    
}
</script>

<style scoped>


.homePage {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.componentsInformation{
    display: flex;
    justify-content: space-around;
    align-items: center;

}

.information{
    background-color: red;
    border: 2px solid black;
    height: 50%;
    width: 25%;
}
</style>