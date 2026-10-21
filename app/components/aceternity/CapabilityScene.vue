<script setup lang="ts">
/**
 * Small looping "work scenes" for each capability.
 *
 * Each scene is a tiny illustration of what the capability actually means —
 * a call in progress, a survey being measured, a drawing being drafted —
 * drawn with plain SVG and animated with CSS so it stays crisp at any size.
 */
interface Props {
  scene: string
}

defineProps<Props>()
</script>

<template>
  <svg
    viewBox="0 0 240 150"
    class="scene h-full w-full"
    role="img"
    :aria-label="`${scene} illustration`"
  >
    <!-- ------------------------------------------------------------------
         1. Consultation — a call in progress, the brief being taken down
    ------------------------------------------------------------------ -->
    <g v-if="scene === 'consultation'">
      <rect class="fill-soft" x="14" y="26" width="104" height="46" rx="14" />
      <path class="ln-soft" d="M34 70 L28 84 L46 72" />
      <circle class="acc-fill" cx="38" cy="49" r="4" />
      <circle class="acc-fill dot d1" cx="54" cy="49" r="4" />
      <circle class="acc-fill dot d2" cx="70" cy="49" r="4" />

      <g class="reply">
        <rect class="fill-soft" x="122" y="66" width="100" height="46" rx="14" />
        <path class="ln-soft" d="M200 110 L208 124 L192 112" />
        <path class="acc check" d="M142 88 l8 9 16 -18" />
      </g>
    </g>

    <!-- ------------------------------------------------------------------
         2. Site Survey — the plant room being measured
    ------------------------------------------------------------------ -->
    <g v-else-if="scene === 'survey'">
      <path class="ln-soft" d="M26 116 L26 46 L152 46 L152 116" />
      <path class="ln-soft" d="M152 88 A26 26 0 0 0 126 114" />

      <path class="acc dim" d="M26 34 L152 34 M26 28 L26 40 M152 28 L152 40" />
      <path class="acc dim dim-v" d="M164 46 L164 116 M158 46 L170 46 M158 116 L170 116" />

      <g class="laser">
        <path class="acc beam" d="M0 46 L0 116" />
        <circle class="acc-fill beam" cx="0" cy="116" r="3.5" />
      </g>

      <g class="clipboard">
        <rect class="ln-soft" x="188" y="72" width="36" height="48" rx="4" />
        <path class="ln-soft" d="M188 84 h36" />
        <path class="acc check" d="M196 96 l5 6 10 -12" />
        <path class="ln-soft" d="M198 112 h16 M198 120 h10" />
      </g>
    </g>

    <!-- ------------------------------------------------------------------
         3. Solution Working — load flowing through the system
    ------------------------------------------------------------------ -->
    <g v-else-if="scene === 'solution'">
      <path class="ln-soft flow" d="M120 74 L44 40 M120 74 L196 40 M120 74 L120 120" />
      <circle class="acc-fill node n1" cx="44" cy="40" r="7" />
      <circle class="acc-fill node n2" cx="196" cy="40" r="7" />
      <circle class="acc-fill node n3" cx="120" cy="120" r="7" />

      <g class="gear">
        <circle class="ln gear-ring" cx="120" cy="74" r="27" />
        <circle class="ln" cx="120" cy="74" r="17" />
        <circle class="acc-fill gear-core" cx="120" cy="74" r="6" />
      </g>
    </g>

    <!-- ------------------------------------------------------------------
         4. Design — the shop drawing being drafted
    ------------------------------------------------------------------ -->
    <g v-else-if="scene === 'design'">
      <path class="grid" d="M36 40 V124 M76 40 V124 M116 40 V124 M156 40 V124 M196 40 V124 M28 60 H206 M28 84 H206 M28 108 H206" />
      <path class="acc plan" d="M36 116 L36 48 L120 48 L120 78 L196 78 L196 116" />
      <circle class="acc-fill pen" cx="36" cy="116" r="5" />
      <path class="acc dim" d="M36 128 L196 128 M36 122 L36 134 M196 122 L196 134" />
    </g>

    <!-- ------------------------------------------------------------------
         5. Supply — equipment moving out to site
    ------------------------------------------------------------------ -->
    <g v-else-if="scene === 'supply'">
      <path class="ln-soft belt" d="M12 112 H228" />
      <g class="crate c1">
        <rect class="crate-box" x="0" y="84" width="30" height="28" rx="3" />
        <path class="ln-soft" d="M15 84 V112" />
      </g>
      <g class="crate c2">
        <rect class="crate-box" x="0" y="84" width="30" height="28" rx="3" />
        <path class="ln-soft" d="M15 84 V112" />
      </g>
      <g class="crate c3">
        <rect class="crate-box" x="0" y="84" width="30" height="28" rx="3" />
        <path class="ln-soft" d="M15 84 V112" />
      </g>
      <g class="stack">
        <rect class="ln-soft" x="176" y="84" width="34" height="28" rx="3" />
        <rect class="crate-box" x="176" y="52" width="34" height="28" rx="3" />
        <path class="acc check" d="M186 66 l5 6 11 -13" />
      </g>
    </g>

    <!-- ------------------------------------------------------------------
         6. Installation — the unit being fitted and connected
    ------------------------------------------------------------------ -->
    <g v-else-if="scene === 'installation'">
      <path class="ln-soft" d="M16 34 H224 M52 34 V44 M188 34 V44" />
      <g class="unit">
        <rect class="ln unit-body" x="52" y="44" width="96" height="42" rx="6" />
        <path class="ln-soft" d="M66 56 H86 M66 64 H86 M66 72 H86" />
        <path class="acc-fill led" cx="134" cy="58" r="3" />
      </g>
      <path class="acc pipe" d="M148 78 H206" />
      <g class="wrench">
        <circle class="ln-soft" cx="196" cy="104" r="9" />
        <path class="acc" d="M196 95 L196 86 M191 89 L201 89" />
      </g>
      <path class="ln-soft" d="M16 104 H172" />
    </g>

    <!-- ------------------------------------------------------------------
         7. Testing & Commissioning — the needle settling in the green
    ------------------------------------------------------------------ -->
    <g v-else-if="scene === 'testing'">
      <circle class="ln-soft" cx="66" cy="72" r="36" />
      <path class="acc zone" d="M92 46 A36 36 0 0 1 92 98" />
      <g class="needle">
        <path class="acc" d="M66 72 L66 44" />
      </g>
      <circle class="acc-fill" cx="66" cy="72" r="4" />

      <g class="checks">
        <path class="acc check" d="M132 44 l6 7 12 -14" />
        <path class="ln-soft" d="M158 46 H216" />
        <path class="acc check c2" d="M132 70 l6 7 12 -14" />
        <path class="ln-soft" d="M158 72 H216" />
        <path class="acc check c3" d="M132 96 l6 7 12 -14" />
        <path class="ln-soft" d="M158 98 H216" />
      </g>
      <path class="acc wave" d="M20 126 h30 l8 -12 l8 24 l8 -18 l6 6 h20 l8 -12 l8 24 l8 -18 l6 6 h60" />
    </g>

    <!-- ------------------------------------------------------------------
         8. AMC Support — the system under watch, on call
    ------------------------------------------------------------------ -->
    <g v-else-if="scene === 'support'">
      <path class="fill-soft shield" d="M112 22 L150 36 V72 C150 96 134 110 112 118 C90 110 74 96 74 72 V36 Z" />
      <path class="ln shield-line" d="M112 22 L150 36 V72 C150 96 134 110 112 118 C90 110 74 96 74 72 V36 Z" />
      <path class="acc pulse" d="M84 70 h12 l7 -14 l9 28 l7 -14 h17" />

      <g class="calendar">
        <rect class="ln-soft" x="172" y="48" width="52" height="56" rx="5" />
        <path class="ln-soft" d="M172 64 H224" />
        <rect class="acc-fill day" x="180" y="72" width="12" height="10" rx="2" />
        <path class="ln-soft" d="M200 76 h14 M200 88 h14" />
      </g>
    </g>
  </svg>
