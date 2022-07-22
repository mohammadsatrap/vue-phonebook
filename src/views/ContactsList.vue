<template>
    <div>

        <ListItem :inputList="listItem" />

      

        <div class="mt-2">
            <router-link to="/contacts-new" class="btn btn-dark" style="border-radius: 100px;">
                <i class="fas fa-plus"></i>
                افزودن مخاطب جدید
            </router-link>
        </div>





    </div>
</template>

<script>
    //import HelloWorld from '@/components/HelloWorld.vue'
    import ListItem from '@/components/ListItem.vue'


    export default {
        name: 'ContactsPage',

        components: {
            ListItem,
        

        },

        data() {
            return {
                listItem: []
            }
        },


        mounted() {
            this.$store.dispatch("execReadContactsDbStore").then((resualt) => {
                this.listItem = resualt
            })
        }


    }
</script>