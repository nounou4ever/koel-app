<template>
    <div id="aboutOverlay" v-if="showing">
        <section v-on-clickaway="hide">
            <header>
                <h1>
                    <span class="app-title">{{ config.productName }}</span>
                    <span class="app-ver">{{ config.version }}</span>
                </h1>
            </header>

            <div class="main">
                <div class="logo"></div>
                <p>
                    Koel is developed and maintained by <span class="author">{{ config.author }}</span>
                    and licensed under MIT.
                    The source code can be found on <a @click.prevent="openLink(config.repository.url)">GitHub</a>.
                    For more information, visit <a @click.prevent="openLink(config.homepage)">the project homepage</a>.
                </p>

                <div class="tech">
                    <h3>Technologies:</h3>
                    <div class="names"></div>
                </div>

                <div class="sponsors">
                    <h3>Sponsors:</h3>
                    <div class="names"></div>
                </div>
            </div>

            <footer>
                <button class="btn btn-red" @click.prevent="hide">×</button>
            </footer>
        </section>
    </div>
</template>

<script>
    import appConfig from 'json!../../package.json';
    import VueClickaway from 'vue-clickaway';
    import { shell } from 'electron';

    export default {
        mixins: [VueClickaway.mixin],

        data() {
            return {
                showing: false,
                config: appConfig,
            };
        },

        methods: {
            show() {
                this.showing = true;
            },

            hide() {
                this.showing = false;
            },

            openLink(url) {
                shell.openExternal(url);
            },
        },
    };
</script>

<style lang="sass">
    @import "../../sass/partials/_vars.scss";
    @import "../../sass/partials/_mixins.scss";

    #aboutOverlay {
        z-index: 10000;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .7);

        @include vertical-center();

        $borderRadius: 5px;

        > section {
            box-shadow: inset 0 0px 0 rgba(255,255,255,.6), 0 22px 70px 4px rgba(0,0,0,0.56), 0 0 0 1px rgba(0, 0, 0, 0.3);
            background: $colorMainBgr;
            position: relative;
            width: 100%;
            max-width: 540px;
            border-radius: $borderRadius;
            overflow: hidden;
            color: $color2ndText;
            text-align: center;

            > header, > footer {
                padding: 12px;
            }

            .main {
                padding: 24px 48px;
                font-size: 90%;

                a {
                    color: $colorMainText;
                }
            }

            > header {
                background: $color2ndBgr;
                color: $colorMainText;
                font-size: 120%;

                .app-ver {
                    opacity: .5;
                }
            }

            > footer {
                background: $color2ndBgr;
                color: $colorMainText;

                button {
                    width: 32px;
                    height: 32px;
                    border-radius: 16px;
                }
            }

            .logo {
                display: block;
                background: url(../../img/logo.svg) center top no-repeat;
                background-size: 156px;
                height: 172px;
            }

            h3 {
                margin: 32px 0 8px;
            }

            .author {
                color: $colorMainText;
            }

            .tech {
                .names {
                    background: url(../../img/tech.png) center top no-repeat;
                    background-size: 250px;
                    height: 32px;
                }
            }

            .sponsors {
                .names {
                    background: url(../../img/sponsors.png) center top no-repeat;
                    background-size: 193px;
                    height: 24px;
                }
            }
        }
    }
</style>
