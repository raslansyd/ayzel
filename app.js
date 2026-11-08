// Ayzal by Fathima Hasbin (@__ayzal.__) & Bride.ly (@bride.ly_) — Interactive Studio & Visual Gallery App

const AYZAL_GIFTS = [
  {
    id: 'nikah-hamper',
    title: 'Bespoke Nikah & Wedding Gift Hamper',
    category: 'wedding',
    badge: 'Signature Wedding Craft',
    leadTime: 'Order Prior 5–7 Days',
    image: 'assets/works/ayzal-work-1.jpg',
    caption: 'Custom Nikah & Maher Trays • @__ayzal.__',
    description:
      'Handcrafted luxury wedding & Nikah gift hampers featuring personalized acrylic/calligraphy detailing, floral accents, and keepsake styling.',
    details: [
      'Customized with Bride & Groom names & date',
      'Order prior 5–7 days • Calicut studio',
      'Strictly No Refund / No Cancellation ❌'
    ]
  },
  {
    id: 'memory-frame',
    title: 'Custom Illustrated & Polaroid Keepsake Frame',
    category: 'frames',
    badge: 'Best Seller • @__ayzal.__',
    leadTime: 'Order Prior 5–7 Days',
    image: 'assets/works/ayzal-work-2.jpg',
    caption: 'Adorn Your World With Art • @__ayzal.__',
    description:
      'Personalized handmade photo frames, vintage polaroid storyboards, and handwritten message art tailored for birthdays, anniversaries, and weddings.',
    details: [
      'Custom quotes, dates, and photo layouts',
      'Order prior 5–7 days • DM / 6282458598',
      'Strictly No Refund / No Cancellation ❌'
    ]
  },
  {
    id: 'resin-floral',
    title: 'Resin Floral Preservation & Custom Nameplate',
    category: 'floral',
    badge: 'Artisanal Keepsake',
    leadTime: 'Order Prior 5–7 Days',
    image: 'assets/works/ayzal-work-3.jpg',
    caption: 'Botanical & Gold Leaf Art • @__ayzal.__',
    description:
      'Preserve wedding garlands, Nikah florals, or milestone blooms in crystal-clear artisanal resin alongside metallic gold calligraphy.',
    details: [
      'Custom shapes, easel stands & wall plaques',
      'Handcrafted by Fathima Hasbin in Calicut',
      'Order prior 5–7 days • No Refund ❌'
    ]
  },
  {
    id: 'luxury-bouquet-box',
    title: 'Handcrafted Bouquet & Curated Surprise Box',
    category: 'hampers',
    badge: 'Custom Gift Box',
    leadTime: 'Order Prior 5–7 Days',
    image: 'assets/works/ayzal-work-4.jpg',
    caption: 'Bespoke Wrapping & Florals • @__ayzal.__',
    description:
      'Artfully wrapped floral arrangements, chocolate & perfume gift boxes, and customized celebration crates crafted to your color palette.',
    details: [
      'Tailored color themes (Pastel, Ivory, Gold, Rose)',
      'Order prior 5–7 days • Calicut pickup / delivery',
      'Strictly No Refund / No Cancellation ❌'
    ]
  },
  {
    id: 'bridal-favors',
    title: 'Bridal Shower & Bridesmaid Proposal Hampers',
    category: 'wedding',
    badge: 'Ayzal × Bride.ly Special',
    leadTime: 'Order Prior 5–7 Days',
    image: 'assets/works/ayzal-work-5.jpg',
    caption: 'For Your Bridal Squad • @__ayzal.__',
    description:
      'Coordinated handmade gift boxes for bridesmaids, Nikah return favors, and bridal trunk keepsakes — pairs seamlessly with @bride.ly_ dress rentals.',
    details: [
      'Custom tags & individualized bridesmaid names',
      'Order prior 5–7 days • DM / 6282458598',
      'Strictly No Refund / No Cancellation ❌'
    ]
  },
  {
    id: 'calligraphy-canvas',
    title: 'Personalized Calligraphy & Milestone Plaque',
    category: 'frames',
    badge: 'Handmade Art',
    leadTime: 'Order Prior 5–7 Days',
    image: 'assets/works/ayzal-work-6.jpg',
    caption: 'By Fathima Hasbin • @__ayzal.__',
    description:
      'Bespoke lettering on acrylic, canvas, or wooden keepsakes for housewarmings, baby milestones, graduations, and Nikah contracts.',
    details: [
      '100% handcrafted in Calicut',
      'Order prior 5–7 days • WhatsApp 6282458598',
      'Strictly No Refund / No Cancellation ❌'
    ]
  }
];

