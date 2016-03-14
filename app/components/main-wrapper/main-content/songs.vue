<template>
    <section id="songsWrapper">
        <h1 class="heading">
            <span>All Songs
                <span class="meta" v-show="meta.songCount">
                    {{ meta.songCount }} {{ meta.songCount | pluralize 'song' }}
                    •
                    {{ meta.totalLength }}
                </span>
            </span>

            <div class="buttons">
                <button
                    class="play-shuffle btn btn-orange"
                    @click.prevent="shuffle"
                    v-if="state.songs.length && selectedSongs.length < 2"
                >
                    <i class="fa fa-random"></i> All
                </button>
                <button class="play-shuffle btn btn-orange" @click.prevent="shuffleSelected" v-if="selectedSongs.length > 1">
                    <i class="fa fa-random"></i> Selected
                </button>

                <button class="btn btn-green" @click.prevent.stop="showingAddToMenu = !showingAddToMenu" v-if="selectedSongs.length">
                    {{ showingAddToMenu ? 'Cancel' : 'Add To…' }}
                </button>

                <add-to-menu :songs="selectedSongs" :showing="showingAddToMenu"><add-to-menu>
            </div>
        </h1>

        <song-list :items="state.songs" :selected-songs.sync="selectedSongs" type="allSongs"></song-list>
    </section>
</template>

<script>
    import songStore from '../../../stores/song';
    import playback from '../../../services/playback';
    import hasSongList from '../../../mixins/has-song-list';

    export default {
        mixins: [hasSongList],

        data() {
            return {
                state: songStore.state,
            };
        },

        methods: {
            /**
             * Shuffle all songs.
             */
            shuffle() {
                // A null here tells the method to shuffle all songs, which is what we want.
                playback.queueAndPlay(null, true);
            },
        },
    };
</script>

<style lang="sass">
    @import "../../../sass/partials/_vars.scss";
    @import "../../../sass/partials/_mixins.scss";
</style>

