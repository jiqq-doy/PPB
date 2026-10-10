const fs = require('fs');
let code = fs.readFileSync('index.html', 'utf8');
const replacement = `        <!-- Slide 5: Matrix -->
        <section class="slide" id="slide-5">
            <div class="slide-content no-card">
                <h2 class="section-title fade-up delay-1">PORTFOLIO MATRIX</h2>
                <p class="desc fade-up delay-1 mb-2">Pemetaan urgensi & kesehatan 7 proses bisnis utama.</p>
                
                <div class="simple-matrix fade-up delay-2">
                    <!-- Row 1: Importance Tinggi -->
                    <div class="sm-row">
                        <div class="sm-label-y">IMP: TINGGI</div>
                        <div class="sm-cell danger-zone">
                            <span class="sm-tag"><span class="glow-dot red"></span>P7: Monitoring Outlet</span>
                        </div>
                        <div class="sm-cell warn-zone">
                            <span class="sm-tag"><span class="glow-dot orange"></span>P1: Pendaftaran</span>
                            <span class="sm-tag"><span class="glow-dot orange"></span>P2: Pemesanan Air</span>
                        </div>
                        <div class="sm-cell safe-zone">
                            <span class="sm-tag"><span class="glow-dot green"></span>P4: Uji Air</span>
                            <span class="sm-tag"><span class="glow-dot green"></span>P6: Pengisian</span>
                        </div>
                    </div>
                    <!-- Row 2: Importance Sedang -->
                    <div class="sm-row">
                        <div class="sm-label-y">IMP: SEDANG</div>
                        <div class="sm-cell empty-zone"></div>
                        <div class="sm-cell normal-zone">
                            <span class="sm-tag"><span class="glow-dot blue"></span>P3: Komplain</span>
                            <span class="sm-tag"><span class="glow-dot blue"></span>P5: Rekrutmen</span>
                        </div>
                        <div class="sm-cell empty-zone"></div>
                    </div>
                    <!-- X Axis Labels -->
                    <div class="sm-row sm-labels-x">
                        <div class="sm-label-y empty"></div>
                        <div class="sm-label-x">HEALTH: RENDAH</div>
                        <div class="sm-label-x">HEALTH: SEDANG</div>
                        <div class="sm-label-x">HEALTH: TINGGI</div>
                    </div>
                </div>
                
                <p class="matrix-note fade-up delay-3 mt-4">
                    <span class="neon-text">FOKUS REDESAIN:</span> P7 & P2 (Krusial, namun rentan masalah antrean/human-error).
                </p>
            </div>
        </section>`;
code = code.replace(/<!-- Slide 5: Matrix[\s\S]*?<!-- Slide 6: Tabel/m, replacement + '\n\n        <!-- Slide 6: Tabel');
fs.writeFileSync('index.html', code);

let css = fs.readFileSync('style.css', 'utf8');
css += `\n
/* Simple Matrix Redesign */
.simple-matrix { display: flex; flex-direction: column; gap: 1rem; margin-top: 2rem; width: 100%; max-width: 1100px; }
.sm-row { display: grid; grid-template-columns: 140px 1fr 1fr 1fr; gap: 1rem; align-items: stretch; }
.sm-labels-x { align-items: center; margin-top: 0.5rem; }
.sm-label-y { font-family: 'Outfit'; font-size: 1.2rem; font-weight: 700; color: var(--text-muted); display: flex; align-items: center; justify-content: flex-end; padding-right: 1rem; text-align: right; letter-spacing: 2px;}
.sm-label-x { font-family: 'Outfit'; font-size: 1.2rem; font-weight: 700; color: var(--text-muted); text-align: center; letter-spacing: 2px;}
.sm-cell { border-radius: 16px; padding: 1.5rem; display: flex; flex-direction: column; gap: 0.8rem; min-height: 120px; border: 2px solid rgba(255,255,255,0.05); background: rgba(255,255,255,0.02); justify-content: center; transition: transform 0.2s ease;}
.sm-cell:hover { transform: scale(1.02); }
.danger-zone { background: rgba(239, 68, 68, 0.05); border-color: rgba(239, 68, 68, 0.3); }
.warn-zone { background: rgba(249, 115, 22, 0.05); border-color: rgba(249, 115, 22, 0.3); }
.safe-zone { background: rgba(16, 185, 129, 0.05); border-color: rgba(16, 185, 129, 0.3); }
.normal-zone { background: rgba(59, 130, 246, 0.05); border-color: rgba(59, 130, 246, 0.3); }
.empty-zone { background: transparent; border-color: transparent; }
.sm-tag { font-size: 1.1rem; font-weight: 600; padding: 12px 20px; border-radius: 8px; background: rgba(255,255,255,0.05); color: var(--text-main); display: flex; align-items: center; gap: 12px; }
.danger-zone .sm-tag { background: rgba(239, 68, 68, 0.2); }
.warn-zone .sm-tag { background: rgba(249, 115, 22, 0.2); }
.safe-zone .sm-tag { background: rgba(16, 185, 129, 0.2); }
.normal-zone .sm-tag { background: rgba(59, 130, 246, 0.2); }
`;
fs.writeFileSync('style.css', css);
console.log('Success');
