const fs = require('fs');
let code = fs.readFileSync('index.html', 'utf8');

const newSlide3 = `        <!-- Slide 3: Process Landscape -->
        <section class="slide" id="slide-3">
            <div class="slide-content no-card">
                <h2 class="section-title fade-up delay-1">LANDSCAPE MODEL</h2>
                <div class="minimal-landscape fade-up delay-2 mt-3">
                    
                    <div class="m-layer">
                        <h4>MANAGEMENT</h4>
                        <p class="desc mb-2" style="font-size: 1.1rem; max-width: 800px;">Proses taktis & strategis untuk merencanakan, mengawasi, serta mengevaluasi kelancaran operasional bisnis.</p>
                        <div class="m-list">
                            <span class="m-item external">1. Pendaftaran & Aktivasi Franchise</span>
                            <span class="m-item internal">7. Pengelolaan & Monitoring Outlet</span>
                        </div>
                    </div>

                    <div class="m-layer highlight-layer mt-3">
                        <h4 class="neon-text">CORE</h4>
                        <p class="desc mb-2 text-main" style="font-size: 1.1rem; max-width: 800px; color: #fff;">Proses inti yang langsung menghasilkan uang dan memberikan nilai jual produk ke pelanggan akhir secara nyata.</p>
                        <div class="m-list">
                            <span class="m-item external">2. Pemesanan Air Minum</span>
                            <span class="m-item internal">6. Pengisian & Pengemasan</span>
                            <span class="m-item external">3. Komplain Pelanggan</span>
                        </div>
                    </div>

                    <div class="m-layer mt-3">
                        <h4>SUPPORT</h4>
                        <p class="desc mb-2" style="font-size: 1.1rem; max-width: 800px;">Proses di balik layar yang mendukung SDM dan mutu standar agar proses Core dan Management berjalan lancar.</p>
                        <div class="m-list">
                            <span class="m-item external">4. Pengujian Kelayakan Air</span>
                            <span class="m-item internal">5. Rekrutmen Karyawan</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>`;

code = code.replace(/<!-- Slide 3[\s\S]*?<!-- Slide 5/m, newSlide3 + '\n\n        <!-- Slide 5');

for(let i=5; i<=9; i++) {
    code = code.replace(new RegExp(`id="slide-${i}"`, 'g'), `id="slide-${i-1}"`);
    code = code.replace(new RegExp(`<!-- Slide ${i}`, 'g'), `<!-- Slide ${i-1}`);
}

fs.writeFileSync('index.html', code);
console.log('Success');
