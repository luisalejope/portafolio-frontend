<script setup>
defineProps({
    color: {
        type: String,
        default: true,
    }
})
</script>
<template>
    <div class="ag-courses-item">
        <div class="ag-courses-item_link">
            <div class="ag-courses-item_bg" :style="`background-color:${color};`"></div>
            <slot></slot>
            <div class="ag-courses-item_title">
                UI/Web&amp;Graph design for teenagers 11-17&#160;years old
            </div>

            <div class="ag-courses-item_date-box">
                Start:
                <span class="ag-courses-item_date">
                    04.11.2022
                </span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.ag-courses-item {
    -ms-flex-preferred-size: calc(33.33333% - 30px);
    flex-basis: calc(33.33333% - 30px);

    margin: 0 15px 30px;

    overflow: hidden;

    border-radius: 28px;
    &_link {
        display: block;
        padding: 30px 20px;
        background-color: #121212;

        overflow: hidden;

        position: relative;

        &:hover {
            text-decoration: none;
            color: #FFF;
            .ag-courses-item_date {
                text-decoration: none;
                color: #FFF;
            }
            .ag-courses-item_bg {
                -webkit-transform: scale(10);
                -ms-transform: scale(10);
                transform: scale(10);
            }
        }
    }

    &_title{
        min-height: 87px;
        margin: 0 0 25px;

        overflow: hidden;

        font-weight: bold;
        font-size: 30px;
        color: #FFF;

        z-index: 2;
        position: relative;
    }

    &_date {
        font-weight: bold;
        color: #f9b234;

        -webkit-transition: color .5s ease;
        -o-transition: color .5s ease;
        transition: color .5s ease;

        &-box{
            font-size: 18px;
            color: #FFF;

            z-index: 2;
            position: relative;
        }
    }

    &_bg{
        height: 128px;
        width: 128px;
        background-color: #f9b234;

        z-index: 1;
        position: absolute;
        top: -75px;
        right: -75px;

        border-radius: 50%;

        -webkit-transition: all .5s ease;
        -o-transition: all .5s ease;
        transition: all .5s ease;
    }
}

@include MQ(L) {
    .ag-courses-item {
        -ms-flex-preferred-size: calc(50% - 30px);
        flex-basis: calc(50% - 30px);
        &_title{
            font-size: 24px;
        }
    }
}


@include MQ(M) {
    .ag-courses-item {
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        &_link {
            padding: 22px 40px;
        }

        &_title{
            min-height: 72px;
            line-height: 1;

            font-size: 24px;
        }

        &_date {
            &-box{
                font-size: 16px;
            }
        }
    }
}
</style>