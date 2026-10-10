const PptxGenJS = require("pptxgenjs");

let pres = new PptxGenJS();
pres.layout = "LAYOUT_16x9";

// Define Colors
const cNavy = "123B5D";
const cWater = "168AAD";
const cAqua = "64D8CB";
const cWhite = "F4F8FB";
const cSlate = "263746";
const cRed = "E74C3C"; // For highlights/risks

// Define Master Slide
pres.defineSlideMaster({
  title: "MASTER_SLIDE",
  background: { color: cWhite },
  objects: [
    { rect: { x: 0, y: 0, w: "100%", h: 0.1, fill: { color: cWater } } },
    { rect: { x: 0, y: 5.4, w: "100%", h: 0.22, fill: { color: cNavy } } },
    { text: { text: "PT BIRU SEMESTA ABADI - PROGRESS TUBES WEEK 5", options: { x: 0.2, y: 5.42, w: 4, h: 0.2, color: "FFFFFF", fontSize: 9 } } }
  ]
});

// SLIDE 1 - COVER
let s1 = pres.addSlide();
s1.background = { color: cNavy };
s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: "100%", h: 0.3, fill: { color: cAqua } });
s1.addShape(pres.shapes.ISOSCELES_TRIANGLE, { x: 7.5, y: -0.5, w: 4, h: 4, fill: { color: cWater }, rotate: 45 });
s1.addText("ANALISIS PROSES BISNIS", { x: 0.5, y: 1.8, w: 8, h: 0.8, fontSize: 40, bold: true, color: "FFFFFF", fontFace: "Arial" });
s1.addText("PT BIRU SEMESTA ABADI", { x: 0.5, y: 2.6, w: 8, h: 0.5, fontSize: 24, bold: true, color: cAqua, fontFace: "Arial" });
s1.addText("Process Identification, Process Portfolio & Process Discovery\nProgress TUBES — Week 5", { x: 0.5, y: 3.5, w: 8, h: 1, fontSize: 16, color: cWhite, fontFace: "Arial" });
s1.addText("Disusun oleh:\n[Nama Kelompok / Anggota]", { x: 0.5, y: 4.6, w: 4, h: 0.6, fontSize: 14, color: "FFFFFF", fontFace: "Arial" });

// SLIDE 2 - PROFIL PERUSAHAAN
let s2 = pres.addSlide({ masterName: "MASTER_SLIDE" });
s2.addText("PROFIL PERUSAHAAN", { x: 0.5, y: 0.3, w: 5, h: 0.6, fontSize: 28, bold: true, color: cNavy });
s2.addText("PT Biru Semesta Abadi (Air Minum BIRU)", { x: 0.5, y: 1.0, w: 8, h: 0.4, fontSize: 18, bold: true, color: cWater });
s2.addText("Perusahaan yang bergerak di bidang penyediaan air minum isi ulang. Menerapkan model bisnis waralaba (franchise) untuk memperluas jangkauan usahanya ke berbagai wilayah di Indonesia.", { x: 0.5, y: 1.4, w: 5, h: 1.5, fontSize: 14, color: cSlate, valign: "top" });

// Stats
s2.addShape(pres.shapes.RECTANGLE, { x: 6, y: 1.2, w: 3, h: 1, fill: { color: cWater }, rectRadius: 0.2 });
s2.addText("22 Mei 2002", { x: 6, y: 1.3, w: 3, h: 0.5, fontSize: 24, bold: true, color: "FFFFFF", align: "center" });
s2.addText("Berdiri di Surabaya", { x: 6, y: 1.7, w: 3, h: 0.3, fontSize: 12, color: "FFFFFF", align: "center" });

s2.addShape(pres.shapes.RECTANGLE, { x: 6, y: 2.4, w: 3, h: 1, fill: { color: cNavy }, rectRadius: 0.2 });
s2.addText("> 837", { x: 6, y: 2.5, w: 3, h: 0.5, fontSize: 28, bold: true, color: cAqua, align: "center" });
s2.addText("Gerai yang Beroperasi", { x: 6, y: 2.9, w: 3, h: 0.3, fontSize: 12, color: "FFFFFF", align: "center" });

