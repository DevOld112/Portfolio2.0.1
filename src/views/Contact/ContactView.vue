<script setup lang="ts">

</script>

<template>
  <h1 class="text-6xl font-extrabold text-center mt-10 mb-5 text-white">Enviame un Mensaje</h1>

  <div class="p-4 space-y-5 rounded-lg bg-slate-800 text-xl text-white lg:flex my-auto min-h-screen grid grid-cols-1">
    <div data-aos="fade-right" class="p-6 rounded-lg shadow-md my-5 lg:w-1/2">
      <fieldset class="border border-gray-300 rounded-md p-4">
        <legend class="ml-3 text-lg p-2 bg-gray-500 font-semibold rounded-md">
          Contacto
        </legend>
        <!-- Formulario de contacto -->
        <FormKit
            id="contactForm"
            type="form"
            data-netlify="true"
            method="POST"
            :actions="false"
            name="contact"
            netlify
        >
          <!-- Campo oculto para Netlify -->
          <input type="hidden" name="form-name" value="contactForm" />

          <!-- Campo para el nombre completo -->
          <FormKit
            type="text"
            label="Nombre Completo"
            name="name"
            placeholder="Ej. Eduardo Rodriguez"
            validation="required|name"
            :validation-messages="{
              required:'El Nombre es Obligatorio',
              name: 'Nombre No Valido'
            }"
          />
          
          <!-- Campo para el correo electrónico -->
          <FormKit
            type="email"
            label="Correo Electrónico"
            name="email"
            placeholder="correo electronico"
            validation="required|email"
            :validation-messages="{
              required:'El email es Obligatorio'
            }"
          />
          
          <!-- Campo para el mensaje -->
          <FormKit
            type="textarea"
            label="Mensaje"
            name="message"
            placeholder="Tu mensaje..."
          />
          
          <!-- Botón de enviar -->
          <FormKit type="submit">Enviar Mensaje</FormKit>
        </FormKit>
      </fieldset>
    </div>

    <!-- Sección de información adicional -->
    <section data-aos="fade-left" class="lg:w-2/3 p-4 space-y-10 my-auto">
      <h2 class="text-center text-3xl text-white font-bold mb-4">¡Tu opinión y preguntas son muy importantes para mí!</h2>
      <p class="text-center text-gray-300 mb-6">Si tienes alguna pregunta, sugerencia o simplemente quieres saludar, no dudes en escribirme. Estoy aquí para ayudarte en lo que necesites. Tu mensaje será recibido con aprecio y responderé tan pronto como sea posible.</p>
      <p class="text-center text-gray-300">No importa si eres un colega de la industria, un posible empleador o simplemente alguien interesado en mi trabajo, ¡espero con ansias saber de ti! Juntos podemos crear algo increíble.</p>
    </section>
  </div>
</template>
