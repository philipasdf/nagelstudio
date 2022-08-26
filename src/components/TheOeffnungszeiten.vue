<template>
  <h1>ÖFFNUNGSZEITEN</h1>
  <table>
    <tbody>
      <tr
        v-for="o in OEFFNUNGSZEITEN"
        v-bind:id="'oeffnungszeiten-row' + o.index"
        :class="{ 'highlight-weekday': indexOfToday === o.index }"
      >
        <td>{{ o.name }}</td>
        <td>{{ o.description }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
/**
 * index must match JavaScript 'Date'
 */
const OEFFNUNGSZEITEN = [
  {
    index: 1,
    name: 'Montag',
    description: '10:00-12:00, 12:30-18:00',
  },
  {
    index: 2,
    name: 'Dienstag',
    description: '10:00-12:00, 12:30-18:00',
  },
  {
    index: 3,
    name: 'Mittwoch',
    description: '10:00-12:00, 12:30-18:00',
  },
  {
    index: 4,
    name: 'Donnerstag',
    description: '10:00-12:00, 12:30-18:00',
  },
  {
    index: 5,
    name: 'Freitag',
    description: '10:00-12:00, 12:30-18:00',
  },
  {
    index: 6,
    name: 'Samstag',
    description: '10:00-16:00',
  },
  {
    index: 0,
    name: 'Sonntag',
    description: 'Geschlossen',
  },
];

const indexOfToday = new Date().getDay();
</script>
<style scoped>
table {
  width: 100%;
}
.highlight-weekday {
  font-weight: bold;
}
</style>
