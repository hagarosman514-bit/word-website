export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen  p-6 text-center" dir="rtl">
      
      {/* العنوان الجديد واللوجو */}
      <div className="mb-10">
        <div className="w-16 h-16 bg-[#2b579a] mx-auto rounded-xl shadow-lg flex items-center justify-center mb-4 transition-transform hover:scale-110">
          <span className="text-white text-4xl font-serif font-bold">W</span>
        </div>
        <h1 className="text-5xl font-black text-[#2b579a] mb-2">
           الموقع التعليمي لبرنامج Word
        </h1>
        <div className="h-1.5 w-40 bg-[#2b579a] mx-auto rounded-full mb-4"></div>
        <p className="text-xl text-slate-600 font-medium">
          منصتكم الاحترافية لتعلم مهارات معالج النصوص خطوة بخطوة
        </p>
      </div>

      {/* شبكة الأزرار بتعديلاتك الجديدة */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        
        {/* زرار إعداد الطالبة (اللي فيه معلوماتك) */}
        <a href="/profile" className="p-6 bg-[#2b579a] text-white rounded-2xl shadow-md hover:bg-[#1e3e6d] transition-all hover:-translate-y-2">
          <h2 className="text-xl font-bold mb-1">إعداد الطالبة</h2>
          <p className="text-blue-100 text-xs text-opacity-80">تعرف على مصممة الموقع</p>
        </a>

        {/* زرار أهداف الموقع (بدل أهداف الحقيبة) */}
        <a href="/goals" className="p-6 bg-[#2b579a] text-white rounded-2xl shadow-md hover:bg-[#1e3e6d] transition-all hover:-translate-y-2">
          <h2 className="text-xl font-bold mb-1">أهداف الموقع</h2>
          <p className="text-blue-100 text-xs text-opacity-80">ماذا تهدف هذه المنصة؟</p>
        </a>

        {/* زرار الدروس التعليمية */}
        <a href="/content" className="p-6 bg-[#2b579a] text-white rounded-2xl shadow-md hover:bg-[#1e3e6d] transition-all hover:-translate-y-2 border-4 ">
          <h2 className="text-xl font-bold mb-1">الدروس التعليمية</h2>
          <p className="text-blue-100 text-xs text-opacity-80">ابدأ المحتوى الآن</p>
        </a>

        <a href="/resources
        " className="p-6 bg-[#2b579a] text-white rounded-2xl shadow-md hover:bg-[#1e3e6d] transition-all hover:-translate-y-2">
          <h2 className="text-xl font-bold mb-1">المصادر والملفات</h2>
          <p className="text-blue-100 text-xs text-opacity-80">تحميل ملفات التدريب</p>
        </a>

        <a href="/exams
        " className="p-6 bg-[#2b579a] text-white rounded-2xl shadow-md hover:bg-[#1e3e6d] transition-all hover:-translate-y-2">
          <h2 className="text-xl font-bold mb-1">التقويم والاختبارات</h2>
          <p className="text-blue-100 text-xs text-opacity-80">اختبر مهاراتك</p>
        </a>

        <a href="/contact" className="p-6 bg-[#2b579a] text-white rounded-2xl shadow-md hover:bg-[#1e3e6d] transition-all hover:-translate-y-2">
          <h2 className="text-xl font-bold mb-1">تواصل معنا</h2>
          <p className="text-blue-100 text-xs text-opacity-80">استفسارات واقتراحات</p>
        </a>

      </div>

    </main>
  );
}