s2.addShape(pres.shapes.RECTANGLE, { x: 6, y: 3.6, w: 3, h: 1, fill: { color: cWater }, rectRadius: 0.2 });
s2.addText("46 Kota", { x: 6, y: 3.7, w: 3, h: 0.5, fontSize: 24, bold: true, color: "FFFFFF", align: "center" });
s2.addText("Tersebar di Indonesia", { x: 6, y: 4.1, w: 3, h: 0.3, fontSize: 12, color: "FFFFFF", align: "center" });

// SLIDE 3 - PROCESS IDENTIFICATION
let s3 = pres.addSlide({ masterName: "MASTER_SLIDE" });
s3.addText("PROCESS IDENTIFICATION (LANDSCAPE MODEL)", { x: 0.5, y: 0.3, w: 8, h: 0.6, fontSize: 24, bold: true, color: cNavy });

// Layer 1: Management
s3.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.2, w: 9, h: 1.2, fill: { color: "EAEFEF" }, line: { color: cWater, width: 1 } });
s3.addText("MANAGEMENT PROCESSES", { x: 0.6, y: 1.3, w: 2, h: 1, fontSize: 14, bold: true, color: cNavy });
s3.addShape(pres.shapes.RECTANGLE, { x: 3, y: 1.4, w: 2.8, h: 0.8, fill: { color: cWater }, rectRadius: 0.1 });
s3.addText("Pendaftaran & Aktivasi Franchise\n(Eksternal)", { x: 3, y: 1.4, w: 2.8, h: 0.8, fontSize: 11, color: "FFFFFF", align: "center" });
s3.addShape(pres.shapes.RECTANGLE, { x: 6, y: 1.4, w: 2.8, h: 0.8, fill: { color: cNavy }, rectRadius: 0.1 });
s3.addText("Pengelolaan & Monitoring Outlet\n(Internal)", { x: 6, y: 1.4, w: 2.8, h: 0.8, fontSize: 11, color: "FFFFFF", align: "center" });

// Layer 2: Core
s3.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 2.6, w: 9, h: 1.2, fill: { color: "EAEFEF" }, line: { color: cWater, width: 1 } });
s3.addText("CORE PROCESSES", { x: 0.6, y: 2.7, w: 2, h: 1, fontSize: 14, bold: true, color: cNavy });
s3.addShape(pres.shapes.RECTANGLE, { x: 2.6, y: 2.8, w: 2.2, h: 0.8, fill: { color: cNavy }, rectRadius: 0.1 });
s3.addText("Pemesanan Air Minum\n(Eksternal)", { x: 2.6, y: 2.8, w: 2.2, h: 0.8, fontSize: 11, color: "FFFFFF", align: "center" });
s3.addShape(pres.shapes.RECTANGLE, { x: 5, y: 2.8, w: 2.2, h: 0.8, fill: { color: cWater }, rectRadius: 0.1 });
s3.addText("Pengisian & Pengemasan\n(Internal)", { x: 5, y: 2.8, w: 2.2, h: 0.8, fontSize: 11, color: "FFFFFF", align: "center" });
s3.addShape(pres.shapes.RECTANGLE, { x: 7.4, y: 2.8, w: 1.8, h: 0.8, fill: { color: cNavy }, rectRadius: 0.1 });
s3.addText("Komplain Pelanggan\n(Eksternal)", { x: 7.4, y: 2.8, w: 1.8, h: 0.8, fontSize: 11, color: "FFFFFF", align: "center" });

// Layer 3: Support
s3.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.0, w: 9, h: 1.2, fill: { color: "EAEFEF" }, line: { color: cWater, width: 1 } });
s3.addText("SUPPORT PROCESSES", { x: 0.6, y: 4.1, w: 2, h: 1, fontSize: 14, bold: true, color: cNavy });
s3.addShape(pres.shapes.RECTANGLE, { x: 3, y: 4.2, w: 2.8, h: 0.8, fill: { color: cWater }, rectRadius: 0.1 });
s3.addText("Pengujian Kelayakan Air\n(Eksternal)", { x: 3, y: 4.2, w: 2.8, h: 0.8, fontSize: 11, color: "FFFFFF", align: "center" });
s3.addShape(pres.shapes.RECTANGLE, { x: 6, y: 4.2, w: 2.8, h: 0.8, fill: { color: cNavy }, rectRadius: 0.1 });
s3.addText("Rekrutmen Karyawan\n(Internal)", { x: 6, y: 4.2, w: 2.8, h: 0.8, fontSize: 11, color: "FFFFFF", align: "center" });

