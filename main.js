import { createApp, ref, reactive, computed } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.5.13/vue.esm-browser.prod.min.js'

createApp({
    setup() {
        function setTag(value) {
            tag.value = value
        }
        const tag = ref('Web')
        const works_content = reactive({
            arr:
                [
                    {
                        title: 'Machine Learning in Web',
                        description: `A web-based platform for building machine learning pipelines with integrated tools for PFI, PDP, PCA, t-SNE, and autoencoders. Supports data visualization, explainable AI, and dimensionality reduction. Scales to large datasets via TU Dresden's HPC infrastructure.`,
                        previewLink: '#',
                        sourceLink: '#',
                        tags: ['Web', 'Machine Learning'],
                        palceholderImage: 'images/t.webp'
                    },
                    {
                        title: 'Realtor App(web and android)',
                        description: `A full-stack real estate management platform with a web frontend built in Vue.js, a ASP.NET Core backend, a SQL Server database, and a cross-platform mobile app developed with Flutter.`,
                        previewLink: '#',
                        sourceLink: 'https://github.com/Versus-91/houseclassifieds',
                        tags: ['Web'],
                        palceholderImage: 'images/t.webp'
                    },
                    {
                        title: 'Distance Aware Vision Transformer',
                        description: `Vision Transformer models are permutation invariant, meaning they cannot discern the
                                order of image token embeddings. In the case of whole slide images, it is common to use
                                sample
                                patches rather than the entire image. The aim of this project was to explore methods
                                that can be useful for directly changing attention scores based on patch distances to
                                create a distance-aware Vision Transformer.`,
                        previewLink: '#',
                        palceholderImage: 'images/t.webp',
                        sourceLink: 'https://github.com/Versus-91/SpatiallyAwareTransformerNetwork',
                        tags: ['Deep Learning']
                    },
                    {
                        title: 'Force Directed Graph and Magic Lense ',
                        description: `Force Directed Graph for visualizing graphs with magic lense to show extra information based on user interactions.`,
                        previewLink: 'https://versus-91.github.io/ForceDirectedGraph/',
                        sourceLink: 'https://github.com/Versus-91/ForceDirectedGraph',
                        palceholderImage: 'images/pcp.png',
                        tags: ['Web']
                    },
                    {
                        title: 'Parallel Coordinate Plot with brushing',
                        description: `Parallel Coordinate Plot visualization for high deimension data visualization with magic
                                lense for focusing on
                                certain parts of the visualization.`,
                        previewLink: '#',
                        sourceLink: 'https://github.com/Versus-91/ppc',
                        palceholderImage: 'images/para.webp',
                        tags: ['Web']
                    }, {
                        title: 'US airports visualization with D3',
                        description: `Parallel Coordinate Plot visualization for high deimension data visualization with magic
                                lense for focusing on
                                certain parts of the visualization.`,
                        previewLink: 'https://versus-91.github.io/Map/',
                        sourceLink: 'https://github.com/Versus-91/Map',
                        palceholderImage: 'images/map.png',
                        tags: ['Web']
                    }, {
                        title: 'Reinforcement Learning Pac-man',
                        description: `Using Deep Reinforcement Learning models to learn how to play Pac-man based on
                                interaction wiith the game
                                and feedback received.`,
                        previewLink: '#',
                        sourceLink: 'https://github.com/Versus-91/pacman_final',
                        palceholderImage: 'images/drl.webp',
                        tags: ['Deep Learning']
                    },
                ]
        })
        const currentCards = computed(() => {
            return tag.value != '' ? works_content.arr.filter(c => c.tags.includes(tag.value)) : works_content.arr
        })
        return {
            tag,
            works_content,
            currentCards,
            setTag
        }
    }
}).mount('#app')
