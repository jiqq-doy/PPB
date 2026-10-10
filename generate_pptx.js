const PptxGenJS = require("pptxgenjs");

let pres = new PptxGenJS();
pres.layout = "LAYOUT_16x9";

// Dark Mode Colors
const cBg = "0B1120";
const cTextMain = "F8FAFC";
const cTextMuted = "94A3B8";
const cNeonAqua = "00F0FF";
const cNeonBlue = "3B82F6";
const cRed = "EF4444";
const cOrange = "F97316";
const cGreen = "10B981";

pres.defineSlideMaster({
  title: "DARK_MASTER",
  background: { color: cBg },
  objects: [
    { rect: { x: 0, y: 0, w: "11.1%", h: 0.05, fill: { color: cNeonAqua } } } // Mimic progress bar
  ]
});

// SLIDE 1 - COVER
let s1 = pres.addSlide({ masterName: "DARK_MASTER" });
// Staggered Title
s1.addText("ANALISIS", { x: 0.5, y: 1.0, w: 9, h: 1.5, fontSize: 72, bold: true, color: cTextMain, fontFace: "Arial Black" });
// PPTX doesn't natively support hollow text easily via simple config in some viewers, so we'll just use muted color for "PROSES" to give the staggered feel
s1.addText("PROSES", { x: 2.5, y: 2.0, w: 9, h: 1.5, fontSize: 72, bold: true, color: cBg, outline: { size: 2, color: cTextMain }, fontFace: "Arial Black" });
s1.addText("BISNIS.", { x: 4.5, y: 3.0, w: 9, h: 1.5, fontSize: 72, bold: true, color: cNeonAqua, fontFace: "Arial Black" });

s1.addText("PT BIRU SEMESTA ABADI", { x: 0.5, y: 4.5, w: 9, h: 0.5, fontSize: 20, bold: true, color: cTextMuted, fontFace: "Arial", letterSpacing: 2 });
s1.addText("Process Identification  •  Process Portfolio  •  Process Discovery", { x: 0.5, y: 5.0, w: 9, h: 0.5, fontSize: 14, color: cTextMuted, fontFace: "Arial" });

// SLIDE 2 - PROFIL PERUSAHAAN
let s2 = pres.addSlide({ masterName: "DARK_MASTER" });
s2.addText("PT BIRU\nSEMESTA\nABADI.", { x: 0.5, y: 1.0, w: 4, h: 3, fontSize: 54, bold: true, color: cTextMain, fontFace: "Arial Black" });
s2.addText("Penyedia air minum isi ulang berkualitas tinggi (Air Minum BIRU) sejak 2002.", { x: 0.5, y: 4.0, w: 4, h: 1, fontSize: 16, color: cTextMuted });

s2.addText("> 837", { x: 5.5, y: 1.0, w: 4, h: 0.8, fontSize: 48, bold: true, color: cNeonAqua, fontFace: "Arial Black" });
s2.addText("GERAI BEROPERASI", { x: 5.5, y: 1.7, w: 4, h: 0.3, fontSize: 12, bold: true, color: cTextMuted, letterSpacing: 1 });

s2.addText("46", { x: 5.5, y: 2.3, w: 4, h: 0.8, fontSize: 48, bold: true, color: cNeonAqua, fontFace: "Arial Black" });
s2.addText("KOTA TERJANGKAU", { x: 5.5, y: 3.0, w: 4, h: 0.3, fontSize: 12, bold: true, color: cTextMuted, letterSpacing: 1 });

s2.addText("FRANCHISE", { x: 5.5, y: 3.6, w: 4, h: 0.8, fontSize: 36, bold: true, color: cNeonBlue, fontFace: "Arial Black" });
s2.addText("MODEL BISNIS", { x: 5.5, y: 4.3, w: 4, h: 0.3, fontSize: 12, bold: true, color: cTextMuted, letterSpacing: 1 });

