<script setup>

</script>
<template>
    <div class="aboutme">
        <h2 class="aboutme-title">About me</h2>
        <p class="aboutme-info">
            As an adept developer, I have a well-rounded skill set in programming
            and honed talents in UX/UI updates and software testing, making me an
            ideal fit for the <span>Front End Developer</span> position. Further, I am a
            recognized expert in <span>teamwork</span> and a <span>communicative</span> collaborator. My
            previous roles have strengthened my capabilities in <span>innovation</span> and
            <span>motivation</span>, including a keen attention to detail and accuracy. I am
            excited at the prospect of bringing my talents to you.
        </p>
        <p class="aboutme-info__mobile">
            As an adept developer, I bring a well-rounded skill set in programming, UX/UI updates, and software testing,
            making me perfect for the <span>Front End Developer</span> role. Renowned for <span>teamwork</span> and
            <span>communication</span>, my experience emphasizes <span>innovation</span> and <span>motivation</span>,
            ensuring attention to detail. Excited to join your team.
        </p>
    </div>
</template>

<style lang="scss">
.aboutme {
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin: 4rem 5vw;

    &-title {
        font-size: $fs-l;
        text-align: center;
    }

    &-info {
        font-size: $fs-m;

        span {
            color: $yellow-sea-500;
        }

        &__mobile{
            display: none;
        }
    }
}

@include MQ(M) {
    .aboutme {
        &-title {
            font-size: $fs-m;
        }

        &-info {
            display: none;

            &__mobile {
                display: block;
                font-size: $fs-s;

                span {
                    color: $yellow-sea-500;
                }
            } 
        }
    }
}
</style>