// SLIDE 4 - PENJELASAN LANDSCAPE
let s4 = pres.addSlide({ masterName: "MASTER_SLIDE" });
s4.addText("PENJELASAN KATEGORI PROSES", { x: 0.5, y: 0.3, w: 8, h: 0.6, fontSize: 24, bold: true, color: cNavy });

s4.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.2, w: 2.8, h: 3.5, fill: { color: "FFFFFF" }, line: { color: cWater, width: 1 }, rectRadius: 0.1 });
s4.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.2, w: 2.8, h: 0.6, fill: { color: cNavy }, rectRadius: 0.1 });
s4.addText("CORE PROCESSES", { x: 0.5, y: 1.2, w: 2.8, h: 0.6, fontSize: 14, bold: true, color: "FFFFFF", align: "center" });
s4.addText("Proses yang langsung memberikan nilai ke pelanggan dan menghasilkan uang.", { x: 0.6, y: 1.9, w: 2.6, h: 0.8, fontSize: 12, color: cSlate, italic: true });
s4.addText("• Pemesanan Air Minum\n• Pengisian & Pengemasan\n• Komplain Pelanggan", { x: 0.6, y: 2.7, w: 2.6, h: 1.5, fontSize: 12, color: cSlate, bullet: true });

s4.addShape(pres.shapes.RECTANGLE, { x: 3.6, y: 1.2, w: 2.8, h: 3.5, fill: { color: "FFFFFF" }, line: { color: cWater, width: 1 }, rectRadius: 0.1 });
s4.addShape(pres.shapes.RECTANGLE, { x: 3.6, y: 1.2, w: 2.8, h: 0.6, fill: { color: cWater }, rectRadius: 0.1 });
s4.addText("MANAGEMENT PROCESSES", { x: 3.6, y: 1.2, w: 2.8, h: 0.6, fontSize: 14, bold: true, color: "FFFFFF", align: "center" });
s4.addText("Proses untuk merencanakan, mengawasi, dan mengevaluasi operasional bisnis.", { x: 3.7, y: 1.9, w: 2.6, h: 0.8, fontSize: 12, color: cSlate, italic: true });
s4.addText("• Pendaftaran & Aktivasi Franchise\n• Pengelolaan & Monitoring Outlet", { x: 3.7, y: 2.7, w: 2.6, h: 1.5, fontSize: 12, color: cSlate, bullet: true });

s4.addShape(pres.shapes.RECTANGLE, { x: 6.7, y: 1.2, w: 2.8, h: 3.5, fill: { color: "FFFFFF" }, line: { color: cWater, width: 1 }, rectRadius: 0.1 });
s4.addShape(pres.shapes.RECTANGLE, { x: 6.7, y: 1.2, w: 2.8, h: 0.6, fill: { color: cAqua }, rectRadius: 0.1 });
s4.addText("SUPPORT PROCESSES", { x: 6.7, y: 1.2, w: 2.8, h: 0.6, fontSize: 14, bold: true, color: cNavy, align: "center" });
s4.addText("Proses pendukung yang menjaga agar proses utama dan manajemen berjalan lancar.", { x: 6.8, y: 1.9, w: 2.6, h: 0.8, fontSize: 12, color: cSlate, italic: true });
s4.addText("• Pengujian Kelayakan Air\n• Rekrutmen Karyawan", { x: 6.8, y: 2.7, w: 2.6, h: 1.5, fontSize: 12, color: cSlate, bullet: true });

// SLIDE 5 - PROCESS PORTFOLIO MATRIX
let s5 = pres.addSlide({ masterName: "MASTER_SLIDE" });
s5.addText("PROCESS PORTFOLIO MATRIX", { x: 0.5, y: 0.3, w: 8, h: 0.6, fontSize: 24, bold: true, color: cNavy });

// Matrix Axes
s5.addShape(pres.shapes.LINE, { x: 1.5, y: 1.2, w: 0, h: 3.5, line: { color: cSlate, width: 2, endArrowType: "triangle" } }); // Y-axis
s5.addShape(pres.shapes.LINE, { x: 1.5, y: 4.7, w: 7, h: 0, line: { color: cSlate, width: 2, endArrowType: "triangle" } }); // X-axis

s5.addText("IMPORTANCE", { x: -0.2, y: 2.7, w: 3, h: 0.5, fontSize: 12, bold: true, color: cNavy, rotate: 270, align: "center" });
s5.addText("HEALTH", { x: 4, y: 4.8, w: 2, h: 0.5, fontSize: 12, bold: true, color: cNavy, align: "center" });

