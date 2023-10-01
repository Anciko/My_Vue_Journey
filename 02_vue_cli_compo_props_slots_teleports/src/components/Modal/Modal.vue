<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{sale: theme === 'sale'}">
        <h3>{{title}}</h3>
        <p>{{ text }}</p>
        
        <!-- Default slot -->
        <slot>Default slot like default parameter</slot>

        <!-- using named slots -->
        <slot name="links"></slot>
    </div>
  </div>
</template> 

<script>
export default {
    props: ['title', 'text', 'theme'],
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>

<style>
    .backdrop {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        position: fixed;
        top: 0;
    }
    .modal {
        background: white;
        padding: 30px;
        border-radius: 4px;
        width: 40%;
        margin: 100px auto;
        text-align: center;
    }
    h3 {
        margin-bottom: 7px;
        color: aquamarine;
    }

    .sale {
        background: crimson;
    }
</style>