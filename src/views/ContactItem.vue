<template>
  <div>
    <h1 class="display-6">
      مشاهده مخاطب
      <hr />
    </h1>


    <ContactForm v-model="contactItem" />

    <div class="mt-4">
      <LoadingButton :loading="loadingEdit" btnStyle="btn-warning" icon="fas fa-edit" text="ثبت تغییرات" @click="editItem()" />
      <LoadingButton :loading="loadingRemove" btnStyle="btn-danger" icon="fas fa-minus" text="حذف" @click="removeItem()" />
    </div>

    <!-- برای بررسی
    <div class="mt-4" style="direction: ltr;">
      <code class="mt-4" style="unicode-bidi: unset;" v-text="JSON.stringify(contactItem, undefined, 4)"></code>
    </div>
    -->
    <br>

  </div>
</template>

<script>
  import ContactForm from '@/components/ContactForm.vue'
  import LoadingButton from '@/components/LoadingButton.vue'


  export default {
    name: 'ContactItem',

    components: {

      ContactForm,
      LoadingButton
    },

    data() {
      return {
        contactId: "",
        loadingRemove: false,
        loadingEdit: false,
        contactItem: {
          id: '',
          name: '',
          family: '',
          title: '',
          mobile: '',
          more: []
        },

      }
    },

    methods: {
      sleep: function (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      },

      editItem() {

        if (this.loadingEdit == false && this.loadingRemove == false) {
          this.loadingEdit = true

          this.$store.dispatch("execUpdateItemContactsDB", this.contactItem).then((resualt) => {
            console.log(resualt)
            this.sleep(500).then(() => {
              this.$router.push('/contacts');
            });
          })
        }



      },


      removeItem() {
        if (this.loadingEdit == false && this.loadingRemove == false) {
          this.loadingRemove = true
          this.$store.dispatch("execRemoveItemContactsDB", this.contactId).then((resualt) => {
            console.log(resualt)
            this.sleep(500).then(() => {
              this.$router.push('/contacts');
            });
          })
        }
      }

    },

    watch: {

    },


    mounted() {
      this.contactId = this.$route.params.id;

      this.$store.dispatch("execReadContactsDbStore", this.contactItem).then((resualt) => {
        resualt.map((item) => {
          if (item['id'] === this.contactId) {
            this.contactItem = item
          }
        })
      })


    }

  }
</script>