const BRIDELY_RENTALS = [
  {
    id: 'bridesmaid-pastel-squad',
    title: 'Coordinated Bridesmaids Dress Collection',
    badge: '@bride.ly_ Signature',
    leadTime: 'Ships Across Kerala',
    image: 'assets/works/bridely-work-1.jpg',
    caption: 'Matching Bridesmaid Ensembles • @bride.ly_',
    description:
      'Curated matching and complementary bridesmaids gowns in pastel sage, champagne pearl, dusty rose, and moonlight ivory for wedding squads.',
    details: [
      'Available for sets of 2 to 10+ bridesmaids',
      'Shipping available across all of Kerala',
      'Koduvally, Calicut • No Refund ❌'
    ]
  },
  {
    id: 'bridal-couture-gown',
    title: 'Luxury Bridal Gown & Reception Silhouette',
    badge: 'Bridal Rental • by fh.!',
    leadTime: 'Ships Across Kerala',
    image: 'assets/works/bridely-work-2.jpg',
    caption: 'Statement Bridal Couture • @bride.ly_',
    description:
      'Ethereal bridal rental gowns with intricate beadwork, flowing trails, and modest/contemporary silhouettes for Nikah, reception, and post-wedding shoots.',
    details: [
      'Online Store • DM or Contact 6282458598',
      'Shipping available only in Kerala',
      'Strictly No Refund ❌'
    ]
  },
  {
    id: 'nikah-walima-edit',
    title: 'Nikah & Walima Pastel Edit (Bride & Squad)',
    badge: 'Koduvally Studio',
    leadTime: 'Ships Across Kerala',
    image: 'assets/works/bridely-work-3.jpg',
    caption: 'Bride.ly Online Rental Store • @bride.ly_',
    description:
      'Soft-toned luxury ensembles curated for Kerala weddings. Book individual bridesmaid dresses or a coordinated bride + bridesmaids rental package.',
    details: [
      'Dispatched from Koduvally, Calicut',
      'Ships to all 14 districts in Kerala',
      'Strictly No Refund ❌'
    ]
  },
  {
    id: 'bridal-floral-silhouette',
    title: 'Evening Reception & Post-Wedding Shoot Gown',
    badge: '@bride.ly_ Exclusive',
    leadTime: 'Ships Across Kerala',
    image: 'assets/works/bridely-work-4.jpg',
    caption: 'Curated Rental Edit • @bride.ly_',
    description:
      'Graceful draped silhouettes and floral-detailed gowns tailored for intimate Nikah ceremonies, save-the-date shoots, and bridal receptions.',
    details: [
      'Koduvally, Calicut • Online Store',
      'Shipping available only in Kerala',
      'Strictly No Refund ❌'
    ]
  }
];