// SLIDE 3 - PENJELASAN LANDSCAPE (KATEGORI PROSES)
let s3 = pres.addSlide({ masterName: "DARK_MASTER" });
s3.addText("KATEGORI PROSES", { x: 0.5, y: 0.3, w: 9, h: 0.8, fontSize: 36, bold: true, color: cTextMain, fontFace: "Arial Black" });

s3.addShape(pres.shapes.LINE, { x: 0.5, y: 1.5, w: 0, h: 3.5, line: { color: cNeonAqua, width: 2 } });
s3.addText("CORE", { x: 0.7, y: 1.5, w: 2.5, h: 0.5, fontSize: 24, bold: true, color: cNeonAqua });
s3.addText("Proses inti yang langsung menghasilkan uang dan memberikan nilai jual produk ke pelanggan akhir secara nyata.", { x: 0.7, y: 2.1, w: 2.5, h: 2, fontSize: 14, color: cTextMuted, valign: "top" });

s3.addShape(pres.shapes.LINE, { x: 3.7, y: 1.5, w: 0, h: 3.5, line: { color: cNeonBlue, width: 2 } });
s3.addText("MANAGEMENT", { x: 3.9, y: 1.5, w: 2.5, h: 0.5, fontSize: 24, bold: true, color: cNeonBlue });
s3.addText("Proses taktis & strategis untuk merencanakan, mengawasi, serta mengevaluasi kelancaran operasional bisnis.", { x: 3.9, y: 2.1, w: 2.5, h: 2, fontSize: 14, color: cTextMuted, valign: "top" });

s3.addShape(pres.shapes.LINE, { x: 6.9, y: 1.5, w: 0, h: 3.5, line: { color: cTextMain, width: 2 } });
s3.addText("SUPPORT", { x: 7.1, y: 1.5, w: 2.5, h: 0.5, fontSize: 24, bold: true, color: cTextMain });
s3.addText("Proses di balik layar yang mendukung SDM dan mutu standar agar proses Core dan Management berjalan lancar.", { x: 7.1, y: 2.1, w: 2.5, h: 2, fontSize: 14, color: cTextMuted, valign: "top" });


// SLIDE 4 - LANDSCAPE MODEL
let s4 = pres.addSlide({ masterName: "DARK_MASTER" });
s4.addText("LANDSCAPE MODEL", { x: 0.5, y: 0.3, w: 9, h: 0.8, fontSize: 36, bold: true, color: cTextMain, fontFace: "Arial Black" });

s4.addShape(pres.shapes.LINE, { x: 0.5, y: 1.5, w: 0, h: 1, line: { color: cTextMuted, width: 4 } });
s4.addText("MANAGEMENT", { x: 0.8, y: 1.4, w: 3, h: 0.4, fontSize: 16, bold: true, color: cTextMuted, letterSpacing: 2 });
s4.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 1.9, w: 3.5, h: 0.5, fill: { color: "1E293B" }, rectRadius: 0.1 });
s4.addText("1. Pendaftaran & Aktivasi Franchise", { x: 0.8, y: 1.9, w: 3.5, h: 0.5, fontSize: 12, color: cTextMain, align: "center" });
s4.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 4.5, y: 1.9, w: 3.5, h: 0.5, fill: { color: "1E293B" }, rectRadius: 0.1 });
s4.addText("7. Pengelolaan & Monitoring Outlet", { x: 4.5, y: 1.9, w: 3.5, h: 0.5, fontSize: 12, color: cTextMain, align: "center" });

