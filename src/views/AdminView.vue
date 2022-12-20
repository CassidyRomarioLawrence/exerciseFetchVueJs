<template>
    <div class="container">
        <div class="row">
            <h1 class="display-1">Admin</h1>
        </div>
    </div>
    <AdminTable />
</template>

<script>
import AdminTable from '@/components/AdminTable.vue'

    export default {
    name: 'AdminView',
    components: {
            AdminTable
        }
    }
</script>

<style scoped>

</style>