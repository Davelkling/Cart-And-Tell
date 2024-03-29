<script setup lang="ts">
import { reactive, watch } from 'vue';

const errorMessage = ref<Array<any>>([]);
const successMessage = ref<string>("");
const formDataRegister = reactive({
  email: '',
  password: '',
  confirmPassword: '',
  isMerchant:false,
});

interface registerFetchData {
  message: [string]
  errors: [string]
}
const API = useRuntimeConfig().public.API;
async function signup(email:string,password:string,isMerchant:boolean):Promise<registerFetchData> {
  const result:registerFetchData =  await $fetch<registerFetchData>(`${API}/user`,{
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email,password,isMerchant}),
  })
  .then(res => res)
  .catch((errors:{data:{message:[string]}})=> {
    return {
      message:[""],
      errors:errors.data.message
    }
  }
  );
  return result;
}
async function handler() {
  if (formDataRegister.password !== formDataRegister.confirmPassword) {
    errorMessage.value = ["Confirm Password doesn't match"];
  }
  const result = await signup(formDataRegister.email,formDataRegister.password,formDataRegister.isMerchant);
  if (result) {
    const castedResult = result as registerFetchData
    if (castedResult.errors) {
      errorMessage.value = castedResult.errors;
    }
    else {
      errorMessage.value = [];
      successMessage.value = castedResult.message[0];
      setTimeout(async () => await navigateTo("/login"),5000);
    }
  }
}
</script>

<template>
  <div class="container mx-auto">
    <div class="flex justify-center items-center flex-col h-screen p-4">
      <h3 class="text-2xl font-bold text-black mb-6">Register with <span class="text-[#282F7A]">Cart & Tell</span></h3>
      <div class="relative group mb-6 w-full md:w-[70%] lg:w-[50%] xl:w-[40%]">
        <input
          v-model="formDataRegister.email"
          type="text"
          id="email"
          required
          class="peer w-full h-[3rem] mb-1.5 text-xl bg-gray-200 bg-opacity-20 rounded-[0.5rem] border-2 border-[#2563EB] pl-[2rem]"
        />
        <label
          for="email"
          class="transform transition-all absolute top-0 left-0 h-[3rem] flex items-center pl-[2rem] text-lg group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-6 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
        >
          Email
        </label>
      </div>
      <div class="relative group mb-6 w-full md:w-[70%] lg:w-[50%] xl:w-[40%]">
        <input
          v-model="formDataRegister.password"
          type="password"
          id="password"
          required
          class="peer w-full h-[3rem] mb-1.5 text-xl bg-gray-200 bg-opacity-20 rounded-[0.5rem] border-2 border-[#2563EB] pl-[2rem]"
        />
        <label
          for="password"
          class="transform transition-all absolute top-0 left-0 h-[3rem] flex items-center pl-[2rem] text-lg group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-6 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
        >
          Password
        </label>
      </div>
      <div class="relative group mb-6 w-full md:w-[70%] lg:w-[50%] xl:w-[40%]">
        <input
          v-model="formDataRegister.confirmPassword"
          type="password"
          id="confirmPassword"
          required
          class="peer w-full h-[3rem] mb-1.5 text-xl bg-gray-200 bg-opacity-20 rounded-[0.5rem] border-2 border-[#2563EB] pl-[2rem]"
        />
        <label
          for="confirmPassword"
          class="transform transition-all absolute top-0 left-0 h-[3rem] flex items-center pl-[2rem] text-lg group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-6 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
        >
          Confirm Password
        </label>
      </div>
      <div class="flex gap-4">
        <input v-model="formDataRegister.isMerchant" type="checkbox">
        <label for="">Register As Merchant</label>
      </div>
      <button
        @click="handler"
        type="button"
        class="w-full md:w-[70%] lg:w-[50%] xl:w-[40%] h-[3rem] border-2 bg-[#282F7A] rounded-[0.5rem] text-white font-bold text-xl mt-0.5"
      >
        Register
      </button>
      <p class="text-md mt-4">
        Already have an account? <NuxtLink to="/login" class="text-[#282F7A] font-bold cursor-pointer">Log In</NuxtLink>
      </p>
      <div class="">
          <ul class="mt-4 ">
            <li v-for="error in errorMessage" class="font-bold">{{ error }}</li>
            <li class="mt-4 font-bold">{{ successMessage }}</li>
          </ul>
      </div>
    </div>
  </div>
</template>
