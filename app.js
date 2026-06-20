// --- ELEMENT REFERENCES ---
const btnRecruiter = document.getElementById('btn-recruiter');
const btnDeveloper = document.getElementById('btn-developer');
const bioText = document.getElementById('bio-text');

const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatStream = document.getElementById('chat-stream');
const themeToggleBtn = document.getElementById('theme-toggle-btn');

// --- 1. INFINITE REPEATING WATER RISING SCROLL DETECTOR ---
const observerOptions = {
    root: null,
    threshold: 0.05, 
    rootMargin: "0px 0px -20px 0px"
};

const surfaceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('surfaced');
        } else {
            entry.target.classList.remove('surfaced');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-scroll').forEach(element => {
    surfaceObserver.observe(element);
});


// --- 2. TIME-BASED AUTO SKIN CONFIGURATOR ---
function autoSkin() {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 18) {
        document.body.className = "light-theme";
    } else {
        document.body.className = "dark-theme";
    }
}

themeToggleBtn.addEventListener('click', () => {
    if (document.body.className === "light-theme") {
        document.body.className = "dark-theme";
    } else {
        document.body.className = "light-theme";
    }
});

autoSkin();


// --- 3. HIGH-CONVERSION PERSPECTIVE SWITCHER ---
btnRecruiter.addEventListener('click', () => {
    btnRecruiter.classList.add('active');
    btnDeveloper.classList.remove('active');
    bioText.innerText = "We build custom digital products engineered to maximize conversions, eliminate technical debt, and position your brand ahead of the competition. Every interface we deploy is tailor-made to align directly with your aggressive growth metrics and commercial operational goals.";
});

btnDeveloper.addEventListener('click', () => {
    btnDeveloper.classList.add('active');
    btnRecruiter.classList.remove('active');
    bioText.innerText = "Deploying low-overhead semantic DOM trees, fine-grained state reactivity chains, hardware-accelerated transformation pipelines, and custom asset caching layers to optimize rendering speeds down to absolute raw system potential.";
});


// --- 4. ADVANCED NATIVE INTELLIGENCE ARCHIVE ---
chatForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = chatInput.value.trim();
    if (!query) return;

    chatStream.innerHTML += `
        <div class="msg user-msg">
            <span class="msg-author">YOU:</span> ${query}
        </div>
    `;
    
    const cleanQuery = query.toLowerCase();
    chatInput.value = '';

    let reply = "Query processed. Synapse engineering loops are optimized for high structural retention and immediate conversion delivery. Inquire directly about 'why pick us', 'how you help', or 'hire' for targeted metric analytics.";
    
    if (cleanQuery.includes('why') || cleanQuery.includes('pick') || cleanQuery.includes('choose') || cleanQuery.includes('reason')) {
        reply = "Organizations partner with Synapse to eliminate uninspired, standard web layout systems that leak revenue. We replace slow frameworks with custom, raw-performance builds that execute transformations fluidly. This guarantees your platform has superior technical superiority, maximizing user traction instantly.";
    } else if (cleanQuery.includes('help') || cleanQuery.includes('skills') || cleanQuery.includes('do')) {
        reply = "We help premium businesses construct end-to-end user architectures, highly responsive bento layouts, lightweight custom logic modules, and fast rendering front-end solutions that elevate overall software engineering quality.";
    } else if (cleanQuery.includes('hire') || cleanQuery.includes('contact') || cleanQuery.includes('status')) {
        reply = "Current Schedule Status: [OPEN FOR ACTIVE SELECTION]. Production assignments are limited to maintain elite architectural quality. Connect through the secure email terminal gateway at the bottom of the system to review your deployment parameters.";
    }

    setTimeout(() => {
        chatStream.innerHTML += `
            <div class="msg ai-msg">
                <span class="msg-author">SYNAPSE_AI:</span> ${reply}
            </div>
        `;
        chatStream.scrollTop = chatStream.scrollHeight;
    }, 300);
});

// --- 5. REGISTER OFFLINE SERVICE WORKER ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(err => console.log("Offline mode failed:", err));
    });
}

// --- 6. SECURE MODAL WINDOW INTERACTION LOGIC ---
const ctaSecureBtn = document.getElementById('cta-secure-btn');
const secureModal = document.getElementById('secure-modal');
const modalClose = document.getElementById('modal-close');
const modalRedirect = document.getElementById('modal-redirect');

ctaSecureBtn.addEventListener('click', () => {
    secureModal.classList.add('active');
});

modalClose.addEventListener('click', () => {
    secureModal.classList.remove('active');
});

// Close modal when user clicks outside the box background area
secureModal.addEventListener('click', (e) => {
    if (e.target === secureModal) secureModal.classList.remove('active');
});

modalRedirect.addEventListener('click', () => {
    // Closes popup right as the user switches to their automated email tab
    setTimeout(() => { secureModal.classList.remove('active'); }, 500);
});


