<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import NewEvent from '../components/NewEvent.vue'
import Dialog from 'vue3-dialog';
import { mapState } from 'vuex';

const myModal = document.getElementById('exampleModal')
const show = false
export default {
    components: {
        FullCalendar,
        NewEvent,
        // Dialog
    },
    computed: {
        ...mapState(['modalVisible', 'eventos']),
    },
    data() {
        return {
            calendarOptions: {
                plugins: [listPlugin, interactionPlugin],
                initialView: 'listWeek',
                dateClick: this.handleDateClick,
                events: this.$store.state.eventos.map(evento => ({
                    title: evento.nota,
                    start: `${evento.fecha}T${evento.hora}:00`,
                    extendedProps: {
                        nota: evento.nota,
                    },
                })),
            },
            modalVisible: false,
        }
    },
    methods: {
        handleDateClick: function (arg) {
            console.log(arg, this.$store.state.modalVisible['.Array']);

            this.$store.commit('mostrarModal');
            this.$store.state.eventos
        },
    }
}
</script>


<template>
    <div class="lista">

        <FullCalendar :options="calendarOptions">

        </FullCalendar>

    </div>


    <div v-if="this.$store.state.modalVisible" class="modal fade show" style="display: block;">
        <NewEvent></NewEvent>
    </div>
</template>


<style>
.calendario {
    width: 90%;
    margin-left: 5%;
}
</style>