</template>

<style scoped>
/* Accents come from the global tokens so the dark palette applies too
   (a `:global(.dark) .scene` rule would be overridden by the scoped
   `.scene` declaration below). */
.scene {
  --accent: var(--scene-accent);
  --accent-2: var(--scene-accent-2);
}

.ln {
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ln-soft {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.75;
  stroke-linecap: round;
  stroke-linejoin: round;
  opacity: 0.32;
}

.fill-soft {
  fill: currentColor;
  opacity: 0.08;
}

/* boxes that need both a soft fill and a visible outline */
.crate-box {
  fill: currentColor;
  fill-opacity: 0.1;
  stroke: currentColor;
  stroke-opacity: 0.45;
  stroke-width: 1.5;
}

.grid {
  fill: none;
  stroke: currentColor;
  stroke-width: 1;
  opacity: 0.1;
}

.acc {
  fill: none;
  stroke: var(--accent);
  stroke-width: 2.4;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.acc-fill {
  fill: var(--accent);
}

/* --- 1. consultation --------------------------------------------------- */
.dot {
  transform-box: fill-box;
  transform-origin: center;
  animation: dot 1.2s ease-in-out infinite;
}
.dot.d1 {
  animation-delay: 0.18s;
}
.dot.d2 {
  animation-delay: 0.36s;
}
.reply {
  transform-box: fill-box;
  transform-origin: center;
  animation: rise 3.6s ease-in-out infinite;
}
.check {
  stroke-dasharray: 40;
  animation: draw 3.6s ease-in-out infinite;
}

/* --- 2. survey --------------------------------------------------------- */
.dim {
  stroke-dasharray: 140;
  animation: draw 4.2s ease-in-out infinite;
}
.dim-v {
  animation-delay: 0.4s;
}
.laser {
  animation: laser 3.4s ease-in-out infinite;
}
.beam {
  animation: beam 3.4s ease-in-out infinite;
}
.clipboard .check {
  animation-delay: 1.6s;
}

/* --- 3. solution ------------------------------------------------------- */
.flow {
  stroke: currentColor;
  stroke-width: 1.75;
  stroke-linecap: round;
  opacity: 0.45;
  stroke-dasharray: 5 9;
  animation: flow 1.4s linear infinite;
}
.node {
  transform-box: fill-box;
  transform-origin: center;
  animation: node 2.8s ease-in-out infinite;
}
.node.n2 {
  animation-delay: 0.35s;
}
.node.n3 {
  animation-delay: 0.7s;
}
.gear-ring {
  stroke-dasharray: 14 9;
  animation: spin 9s linear infinite;
}
.gear-core {
  animation: pulse 2.4s ease-in-out infinite;
}

/* --- 4. design --------------------------------------------------------- */
.plan {
  stroke-dasharray: 260;
  animation: draw 5s ease-in-out infinite;
}
.pen {
  offset-path: path('M36 116 L36 48 L120 48 L120 78 L196 78 L196 116');
  offset-distance: 0%;
  animation: trace 5s ease-in-out infinite;
}

/* --- 5. supply --------------------------------------------------------- */
.belt {
  stroke-dasharray: 12 14;
  animation: flow 1.1s linear infinite;
}
.crate {
  animation: crate 3.6s linear infinite;
}
.crate.c2 {
  animation-delay: -1.2s;
}
.crate.c3 {
  animation-delay: -2.4s;
}
.stack .check {
  animation: draw 3.6s ease-in-out infinite;
  animation-delay: 0.6s;
}

/* --- 6. installation --------------------------------------------------- */
.unit {
  transform-box: fill-box;
  transform-origin: center;
  animation: install 4.4s ease-in-out infinite;
}
.led {
  animation: pulse 1.4s ease-in-out infinite;
}
.pipe {
  stroke-dasharray: 60;
  animation: draw 4.4s ease-in-out infinite;
  animation-delay: 1.2s;
}
.wrench {
  transform-box: fill-box;
  transform-origin: center;
  animation: spin 2.6s linear infinite;
}

/* --- 7. testing -------------------------------------------------------- */
.zone {
  stroke-width: 5;
  opacity: 0.35;
}
.needle {
  transform-box: view-box;
  transform-origin: 66px 72px;
  animation: sweep 3.2s ease-in-out infinite;
}
.checks .check {
  animation: draw 3.6s ease-in-out infinite;
}
.checks .c2 {
  animation-delay: 0.5s;
}
.checks .c3 {
  animation-delay: 1s;
}
.wave {
  stroke-dasharray: 240;
  animation: draw 3.2s linear infinite;
}

/* --- 8. support -------------------------------------------------------- */
.shield {
  animation: pulse 3.2s ease-in-out infinite;
}
.shield-line {
  animation: fade 3.2s ease-in-out infinite;
}
.pulse {
  stroke-dasharray: 70;
  animation: draw 3.2s ease-in-out infinite;
}
.day {
  animation: pulse 2s ease-in-out infinite;
}

/* --- keyframes --------------------------------------------------------- */
@keyframes dot {
  0%,
  100% {
    opacity: 0.25;
    transform: scale(0.75);
  }
  40% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes rise {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  10%,
  88% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
}

@keyframes draw {
  0% {
    stroke-dashoffset: 260;
  }
  45%,
  90% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 260;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.35;
  }
  50% {
    opacity: 1;
  }
}

@keyframes fade {
  0%,
  100% {
    opacity: 0.45;
  }
  50% {
    opacity: 1;
  }
}

@keyframes flow {
  to {
    stroke-dashoffset: -28;
  }
}

@keyframes node {
  0%,
  100% {
    opacity: 0.35;
    transform: scale(0.85);
  }
  40% {
    opacity: 1;
    transform: scale(1.15);
  }
}

@keyframes laser {
  0%,
  100% {
    transform: translateX(28px);
  }
  50% {
    transform: translateX(148px);
  }
}

@keyframes beam {
  0%,
  100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.9;
  }
}

@keyframes trace {
  0% {
    offset-distance: 0%;
    opacity: 0;
  }
  8% {
    opacity: 1;
  }
  45% {
    offset-distance: 100%;
  }
  55%,
  100% {
    offset-distance: 100%;
    opacity: 0;
  }
}

@keyframes crate {
  from {
    transform: translateX(-40px);
  }
  to {
    transform: translateX(240px);
  }
}

@keyframes install {
  0% {
    transform: translateX(-120px);
    opacity: 0;
  }
  30%,
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes sweep {
  0% {
    transform: rotate(-118deg);
  }
  50% {
    transform: rotate(118deg);
  }
  100% {
    transform: rotate(-118deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .scene * {
    animation: none !important;
  }
}
</style>