s4.addShape(pres.shapes.LINE, { x: 0.5, y: 2.8, w: 0, h: 1, line: { color: cNeonAqua, width: 4 } });
s4.addText("CORE", { x: 0.8, y: 2.7, w: 3, h: 0.4, fontSize: 16, bold: true, color: cNeonAqua, letterSpacing: 2 });
s4.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 3.2, w: 2.8, h: 0.5, fill: { color: "00F0FF", transparency: 90 }, line: {color: cNeonAqua, width: 1}, rectRadius: 0.1 });
s4.addText("2. Pemesanan Air Minum", { x: 0.8, y: 3.2, w: 2.8, h: 0.5, fontSize: 12, color: cTextMain, align: "center" });
s4.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 3.8, y: 3.2, w: 2.8, h: 0.5, fill: { color: "00F0FF", transparency: 90 }, line: {color: cNeonAqua, width: 1}, rectRadius: 0.1 });
s4.addText("6. Pengisian & Pengemasan", { x: 3.8, y: 3.2, w: 2.8, h: 0.5, fontSize: 12, color: cTextMain, align: "center" });
s4.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 6.8, y: 3.2, w: 2.8, h: 0.5, fill: { color: "00F0FF", transparency: 90 }, line: {color: cNeonAqua, width: 1}, rectRadius: 0.1 });
s4.addText("3. Komplain Pelanggan", { x: 6.8, y: 3.2, w: 2.8, h: 0.5, fontSize: 12, color: cTextMain, align: "center" });

s4.addShape(pres.shapes.LINE, { x: 0.5, y: 4.1, w: 0, h: 1, line: { color: cTextMuted, width: 4 } });
s4.addText("SUPPORT", { x: 0.8, y: 4.0, w: 3, h: 0.4, fontSize: 16, bold: true, color: cTextMuted, letterSpacing: 2 });
s4.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 4.5, w: 3.5, h: 0.5, fill: { color: "1E293B" }, rectRadius: 0.1 });
s4.addText("4. Pengujian Kelayakan Air", { x: 0.8, y: 4.5, w: 3.5, h: 0.5, fontSize: 12, color: cTextMain, align: "center" });
s4.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 4.5, y: 4.5, w: 3.5, h: 0.5, fill: { color: "1E293B" }, rectRadius: 0.1 });
s4.addText("5. Rekrutmen Karyawan", { x: 4.5, y: 4.5, w: 3.5, h: 0.5, fontSize: 12, color: cTextMain, align: "center" });


// SLIDE 5 - PORTFOLIO MATRIX
let s5 = pres.addSlide({ masterName: "DARK_MASTER" });
s5.addText("PORTFOLIO MATRIX", { x: 0.5, y: 0.3, w: 9, h: 0.8, fontSize: 36, bold: true, color: cTextMain, fontFace: "Arial Black" });

// Grid Matrix Layout
s5.addText("IMP: TINGGI", { x: 0.1, y: 1.5, w: 1.5, h: 1.5, fontSize: 12, bold: true, color: cTextMuted, align: "right" });
s5.addText("IMP: SEDANG", { x: 0.1, y: 3.2, w: 1.5, h: 1.5, fontSize: 12, bold: true, color: cTextMuted, align: "right" });

s5.addText("HEALTH: RENDAH", { x: 1.8, y: 4.8, w: 2.5, h: 0.3, fontSize: 12, bold: true, color: cTextMuted, align: "center" });
s5.addText("HEALTH: SEDANG", { x: 4.5, y: 4.8, w: 2.5, h: 0.3, fontSize: 12, bold: true, color: cTextMuted, align: "center" });
s5.addText("HEALTH: TINGGI", { x: 7.2, y: 4.8, w: 2.5, h: 0.3, fontSize: 12, bold: true, color: cTextMuted, align: "center" });

// Cell 1,1 (Tinggi, Rendah)
s5.addShape(pres.shapes.RECTANGLE, { x: 1.8, y: 1.5, w: 2.5, h: 1.5, fill: { color: "EF4444", transparency: 90 }, line: {color: "EF4444", transparency: 70} });
s5.addShape(pres.shapes.OVAL, { x: 2.0, y: 1.7, w: 0.15, h: 0.15, fill: { color: cRed } });
s5.addText("P7: Monitoring Outlet", { x: 2.2, y: 1.6, w: 2.0, h: 0.35, fontSize: 12, color: cTextMain, bold: true });

