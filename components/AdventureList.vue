<template>
    <ul>
        <li v-for="(item, index) in adventureItems" class="grid grid-cols-7 -mt-px">
            <div class="col-span-1 relative mx-auto timeline h-full">
                <div :class="[
                    timelineGradient(index, item.timeline.color),
                    'bg-gradient-to-b h-full w-0.5 rounded-full'
                ]"></div>
                <div :class="[
                    `bg-${item.timeline.color}`,
                    'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex border-[3px] border-neutral-950 rounded-full p-1'
                    ]">
                    <Icon :name="item.timeline?.icon" class="h-5 w-5 text-black" :solid="true"/>
                </div>
            </div>

            <AdventureItem
                :date="item.date"
                :title="item.title"
                :highlight="item.highlight"
                :description="item.description"
                :image="item.image"
                v-motion
                :initial="{ y: 16, opacity: 0 }"
                :visibleOnce="{ y: 0, opacity: 1, transition: { duration: 700, ease: 'easeOut' }}"
                class="col-span-6 col-start-3 sm:col-start-2 my-12 sm:my-0"
            />
        </li>
    </ul>
</template>

<script setup lang="ts">
import Diploma from '../assets/images/diploma.jpg';
import OneZeroOneMedia from '../assets/images/101media.png';

const adventureItems = [
    {
        date: '2021',
        title: 'Graduated as Software Developer',
        highlight: 'Graduated',
        description: 'Exploring software development, completing internships and real client projects. This was my entrance to the great world of webdevelopment.',
        image: {
            url: Diploma,
            alt: 'Diploma'
        },
        timeline: {
            icon: 'AcademicCap',
            color: 'secondary-300'
        }
    },
    {
        date: '2021',
        title: 'Exploring front-end development',
        highlight: 'Exploring',
        description: 'With the basic knowledge of webdevelopment, I did a deep-dive into front-end development. Improving my fundamentals and learning about new technologies.',
        timeline: {
            icon: 'MagnifyingGlass',
            color: 'neutral-200'
        }
    },
    {
        date: '2022 Feb - Sept',
        title: 'Front-end developer at 101Media',
        highlight: '101Media',
        description: 'Built multiple personalized WordPress themes for clients. Also worked on a custom CMS front-end.',
        image: {
            url: OneZeroOneMedia,
            alt: '101Media'
        },
        timeline: {
            icon: 'Briefcase',
            color: 'teal-300'
        }
    },
    {
        date: '2022 Okt - Now',
        title: 'Front-end developer at Veldsink Groep',
        highlight: 'Veldsink Groep',
        description: 'Creating innovative solutions from design to production with the responsibillity for the front-end of multiple projects.',
        timeline: {
            icon: 'Briefcase',
            color: 'rose-300'
        }
    }
]

const timelineGradient = (index: number, color: string) => {
    let gradient = ''

    if (index === 0) {
        gradient += 'from-neutral-950 '
    } else {
        gradient += 'from-neutral-500 '
    }

    if (index === adventureItems.length - 1) {
        gradient += 'to-neutral-950 '
    } else {
        gradient += 'to-neutral-500 '
    }

    gradient += `via-${color}`

    return gradient
}
</script>

<style scoped>

</style>
