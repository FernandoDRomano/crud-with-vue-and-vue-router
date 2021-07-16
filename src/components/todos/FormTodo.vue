<template>
    <form @submit.prevent="sendForm" class="flex flex-col w-11/12 sm:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto bg-white border-2 border-gray-300 rounded-xl shadow-xl px-5 py-4">
        <div class="mb-3 flex flex-col">
            <label for="text" class="font-light text-sm md:text-base lg:text-lg mb-1">Descripción</label>
            <input
                class="text-sm lg:text-base bg-gray-200 px-2 md:px-3 py-1 md:py-2 border ring-2 focus:outline-none rounded-lg" 
                :class="[$v.todo.text.$error ? 'ring-red-500' : '']"
                type="text" 
                name="text" 
                placeholder="Ingrese la descripción" 
                v-model.lazy="$v.todo.text.$model"
                @input="$v.todo.text.$reset()"
                @blur="$v.todo.text.$touch()">
            
            <small 
                v-if="$v.todo.text.$dirty && !$v.todo.text.required" 
                class="text-red-500 text-xs md:text-sm mt-1">
                La descripción es requerida
            </small>
            
            <small 
                v-if="$v.todo.text.$dirty && !$v.todo.text.minLength" 
                class="text-red-500 text-xs md:text-sm mt-1">
                La descripción debe tener mas de 4 caracteres
            </small>
        </div>

        <button 
            :disabled="$v.$invalid"
            type="submit" 
            class="w-auto px-3 md:px-5 lg:px-0 lg:w-2/5 mx-auto bg-blue-500 text-white font-medium text-center text-base md:text-lg lg:text-xl py-1 md:py-2 rounded-md md:rounded-lg disabled:opacity-50 focus:outline-none">
            {{ button }}
        </button>

    </form>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import { required, minLength } from 'vuelidate/lib/validators'

    export default {
        name: 'FormTodo',
        mixins: [validationMixin],
        validations: { 
            todo:{
                text:{
                    required,
                    minLength: minLength(4)
                }
            }
        },
        props:{
            todo:{
                type: Object,
            },
            button:{
                type: String,
                required: true,
                default: 'Guardar'
            }
        },
        methods:{
            sendForm(){
                this.$emit('processForm', this.todo)
            }
        }
    }
</script>
