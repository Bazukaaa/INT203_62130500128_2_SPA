<template>
<div class="bg-gray-300  min-w-screen min-h-screen px-5 py-5">
  <div class="mx-auto my-auto">
    <pro-card class="my-20"></pro-card>
  </div>

  <div class="container mx-auto bg-gray-200 overflow-hidden shadow-sm sm:rounded-lg">
    <h1
    class="my-3 text-3xl font-semibold ml-5 text-gray-700 dark:text-gray-200"
    > Contact | Feedback
    </h1>
    <div class="flex flex-wrap mt-">
      <div
      class="max-w-xs  rounded m-4 dark:bg-gray-800 dark:text-gray-200"
      v-for="contact in Contacts"
      :key="contact.id"
      >
      <router-link to="/">
      <contact-card
      :contact="contact"
      ></contact-card>
      </router-link>
      </div>
    </div>
  </div>
</div>
<router-view />

</template>

<script>
import ContactCard from "@/components/ContactCard.vue";
export default {

  name: 'About',
  components: {
    ContactCard,
  },
  data() {
    return {
      Contacts: [],
      url: "http://localhost:5050/infos"
    }
  },
  methods: {
    async getInfos() {
      try {
        const res = await fetch(this.url);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(`error ${error}`);
      }
    }
  },
  async created() {
    this.Contacts = await this.getInfos();
  }
}
</script>