const GALLERY_ITEMS = [
  {
    id: 'gal-id-ayzal',
    filter: 'identity',
    brand: 'ayzal',
    handle: '@__ayzal.__',
    categoryTag: 'Official 1080p Brand Artwork',
    title: 'Ayzal by Fathima Hasbin — Studio Emblem',
    caption: 'Original 1080×1080 Instagram profile artwork (“adorn your world with art! • customised handmade gifts!”)',
    image: 'assets/ayzal-profile.jpg'
  },
  {
    id: 'gal-id-bridely',
    filter: 'identity',
    brand: 'bridely',
    handle: '@bride.ly_',
    categoryTag: 'Official 1080p Subsidiary Emblem',
    title: 'BRIDE.LY — Bridal Rental by fh.!',
    caption: 'Original 1080×1080 Instagram profile artwork (“BRIDAL RENTAL • Bridesmaids dress • Koduvally, Calicut”)',
    image: 'assets/bridely-profile.jpg'
  },
  ...AYZAL_GIFTS.map((item) => ({
    id: `gal-${item.id}`,
    filter: 'ayzal',
    brand: 'ayzal',
    handle: '@__ayzal.__',
    categoryTag: item.badge,
    title: item.title,
    caption: `${item.caption} • Order Prior 5–7 Days`,
    image: item.image
  })),
  ...BRIDELY_RENTALS.map((item) => ({
    id: `gal-${item.id}`,
    filter: 'bridely',
    brand: 'bridely',
    handle: '@bride.ly_',
    categoryTag: item.badge,
    title: item.title,
    caption: `${item.caption} • Ships Across Kerala`,
    image: item.image
  }))
];

const STORAGE_KEY_CUSTOM_PHOTOS = 'ayzal_custom_ig_photos_v1';
let activeGalleryList = [];
let currentLightboxIndex = 0;
let switchOrderTab = () => {};

document.addEventListener('DOMContentLoaded', () => {
  initLeadTimeDates();
  renderAyzalCatalog('all');
  renderBridelyCatalog();
  renderVisualGallery('all');
  initCategoryFilters();
  initGalleryFilters();
  initBrandSwitcher();
  initMobileNav();
  initLogoSwitchers();
  initKeralaChecker();
  initCustomPhotoUploader();
  initOrderStudioForm();
  initLightbox();
});