// Cell 1,2 (Tinggi, Sedang)
s5.addShape(pres.shapes.RECTANGLE, { x: 4.5, y: 1.5, w: 2.5, h: 1.5, fill: { color: "F97316", transparency: 90 }, line: {color: "F97316", transparency: 70} });
s5.addShape(pres.shapes.OVAL, { x: 4.7, y: 1.7, w: 0.15, h: 0.15, fill: { color: cOrange } });
s5.addText("P1: Pendaftaran", { x: 4.9, y: 1.6, w: 2.0, h: 0.35, fontSize: 12, color: cTextMain, bold: true });
s5.addShape(pres.shapes.OVAL, { x: 4.7, y: 2.2, w: 0.15, h: 0.15, fill: { color: cOrange } });
s5.addText("P2: Pemesanan Air", { x: 4.9, y: 2.1, w: 2.0, h: 0.35, fontSize: 12, color: cTextMain, bold: true });

// Cell 1,3 (Tinggi, Tinggi)
s5.addShape(pres.shapes.RECTANGLE, { x: 7.2, y: 1.5, w: 2.5, h: 1.5, fill: { color: "10B981", transparency: 90 }, line: {color: "10B981", transparency: 70} });
s5.addShape(pres.shapes.OVAL, { x: 7.4, y: 1.7, w: 0.15, h: 0.15, fill: { color: cGreen } });
s5.addText("P4: Uji Air", { x: 7.6, y: 1.6, w: 2.0, h: 0.35, fontSize: 12, color: cTextMain, bold: true });
s5.addShape(pres.shapes.OVAL, { x: 7.4, y: 2.2, w: 0.15, h: 0.15, fill: { color: cGreen } });
s5.addText("P6: Pengisian", { x: 7.6, y: 2.1, w: 2.0, h: 0.35, fontSize: 12, color: cTextMain, bold: true });

// Cell 2,2 (Sedang, Sedang)
s5.addShape(pres.shapes.RECTANGLE, { x: 4.5, y: 3.2, w: 2.5, h: 1.5, fill: { color: "3B82F6", transparency: 90 }, line: {color: "3B82F6", transparency: 70} });
s5.addShape(pres.shapes.OVAL, { x: 4.7, y: 3.4, w: 0.15, h: 0.15, fill: { color: cNeonBlue } });
s5.addText("P3: Komplain", { x: 4.9, y: 3.3, w: 2.0, h: 0.35, fontSize: 12, color: cTextMain, bold: true });
s5.addShape(pres.shapes.OVAL, { x: 4.7, y: 3.9, w: 0.15, h: 0.15, fill: { color: cNeonBlue } });
s5.addText("P5: Rekrutmen", { x: 4.9, y: 3.8, w: 2.0, h: 0.35, fontSize: 12, color: cTextMain, bold: true });


// SLIDE 6 - PENILAIAN DETAIL
let s6 = pres.addSlide({ masterName: "DARK_MASTER" });
s6.addText("PENILAIAN DETAIL", { x: 0.5, y: 0.3, w: 9, h: 0.8, fontSize: 36, bold: true, color: cTextMain, fontFace: "Arial Black" });

