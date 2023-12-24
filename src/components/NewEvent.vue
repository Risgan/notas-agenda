<template>
    <div>
        <div class="modal-container">
            <div class="modal-sub">
                <h2>Añadir Nuevo Evento</h2>
                <div class="input-group mb-3">
                </div>
                <div class="formulario">
                    <div class="campo">
                        <label for="fecha">Fecha:</label>
                        <input type="date" v-model="fecha" class="form-control" aria-describedby="basic-addon2">

                    </div>

                    <div class="campo">
                        <label for="hora">Hora:</label>
                        <input type="time" v-model="hora" class="form-control" placeholder="Agregue la nota"
                            aria-describedby="basic-addon2">

                    </div>

                    <div class="campo">
                        <label for="nota">Nota:</label>
                        <input type="text" v-model="nota" class="form-control" aria-describedby="basic-addon2">

                    </div>
                </div>
                <div class="buttons-container">
                    <button type="button" class="btn btn-primary" @click="cancelar">Cancelar</button>
                    <button type="button" class="btn btn-primary" @click="guardar">Guardar</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapState, mapMutations  } from 'vuex';

export default {
    computed: {
        ...mapState(['modalVisible']),
    },
    ...mapMutations('eventos', ['ocultarModal', 'agregarEvento']),
    data() {
        return {
            fecha: '', 
            hora: '',
            nota: '',
        };
    },
    methods: {
        cancelar() {
            this.$store.commit('ocultarModal');

        },
        guardar() {
            const nuevoEvento = {
                fecha: this.fecha,
                hora: this.hora,
                nota: this.nota,
            };
            console.log(nuevoEvento);
            this.$store.commit('agregarEvento', nuevoEvento);
            this.cancelar();

        },
    },
};
</script>
  
<style scoped>
.modal-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.modal-sub {
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.buttons-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.formulario {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.campo {
    display: flex;

    label {
        width: 65px;
        text-align: end;
    }

    input {
        width: 70%;
    }

    textarea {
        width: 70%;
    }
}
</style>
  