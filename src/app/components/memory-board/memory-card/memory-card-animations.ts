import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const cardAnimations = trigger('cardFlip', [
    state(
        'default',
        style({
        transform: 'rotateY(0deg)',
        })
    ),
    state(
        'flipped',
        style({
        transform: 'rotateY(180deg)',
        })
    ),
    state(
        'matched',
        style({
        transform: 'translateZ(80px) rotateY(180deg)',
        opacity: 0
        })
    ),
    transition('default => flipped', [
        animate(
        `500ms ease-in-out`,
        keyframes([
            style({
            transform: 'translate3d(0, -10px, 60px)',
            }),
            style({
            transform: 'translate3d(0, -15px, 80px) rotateY(180deg)',
            }),
            style({
            transform: 'translate3d(0,0,0) rotateY(180deg)',
            }),
        ])
        ),
    ]),
    transition('flipped => default', [
        animate(
        `500ms ease-in-out`,
        keyframes([
            style({
            transform: 'translate3d(0, -10px, 60px) rotateY(180deg)',
            }),
            style({
            transform: 'translate3d(0, -15px, 80px) rotateY(0deg)',
            }),
            style({
            transform: 'translate3d(0,0,0) rotateY(0deg)',
            }),
        ])
        ),
    ]),
    transition('* => matched', [
        animate(
        `400ms`,
        keyframes([
            style({
            transform: 'translateZ(0px) rotateY(180deg)',
            }),
            style({
            transform: 'translateZ(80px) rotateY(180deg)',
            }),
            style({
                transform: 'translateZ(-80px) rotateY(180deg)',
            }),
        ])
        ),
    ]),
]);