let tableData = [
  [{ text: "Proses", options: { bold: true, color: cTextMuted, border: {type:"dash", pt:1, color:"333333"} } },
   { text: "Imp.", options: { bold: true, color: cTextMuted, border: {type:"dash", pt:1, color:"333333"} } },
   { text: "Health", options: { bold: true, color: cTextMuted, border: {type:"dash", pt:1, color:"333333"} } },
   { text: "Feas.", options: { bold: true, color: cTextMuted, border: {type:"dash", pt:1, color:"333333"} } },
   { text: "Alasan Nyata", options: { bold: true, color: cTextMuted, border: {type:"dash", pt:1, color:"333333"} } }],
  
  ["1. Pendaftaran Franchise", {text:"Tinggi", options:{color:cGreen}}, {text:"Sedang", options:{color:cOrange}}, {text:"Sedang", options:{color:cOrange}}, "Vital untuk ekspansi, perizinan lama."],
  [{ text: "2. Pemesanan Air Minum", options: { bold: true, color: cNeonAqua, fill: "00F0FF10" } }, { text: "Tinggi", options: { color: cGreen, fill: "00F0FF10" } }, { text: "Sedang", options: { color: cOrange, fill: "00F0FF10" } }, { text: "Tinggi", options: { color: cGreen, fill: "00F0FF10" } }, { text: "Pendapatan utama, rentan antrean.", options: { fill: "00F0FF10" } }],
  ["3. Komplain Pelanggan", {text:"Sedang", options:{color:cOrange}}, {text:"Sedang", options:{color:cOrange}}, {text:"Tinggi", options:{color:cGreen}}, "Penanganan rentan berbeda mutu."],
  ["4. Pengujian Kelayakan Air", {text:"Tinggi", options:{color:cGreen}}, {text:"Tinggi", options:{color:cGreen}}, {text:"Rendah", options:{color:cRed}}, "Kunci mutu, sudah sehat via lab."],
  ["5. Rekrutmen Karyawan", {text:"Sedang", options:{color:cOrange}}, {text:"Sedang", options:{color:cOrange}}, {text:"Tinggi", options:{color:cGreen}}, "Turnover tinggi, butuh training."],
  ["6. Pengisian & Pengemasan", {text:"Tinggi", options:{color:cGreen}}, {text:"Tinggi", options:{color:cGreen}}, {text:"Sedang", options:{color:cOrange}}, "Sistem ozon otomatis minim eror."],
  [{ text: "7. Monitoring Outlet", options: { bold: true, color: cNeonAqua, fill: "00F0FF10" } }, { text: "Tinggi", options: { color: cGreen, fill: "00F0FF10" } }, { text: "Rendah", options: { color: cRed, bold: true, fill: "00F0FF10" } }, { text: "Tinggi", options: { color: cGreen, fill: "00F0FF10" } }, { text: "Manual cek ratusan gerai, rawan human error.", options: { fill: "00F0FF10" } }]
];

s6.addTable(tableData, { x: 0.5, y: 1.2, w: 9, colW: [2.0, 0.8, 0.8, 0.8, 4.6], fontSize: 12, color: cTextMain, border: { pt: 1, color: "1E293B" }, valign: "middle" });


// SLIDE 7 - PROCESS DISCOVERY PLAN
let s7 = pres.addSlide({ masterName: "DARK_MASTER" });
s7.addText("PROCESS DISCOVERY PLAN", { x: 0.5, y: 0.3, w: 9, h: 0.8, fontSize: 36, bold: true, color: cTextMain, fontFace: "Arial Black" });

s7.addShape(pres.shapes.LINE, { x: 0.5, y: 1.5, w: 0, h: 2, line: { color: "FFFFFF", transparency: 80, width: 2 } });
s7.addText("METODE TERPILIH", { x: 0.7, y: 1.5, w: 2.5, h: 0.3, fontSize: 14, bold: true, color: cNeonAqua });
s7.addText("Observasi Aktif &\nTerjun Langsung", { x: 0.7, y: 1.9, w: 2.5, h: 1, fontSize: 20, bold: true, color: cTextMain });

s7.addShape(pres.shapes.LINE, { x: 3.5, y: 1.5, w: 0, h: 2, line: { color: "FFFFFF", transparency: 80, width: 2 } });
s7.addText("FOKUS PENGAMATAN", { x: 3.7, y: 1.5, w: 2.5, h: 0.3, fontSize: 14, bold: true, color: cNeonAqua });
s7.addText("• Proses 2: Pemesanan Air\n• Proses 6: Pengisian & Kemasan", { x: 3.7, y: 1.9, w: 2.5, h: 1, fontSize: 14, color: cTextMuted });

