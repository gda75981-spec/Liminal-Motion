/// <reference types="@revenge-mod/themes-api" />

export default plugin({
    preInit({ themes }) {
        themes.registerGroup('liminal-motion', {
            name: 'Liminal Motion',
            description: 'Explore strange, forgotten places.',
        })

        const background = 'assets/background.png'

        themes.registerTheme('liminal-motion', 'backrooms', {
            name: 'Backrooms',
            getColors: () => ({}),
            background: {
                path: background,
                opacity: 0.85,
                blur: 2,
                dimming: 0.25,
            },
        })

        themes.registerTheme('liminal-motion', 'abandoned-mall', {
            name: 'Abandoned Mall',
            getColors: () => ({}),
            background: {
                path: background,
                opacity: 0.7,
                blur: 5,
                dimming: 0.4,
            },
        })

        themes.registerTheme('liminal-motion', 'empty-school', {
            name: 'Empty School',
            getColors: () => ({}),
            background: {
                path: background,
                opacity: 0.9,
                blur: 1,
                dimming: 0.15,
            },
        })
    },

    start() {
        console.log('[Liminal Motion] Theme system loaded!')
    },

    stop() {
        console.log('[Liminal Motion] Stopped.')
    },
})
