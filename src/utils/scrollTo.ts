import scroller from './scroller';

export const scrollToBottom = () => {
    scroller.scrollTo('bottom-chat', {
        duration: 800,
        delay: 0,
        containerId: 'conversation-wrapper',
        smooth: 'easeInOutQuart',
    });
};

export const scrollToLastMessage = () => {
    scroller.scrollTo('last-message', {
        duration: 800,
        delay: 0,
        containerId: 'conversation-wrapper',
        smooth: 'easeInOutQuart',
    });
};