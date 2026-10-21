<script setup lang="ts">
import { Pause, Play } from '@lucide/vue'

import { capabilities } from '~/data/company'
import { useEventListener } from '@vueuse/core'

/**
 * Self-contained capability story.
 *
 * The section no longer hijacks the page scroll: it plays on its own, moving
 * from one capability to the next every few seconds, and the change happens
 * *inside* the section (the work window slides). Visitors can still jump to
 * any step from the list, and the auto-play can be paused.
 */
const count = capabilities.length

const scenes = [
  {
    key: 'consultation',
    status: 'Advisor on the call — scoping the requirement and the load'
  },
  {
    key: 'survey',
    status: 'Surveyor mapping the plant room and recording existing services'
  },
  {
    key: 'solution',
    status: 'Engineers matching the right system to the load and the site'
  },
  {
    key: 'design',
    status: 'Shop drawings being drafted for the client to approve'
  },
  {
    key: 'supply',
    status: 'Equipment allocated, quality checked and dispatched to site'
  },
  {
    key: 'installation',
    status: 'Units being installed, connected and commissioned on site'
  },
  {
    key: 'testing',
    status: 'Performance testing, handover documents and sign-off'
  },
  {
    key: 'support',
    status: 'On call for maintenance, servicing and breakdowns'
  }
]

/** Milliseconds each capability stays on screen. */
const AUTOPLAY_MS = 3000

const activeIndex = ref(0)
/** Bumped on every step so the progress bar animation restarts. */
const cycle = ref(0)
const isPlaying = ref(true)

const activeScene = computed(() => scenes[activeIndex.value] ?? scenes[0]!)
const activeLabel = computed(() => capabilities[activeIndex.value] ?? '')

const listEl = ref<HTMLElement | null>(null)

let timer: ReturnType<typeof setInterval> | undefined

function stopTimer() {
  if (timer) {
    clearInterval(timer)
    timer = undefined
  }
}

function startTimer() {
  stopTimer()
  if (!isPlaying.value) return
  timer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % count
    cycle.value++
  }, AUTOPLAY_MS)
}

/** Jump to a capability — restarts the auto-play countdown. */
function goTo(index: number) {
  activeIndex.value = index
  cycle.value++
  startTimer()
}

function togglePlay() {
  isPlaying.value = !isPlaying.value
  if (isPlaying.value) startTimer()
  else stopTimer()
}

/**
 * On small screens the capability list is a horizontally scrolling strip —
 * keep the active chip in view without ever touching the page scroll.
 */
watch(activeIndex, (index) => {
  const list = listEl.value
  if (!list || list.scrollWidth <= list.clientWidth) return
  const item = list.children[index] as HTMLElement | undefined
  if (!item) return
  const target = item.offsetLeft - (list.clientWidth - item.offsetWidth) / 2
  list.scrollTo({ left: Math.max(0, target), behavior: 'smooth' })
})

onMounted(() => {
  // Visitors who asked for less motion get the story without the auto-play;
  // they can still step through it from the list.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    isPlaying.value = false
    return
  }
  startTimer()
})
onBeforeUnmount(() => stopTimer())

// `document` only exists on the client — guard the listener registration so
// the component stays safe to render on the server.
if (import.meta.client) {
  useEventListener(document, 'visibilitychange', () => {
    if (document.hidden) stopTimer()
    else startTimer()
  })
}
</script>

