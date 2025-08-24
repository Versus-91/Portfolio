import { createApp, ref, reactive, computed } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.5.13/vue.esm-browser.prod.min.js'

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
                        title: 'Machine Learning in Web',
                        description: `A web-based platform for building machine learning pipelines with integrated tools for PFI, PDP, PCA, t-SNE, and autoencoders. Supports data visualization, explainable AI, and dimensionality reduction. Scales to large datasets via TU Dresden's HPC infrastructure.`,
                        previewLink: 'https://jolly-pebble-0add22003.2.azurestaticapps.net/',
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
                        description: `Improved model accuracy for cancer detection in whole slide images by 5% by designing a novel distance-aware Vision Transformer (ViT) that incorporated spatial relationships between patches into the self-attention mechanism.
<br/>
Tools and dataset: Pytorch, TCGA-BRCA`,
                        previewLink: '#',
                        palceholderImage: 'images/t.webp',
                        sourceLink: 'https://github.com/Versus-91/SpatiallyAwareTransformerNetwork',
                        tags: ['Deep Learning']
                    }
                    , {
                        title: 'Reinforcement Learning Pac-man',
                        description: `Using Deep Reinforcement Learning models to learn how to play Pac-man based on
                                interaction wiith the game
                                and feedback received.`,
                        previewLink: '#',
                        sourceLink: 'https://github.com/Versus-91/pacman_final',
                        palceholderImage: 'images/drl.webp',
                        tags: ['Deep Learning']
                    },
                    {
                        title: 'Understanding the black box of Machine Learning',
                        description: `
                        This project explores the "black box" nature of machine learning algorithms by applying model interpretability techniques. The primary goal is to understand and compare how different models make their predictions and limitation of 2 common explainability methods.
<ul>
<li>Techniques Used: Partial Dependence Plots (PDP) and Feature Importance analysis</li>

<li>Models Tested: Logistic/Linear Regression, Random Forest, XGBoost, Multilayer perceptron, and support vector machine </li>

<li>Datasets: California housing, Diabetes, MNIST, heart disease </li>
</ul>`
                        ,
                        previewLink: '#',
                        sourceLink: 'https://github.com/Versus-91/blackboxofmachinelearning',
                        palceholderImage: 'images/t.webp',
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
                    }
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