s5.addText("Rendah", { x: 2.5, y: 4.8, w: 1, h: 0.3, fontSize: 10, align: "center" });
s5.addText("Sedang", { x: 4.5, y: 4.8, w: 1, h: 0.3, fontSize: 10, align: "center" });
s5.addText("Tinggi", { x: 6.5, y: 4.8, w: 1, h: 0.3, fontSize: 10, align: "center" });

s5.addText("Tinggi", { x: 0.5, y: 1.8, w: 0.8, h: 0.3, fontSize: 10, align: "right" });
s5.addText("Sedang", { x: 0.5, y: 3.3, w: 0.8, h: 0.3, fontSize: 10, align: "right" });

s5.addShape(pres.shapes.LINE, { x: 1.5, y: 3.3, w: 7, h: 0, line: { color: "CCCCCC", width: 1, dashType: "dash" } });
s5.addShape(pres.shapes.LINE, { x: 1.5, y: 1.8, w: 7, h: 0, line: { color: "CCCCCC", width: 1, dashType: "dash" } });
s5.addShape(pres.shapes.LINE, { x: 3.0, y: 1.2, w: 0, h: 3.5, line: { color: "CCCCCC", width: 1, dashType: "dash" } });
s5.addShape(pres.shapes.LINE, { x: 5.0, y: 1.2, w: 0, h: 3.5, line: { color: "CCCCCC", width: 1, dashType: "dash" } });

const drawBubble = (id, x, y, label, isHighlight) => {
    let color = isHighlight ? cRed : cWater;
    s5.addShape(pres.shapes.OVAL, { x: x, y: y, w: 0.5, h: 0.5, fill: { color: color }, line: { color: "FFFFFF", width: 1 } });
    s5.addText(id, { x: x, y: y, w: 0.5, h: 0.5, fontSize: 12, bold: true, color: "FFFFFF", align: "center" });
    s5.addText(label, { x: x - 0.75, y: y + 0.5, w: 2, h: 0.5, fontSize: 9, align: "center", color: isHighlight ? cRed : cSlate, bold: isHighlight });
};

drawBubble("P1", 4.75, 1.55, "Pendaftaran Franchise", false);
drawBubble("P2", 5.25, 1.55, "Pemesanan Air", true);
drawBubble("P3", 5.0, 3.05, "Komplain Pelanggan", false);
drawBubble("P4", 7.0, 1.55, "Uji Kelayakan Air", false);
drawBubble("P5", 4.5, 3.55, "Rekrutmen", false);
drawBubble("P6", 6.5, 2.05, "Pengisian Produk", false);
drawBubble("P7", 3.0, 1.55, "Monitoring Outlet", true);

// SLIDE 6 - TABEL PENILAIAN
let s6 = pres.addSlide({ masterName: "MASTER_SLIDE" });
s6.addText("PENILAIAN PROCESS PORTFOLIO", { x: 0.5, y: 0.3, w: 8, h: 0.6, fontSize: 24, bold: true, color: cNavy });