s7.addShape(pres.shapes.LINE, { x: 6.5, y: 1.5, w: 0, h: 2, line: { color: "FFFFFF", transparency: 80, width: 2 } });
s7.addText("OBJEK DATA", { x: 6.7, y: 1.5, w: 2.5, h: 0.3, fontSize: 14, bold: true, color: cNeonAqua });
s7.addText("• Urutan aktivitas aktual\n• Waktu pengerjaan (processing time)\n• Titik bottleneck antrean", { x: 6.7, y: 1.9, w: 2.5, h: 1.5, fontSize: 14, color: cTextMuted });

// Minimal Flow
s7.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 4.0, w: 1.2, h: 0.6, fill: { color: cBg }, line: { color: cTextMuted, width: 1 }, rectRadius: 0.5 });
s7.addText("Persiapan", { x: 0.5, y: 4.0, w: 1.2, h: 0.6, fontSize: 12, color: cTextMain, align: "center" });

s7.addText("➔", { x: 1.8, y: 4.1, w: 0.4, h: 0.4, fontSize: 16, color: cTextMuted });

s7.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 2.3, y: 4.0, w: 1.2, h: 0.6, fill: { color: cBg }, line: { color: cTextMuted, width: 1 }, rectRadius: 0.5 });
s7.addText("Observasi", { x: 2.3, y: 4.0, w: 1.2, h: 0.6, fontSize: 12, color: cTextMain, align: "center" });

s7.addText("➔", { x: 3.6, y: 4.1, w: 0.4, h: 0.4, fontSize: 16, color: cTextMuted });

s7.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 4.1, y: 4.0, w: 1.2, h: 0.6, fill: { color: cBg }, line: { color: cTextMuted, width: 1 }, rectRadius: 0.5 });
s7.addText("Pencatatan", { x: 4.1, y: 4.0, w: 1.2, h: 0.6, fontSize: 12, color: cTextMain, align: "center" });

s7.addText("➔", { x: 5.4, y: 4.1, w: 0.4, h: 0.4, fontSize: 16, color: cTextMuted });

s7.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.9, y: 4.0, w: 1.2, h: 0.6, fill: { color: cBg }, line: { color: cTextMuted, width: 1 }, rectRadius: 0.5 });
s7.addText("Identifikasi", { x: 5.9, y: 4.0, w: 1.2, h: 0.6, fontSize: 12, color: cTextMain, align: "center" });

s7.addText("➔", { x: 7.2, y: 4.1, w: 0.4, h: 0.4, fontSize: 16, color: cTextMuted });

s7.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 7.7, y: 4.0, w: 1.5, h: 0.6, fill: { color: "00F0FF", transparency: 90 }, line: { color: cNeonAqua, width: 1 }, rectRadius: 0.5 });
s7.addText("Bahan Analisis", { x: 7.7, y: 4.0, w: 1.5, h: 0.6, fontSize: 12, color: cNeonAqua, align: "center", bold: true });


// SLIDE 8 - ALASAN METODE
let s8 = pres.addSlide({ masterName: "DARK_MASTER" });
s8.addText("ALASAN METODE TERJUN LAPANGAN", { x: 0.5, y: 0.3, w: 9, h: 0.8, fontSize: 32, bold: true, color: cTextMain, fontFace: "Arial Black" });

s8.addText("01.", { x: 0.5, y: 1.5, w: 1, h: 1, fontSize: 48, bold: true, color: cNeonAqua, fontFace: "Arial Black" });
s8.addText("HINDARI BIAS INFORMASI", { x: 1.5, y: 1.6, w: 7, h: 0.4, fontSize: 20, bold: true, color: cTextMain });
s8.addText("Mendapat data jujur dan faktual. Mewaspadai jawaban wawancara yang dimanipulasi.", { x: 1.5, y: 2.1, w: 7, h: 0.5, fontSize: 14, color: cTextMuted });

