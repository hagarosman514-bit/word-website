export default function Profile() {
  return (
    <main className="min-h-screen  p-6 md:p-10 text-right" dir="rtl">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        
        {/* هيدر الصفحة بتصميم مميز */}
        <div className="h-40 bg-[#2b579a] flex flex-col items-center justify-center text-white">
          <h2 className="text-2xl font-bold opacity-90 mb-2">بطاقة بيانات الموقع التعليمي</h2>
          <div className="h-1 w-20 bg-yellow-400 rounded-full"></div>
        </div>
        
        <div className="p-8 -mt-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-50">
            
            {/* الاسم */}
            <div className="flex flex-col items-center mb-8 border-b pb-6">
              <div className="w-24 h-24 bg-[#2b579a] text-white rounded-full flex items-center justify-center text-4xl font-black mb-4 shadow-md">
                H
              </div>
              <h1 className="text-3xl font-black text-slate-800">هاجر عثمان محمد عثمان</h1>
              <p className="text-[#2b579a] font-bold text-lg mt-1">مصممة المحتوى التعليمي</p>
            </div>

            {/* تفاصيل البيانات */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-slate-50 p-5 rounded-2xl border-r-4 border-[#2b579a] transition-transform hover:scale-105">
                <h3 className="text-sm text-slate-500 font-bold mb-1">الكلية والجامعة</h3>
                <p className="text-lg text-slate-800 font-medium">كلية التربية النوعية</p>
                <p className="text-md text-slate-700">جامعة عين شمس</p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border-r-4 border-[#2b579a] transition-transform hover:scale-105">
                <h3 className="text-sm text-slate-500 font-bold mb-1">التخصص</h3>
                <p className="text-lg text-slate-800 font-medium">قسم تكنولوجيا التعليم</p>
                <p className="text-md text-slate-700">شعبة معلم حاسب</p>
              </div>

              <div className="bg-blue-50 p-5 rounded-2xl border-r-4 border-yellow-500 md:col-span-2">
                <h3 className="text-sm text-slate-500 font-bold mb-2">تحت إشراف</h3>
                <div className="flex flex-col md:flex-row md:gap-10">
                  <p className="text-lg text-[#2b579a] font-bold">د. أمل حسان</p>
                  <p className="text-lg text-[#2b579a] font-bold">د. محمد عادل</p>
                </div>
              </div>

            </div>

            {/* زر العودة */}
            <div className="mt-10 text-center">
              <a href="/" className="inline-flex items-center gap-2 bg-[#2b579a] text-white px-10 py-3 rounded-full font-bold shadow-lg hover:bg-[#1e3e6d] transition-all hover:-translate-x-2">
                <span>العودة للرئيسية</span>
                <span className="text-xl">←</span>
              </a>
            </div>

          </div>
        </div>

        {/* فوتر بسيط */}
        <div className="p-4 text-center text-slate-400 text-sm italic">
          مشروع الحقيبة الإلكترونية لتعلم مهارات Microsoft Word - 2026
                     </div>
      </div>
    </main>
  );
}