let tableData = [
  [{ text: "No", options: { bold: true, fill: cNavy, color: "FFFFFF" } },
   { text: "Nama Proses Bisnis", options: { bold: true, fill: cNavy, color: "FFFFFF" } },
   { text: "Imp.", options: { bold: true, fill: cNavy, color: "FFFFFF" } },
   { text: "Health", options: { bold: true, fill: cNavy, color: "FFFFFF" } },
   { text: "Feas.", options: { bold: true, fill: cNavy, color: "FFFFFF" } },
   { text: "Alasan Rasionalisasi", options: { bold: true, fill: cNavy, color: "FFFFFF" } }],
  
  ["1", "Pendaftaran & Aktivasi Franchise", "Tinggi", "Sedang", "Sedang", "Vital untuk ekspansi. Namun survei kelayakan dan perizinan fisik memakan waktu lama."],
  [{ text: "2", options: { fill: "FFEFEF", bold: true, color: cRed } }, { text: "Pemesanan Air Minum", options: { bold: true, fill: "FFEFEF", color: cRed } }, { text: "Tinggi", options: { fill: "FFEFEF" } }, { text: "Sedang", options: { fill: "FFEFEF" } }, { text: "Tinggi", options: { fill: "FFEFEF" } }, { text: "Sumber utama pendapatan ritel, rawan antrean panjang manual pada jam sibuk.", options: { fill: "FFEFEF" } }],
  ["3", "Komplain Pelanggan", "Sedang", "Sedang", "Tinggi", "Menjaga garansi kepuasan, penanganan di tiap gerai rentan berbeda tergantung staf."],
  ["4", "Pengujian Kelayakan Air", "Tinggi", "Tinggi", "Rendah", "Kunci mutu produk & standar ISO. Sudah berjalan sangat sehat melalui lab bulanan."],
  ["5", "Rekrutmen Karyawan", "Sedang", "Sedang", "Tinggi", "Tingkat pergantian staf tinggi, butuh program pelatihan dasar berulang."],
  ["6", "Pengisian & Pengemasan Produk", "Tinggi", "Tinggi", "Sedang", "Sangat sehat berkat standarisasi sistem ozon otomatis yang minim eror."],
  [{ text: "7", options: { fill: "FFEFEF", bold: true, color: cRed } }, { text: "Pengelolaan & Monitoring Outlet", options: { bold: true, fill: "FFEFEF", color: cRed } }, { text: "Tinggi", options: { fill: "FFEFEF" } }, { text: "Rendah", options: { fill: "FFEFEF", bold: true, color: cRed } }, { text: "Tinggi", options: { fill: "FFEFEF" } }, { text: "Mengawasi ratusan gerai secara manual sangat rawan human error pada laporan kas & stok.", options: { fill: "FFEFEF" } }]
];

s6.addTable(tableData, { x: 0.5, y: 1.0, w: 9, colW: [0.4, 2.2, 0.8, 0.8, 0.8, 4.0], fontSize: 10, border: { pt: 1, color: "DDDDDD" }, valign: "middle" });


// SLIDE 7 - PROCESS DISCOVERY PLAN
let s7 = pres.addSlide({ masterName: "MASTER_SLIDE" });
s7.addText("PROCESS DISCOVERY PLAN", { x: 0.5, y: 0.3, w: 8, h: 0.6, fontSize: 24, bold: true, color: cNavy });
s7.addText("Metode: Observasi Aktif (Terjun Langsung ke Lapangan)", { x: 0.5, y: 1.0, w: 8, h: 0.4, fontSize: 16, bold: true, color: cWater });

s7.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.6, w: 4.2, h: 1.5, fill: { color: "FFFFFF" }, line: { color: cNavy, width: 1 } });
s7.addText("Fokus Pengamatan", { x: 0.6, y: 1.7, w: 4, h: 0.3, fontSize: 14, bold: true, color: cNavy });
s7.addText("• Proses 2: Pemesanan Air Minum\n• Proses 6: Pengisian & Pengemasan Produk", { x: 0.6, y: 2.1, w: 4, h: 0.8, fontSize: 12, color: cSlate, bullet: true });

s7.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: 1.6, w: 4.2, h: 1.5, fill: { color: "FFFFFF" }, line: { color: cNavy, width: 1 } });
s7.addText("Objek Data yang Dicari", { x: 5.4, y: 1.7, w: 4, h: 0.3, fontSize: 14, bold: true, color: cNavy });
s7.addText("• Urutan aktivitas aktual petugas\n• Waktu pengerjaan (processing time)\n• Titik kendala (bottleneck) antrean", { x: 5.4, y: 2.1, w: 4, h: 0.8, fontSize: 12, color: cSlate, bullet: true });

// Flowchart
s7.addText("Alur Rencana Observasi:", { x: 0.5, y: 3.5, w: 4, h: 0.4, fontSize: 14, bold: true, color: cNavy });
const flowSteps = ["Persiapan", "Observasi\nLapangan", "Pencatatan\nAktivitas & Durasi", "Identifikasi\nHambatan", "Bahan\nAnalisis"];
flowSteps.forEach((step, i) => {
    s7.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5 + (i * 1.8), y: 4.0, w: 1.5, h: 0.8, fill: { color: cNavy }, rectRadius: 0.2 });
    s7.addText(step, { x: 0.5 + (i * 1.8), y: 4.0, w: 1.5, h: 0.8, fontSize: 10, bold: true, color: "FFFFFF", align: "center" });
    if (i < flowSteps.length - 1) {
        s7.addText("➔", { x: 2.05 + (i * 1.8), y: 4.2, w: 0.2, h: 0.4, fontSize: 16, color: cWater });
    }
});


