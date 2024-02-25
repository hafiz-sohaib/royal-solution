import AOS from 'aos';

export default function aosInit() {
    AOS.init({
        once: false,
        mirror: true,
        duration: 800,
    })
};