s8.addText("02.", { x: 0.5, y: 2.8, w: 1, h: 1, fontSize: 48, bold: true, color: cNeonAqua, fontFace: "Arial Black" });
s8.addText("AKURASI DURASI WAKTU", { x: 1.5, y: 2.9, w: 7, h: 0.4, fontSize: 20, bold: true, color: cTextMain });
s8.addText("Mengukur langsung via stopwatch untuk setiap tahapan, demi data processing time riil.", { x: 1.5, y: 3.4, w: 7, h: 0.5, fontSize: 14, color: cTextMuted });

s8.addText("03.", { x: 0.5, y: 4.1, w: 1, h: 1, fontSize: 48, bold: true, color: cNeonAqua, fontFace: "Arial Black" });
s8.addText("VISUALISASI MASALAH RIIL", { x: 1.5, y: 4.2, w: 7, h: 0.4, fontSize: 20, bold: true, color: cTextMain });
s8.addText("Melihat hambatan ruang fisik di depo yang tak tergambar lewat dokumen.", { x: 1.5, y: 4.7, w: 7, h: 0.5, fontSize: 14, color: cTextMuted });


// SLIDE 9 - FOKUS WAWANCARA
let s9 = pres.addSlide({ masterName: "DARK_MASTER" });
s9.addText("FOKUS WAWANCARA", { x: 0.5, y: 0.3, w: 9, h: 0.8, fontSize: 36, bold: true, color: cTextMain, fontFace: "Arial Black" });

s9.addShape(pres.shapes.LINE, { x: 0.5, y: 1.5, w: 0, h: 2.5, line: { color: "FFFFFF", transparency: 80, width: 2 } });
s9.addText("A. MATRIX PORTFOLIO", { x: 0.7, y: 1.5, w: 2.5, h: 0.3, fontSize: 16, bold: true, color: cNeonAqua });
s9.addText("• Importance: Paling krusial?\n• Health: Sering terkendala?\n• Feasibility: Mudah diubah?", { x: 0.7, y: 2.0, w: 2.5, h: 1.5, fontSize: 14, color: cTextMuted });

s9.addShape(pres.shapes.LINE, { x: 3.5, y: 1.5, w: 0, h: 2.5, line: { color: "FFFFFF", transparency: 80, width: 2 } });
s9.addText("B. AKTIVITAS UTAMA", { x: 3.7, y: 1.5, w: 2.5, h: 0.3, fontSize: 16, bold: true, color: cNeonAqua });
s9.addText("• Alur bawa galon hingga terisi?\n• Prosedur klaim garansi puas?\n• Aktivasi gerai mitra baru?\n• Prosedur sistem ozon & lab?", { x: 3.7, y: 2.0, w: 2.5, h: 1.5, fontSize: 14, color: cTextMuted });

s9.addShape(pres.shapes.LINE, { x: 6.5, y: 1.5, w: 0, h: 2.5, line: { color: "FFFFFF", transparency: 80, width: 2 } });
s9.addText("C. AKTOR & DURASI", { x: 6.7, y: 1.5, w: 2.5, h: 0.3, fontSize: 16, bold: true, color: cNeonAqua });
s9.addText("• Siapa PIC tiap tahapan?\n• Rata-rata pelayanan 1 galon?\n• Durasi monitoring per sesi?", { x: 6.7, y: 2.0, w: 2.5, h: 1.5, fontSize: 14, color: cTextMuted });

s9.addShape(pres.shapes.LINE, { x: 0.5, y: 4.5, w: 9, h: 0, line: { color: "FFFFFF", transparency: 80, width: 1 } });
s9.addText("NEXT STEP ➔ PENYUSUNAN BPMN & ANALISIS LANJUTAN", { x: 0.5, y: 4.8, w: 9, h: 0.4, fontSize: 16, bold: true, color: cTextMuted, align: "center", letterSpacing: 2 });


pres.writeFile({ fileName: "Presentasi_Biru_Semesta_Abadi.pptx" }).then(fileName => {
    console.log("SUCCESS");
});
