<!-- <template>
    <div class="calendario">
      <h1>This is an about sdfasdf</h1>
    </div>
  </template> -->

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import NewEvent from '../components/NewEvent.vue'

export default {
  components: {
    FullCalendar,
    NewEvent
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        events: [
          {
            title: 'Meeting',
            start: '2023-12-23T14:30:00',
            extendedProps: {
              status: 'done'
            }
          },
        ]
      }
    }
  },
  methods: {
    handleDateClick: function(arg) {
      alert('date click! ' + arg.dateStr)
    },
    // eventClick: function (info) {
    //   console.log(info);
    //   alert('Event: ' + info);
    //   // alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
    //   // alert('View: ' + info.view.type);

    //   // change the border color just for fun
    //   // info.el.style.borderColor = 'red';
    // }
  }
}
</script>


<template>
  <div class="calendario">
    <div>
  <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</div>
    <!-- <NewEvent/> -->

    <FullCalendar :options="calendarOptions">
      <!-- <template v-slot:eventContent='arg'>
                <b>{{ arg.event.title }}</b>
            </template> -->
    </FullCalendar>
    
  </div>
</template>
