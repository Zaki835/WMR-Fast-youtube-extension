// script.js

window.addEventListener("load", () => {
  // استخراج عدد الثواني من النص
  const bodyText = document.body.innerText;
  const match = bodyText.match(/(\d+)\s+Запустите\s+видео/);
  const seconds = match ? parseInt(match[1]) : 10;

  console.log(`المدة المطلوبة للمشاهدة: ${seconds} ثانية`);

  // محاولة تشغيل الفيديو تلقائيًا
  const playBtn = document.querySelector("button[aria-label='Play'], .ytp-large-play-button");
  if (playBtn) {
    playBtn.click();
    console.log("تم الضغط على زر تشغيل الفيديو");
  } else {
    console.warn("لم يتم العثور على زر التشغيل");
  }

  // بعد انتهاء المدة، النقر على زر 'Продолжить'
  setTimeout(() => {
    const confirmBtn = document.querySelector("a[onclick*='check']");
    if (confirmBtn) {
      console.log("الضغط على زر تأكيد المشاهدة 'Продолжить'");
      confirmBtn.click();

      // بعد دقيقتين من التأكيد، إغلاق التبويب
      setTimeout(() => {
        console.log("إغلاق التبويب بعد دقيقتين من التأكيد");
        window.close();
      }, 120000); // 120000 مللي ثانية = دقيقتين
    } else {
      console.warn("لم يتم العثور على زر 'Продолжить'");
    }
  }, (seconds + 3) * 1000); // الانتظار للمدة المحددة + 3 ثوانٍ احتياطية
});
