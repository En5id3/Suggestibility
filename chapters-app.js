// ===== STATE =====
let currentChapterIndex = -1;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    renderSidebar();
    renderChapterCards();

    // Check URL hash for direct chapter link
    const hash = window.location.hash;
    if (hash && hash.startsWith('#ch')) {
        const idx = chaptersData.findIndex(ch => ch.id === hash.slice(1));
        if (idx !== -1) openChapter(idx);
    }
});

// ===== SIDEBAR =====
function renderSidebar() {
    const nav = document.getElementById('sidebar-nav');
    nav.innerHTML = chaptersData.map((ch, i) => `
        <div class="sidebar-item${i === currentChapterIndex ? ' active' : ''}" onclick="openChapter(${i})" id="sidebar-${i}">
            <div class="sidebar-item-num">${i + 1}</div>
            <div class="sidebar-item-info">
                <div class="sidebar-item-label">${ch.label} · Class ${ch.classNum}</div>
                <div class="sidebar-item-title">${ch.title}</div>
            </div>
        </div>
    `).join('');
}

// ===== CHAPTER CARDS (Landing) =====
function renderChapterCards() {
    const grid = document.getElementById('chapters-grid');
    grid.innerHTML = chaptersData.map((ch, i) => `
        <div class="chapter-card" onclick="openChapter(${i})">
            <div class="chapter-card-num">${String(i + 1).padStart(2, '0')}</div>
            <div class="chapter-card-label">${ch.label}</div>
            <div class="chapter-card-title">${ch.title}</div>
            <div class="chapter-card-class">Class ${ch.classNum}</div>
        </div>
    `).join('');
}

// ===== OPEN CHAPTER =====
function openChapter(index) {
    currentChapterIndex = index;
    const ch = chaptersData[index];

    // Update URL
    window.location.hash = ch.id;

    // Update sidebar
    document.querySelectorAll('.sidebar-item').forEach((el, i) => {
        el.classList.toggle('active', i === index);
    });

    // Hide landing, show chapter
    document.getElementById('chapters-landing').style.display = 'none';
    document.getElementById('chapter-view').style.display = 'block';

    // Render header
    document.getElementById('chapter-header').innerHTML = `
        <div class="chapter-label-tag">${ch.label} · Class ${ch.classNum}</div>
        <h1 class="chapter-title">${ch.title}</h1>
        <div class="chapter-meta">From the Advanced Diploma in Hypnotherapy — Dr. Pradeep Kumar</div>
    `;

    // Render content
    document.getElementById('chapter-body').innerHTML = ch.content;

    // Update nav buttons
    document.getElementById('prev-ch-btn').disabled = index === 0;
    document.getElementById('next-ch-btn').disabled = index === chaptersData.length - 1;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Close sidebar on mobile
    document.getElementById('chapters-sidebar').classList.remove('open');
}

// ===== SHOW LANDING =====
function showLanding() {
    currentChapterIndex = -1;
    window.location.hash = '';
    document.getElementById('chapters-landing').style.display = 'block';
    document.getElementById('chapter-view').style.display = 'none';
    document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== NAVIGATE =====
function navigateChapter(delta) {
    const newIdx = currentChapterIndex + delta;
    if (newIdx >= 0 && newIdx < chaptersData.length) {
        openChapter(newIdx);
    }
}

// ===== SEARCH =====
function filterChapters(query) {
    const q = query.toLowerCase().trim();
    document.querySelectorAll('.sidebar-item').forEach((el, i) => {
        const ch = chaptersData[i];
        const match = !q || ch.title.toLowerCase().includes(q) || ch.label.toLowerCase().includes(q);
        el.style.display = match ? '' : 'none';
    });
}

// ===== SIDEBAR TOGGLE (Mobile) =====
function toggleSidebar() {
    document.getElementById('chapters-sidebar').classList.toggle('open');
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('chapters-sidebar');
    const toggle = document.getElementById('sidebar-toggle');
    if (sidebar.classList.contains('open') &&
        !sidebar.contains(e.target) &&
        !toggle.contains(e.target)) {
        sidebar.classList.remove('open');
    }
});

// Keyboard nav
document.addEventListener('keydown', (e) => {
    if (currentChapterIndex < 0) return;
    if (e.key === 'ArrowLeft') navigateChapter(-1);
    if (e.key === 'ArrowRight') navigateChapter(1);
    if (e.key === 'Escape') showLanding();
});
