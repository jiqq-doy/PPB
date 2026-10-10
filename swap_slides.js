const fs = require('fs');
let code = fs.readFileSync('index.html', 'utf8');

const replacement = `        <!-- Slide 3: Penjelasan Landscape -->
        <section class="slide" id="slide-3">
            <div class="slide-content no-card">
                <h2 class="section-title fade-up delay-1">KATEGORI PROSES</h2>
                <div class="clean-grid mt-3 fade-up delay-2">
                    <div class="clean-item">
                        <h3 class="neon-text">CORE</h3>
                        <p>Proses inti yang langsung menghasilkan uang dan memberikan nilai jual produk ke pelanggan akhir secara nyata.</p>
                    </div>
                    <div class="clean-item">
                        <h3 class="text-aqua">MANAGEMENT</h3>
                        <p>Proses taktis & strategis untuk merencanakan, mengawasi, serta mengevaluasi kelancaran operasional bisnis.</p>
                    </div>
                    <div class="clean-item">
                        <h3 class="text-blue">SUPPORT</h3>
                        <p>Proses di balik layar yang mendukung SDM dan mutu standar agar proses Core dan Management berjalan lancar.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Slide 4: Process Landscape -->
        <section class="slide" id="slide-4">
            <div class="slide-content no-card">
                <h2 class="section-title fade-up delay-1">LANDSCAPE MODEL</h2>
                <div class="minimal-landscape fade-up delay-2 mt-3">
                    
                    <div class="m-layer">
                        <h4>MANAGEMENT</h4>
                        <div class="m-list">
                            <span class="m-item external">1. Pendaftaran & Aktivasi Franchise</span>
                            <span class="m-item internal">7. Pengelolaan & Monitoring Outlet</span>
                        </div>
                    </div>

                    <div class="m-layer highlight-layer">
                        <h4>CORE</h4>
                        <div class="m-list">
                            <span class="m-item external">2. Pemesanan Air Minum</span>
                            <span class="m-item internal">6. Pengisian & Pengemasan</span>
                            <span class="m-item external">3. Komplain Pelanggan</span>
                        </div>
                    </div>

                    <div class="m-layer">
                        <h4>SUPPORT</h4>
                        <div class="m-list">
                            <span class="m-item external">4. Pengujian Kelayakan Air</span>
                            <span class="m-item internal">5. Rekrutmen Karyawan</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>`;

// First, we extract the combined slide 3, and replace it with the new separated slides.
// But we also need to renumber slide 4..8 back to 5..9.

// 1. Shift slides down from 8..4 to 9..5
for(let i=8; i>=4; i--) {
    code = code.replace(new RegExp(`id="slide-${i}"`, 'g'), `id="slide-${i+1}"`);
    code = code.replace(new RegExp(`<!-- Slide ${i}`, 'g'), `<!-- Slide ${i+1}`);
}

// 2. Replace Slide 3 with the two new slides.
code = code.replace(/<!-- Slide 3[\s\S]*?<!-- Slide 5/m, replacement + '\n\n        <!-- Slide 5');

fs.writeFileSync('index.html', code);
console.log('Success');