// SLIDE 8 - ALASAN METODE
let s8 = pres.addSlide({ masterName: "MASTER_SLIDE" });
s8.addText("ALASAN METODE TERJUN LAPANGAN", { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 24, bold: true, color: cNavy });

const reasons = [
    { title: "MENGHINDARI BIAS INFORMASI", desc: "Mendapatkan data yang jujur dan apa adanya di lapangan. Berbeda dengan wawancara yang terkadang sudah dimanipulasi atau ditutupi oleh staf." },
    { title: "AKURASI DURASI WAKTU", desc: "Memungkinkan pengukuran langsung menggunakan stopwatch untuk setiap tahapan guna mendapatkan data processing time riil untuk simulasi." },
    { title: "VISUALISASI MASALAH RIIL", desc: "Dapat mengamati secara langsung hambatan fisik di depo, seperti area tunggu yang terlalu sempit atau tata letak mesin yang kurang baik." }
];
reasons.forEach((r, i) => {
    let xOffset = 0.5 + (i * 3.1);
    s8.addShape(pres.shapes.RECTANGLE, { x: xOffset, y: 1.5, w: 2.8, h: 3, fill: { color: "FFFFFF" }, line: { color: cWater, width: 1 } });
    s8.addShape(pres.shapes.RECTANGLE, { x: xOffset, y: 1.5, w: 2.8, h: 0.6, fill: { color: cWater } });
    s8.addText(r.title, { x: xOffset, y: 1.5, w: 2.8, h: 0.6, fontSize: 11, bold: true, color: "FFFFFF", align: "center" });
    s8.addText(r.desc, { x: xOffset + 0.1, y: 2.2, w: 2.6, h: 2.0, fontSize: 12, color: cSlate, valign: "top" });
});


// SLIDE 9 - PERTANYAAN WAWANCARA
let s9 = pres.addSlide({ masterName: "MASTER_SLIDE" });
s9.addText("FOKUS PERTANYAAN WAWANCARA", { x: 0.5, y: 0.3, w: 8, h: 0.6, fontSize: 24, bold: true, color: cNavy });

s9.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.2, w: 4.2, h: 1.8, fill: { color: cNavy } });
s9.addText("A. Penilaian Matrix Portfolio", { x: 0.6, y: 1.3, w: 4, h: 0.3, fontSize: 14, bold: true, color: cAqua });
s9.addText("• Importance: Proses mana yang paling krusial?\n• Health: Proses mana yang paling sering berkendala?\n• Feasibility: Proses mana yang paling mudah diubah alurnya?", { x: 0.6, y: 1.7, w: 4, h: 1, fontSize: 11, color: "FFFFFF", bullet: true });

s9.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.2, w: 4.2, h: 1.8, fill: { color: cNavy } });
s9.addText("C. Aktor & Durasi Waktu", { x: 0.6, y: 3.3, w: 4, h: 0.3, fontSize: 14, bold: true, color: cAqua });
s9.addText("• Siapa petugas penanggung jawab tiap tahapan?\n• Berapa rata-rata waktu pelayanan satu galon?\n• Berapa durasi monitoring outlet per minggu?", { x: 0.6, y: 3.7, w: 4, h: 1, fontSize: 11, color: "FFFFFF", bullet: true });

s9.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: 1.2, w: 4.2, h: 3.8, fill: { color: "FFFFFF" }, line: { color: cWater, width: 1 } });
s9.addText("B. Rangkaian Aktivitas Utama", { x: 5.4, y: 1.3, w: 4, h: 0.3, fontSize: 14, bold: true, color: cNavy });
s9.addText("• Bagaimana alur saat pelanggan datang bawa galon?\n• Bagaimana prosedur klaim garansi 100% puas?\n• Bagaimana alur aktivasi gerai mitra baru?\n• Bagaimana tahap uji lab kualitas air bulanan?\n• Bagaimana tahapan seleksi pegawai baru?\n• Bagaimana prosedur pengolahan sistem ozon?\n• Bagaimana inspeksi harian supervisor?", { x: 5.4, y: 1.7, w: 4, h: 3, fontSize: 11, color: cSlate, bullet: true });

pres.writeFile({ fileName: "Presentasi_Biru_Semesta_Abadi.pptx" }).then(fileName => {
    console.log("SUCCESS");
});
