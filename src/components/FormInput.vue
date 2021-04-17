<template>
  <div class="flex items-center min-h-screen  dark:bg-gray-900">
    <div class="container mx-auto flex">
      <div class="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
        <div class="text-center">
          <h1
            class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200"
          >
            Contact Me
          </h1>
          <p class="text-gray-400 dark:text-gray-400">
            Fill up the form below to send me a message.
          </p>
        </div>
        <div class="m-7">
          <form @submit.prevent="submitForm" id="form">
            <div class="mb-6">
              <label
                for="name"
                class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >Full Name</label
              >
              <input
                v-model="name"
                type="text"
                name="name"
                id="name"
                placeholder="John One"
                required
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >Email Address</label
              >
              <input
                v-model="email"
                type="email"
                name="email"
                id="email"
                placeholder="you@company.com"
                required
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div class="mb-6">
              <label
                for="phone"
                class="text-sm text-gray-600 dark:text-gray-400"
                >Phone Number</label
              >
              <input
                v-model="phone"
                type="text"
                name="phone"
                id="phone"
                placeholder="+66 (0) 9X-XXX-XXXX"
                required
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div class="mb-6">
              <label
                for="message"
                class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >Your Message</label
              >

              <textarea
                v-model="message"
                rows="5"
                name="message"
                id="message"
                placeholder="Your Message . . ."
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                required
              ></textarea>
            </div>
            <div class="mb-6">
              <button
                type="submit"
                class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
              >
                Send Message
              </button>
            </div>
            <p class="text-base text-center text-gray-400" id="result"></p>
          </form>
        </div>
      </div>
      <div class="mx-auto my-auto">
       <pro-card></pro-card>
      </div>
    </div>
  </div>
</template>

<script>
import ProCard from './ProCard.vue';
export default {
  components: { ProCard },
  data() {
    return {
      url: "http://localhost:5000/infos",
      name: "",
      email: "",
      phone: "",
      message: "",
      date: "",
      isEdit: false,
      Contacts: []
    }
  },
  methods: {
    submitForm (){
      var time = new Date();
      if (this.message !== "") {
        if (this.isEdit) {
          this.editContact({
            id: this.editId,
            date: time.toLocaleString("en-GB", { hour12: true }),
            name: this.name,
            email: this.email,
            phone: this.phone,
            message: this.message,
          });
        } else {
          this.addNewContact({
            date: time.toLocaleString("en-GB", { hour12: true }),
            name: this.name,
            email: this.email,
            phone: this.phone,
            message: this.message,
          });
        }
      }
      this.name = "",
      this.email = "",
      this.phone = "",
      this.message =  "",
      this.date = ""
    },
          async addNewContact(newContact) {
        try {
          const res = await fetch(this.url, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              name: newContact.name,
              date: newContact.date,
              phone: newContact.phone,
              message: newContact.message,
              email: newContact.email
            }),
          });
          const data = await res.json();
          this.Contacts = [...this.Contacts, data];
        } catch (error) {
          console.log(`Could not save! ${error}`);
        }
      }
  },
}
</script>
