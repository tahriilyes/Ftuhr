const schedules = {
    friday: ["الفيزياء: 1.5 ساعة", "الرياضيات: 1.2 ساعة", "الفلسفة: 1.0 ساعة"],
    saturday: ["العلوم: 1.4 ساعة", "الرياضيات: 1.0 ساعة", "الفرنسية: 1.0 ساعة"],
    sunday: ["الإنجليزية: 1.0 ساعة", "العلوم: 1.1 ساعة", "اللغة العربية: 1.0 ساعة"],
    monday: ["الرياضيات: 1.5 ساعة", "الإسلامية: 1.0 ساعة", "الفيزياء: 1.2 ساعة"],
    tuesday: ["الفرنسية: 1.1 ساعة", "العلوم: 1.3 ساعة", "التاريخ: 1.0 ساعة"],
    wednesday: ["الرياضيات: 1.2 ساعة", "الفيزياء: 1.0 ساعة", "الفلسفة: 1.0 ساعة"],
    thursday: ["مراجعة عامة: 3 ساعات", "راحة: 1 ساعة"]
};
function showSchedule(day) {
    const title = document.getElementById("day-title");
    const list = document.getElementById("subjects-list");
    title.textContent = `برنامج يوم ${translateDay(day)}`;
    list.innerHTML = "";
    schedules[day].forEach(subject => {
        const div = document.createElement("div");
        div.className = "card";
        div.textContent = subject;
        list.appendChild(div);
    });
    document.getElementById("schedule").classList.remove("hidden");
}
function translateDay(day) {
    const names = {
        friday: "الجمعة", saturday: "السبت", sunday: "الأحد",
        monday: "الإثنين", tuesday: "الثلاثاء", wednesday: "الأربعاء", thursday: "الخميس"
    };
    return names[day];
}
const quotes = [
    "النجاح يحتاج إلى صبر، لا تتوقف الآن!",
    "راجع بتخطيط، وتقدم بثبات.",
    "كل دقيقة تقربك من هدفك.",
    "كن أنت المحارب، لا الضحية."
];
setInterval(() => {
    document.getElementById("quote").textContent = quotes[Math.floor(Math.random() * quotes.length)];
}, 7000);
const countdown = document.getElementById("countdown-timer");
const bacDate = new Date("2025-06-09T08:00:00");
setInterval(() => {
    const now = new Date();
    const diff = bacDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    countdown.innerHTML = `<strong>الباك:</strong><br>${days} يوم / ${hours} ساعة / ${minutes} دقيقة`;
}, 1000);