function formatShortDate(date) {
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

function initLeadTimeDates() {
  const now = new Date();
  const min5Days = new Date(now);
  min5Days.setDate(now.getDate() + 5);
  const min7Days = new Date(now);
  min7Days.setDate(now.getDate() + 7);

  const bannerText = document.getElementById('heroLeadTimeText');
  if (bannerText) {
    bannerText.innerHTML = `<strong>Live 5–7 Day Order Planner:</strong> Ordering a custom gift today prepares your piece for <strong>${formatShortDate(min5Days)} – ${formatShortDate(min7Days)}</strong> (Order Prior 5–7 Days).`;
  }

  const eventDateInput = document.getElementById('eventDateInput');
  if (eventDateInput) {
    const yyyy = min5Days.getFullYear();
    const mm = String(min5Days.getMonth() + 1).padStart(2, '0');
    const dd = String(min5Days.getDate()).padStart(2, '0');
    eventDateInput.value = `${yyyy}-${mm}-${dd}`;
  }

  const footerYear = document.getElementById('footerYear');
  if (footerYear) {
    footerYear.textContent = String(now.getFullYear());
  }
}

function getCustomUploadedPhotos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CUSTOM_PHOTOS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function renderAyzalCatalog(filter) {
  const grid = document.getElementById('ayzalCatalogGrid');
  if (!grid) return;

  const filtered =
    filter === 'all'
      ? AYZAL_GIFTS
      : AYZAL_GIFTS.filter((item) => item.category === filter);

  grid.innerHTML = filtered
    .map(
      (item) => `
    <article class="product-card" data-category="${item.category}">
      <div class="product-visual">
        <img src="${item.image}" alt="${item.title}" class="product-photo" loading="lazy" />
        <div class="product-visual-overlay"></div>
        <span class="product-badge">${item.badge}</span>
        <button type="button" class="product-zoom-btn open-lightbox-btn" data-img="${item.image}" data-title="${item.title}" data-subtitle="${item.caption}" data-brand="ayzal" title="View in Fullscreen Lightbox">
          🔍
        </button>
        <span class="product-lead-tag">${item.leadTime}</span>
      </div>
      <div class="product-body">
        <h3 class="product-title">${item.title}</h3>
        <p class="product-desc">${item.description}</p>
        <ul class="product-meta-list">
          ${item.details.map((d) => `<li>• ${d}</li>`).join('')}
        </ul>
        <button type="button" class="btn btn-primary btn-sm full-width select-item-btn" data-select-brand="ayzal" data-select-title="${item.title}">
          Customize &amp; Order (5–7 Days Prior) →
        </button>
      </div>
    </article>
  `
    )
    .join('');

  bindInteractiveButtons();
}

function renderBridelyCatalog() {
  const grid = document.getElementById('bridelyCatalogGrid');
  if (!grid) return;

  grid.innerHTML = BRIDELY_RENTALS.map(
    (item) => `
    <article class="product-card">
      <div class="product-visual">
        <img src="${item.image}" alt="${item.title}" class="product-photo" loading="lazy" />
        <div class="product-visual-overlay"></div>
        <span class="product-badge">${item.badge}</span>
        <button type="button" class="product-zoom-btn open-lightbox-btn" data-img="${item.image}" data-title="${item.title}" data-subtitle="${item.caption}" data-brand="bridely" title="View in Fullscreen Lightbox">
          🔍
        </button>
        <span class="product-lead-tag">${item.leadTime}</span>
      </div>
      <div class="product-body">
        <h3 class="product-title">${item.title}</h3>
        <p class="product-desc">${item.description}</p>
        <ul class="product-meta-list">
          ${item.details.map((d) => `<li>• ${d}</li>`).join('')}
        </ul>
        <button type="button" class="btn btn-gold full-width select-item-btn" data-select-brand="bridely" data-select-title="${item.title}">
          Check Dates &amp; Rent Dress →
        </button>
      </div>
    </article>
  `
  ).join('');

  bindInteractiveButtons();
}

function renderVisualGallery(filter) {
  const grid = document.getElementById('visualGalleryGrid');
  if (!grid) return;

  const customPhotos = getCustomUploadedPhotos().map((p, idx) => ({
    id: `custom-${idx}`,
    filter: 'ayzal',
    brand: 'ayzal',
    handle: '@__ayzal.__ / @bride.ly_',
    categoryTag: `Uploaded Post #${idx + 1}`,
    title: `Custom Uploaded Work #${idx + 1}`,
    caption: 'Uploaded from device • Click to inspect or customize',
    image: p.dataUrl
  }));

  const clearBtn = document.getElementById('clearCustomPostsBtn');
  if (clearBtn) {
    clearBtn.hidden = customPhotos.length === 0;
  }

  const combined = [...customPhotos, ...GALLERY_ITEMS];
  activeGalleryList =
    filter === 'all'
      ? combined
      : combined.filter((item) => item.filter === filter);

  grid.innerHTML = activeGalleryList
    .map(
      (item, idx) => `
    <div class="gallery-item" data-gallery-idx="${idx}">
      <img src="${item.image}" alt="${item.title}" loading="lazy" />
      <span class="gallery-handle-pill ${item.brand === 'bridely' ? 'gallery-handle-bridely' : ''}">${item.handle}</span>
      <div class="gallery-overlay">
        <span class="gallery-category-tag">${item.categoryTag}</span>
        <h3 class="gallery-item-title">${item.title}</h3>
        <p class="gallery-item-caption">${item.caption}</p>
        <div class="gallery-item-actions">
          <button type="button" class="gallery-btn gallery-zoom-trigger" data-idx="${idx}">
            🔍 View Full
          </button>
          <button type="button" class="gallery-btn select-item-btn" data-select-brand="${item.brand}" data-select-title="${item.title}">
            Order / Enquire →
          </button>
        </div>
      </div>
    </div>
  `
    )
    .join('');

  grid.querySelectorAll('.gallery-item').forEach((card) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.select-item-btn')) return;
      const idx = Number(card.getAttribute('data-gallery-idx') || 0);
      openLightboxByIndex(idx);
    });
  });

  bindInteractiveButtons();
}

