# Boostad — Marketing Agency Website

موقع تم بناؤه بـ React + Vite + Tailwind.

## كيفية رفعه على GitHub ليعمل مباشرة (GitHub Pages)

1. أنشئ مستودع (Repository) جديد على GitHub، ثم ارفع محتوى هذا المجلد إليه (بما في ذلك مجلد `.github`).
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO-NAME.git
   git push -u origin main
   ```
2. في المستودع على GitHub، اذهب إلى: **Settings → Pages**.
3. تحت "Build and deployment"، اختر **Source: GitHub Actions**.
4. بمجرد الدفع (push) إلى فرع `main`، سيقوم ملف `.github/workflows/deploy.yml` تلقائيًا بـ:
   - تثبيت الحزم (`npm ci`)
   - بناء الموقع (`npm run build`)
   - نشره على GitHub Pages
5. بعد انتهاء العملية (تابعها من تبويب **Actions**)، سيكون موقعك متاحًا على رابط بالشكل:
   `https://USERNAME.github.io/REPO-NAME/`

## التطوير محليًا

```bash
npm install
npm run dev
```

## ملاحظة

تم ضبط مسارات الصور والبناء (`vite.config.ts` مع `base: "./"`) لتعمل بشكل صحيح سواء نُشر الموقع في جذر النطاق أو داخل مسار فرعي مثل صفحات مشاريع GitHub Pages.
