<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter();

const index = () => router.push({name: 'home'})
const contactMe = () => router.push({name: 'contact'})

</script>

<template>
    <header >
        <nav class="p-4 text-2xl flex justify-between items-center  bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 shadow-lg">
            <!-- Logo -->
            <div class="flex items-center gap-3">
                <img src="../../../public/02.svg" alt="Logo" class="w-10 h-10"/> <!-- Puedes añadir tu logo aquí -->
                <a href="/" class="text-white font-bold italic">
                    W.<span class="font-extrabold"> LOPEZ</span>
                </a>
                
            </div>

            <!-- Menu -->
            <ul class="flex gap-8 font-medium text-white">
                <li><a @click="index" class="hover:text-gray-400 transition duration-300 cursor-pointer">Inicio</a></li>
                <li><a @click="contactMe" class="hover:text-gray-400 transition duration-300 cursor-pointer">Contactame</a></li>

                
            </ul>
        </nav>
    </header>
</template>
