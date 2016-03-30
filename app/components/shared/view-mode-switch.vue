<template>
    <span class="view-modes">
        <a :class="{ active: mode === 'thumbnails' }"
            title="View as thumbnails"
            @click.prevent="setMode('thumbnails')"><i class="fa fa-th-large"></i></a>
        <a :class="{ active: mode === 'list' }"
            title="View as list"
            @click.prevent="setMode('list')"><i class="fa fa-list"></i></a>
    </span>
</template>

<script>
    import preferenceStore from '../../stores/preference';

    export default {
        props: ['mode', 'for'],

        computed: {
            /**
             * The preference key for local storage for persistent mode.
             *
             * @return {string}
             */
            preferenceKey() {
                return `${this.for}ViewMode`;
            },
        },

        methods: {
            setMode(mode) {
                preferenceStore.set(this.preferenceKey, this.mode = mode);
            },
        },

        events: {
            'koel:ready': function () {
                this.mode = preferenceStore.get(this.preferenceKey);

                // If the value is empty, we set a default mode.
                if (!this.mode) {
                    this.mode = 'thumbnails';
                }
            },
        },
    };
</script>

<style lang="sass" scoped>
    @import "../../sass/partials/_vars.scss";
    @import "../../sass/partials/_mixins.scss";

    .view-modes {
        display: flex;
        flex: 0 0 64px;
        border: 1px solid rgba(255, 255, 255, .2);
        height: 28px;
        border-radius: 5px;
        overflow: hidden;

        a {
            width: 50%;
            text-align: center;
            line-height: 26px;
            font-size: 14px;

            &.active {
                background: #fff;
                color: #111;
            }
        }
    }
</style>
