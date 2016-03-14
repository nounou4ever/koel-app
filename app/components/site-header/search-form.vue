<template>
    <div class="side search" id="searchForm">
        <input type="search"
            :class="{ dirty: q }"
            placeholder="Search"
            v-model="q"
            debounce="500"
            v-koel-focus="showing">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                q: '',
            };
        },

        watch: {
            /**
             * Broadcast a 'filter:changed' event when the filtering query changes.
             * Other components listening to this filter will update its content.
             */
            q() {
                this.$root.$broadcast('filter:changed', this.q);
            },
        },

        events: {
            /**
             * Listen to 'search:toggle' event to show or hide the search form.
             * This should only be triggered on a mobile device.
             */
            'search:toggle': function () {
                this.showing = !this.showing;
            },

            'koel:teardown': function () {
                this.q = '';
            },
        },
    };
</script>

<style lang="sass">
    @import "../../sass/partials/_vars.scss";
    @import "../../sass/partials/_mixins.scss";

    #searchForm {
        @include vertical-center();
        flex: 0 0 256px;
        order: -1;
        background: $colorSearchFormBgr;

        input[type="search"] {
            width: 218px;
            margin-top: 0;
        }

        // Leave some space for the traffic lights on Mac.
        html.mac & {
            padding-left: 96px;
        }
    }
</style>
