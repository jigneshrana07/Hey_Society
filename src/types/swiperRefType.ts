export interface SwiperRefProps {
    swipeLeft: (mustDecrementCardIndex?: boolean) => void;
    swipeRight: (mustDecrementCardIndex?: boolean) => void;
    swipeTop: (mustDecrementCardIndex?: boolean) => void;
    swipeBottom: (mustDecrementCardIndex?: boolean) => void;
    jumpToCardIndex: (cardIndex: number) => void;
    swipeBack: (
        cb?: (previousCardIndex: number, previousCard: any) => void
    ) => void;
}