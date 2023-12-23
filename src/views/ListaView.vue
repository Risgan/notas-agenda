<!-- <template>
    <div class="calendario">
      <h1>This is an about sdfasdf</h1>
    </div>
  </template> -->

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import NewEvent from '../components/NewEvent.vue'

export default {
    components: {
        FullCalendar,
        NewEvent
    },
    data() {
        return {
            calendarOptions: {
                plugins: [listPlugin],
                initialView: 'listWeek',
                // weekends: false,
                // dateClick: this.handleDateClick,
                events: [
                    {
                        title: 'Meeting',
                        start: '2023-12-23T14:30:00',
                        extendedProps: {
                            status: 'done'
                        }
                    },
                    {
                        title: 'Birthday Party',
                        start: '2019-08-13T07:00:00',
                        backgroundColor: 'green',
                        borderColor: 'green'
                    }
                ],
            }
        }
    },
    methods: {
        // handleDateClick: function (arg) {
        //     alert('date click! ' + arg.dateStr)
        // },
        // toggleWeekends: function () {
        //     this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
        // }
    }
}
</script>
  
  
<template>
    <div class="lista">
        <!-- <button @click="toggleWeekends">toggle weekends</button> -->

        <FullCalendar :options="calendarOptions">
            <!-- <template v-slot:eventContent='arg'>
                <b>{{ arg.event.title }}</b>
            </template> -->
        </FullCalendar>

        <NewEvent/>
    </div>
</template>
  