<template>
  <section id="capabilities" class="relative scroll-mt-20 border-y bg-muted/40 py-16 sm:py-20 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-wider text-brand-green-dark dark:text-brand-lime">
          Our Capabilities
        </p>
        <h2 class="mt-2 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
          From first call to <span class="text-brand-gradient">lifelong support</span>
        </h2>
        <p class="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
          Eight steps, one accountable team — here is what happens on the way.
        </p>
      </div>

      <div class="mt-8 grid items-center gap-5 sm:mt-10 sm:gap-8 lg:grid-cols-[minmax(0,19rem)_1fr]">
        <!-- left: the capability list (a scrolling chip strip on small screens) -->
        <ol
          ref="listEl"
          class="order-2 flex min-w-0 gap-2 overflow-x-auto pb-1 no-scrollbar lg:mx-0 lg:block lg:space-y-1 lg:overflow-visible lg:px-0 lg:pb-0"
        >
          <li v-for="(capability, i) in capabilities" :key="capability" class="shrink-0 lg:shrink">
            <button
              type="button"
              class="group flex w-full items-center gap-2 rounded-xl px-2.5 py-2 text-left transition-colors sm:gap-3 sm:px-3 sm:py-2.5 lg:w-full"
              :class="i === activeIndex ? 'bg-card shadow-sm' : 'hover:bg-card/60'"
              :aria-current="i === activeIndex ? 'true' : undefined"
              @click="goTo(i)"
            >
              <span
                class="text-xs font-bold tabular-nums transition-colors"
                :class="i === activeIndex ? 'text-brand-gradient' : 'text-muted-foreground/60'"
              >
                {{ String(i + 1).padStart(2, '0') }}
              </span>
              <span
                class="whitespace-nowrap text-xs font-medium transition-colors sm:text-sm"
                :class="i === activeIndex ? 'text-foreground' : 'text-muted-foreground'"
              >
                {{ capability }}
              </span>
              <span
                class="ml-auto hidden h-px flex-1 origin-right bg-border transition-transform duration-500 lg:block"
                :class="i === activeIndex ? 'scale-x-100' : 'scale-x-0'"
              />
            </button>
          </li>
        </ol>

        <!-- right: the little work window -->
        <div class="order-1 mx-auto w-full min-w-0 max-w-2xl lg:order-2 lg:max-w-3xl">
          <div aria-live="polite">
            <Transition name="cap-slide" mode="out-in">
              <CapabilityWindow
                :key="activeScene.key"
                :scene="activeScene.key"
                :label="activeLabel"
                :status="activeScene.status"
              />
            </Transition>
          </div>

          <!-- auto-play controls -->
          <div class="mt-4 flex items-center gap-3 sm:mt-5">
            <button
              type="button"
              class="flex size-8 shrink-0 items-center justify-center rounded-full border bg-card text-foreground transition-colors hover:border-brand-green/50 hover:text-brand-green"
              :aria-label="isPlaying ? 'Pause the capability walkthrough' : 'Play the capability walkthrough'"
              @click="togglePlay"
            >
              <Pause v-if="isPlaying" class="size-3.5" />
              <Play v-else class="size-3.5" />
            </button>

            <div class="h-1 flex-1 overflow-hidden rounded-full bg-muted">
              <div
                :key="cycle"
                class="autoplay-bar h-full w-full origin-left bg-brand-gradient"
                :class="isPlaying ? '' : 'autoplay-paused'"
                :style="{ '--autoplay-duration': `${AUTOPLAY_MS}ms` }"
              />
            </div>

            <span class="shrink-0 font-mono text-[10px] tabular-nums text-muted-foreground">
              {{ String(activeIndex + 1).padStart(2, '0') }} / {{ String(count).padStart(2, '0') }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* The step change reads as a scroll inside the section: the window slides
   out towards the top and the next one slides in from below. */
.cap-slide-enter-active,
.cap-slide-leave-active {
  transition:
    transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.3s ease;
}

.cap-slide-enter-from {
  transform: translateY(1.75rem);
  opacity: 0;
}

.cap-slide-leave-to {
  transform: translateY(-1.75rem);
  opacity: 0;
}

/* Countdown bar for the auto-play. */
.autoplay-bar {
  animation: autoplay-progress var(--autoplay-duration, 3000ms) linear forwards;
}

.autoplay-paused {
  animation-play-state: paused;
}

@keyframes autoplay-progress {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .autoplay-bar {
    animation: none;
  }

  .cap-slide-enter-active,
  .cap-slide-leave-active {
    transition: none;
  }
}
</style>
