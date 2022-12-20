<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h6 class="display-6 mt-5">List Of Sneakers</h6>
                <table class="table table-hover table-bordered mt-4">
                    <thead>
                        <tr class="table-dark">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Color</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="sneaker in sneakers" :key="sneaker">
                            <td>{{sneaker.id}}</td>
                            <td>{{sneaker.name}}</td>
                            <td>{{sneaker.color}}</td>
                            <td>R {{sneaker.price}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
    export default {
    name: 'AdminTable',
    computed: {
        ...mapGetters(["sneakers"]),
    },
    methods: {
        ...mapActions(["fetchAllSneakers"]),
    },
    created() {
        this.fetchAllSneakers();
    },
    }
</script>

<style scoped>

</style>