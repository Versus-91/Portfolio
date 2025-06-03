const { createApp, ref, reactive, computed } = Vue

createApp({
    setup() {
        function setTag(value) {
            tag.value = value
        }
        const tag = ref('')
        const works_content = reactive({
            arr:
                [
                    {
                        title: 'Machine Learining in Web',
                        description: `A web platform common machine learning, data visualization, explainable AI, and
                                dimensionality reduction for machine learning pipelines inside a web platform with the
                                capability of using TU Dresden HPC server for large datasets.`,
                        previewLink: '#',
                        sourceLink: '#',
                        tags: ['Web', 'Machine Learning'],
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
                        previewLink: 'https://versus-91.github.io/ParallelCoordinatePlot/"',
                        palceholderImage: 'images/t.webp',
                        sourceLink: 'https://github.com/Versus-91/SpatiallyAwareTransformerNetwork',
                        tags: ['Deep Learining']
                    },
                    {
                        title: 'Force Directed Graph and Magic Lense ',
                        description: `Parallel Coordinate Plot visualization for high deimension data visualization with magic
                                lense for focusing on
                                certain parts of the visualization.`,
                        previewLink: 'https://versus-91.github.io/ParallelCoordinatePlot/',
                        sourceLink: 'https://github.com/Versus-91/ParallelCoordinatePlot',
                        palceholderImage: 'images/pcp.png',
                        tags: ['Web']
                    },
                    {
                        title: 'Parallel Coordinate Plot with brushing',
                        description: `Parallel Coordinate Plot visualization for high deimension data visualization with magic
                                lense for focusing on
                                certain parts of the visualization.`,
                        previewLink: '#',
                        sourceLink: '#',
                        palceholderImage: 'images/para.png',
                        tags: ['Web']
                    }, {
                        title: 'D3 US airports visualization',
                        description: `Parallel Coordinate Plot visualization for high deimension data visualization with magic
                                lense for focusing on
                                certain parts of the visualization.`,
                        previewLink: 'images/map.png',
                        sourceLink: '#',
                        palceholderImage: 'images/map.png',
                        tags: ['Web']
                    }, {
                        title: 'Reinforcement Learining Pac-man',
                        description: `Using Deep Reinforcement Learining models to learn how to play Pac-man based on
                                interaction wiith the game
                                and feedback received.`,
                        previewLink: '#',
                        sourceLink: 'https://github.com/Versus-91/pacman_final',
                        palceholderImage: 'images/drl.webp',
                        tags: ['Deep Learning']
                    },
                ]
        })

        currentCards = computed(() => {
            console.log(tag.value);

            return tag.value != '' ? works_content.arr.filter(c => c.tags.includes(tag.value)) : works_content.arr
        })
        return {
            tag,
            works_content, currentCards, setTag
        }
    }
}).mount('#app')
