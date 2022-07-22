<template>
    <div>

        <h1 class="display-6">
            ثبت مخاطب جدید
            <hr />
        </h1>

        <ContactForm v-model="contactItem" />

        <div class="mt-4" style="text-align: left">
            <LoadingButton :loading="loading" btnStyle="btn-dark" icon="fas fa-check" text="ثبت" @click="setData()" />
        </div>


    </div>
</template>

<script>
    import ContactForm from '@/components/ContactForm.vue'
    import LoadingButton from '@/components/LoadingButton.vue'


    export default {
        name: 'ContactsPage',

        components: {

            ContactForm,
            LoadingButton
        },

        data() {
            return {
                loading: false,
                contactItem: {
                    id: '',
                    name: '',
                    family: '',
                    title: '',
                    mobile: '',
                    more: []
                }
            }
        },

        methods: {
            sleep: function (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            },

            setData() {

                if (this.loading == false) {
                    this.loading = true

                    this.$store.dispatch("execAddItemContactsDB", this.contactItem).then((resualt) => {
                        console.log(resualt)
                        this.sleep(500).then(() => {
                            this.$router.push('/contacts');
                        });
                    })
                }



            }

        },

        watch: {
            contactItem: {
                handler() {
                    /*
                    البته روش درست، هش کردن می‌باشد و قاعدتا در سمت سرور
                    */
                    this.contactItem['id'] = Date.now() + this.contactItem['mobile']
                },
                deep: true
            }
        },


        mounted() {
            this.contactItem['id'] = Date.now()
        }

    }
</script>