function initCategoryFilters() {
  const pills = document.querySelectorAll('[data-gift-filter]');
  pills.forEach((pill) => {
    pill.addEventListener('click', () => {
      pills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      renderAyzalCatalog(pill.getAttribute('data-gift-filter') || 'all');
    });
  });
}

function initGalleryFilters() {
  const pills = document.querySelectorAll('[data-gallery-filter]');
  pills.forEach((pill) => {
    pill.addEventListener('click', () => {
      pills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      renderVisualGallery(pill.getAttribute('data-gallery-filter') || 'all');
    });
  });
}

function initBrandSwitcher() {
  const buttons = document.querySelectorAll('[data-switch]');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-switch') || 'all';
      document.body.setAttribute('data-brand-view', mode);
      buttons.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('active', active);
        b.setAttribute('aria-selected', String(active));
      });
      if (mode === 'ayzal') {
        document.getElementById('ayzal-gifts')?.scrollIntoView({ behavior: 'smooth' });
      } else if (mode === 'bridely') {
        document.getElementById('bridely-rental')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function initMobileNav() {
  const btn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  if (!btn || !drawer) return;

  btn.addEventListener('click', () => {
    const isHidden = drawer.hasAttribute('hidden');
    if (isHidden) {
      drawer.removeAttribute('hidden');
      btn.setAttribute('aria-expanded', 'true');
    } else {
      drawer.setAttribute('hidden', '');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  drawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      drawer.setAttribute('hidden', '');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

function initLogoSwitchers() {
  const buttons = document.querySelectorAll('.toggle-logo-btn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const jpg = btn.getAttribute('data-jpg');
      const svg = btn.getAttribute('data-svg');
      const img = targetId ? document.getElementById(targetId) : null;
      if (!img || !jpg || !svg) return;

      const showingJpg = img.getAttribute('src') === jpg;
      img.setAttribute('src', showingJpg ? svg : jpg);
      showToast(
        showingJpg
          ? 'Switched to crisp vector SVG emblem'
          : 'Switched to original 1080p HD Instagram profile photo'
      );
    });
  });
}

function initKeralaChecker() {
  const districtSelect = document.getElementById('keralaDistrictSelect');
  const squadSelect = document.getElementById('squadCountSelect');
  const statusEl = document.getElementById('keralaCheckerStatus');
  const bookBtn = document.getElementById('checkRentalBtn');

  function updateStatus() {
    if (!districtSelect || !squadSelect || !statusEl) return;
    const district = districtSelect.value;
    const squad = squadSelect.value;
    const isLocal = district.includes('Kozhikode');
    statusEl.innerHTML = isLocal
      ? `✅ <strong>${district}:</strong> Eligible for Koduvally, Calicut studio pickup or express local delivery for <strong>${squad}</strong>. (No Refund ❌)`
      : `✅ <strong>${district}, Kerala:</strong> Eligible for Kerala-wide online store shipping from Koduvally, Calicut for <strong>${squad}</strong>. (Shipping available only in Kerala • No Refund ❌)`;
  }

  districtSelect?.addEventListener('change', updateStatus);
  squadSelect?.addEventListener('change', updateStatus);

  bookBtn?.addEventListener('click', () => {
    const district = districtSelect?.value || 'Kozhikode (Calicut)';
    const squad = squadSelect?.value || 'Bridesmaids Dress Set (2–4 Bridesmaids)';
    switchOrderTab('bridely', squad, `${district}, Kerala`);
    document.getElementById('order-studio')?.scrollIntoView({ behavior: 'smooth' });
  });
}

function initCustomPhotoUploader() {
  const input = document.getElementById('customPostUpload');
  const clearBtn = document.getElementById('clearCustomPostsBtn');

  input?.addEventListener('change', (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const existing = getCustomUploadedPhotos();
    let loaded = 0;

    files.slice(0, 8).forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        existing.unshift({
          name: file.name,
          dataUrl: reader.result
        });
        loaded++;
        if (loaded === Math.min(files.length, 8)) {
          try {
            localStorage.setItem(STORAGE_KEY_CUSTOM_PHOTOS, JSON.stringify(existing.slice(0, 12)));
            renderVisualGallery('all');
            showToast(`Added ${loaded} photo(s) to the Works & Visual Gallery!`);
          } catch {
            showToast('Image too large for browser storage — try a smaller image.');
          }
        }
      };
      reader.readAsDataURL(file);
    });
  });

  clearBtn?.addEventListener('click', () => {
    localStorage.removeItem(STORAGE_KEY_CUSTOM_PHOTOS);
    renderVisualGallery('all');
    showToast('Cleared custom uploaded photos.');
  });
}

