<template>
 <div class=" max-w-md py-4 px-8 bg-white shadow-lg rounded-lg ">
  <div>
    <h2 class="text-gray-800 text-xl font-semibold">{{ contact.email }}</h2>
    <p class="mt-2 text-gray-600">{{ contact.message }}</p>
  </div>
  <span class="font-mono text-sm mt-2">Date: {{ contact.date }}</span>
  <div class="flex justify-between mt-4 items-center">
    <div>
    <button @click="showData(contact)" class="">
   <img class="w-5 " src="../assets/edit.png" alt="edit" />
   </button>
   <button @click="deleteData(contact.id)" class="">
   <img  class="w-5 ml-3" src="../assets/delete.png" alt="delete" />
    </button>
    </div>
    <a href="#" class="text-xl font-medium text-indigo-500">{{ contact.name }}</a>
  </div>
  
  
  
</div>
</template>
<script>
export default {
    props:{
        contact:Object,
    },
    methods: {
        showData(){
            this.$emit('click-edit',this.contact)
        },
        deleteData(){
            this.$emit('click-delete', this.contact.id)
        }
    },
}
</script>
