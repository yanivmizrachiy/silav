# מתמטיקה בספירלה

אתר תדמית/דף נחיתה RTL בעיצוב פרימיום (Hero כהה + כותרת גדולה + ניווט כפתורים עם חצים + כרטיס תוכן “קרמי”), מבוסס **Vite + React + TypeScript + Tailwind**.

---

## מה זה עושה
- מציג Hero כהה עם כותרת **„מתמטיקה בספירלה”** וטקסט פתיחה.
- מתחתיו ניווט כפתורים (Pills) שמחליף תוכן בכרטיסיה אחת.
- בכל בחירה מוצגים: כותרת, פסקת תוכן, ותגיות Highlights.

---

## טכנולוגיות
- Vite
- React + TypeScript
- TailwindCSS
- RTL מלא (`dir="rtl"`, `lang="he"`)

---

## הרצה מקומית
בתיקיית הפרויקט:

```bash
npm install
npm run dev
```

דרישות מומלצות: Node.js 18+.

---

## מבנה קבצים (עיקריים)
- `index.html` – מסמך HTML ראשי עם RTL + טעינת פונטים (Heebo/Assistant) + טעינת React.
- `src/main.tsx` – נקודת כניסה: מרנדר את `App` ומטעין `src/styles.css`.
- `src/App.tsx` – קומפוננטת־על: מנהלת state של הסקשן הפעיל ומציגה Hero + ניווט + כרטיס תוכן.
- `src/components/SyllabusHero.tsx` – ה־Hero (רקע כהה + “glows” דקורטיביים + chips).
- `src/components/SectionNav.tsx` – ניווט הכפתורים עם חץ בין פריטים.
- `src/components/ContentCard.tsx` – כרטיס התוכן הקרמי + תגיות.
- `src/styles.css` – Tailwind layers + מחלקות עזר מותאמות + סטיילינג פרימיום.
- `tailwind.config.ts` – הגדרת Tailwind ותכולת סריקה.
- `postcss.config.js` – Tailwind + Autoprefixer.
- `vite.config.ts` – Vite עם React (SWC).

---

## איך הניווט עובד (ברמת הקוד)
ב־`src/App.tsx` מוגדר טיפוס `SectionKey` ורשימת `SECTIONS`:
- הכפתורים נבנים מתוך `SECTIONS` ומועברים ל־`SectionNav`.
- הבחירה נשמרת ב־state: `active`.
- תוכן הכרטיס נבנה ב־`useMemo` לפי `active` (כותרת/טקסט/highlights).

ברירת־מחדל כרגע: `active = "implementation"` (מוצג „מוטיבציה”).

---

## RTL ועברית
- `index.html` מוגדר `lang="he"` ו־`dir="rtl"`.
- הטיפוגרפיה נשענת על פונטים עבריים (Heebo/Assistant).

---

## עיצוב (CSS/Tailwind)
ב־`src/styles.css` יש:
- Tailwind בסיסי: `@tailwind base/components/utilities`.
- משתנה פונט גלובלי ב־`:root`.
- Utility classes מותאמות (למשל `bg-sand-50`, `bg-navy-950`, `text-ink-900`).
- קומפוננטות עיצוב:
  - `.chip` (תגיות קטנות ב־Hero)
  - `.navPill` + מצבים (`--idle`, `--active`)
  - `.card` (כרטיס “קרמי”)
  - `.tag` (תגיות Highlights)
  - `.heroGlow` (כתמי אור דקורטיביים)

---

## התאמות מהירות
- שינוי הסקשן הפעיל בתחילת טעינה: `src/App.tsx` → הערך של `useState`.
- שינוי טקסטים/Highlights: `src/App.tsx` בתוך ה־`switch (active)`.
- שינוי סדר כפתורים/Labels: מערך `SECTIONS`.

---

## המשך אפשרי (לא כלול במסמך זה)
אם תרצה, אפשר להרחיב ל־Multi-page עם `react-router-dom` (URL לכל פרק) או להוסיף שכבת “ספר דיגיטלי PDF” עם דפדוף/סימון.