function bindInteractiveButtons() {
  document.querySelectorAll('.select-item-btn').forEach((btn) => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const brand = btn.getAttribute('data-select-brand') || 'ayzal';
      const title = btn.getAttribute('data-select-title') || '';
      switchOrderTab(brand, title);
      document.getElementById('order-studio')?.scrollIntoView({ behavior: 'smooth' });
    };
  });

  document.querySelectorAll('.open-lightbox-btn').forEach((btn) => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const img = btn.getAttribute('data-img') || '';
      const title = btn.getAttribute('data-title') || '';
      const subtitle = btn.getAttribute('data-subtitle') || '';
      const brand = btn.getAttribute('data-brand') || 'ayzal';
      openLightboxDirect({ image: img, title, caption: subtitle, brand });
    };
  });
}

function openLightboxByIndex(idx) {
  if (!activeGalleryList.length) return;
  currentLightboxIndex = (idx + activeGalleryList.length) % activeGalleryList.length;
  const item = activeGalleryList[currentLightboxIndex];
  openLightboxDirect(item);
}

function openLightboxDirect(item) {
  const modal = document.getElementById('galleryLightbox');
  const imgEl = document.getElementById('lightboxImg');
  const titleEl = document.getElementById('lightboxTitle');
  const subEl = document.getElementById('lightboxSubtitle');
  const orderBtn = document.getElementById('lightboxOrderBtn');
  if (!modal || !imgEl || !titleEl || !subEl) return;

  imgEl.src = item.image;
  imgEl.alt = item.title;
  titleEl.textContent = item.title;
  subEl.textContent = item.caption || item.categoryTag || '';

  if (orderBtn) {
    orderBtn.onclick = () => {
      modal.setAttribute('hidden', '');
      switchOrderTab(item.brand || 'ayzal', item.title);
      document.getElementById('order-studio')?.scrollIntoView({ behavior: 'smooth' });
    };
  }

  modal.removeAttribute('hidden');
}

function initLightbox() {
  const modal = document.getElementById('galleryLightbox');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');
  if (!modal) return;

  closeBtn?.addEventListener('click', () => modal.setAttribute('hidden', ''));
  prevBtn?.addEventListener('click', () => openLightboxByIndex(currentLightboxIndex - 1));
  nextBtn?.addEventListener('click', () => openLightboxByIndex(currentLightboxIndex + 1));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.setAttribute('hidden', '');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (modal.hasAttribute('hidden')) return;
    if (e.key === 'Escape') modal.setAttribute('hidden', '');
    if (e.key === 'ArrowLeft') openLightboxByIndex(currentLightboxIndex - 1);
    if (e.key === 'ArrowRight') openLightboxByIndex(currentLightboxIndex + 1);
  });
}

function initOrderStudioForm() {
  const tabAyzal = document.getElementById('tabBtnAyzal');
  const tabBridely = document.getElementById('tabBtnBridely');
  const brandInput = document.getElementById('orderBrandInput');
  const itemSelect = document.getElementById('selectedItemInput');
  const itemLabel = document.getElementById('selectedItemLabel');
  const locationLabel = document.getElementById('locationLabel');
  const locationInput = document.getElementById('locationInput');
  const themeLabel = document.getElementById('customThemeLabel');
  const themeInput = document.getElementById('customThemeInput');
  const eventDateInput = document.getElementById('eventDateInput');
  const dateHelperMsg = document.getElementById('dateHelperMsg');
  const customerName = document.getElementById('customerName');
  const customerPhone = document.getElementById('customerPhone');
  const customNotes = document.getElementById('customNotesInput');
  const policyCheck = document.getElementById('policyAgreeCheck');
  const previewEl = document.getElementById('orderMessagePreview');
  const copyBtn = document.getElementById('copySummaryBtn');
  const openIgLink = document.getElementById('openIgDmLink');
  const form = document.getElementById('conciergeForm');

  function populateSelectOptions(brand, preferredTitle, preferredLocation) {
    if (!itemSelect || !brandInput) return;
    brandInput.value = brand;

    const isAyzal = brand === 'ayzal';
    tabAyzal?.classList.toggle('active', isAyzal);
    tabBridely?.classList.toggle('active', !isAyzal);

    if (itemLabel) {
      itemLabel.textContent = isAyzal
        ? 'Handmade Gift Category (@__ayzal.__) *'
        : 'Bridal / Bridesmaids Rental (@bride.ly_) *';
    }
    if (locationLabel) {
      locationLabel.textContent = isAyzal
        ? 'Delivery / Pickup Location (Calicut / elsewhere) *'
        : 'Delivery District in Kerala (Kerala Only) *';
    }
    if (locationInput && preferredLocation) {
      locationInput.value = preferredLocation;
    } else if (locationInput && !locationInput.value) {
      locationInput.value = isAyzal ? 'Calicut, Kerala' : 'Koduvally, Calicut (Kerala)';
    }

    if (themeLabel) {
      themeLabel.textContent = isAyzal
        ? 'Names / Occasion / Color Palette'
        : 'Dress Count / Sizes / Shade Preference';
    }
    if (themeInput) {
      themeInput.placeholder = isAyzal
        ? 'e.g., Nikah frame for Minhaj & Fathima, pastel sage & gold'
        : 'e.g., 4 Bridesmaids dresses (Sizes S, M, M, L) in Pastel Sage';
    }

    if (openIgLink) {
      openIgLink.href = isAyzal
        ? 'https://www.instagram.com/__ayzal.__/'
        : 'https://www.instagram.com/bride.ly_/';
      openIgLink.textContent = isAyzal
        ? 'Open @__ayzal.__ on Instagram ↗'
        : 'Open @bride.ly_ on Instagram ↗';
    }

    const options = isAyzal
      ? [
          ...AYZAL_GIFTS.map((g) => g.title),
          'Custom Handmade Gift (As Seen on @__ayzal.__)'
        ]
      : [
          ...BRIDELY_RENTALS.map((r) => r.title),
          'Bridal Gown Rental (1 Bride)',
          'Bridesmaids Dress Set (2–4 Bridesmaids)',
          'Full Bridesmaid Squad (5–10+ Dresses)',
          'Bride + Bridesmaids Combo Package'
        ];

    if (preferredTitle && !options.includes(preferredTitle)) {
      options.unshift(preferredTitle);
    }

    itemSelect.innerHTML = options
      .map((opt) => `<option value="${opt}">${opt}</option>`)
      .join('');

    if (preferredTitle) {
      itemSelect.value = preferredTitle;
    }

    updatePreview();
  }

  function validateLeadTime() {
    if (!eventDateInput || !dateHelperMsg) return true;
    const selected = new Date(eventDateInput.value + 'T00:00:00');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diffDays = Math.ceil((selected - today) / (1000 * 60 * 60 * 24));

    if (isNaN(diffDays)) return true;

    if (diffDays < 5) {
      dateHelperMsg.textContent = `⚠️ Selected date is ${diffDays} day(s) away. @__ayzal.__ policy requires ordering 5–7 days prior (urgent availability subject to studio confirmation).`;
      dateHelperMsg.classList.add('date-warning');
      return false;
    } else {
      dateHelperMsg.textContent = `✅ Great! ${diffDays} days advance notice meets the 5–7 days prior studio guideline.`;
      dateHelperMsg.classList.remove('date-warning');
      return true;
    }
  }

  function buildMessageText() {
    const isAyzal = brandInput?.value !== 'bridely';
    const handle = isAyzal ? '@__ayzal.__ (Ayzal by Fathima Hasbin)' : '@bride.ly_ (Bride.ly Bridal Rental)';
    const name = customerName?.value.trim() || '[Your Name]';
    const phone = customerPhone?.value.trim() || '[Your Phone]';
    const item = itemSelect?.value || '';
    const dateVal = eventDateInput?.value || '[Event Date]';
    const loc = locationInput?.value.trim() || (isAyzal ? 'Calicut' : 'Koduvally, Calicut (Kerala)');
    const theme = themeInput?.value.trim() || 'Standard customization';
    const notes = customNotes?.value.trim() || 'None';

    return [
      `Assalamu Alaikum / Hello ${handle}! ✨`,
      ``,
      `I would like to place an enquiry:`,
      `• Studio: ${isAyzal ? 'Ayzal Customised Handmade Gifts' : 'Bride.ly Bridal & Bridesmaids Rental'}`,
      `• Item / Package: ${item}`,
      `• Event / Required Date: ${dateVal}`,
      `• Location: ${loc}`,
      `• Customization / Sizes: ${theme}`,
      `• Name: ${name}`,
      `• Contact: ${phone}`,
      `• Notes: ${notes}`,
      ``,
      `I have noted the studio policy (Order prior 5–7 days, Kerala shipping for rentals, and No Refund / No Cancellation ❌).`
    ].join('\n');
  }

  function updatePreview() {
    validateLeadTime();
    if (previewEl) {
      previewEl.textContent = buildMessageText();
    }
  }

  switchOrderTab = (brand, preferredTitle, preferredLocation) => {
    populateSelectOptions(brand, preferredTitle, preferredLocation);
  };

  tabAyzal?.addEventListener('click', () => populateSelectOptions('ayzal'));
  tabBridely?.addEventListener('click', () => populateSelectOptions('bridely'));

  [customerName, customerPhone, itemSelect, eventDateInput, locationInput, themeInput, customNotes].forEach(
    (el) => {
      el?.addEventListener('input', updatePreview);
      el?.addEventListener('change', updatePreview);
    }
  );

  copyBtn?.addEventListener('click', async () => {
    const text = buildMessageText();
    try {
      await navigator.clipboard.writeText(text);
      showToast('Copied order summary! Paste it in your Instagram DM to @__ayzal.__ or @bride.ly_.');
    } catch {
      showToast('Please select and copy the preview text manually.');
    }
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!customerName?.value.trim() || !customerPhone?.value.trim()) {
      showToast('Please enter your name and phone/WhatsApp number.');
      customerName?.focus();
      return;
    }
    if (!policyCheck?.checked) {
      showToast('Please acknowledge the 5–7 Days Prior & No Refund / Cancellation policy.');
      return;
    }
    const text = buildMessageText();
    const waUrl = `https://wa.me/916282458598?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noopener');
  });

  populateSelectOptions('ayzal');
}

let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;
  toast.textContent = message;
  toast.removeAttribute('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.setAttribute('hidden', '');
  }, 3800);
}
